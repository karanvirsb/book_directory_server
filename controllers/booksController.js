const fsPromises = require("fs").promises;
const fs = require("fs");
const path = require("path");
const shortid = require("shortid");
const formidable = require("formidable");
const DBController = require("./databaseController");

const data = {
    books: require("../model/books.json"),
    setBooks: function (data) {
        this.books = data;
    },
};

const bookPages = {
    page: makePages(data.books, 10),
    setPage: function (data) {
        this.page = data;
    },
};

const hasMore = {
    value: true,
    setHasMore: function (data) {
        this.value = data;
    },
};

const searchTable = {};

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
    // const index = data.books.find((book) => book.id === id);

    if (!index) {
        return res.status(400).send(`Id: ${id} does not exist`);
    }

    const imagePath = path.join(__dirname, "../Assets/Images");
    let image = "";
    try {
        for (const [_, value] of Object.entries(mimeTypes)) {
            if (fs.existsSync(`${imagePath}/${id}${value}`)) {
                image = `${imagePath}/${id}${value}`;
            }
        }
    } catch (err) {
        console.log(err);
    }
    if (!image) {
        return res.sendStatus(404);
    }
    res.status(200).sendFile(image);
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
        image: new Function(
            foundBook._doc.image.function.arguments,
            foundBook._doc.image.function.body
        )(id, process.env.BASE_URL),
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
                image: new Function(
                    book.image.function.arguments,
                    book.image.function.body
                )(book.bid, process.env.BASE_URL),
            };
        });

        return res.status(200).json({
            data: booksWithImageLink,
            hasNext: books.hasNextPage,
            maxPage: books.totalPages,
        });
        // const newBooksArr = data.books.filter((book) =>
        //     book.title.includes(search)
        // );

        // const generalInfo = [];

        // searchTable[search] = makePages(newBooksArr, 10);

        // if (page === searchTable[search].length) {
        //     hasMore.setHasMore(false);
        // }

        // let startBook,
        //     endBook = 0;
        // if (searchTable[search]) {
        //     const { start, end } = searchTable[search][page];
        //     startBook = start;
        //     endBook = end;
        // }
        // let index = 0;
        // for (let i = startBook; i <= endBook; i++) {
        //     if (i === null) {
        //         break;
        //     }
        //     generalInfo[index] = {
        //         id: newBooksArr[i].id,
        //         title: newBooksArr[i].title,
        //         image: new Function(
        //             newBooksArr[i].image.function.arguments,
        //             newBooksArr[i].image.function.body
        //         )(newBooksArr[i].id, process.env.BASE_URL),
        //         author: newBooksArr[i].author,
        //     };
        //     index++;
        // }
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
                image: new Function(
                    book.image.function.arguments,
                    book.image.function.body
                )(book.bid, process.env.BASE_URL),
            };
        });

        return res.status(200).json({
            data: booksWithImageLink,
            hasNext: books.hasNextPage,
            maxPage: books.totalPages,
        });

        // const { start, end } = bookPages.page[page];

        // if (page === bookPages.page.length) {
        //     hasMore.setHasMore(false);
        // }

        // const generalInfo = [];
        // let index = 0;
        // for (let i = start; i <= end; i++) {
        //     if (i === null) {
        //         break;
        //     }
        //     generalInfo[index] = {
        //         id: data.books[i].id,
        //         title: data.books[i].title,
        //         image: new Function(
        //             data.books[i].image.function.arguments,
        //             data.books[i].image.function.body
        //         )(data.books[i].id, process.env.BASE_URL),
        //         author: data.books[i].author,
        //     };
        //     index++;
        // }

        // return res.status(200).json({
        //     data: generalInfo,
        //     hasNext: hasMore.value,
        //     maxPage: bookPages.page.length,
        // });
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
        } = fields;

        let newBook = {
            bid: id,
            title: title,
            image: {
                function: {
                    arguments: "id, url",
                    body: "return url + id;",
                },
            },
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
        // data.setBooks([...data.books, newBook]);

        // await fsPromises.writeFile(
        //     path.join(__dirname, "..", "model", "books.json"),
        //     JSON.stringify(data.books)
        // );

        // bookPages.setPage(makePages(data.books, 10));

        // getting the current path of the image
        const oldPath = files.image.filepath;

        // creating a new path
        const newPath = path.join(
            __dirname +
                "/../Assets/Images/" +
                newBook.bid +
                mimeTypes[files.image.mimetype]
        );

        // this is the old file
        const rawData = await fsPromises.readFile(oldPath);

        // writing the new file
        fsPromises.writeFile(newPath, rawData);
        // removing the temp file
        fsPromises.rm(oldPath);
        if (added) {
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
    const imagePath = path.join(__dirname, "../Assets/Images");
    let image;
    try {
        for (const [_, value] of Object.entries(mimeTypes)) {
            if (fs.existsSync(`${imagePath}/${id}${value}`)) {
                image = `${imagePath}/${id}${value}`;
            }
        }
    } catch (err) {
        console.log(err);
    }
    const imageRemoved = await fsPromises.rm(image);
    const deleted = await DBController.deleteBook(id);
    if (deleted && imageRemoved === undefined) {
        return res.status(200).json({ message: `Book has been deleted` });
    } else {
        return res.status(500).json({ message: `Book could not be deleted` });
    }
    // const book = data.books.find((book) => book.id === id);

    // if (!book) {
    //     return res.status(400).json({ message: `Book ID: ${id} not found` });
    // }

    // data.setBooks(data.books.filter((book) => book.id !== id));
    // await fsPromises.writeFile(
    //     path.join(__dirname, "..", "model", "books.json"),
    //     JSON.stringify(data.books)
    // );

    // return res
    //     .status(200)
    //     .json({ message: `Book ${book.title} has been deleted` });
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

        const updatedBook = {
            bid: bid,
            title: title,
            image: {
                function: {
                    arguments: "id, url",
                    body: "return url + id;",
                },
            },
            description: description,
            author: [author],
            publisher: publisher,
            date_info: date_info,
            language: language,
            pages: pages,
            category: category,
        };

        const updated = await DBController.updateBook(bid, updatedBook);
        // let newBooks = data.books;

        // const oldBookIndex = newBooks.findIndex((book) => book.id === id);
        // newBooks[oldBookIndex] = updatedBook;

        // data.setBooks([...newBooks]);

        // await fsPromises.writeFile(
        //     path.join(__dirname, "..", "model", "books.json"),
        //     JSON.stringify([...newBooks])
        // );

        if (files?.image) {
            // getting the current path of the image
            const oldPath = files.image.filepath;

            // remove the old book
            const imagePath = path.join(__dirname, "../Assets/Images");
            let image;
            try {
                for (const [_, value] of Object.entries(mimeTypes)) {
                    if (
                        fs.existsSync(`${imagePath}/${updatedBook.bid}${value}`)
                    ) {
                        image = `${imagePath}/${updatedBook.bid}${value}`;
                    }
                }
            } catch (err) {
                console.log(err);
            }
            const imageRemoved = await fsPromises.rm(image);
            // creating a new path
            const newPath = path.join(
                __dirname +
                    "/../Assets/Images/" +
                    updatedBook.bid +
                    mimeTypes[files.image.mimetype]
            );

            // this is the old file
            const rawData = await fsPromises.readFile(oldPath);

            // writing the new file
            fsPromises.writeFile(newPath, rawData);
            // removing the temp file
            fsPromises.rm(oldPath);
        }
        if (updated) {
            return res.status(200).json({ message: `Book has been updated` });
        } else {
            return res
                .status(500)
                .json({ message: `Book could not be updated` });
        }
    });
};

function makePages(arr, maxPageSize) {
    const newArr = [];
    if (arr.length < 10) {
        return [{ start: 0, end: arr.length - 1 }];
    }

    let count = 1;
    for (let i = 0; i < arr.length; i++) {
        if (count === maxPageSize) {
            newArr.push({ start: i - (count - 1), end: i });
            count = 1;
        } else if (i + 1 === arr.length) {
            newArr.push({ start: i - (count - 1), end: i });
        } else {
            count++;
        }
    }
    return newArr;
}

module.exports = {
    getBooks,
    updateBook,
    deleteBook,
    addBook,
    getImage,
    getBookById,
};
