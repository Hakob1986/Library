import { Book } from "../../models/connection";
import { RentBook } from "../../models/connection";
import { User, Genre } from "../../models/connection";

//Get all RentBook...
export const getAllRentBook = (req, res) => {
  RentBook.findAll({ raw: true })
    .then((rentbook) => {
      res.send(rentbook);
    })
    .catch((err) => res.status(500).send(err));
};

//Create RentBook...
export const addRentBook = (req, res) => {
  RentBook.create(req.body)
    .then((rentbook) => {
      res.send("Add Rent Book");
    })
    .catch((err) => res.status(500).send(err));
};

// Get User with all rent book
export const getUserWithAllBook = (req, res) => {
  User.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Book,
        include: [
          {
            model: Genre,
          },
        ],
      },
    ],
  })
    .then((book) => {
      if (book != null) {
        res.send(book);
      } else {
        res.status(404).send(`Not found RentBook... ${book}`);
      }
    })
    .catch((err) => res.status(500).send(err));
};

// Delete RentBook
export const deleteRentBookById = (req, res) => {
  RentBook.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((rowDeleted) => {
      if (rowDeleted == true) {
        res.send("Deleted successfully");
      } else {
        res.send("Not found user... ");
      }
    })
    .catch((err) => res.status(500).send(err));
};
