import express from "express";
import { validateBook } from "../../validation/bookvalidator";
import {
  addBook,
  deleteBookById,
  getAllBook,
  getBookbyid,
  updateBook,
} from "./controller";

const router = express.Router();

router.get("/", getAllBook);
router.post("/", validateBook, addBook);
router.get("/:id", getBookbyid);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBookById);

export default router;
