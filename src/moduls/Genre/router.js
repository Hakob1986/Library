import express from "express";
import { validateGenre } from "../../validation/genreValidator";
import {
  addGenre,
  deleteGenreById,
  getAllGenre,
  updateGenre,
} from "./controller";

const router = express.Router();
router.get("/", getAllGenre);
router.post("/", validateGenre, addGenre);
router.delete("/:id", deleteGenreById);
router.patch("/:id", updateGenre);

export default router;
