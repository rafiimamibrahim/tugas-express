import express from "express";
import { createMobil, deleteMobil, getMobil, getMobilById, updateMobil } from "../Controller/mobilController.js";

const router = express.Router();

router.get("/", getMobil);
router.get("/find", getMobilById);
router.post("/create", createMobil);
router.put("/update", updateMobil);
router.delete("/delete", deleteMobil);

export default router;