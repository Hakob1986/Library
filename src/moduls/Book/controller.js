import { Author } from "../../models/connection";
import { Book } from "../../models/connection";
import { Genre } from "../../models/connection";

// Get all books...
export const getAllBook = (req, res) => {
  Book.findAll({ raw: true })
    .then((book) => {
      res.send(book);
    })
    .catch((err) => res.status(500).send(err));
};

// Create Book...
export const addBook = (req, res) => {
  Book.create(req.body)
    .then((book) => {
      res.send(book);
    })
    .catch((err) => res.status(500).send(err));
};

// Get Book by ID...
export const getBookbyid = (req, res) => {
  Book.findAll({
    where: { id: req.params.id },
    include: [{ model: Author }, { model: Genre }],
  })
    .then((book) => {
      console.log(book);
      if (book.length != 0) {
        res.send(book);
      } else {
        res.status(404).send(`Not found Book... ${book}`);
      }
    })
    .catch((err) => res.status(500).send(err));
};

// Update Book by ID...
export const updateBook = (req, res) => {
  Book.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((err) => res.status(500).send(err));
};

// Delete Book by ID...
export const deleteBookById = (req, res) => {
  Book.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((rowDeleted) => {
      if (rowDeleted == true) {
        res.send("Deleted successfully");
      } else {
        res.send(`Not found user... ${rowDeleted}`);
      }
    })
    .catch((err) => res.status(500).send(err));
};
