const fsPromises = require("fs").promises;
const fs = require("fs");
const path = require("path");
const shortid = require("shortid");
const formidable = require("formidable");
const DBController = require("./databaseController");
const { getBucketImage, addImage, deleteImage } = require("./bucketController");

// const data = {
//     books: require("../model/books.json"),
//     setBooks: function (data) {
//         this.books = data;
//     },
// };

// const bookPages = {
//     page: makePages(data.books, 10),
//     setPage: function (data) {
//         this.page = data;
//     },
// };

// const hasMore = {
//     value: true,
//     setHasMore: function (data) {
//         this.value = data;
//     },
// };

// const searchTable = {};

const mimeTypes = {
    "image/jpeg": ".jpg",
    "image/svg+xml": ".svg",
    "image/webp": ".webp",
    "image/png": ".png",
};

// To get the images
const getImage = async (req, res) => {
    const { id } = req.params;
    const index = await DBController.getBookById(id);

    if (!index) {
        return res.status(400).send(`Id: ${id} does not exist`);
    }
    console.log(id, mimeTypes[index.image.type]);

    const image = await getBucketImage(`${id}${mimeTypes[index.image.type]}`);

    if (!image) {
        return res.sendStatus(404);
    }
    image.pipe(res);
};

const getBookById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: `Invalid Book ID` });
    }
    const foundBook = await DBController.getBookById(id);

    if (foundBook === []) {
        return res.status(400).json({ message: `Book ID: ${id} not found` });
    }

    return res.status(200).json({
        ...foundBook._doc,
        // image: {
        //     function: new Function(
        //         foundBook._doc.image.function.arguments,
        //         foundBook._doc.image.function.body
        //     )(id, process.env.BASE_URL),
        //     type: foundBook.image.type,
        // },
    });
};

// gives back all the books
const getBooks = async (req, res) => {
    const { search, page } = req.query;
    // if search does not = "" then give back the results
    if (search) {
        const books = await DBController.getBooksByQuery(search, page, 10);

        if (!books) {
            return res.sendStatus(204);
        }

        const booksWithImageLink = books.docs.map((book) => {
            return {
                bid: book.bid,
                title: book.title,
                author: book.author,
                // image: new Function(
                //     book.image.function.arguments,
                //     book.image.function.body
                // )(book.bid, process.env.BASE_URL),
                image: book.image,
            };
        });

        return res.status(200).json({
            data: booksWithImageLink,
            hasNext: books.hasNextPage,
            maxPage: books.totalPages,
        });
    } else {
        const books = await DBController.getAllBooks(page, 10);

        if (!books) {
            return res.sendStatus(204);
        }

        const booksWithImageLink = books.docs.map((book) => {
            return {
                bid: book.bid,
                title: book.title,
                author: book.author,
                // image: new Function(
                //     book.image.function.arguments,
                //     book.image.function.body
                // )(book.bid, process.env.BASE_URL),
                image: book.image,
            };
        });

        return res.status(200).json({
            data: booksWithImageLink,
            hasNext: books.hasNextPage,
            maxPage: books.totalPages,
        });
    }
};

// adding the book
const addBook = async (req, res) => {
    let id = shortid.generate();
    let foundBook = await DBController.getBookById(id);
    console.log(req);
    while (foundBook != null || foundBook != undefined || foundBook === []) {
        id = shortid.generate();
        foundBook = await DBController.getBookById(id);
    }
    // setting up the form
    const form = formidable({
        multiples: true,
        uploadDir: __dirname + "/../Assets/Images",
    });
    form.parse(req, async (err, fields, files) => {
        console.log(fields);
        if (err) {
            res.status(400).json({ message: err });
            return;
        }

        const {
            title,
            description,
            author,
            publisher,
            date_info,
            language,
            pages,
            category,
            image_type,
        } = fields;
        console.log(image_type);

        let newBook = {
            bid: id,
            title: title,
            image: {
                url: process.env.BASE_URL + id,
                type: image_type,
            },
            // image: {
            //     function: {
            //         arguments: "id, url, type",
            //         body: "return `url + id;",
            //     },
            //     type: image_type,
            // },
            description: description,
            author: [author],
            publisher: publisher,
            date_info: date_info,
            language: language,
            pages: pages,
            category: category,
        };

        const added = await DBController.addBook(newBook);
        console.log(added);

        // getting the current path of the image
        const oldPath = files.image.filepath;

        // this is the old file
        const rawData = await fsPromises.readFile(oldPath);
        const addedImage = await addImage({
            key: newBook.bid + mimeTypes[files.image.mimetype],
            image: rawData,
        });
        console.log(addedImage, added);

        if (added && addedImage) {
            res.status(200).json({
                message: `${newBook.title} has been added`,
            });
        } else {
            res.status(500).json({ message: "Could not add book" });
        }
    });
};

