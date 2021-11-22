const express = require('express');
const {booksController} = require('../controllers');

const router = new express.Router();
router.get('/books', booksController.getBooks);
router.get('/books/:bookId', booksController.getBook);
router.post('/books', booksController.saveBook);

// User Story 4 - Update Book By Id Solution
router.put('/books/:bookId', booksController.updateBook);

// User Story: As a user, I want to use the Book Manager API to delete a book using its ID
router.delete('/books/:bookId', booksController.deleteBook);

module.exports = router;
