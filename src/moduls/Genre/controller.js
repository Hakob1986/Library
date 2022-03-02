import { Genre } from "../../models/connection";

// Get all Genre...
export const getAllGenre = (req, res) => {
  Genre.findAll({ raw: true })
    .then((genre) => {
      res.send(genre);
    })
    .catch((err) => res.status(500).send(err));
};

// Create Genre...
export const addGenre = (req, res) => {
  Genre.create(req.body)
    .then((user) => {
      res.send("Add Genre");
    })
    .catch((err) => res.status(500).send(err));
};

// Delete Genre by ID...
export const deleteGenreById = (req, res) => {
  Genre.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((user) => {
      res.send(`delete Ganer ${req.params.id}`);
    })
    .catch((err) => res.status(500).send(err));
};

// Update Genre by ID...
export const updateGenre = (req, res) => {
  Genre.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((rowUpdate) => {
      if (rowUpdate == true) {
        res.send("Update successfully");
      } else {
        res.status(404).send(`Not found Genre... ${rowUpdate}`);
      }
    })
    .catch((err) => res.status(500).send(err));
};
