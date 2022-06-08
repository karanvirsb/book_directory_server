const mongoose = require("mongoose");
const User = require("../model/User");
const Book = require("../model/Book");
const ck = require("ckey");

class DBController {
    #connected = false;
    constructor() {
        if (!this.#connected) {
            mongoose
                .connect(process.env.DATABASE_URL)
                .then(() => {
                    console.log("running db");
                    this.#connected = true;
                })
                .catch((err) => console.log(err));
        }
    }

    static async getAllBooks(pageNumber, limit) {
        const books = await Book.paginate(
            {},
            {
                sort: { title: 1 },
                limit: limit,
                page: pageNumber,
                select: "title bid image author",
            }
        );
        return books;
    }

    static async getBooksByQuery(query, pageNumber, limit) {
        const books = await Book.paginate(
            { title: new RegExp(query, "i") },
            {
                sort: { title: 1 },
                limit: limit,
                page: pageNumber,
                select: "title bid image author",
            }
        );
        return books;
    }

    static async getBookById(id) {
        // const book = await Book.find({ bid: `'id'` }).exec();
        const book = await Book.find({ bid: id }).exec();
        return book[0];
    }

    static async updateBook(id, book) {
        const updated = await Book.updateOne({ bid: id }, book);
        return updated.acknowledged;
    }

    static async deleteBook(id) {
        try {
            const res = await Book.deleteOne({ bid: id });
            return res.acknowledged;
        } catch (err) {
            console.log(err);
        }
    }

    static async addBook(book) {
        const addedBook = await Book.create(book);
        return addedBook ? true : false;
    }

    static async getUser(username) {
        const user = await User.find({ username: username }).exec();
        if (!user) {
            return [];
        }
        return user[0];
    }

    static async getUserByRefreshToken(token) {
        const user = await User.find({ refreshToken: token }).exec();
        if (!user) {
            return [];
        }
        return user[0];
    }

    static async createUser(user) {
        const addedUser = await User.create(user);
        if (addedUser) {
            return true;
        } else {
            return false;
        }
    }

    static async updateUser(username, updates) {
        const updatedBook = await User.updateOne(
            { username: username },
            ...updates
        );
        return updatedBook.acknowledged;
    }

    static async endConnect() {
        await mongoose.disconnect();
    }
}

module.exports = DBController;
