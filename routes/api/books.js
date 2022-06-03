const express = require("express");
const router = express.Router();
const ROLES_LIST = require("../../config/roles_list");
const verifyRoles = require("../../middleware/verifyRoles");

const {
    getBookById,
    getBooks,
    updateBook,
    deleteBook,
    addBook,
} = require("../../controllers/booksController");

router
    .route("/")
    .get(getBooks)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), updateBook);
router
    .route("/:id")
    .get(getBookById)
    .delete(verifyRoles(ROLES_LIST.Admin), deleteBook);

router.route("/query").get(getBooks);
router
    .route("/add")
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), addBook);

module.exports = router;
