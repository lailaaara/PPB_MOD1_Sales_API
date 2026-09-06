import express from "express";
import { RestockController } from "../controllers/restockController.js";

const router = express.Router();

router.get("/", RestockController.getAll);
router.post("/", RestockController.create);

export default router;
