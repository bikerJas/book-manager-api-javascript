const Book = require('../models/book');

const getBooks = async () => {
  return Book.findAll();
};

const getBook = async (bookId) => {
  return Book.findOne({
    where: {bookId},
  });
};

const saveBook = async (book) => {
  return Book.create(book);
};

// User Story 4 - Update Book By Id Solution
const updateBook = async (bookId, book) => {
  return Book.update(book, {
    where: {
      bookId,
    },
  });
};

// User Story: As a user, I want to use the Book Manager API to delete a book using its ID
const deleteBook = async (bookId, book) => {
  return Book.destroy(book, {
    where: {
      bookId,
    },
  });
};

module.exports = {
  getBooks,
  getBook,
  saveBook,
  updateBook, // User Story 4 - Update Book By Id Solution
  deleteBook,
};
 