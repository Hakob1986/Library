import { User } from "../../models/connection";

// Get all User...
export const getAllUser = (req, res) => {
  User.findAll({
    order: [["name", "ASC"]],
  })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => res.status(500).send(err));
};

// Get User by ID...
export const getOneUser = (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => res.status(500).send(err));
};

// Create User...
export const addUser = (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.send("Created user");
    })
    .catch((err) => res.status(500).send(err));
};

// Delete User by ID...
export const deleteUserById = (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((rowDeleted) => {
      if (rowDeleted == true) {
        res.send("Deleted successfully");
      } else {
        res.send(`Not found user... !`);
      }
    })
    .catch((err) => res.status(500).send(err));
};
