import express from "express";
import { addUser, getUsers } from "../controller/api";
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

router.post("/add", authMiddleware, addUser);
router.get("/", getUsers);

export default router;
