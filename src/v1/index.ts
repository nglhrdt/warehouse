import express from "express";
import itemsController from "./controllers/itemsController.ts";

const router = express.Router();

// Delegate items routes to itemsController
router.use("/items", itemsController);

export default router;
