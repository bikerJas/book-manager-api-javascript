const express = require("express");
const { booksController } = require("../controllers");

const router = new express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Book:
 *      type: object
 *      required:
 *          - title
 *          - author
 *      properties:
 *       id:
 *          type: integer
 *       title:
 *          type: string
 *       author:
 *          type: string
 */

/**
 * @swagger
 * /api/v1/books:
 *  get:
 *    summary: Get all books
 *    responses:
 *      200:
 *          description: An array of books
 *      content:
 *        application/json:
 *         schema:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Book'

 */
router.get("/books", booksController.getBooks);

/**
 * @swagger
 * /api/v1/books/{bookId}:
 *   get:
 *     summary: Get a book by bookId
 *     parameters:
 *       - in: path
 *         schema:
 *           type: integer
 *         name: bookId
 *         description: ID of book
 *         required: true
 *     responses:
 *       '200':
 *          description: Numeric ID of the book to get
 *       '404':
 *          description: book cannot be found
 */
router.get("/books/:bookId", booksController.getBook);

router.post("/books", booksController.saveBook);

// User Story 4 - Update Book By Id Solution
router.put("/books/:bookId", booksController.updateBook);

// User Story: As a user, I want to use the Book Manager API to delete a book using its ID
router.delete("/books/:bookId", booksController.deleteBook);

module.exports = router;