// deleting a book
const deleteBook = async (req, res) => {
    const { id } = req.params;

    const foundBook = await DBController.getBookById(id);
    if (!foundBook) {
        return res.sendStatus(404);
    }
    const image = id + mimeTypes[foundBook.image.type];
    const imageDeleted = await deleteImage(image);
    const deleted = await DBController.deleteBook(id);

    if (deleted && imageDeleted === undefined) {
        return res.status(200).json({ message: `Book has been deleted` });
    } else {
        return res.status(500).json({ message: `Book could not be deleted` });
    }
};

// updating the books
const updateBook = (req, res) => {
    // setting up the form
    const form = formidable({
        multiples: true,
        uploadDir: __dirname + "/../Assets/Images",
    });

    form.parse(req, async (err, fields, files) => {
        if (err) {
            res.send(400).json({
                message: "An error occurred while trying to upload",
            });
            console.log(err);
            return;
        }

        const {
            bid,
            title,
            description,
            author,
            publisher,
            date_info,
            language,
            pages,
            category,
        } = fields;
        const prevBook = await DBController.getBookById(bid);
        const image_type = fields?.image_type;
        let updatedBook;
        if (image_type) {
            updatedBook = {
                bid: bid,
                title: title,
                // image: {
                //     function: {
                //         arguments: "id, url",
                //         body: "return url + id;",
                //     },
                // },
                image: {
                    url: process.env.BASE_URL + bid,
                    type: image_type,
                },
                description: description,
                author: [author],
                publisher: publisher,
                date_info: date_info,
                language: language,
                pages: pages,
                category: category,
            };
        } else {
            updatedBook = {
                bid: bid,
                title: title,
                description: description,
                author: [author],
                publisher: publisher,
                date_info: date_info,
                language: language,
                pages: pages,
                category: category,
            };
        }

        const updated = await DBController.updateBook(bid, updatedBook);
        let addedImage;
        if (files?.image) {
            await deleteImage(
                prevBook.id + mimeTypes[prevBook.image.type]
            ).then(async (res) => {
                if (res) {
                    // getting the current path of the image
                    const oldPath = files.image.filepath;

                    // this is the old file
                    const rawData = await fsPromises.readFile(oldPath);
                    addedImage = await addImage({
                        key: bid + mimeTypes[files.image.mimetype],
                        image: rawData,
                    });
                }
            });
        }
        if (updated && addedImage) {
            return res.status(200).json({ message: `Book has been updated` });
        } else {
            return res
                .status(500)
                .json({ message: `Book could not be updated` });
        }
    });
};

// function makePages(arr, maxPageSize) {
//     const newArr = [];
//     if (arr.length < 10) {
//         return [{ start: 0, end: arr.length - 1 }];
//     }

//     let count = 1;
//     for (let i = 0; i < arr.length; i++) {
//         if (count === maxPageSize) {
//             newArr.push({ start: i - (count - 1), end: i });
//             count = 1;
//         } else if (i + 1 === arr.length) {
//             newArr.push({ start: i - (count - 1), end: i });
//         } else {
//             count++;
//         }
//     }
//     return newArr;
// }

module.exports = {
    getBooks,
    updateBook,
    deleteBook,
    addBook,
    getImage,
    getBookById,
};
