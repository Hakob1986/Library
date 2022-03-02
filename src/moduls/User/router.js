import express from "express";
import { validateUser } from "../../validation/userValidator";
import { addUser, deleteUserById, getAllUser, getOneUser } from "./controller";

const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", getOneUser);
router.post("/", validateUser, addUser);
router.delete("/:id", deleteUserById);

export default router;
