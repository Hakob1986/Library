import { emptyQuery } from "pg-protocol/dist/messages";
import { Author } from "../../models/connection";
import { Book } from "../../models/connection";
import { Genre } from "../../models/connection";

// Craete Author...
export const addAuthor = (req, res) => {
  Author.create(req.body)
    .then((author) => {
      res.send(author);
    })
    .catch((err) => res.status(500).send(err));
};

// Get all Author...
export const getAllAuthor = (req, res) => {
  Author.findAll({ raw: true })
    .then((author) => {
      res.send(author);
    })
    .catch((err) => res.status(500).send(err));
};

//Get Author by ID...
export const getAuthorBooksById = (req, res) => {
  Author.findOne({
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
    .then((author) => {
      if (author != null) {
        res.send(author);
      } else {
        res.status(404).send(`Not found Genre... ${author}`);
      }
    })

    .catch((err) => res.status(500).send(err));
};
