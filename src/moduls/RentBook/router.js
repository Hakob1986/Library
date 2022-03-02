import express from "express";
import {
  addRentBook,
  deleteRentBookById,
  getAllRentBook,
  getUserWithAllBook,
} from "./controller";

const router = express.Router();

router.get("/", getAllRentBook);
router.post("/", addRentBook);
router.get("/:id", getUserWithAllBook);
router.delete("/:id", deleteRentBookById);

export default router;
