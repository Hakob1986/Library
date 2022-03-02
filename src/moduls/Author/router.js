import express from "express";
import { validateAuthor } from "../../validation/authorValidator";
import { addAuthor, getAllAuthor, getAuthorBooksById } from "./controller";

const router = express.Router();

router.get("/", getAllAuthor);
router.get("/:id", getAuthorBooksById);
router.post("/", validateAuthor, addAuthor);

export default router;
