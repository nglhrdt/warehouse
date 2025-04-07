import express from "express";
import itemRoutes from "./itemRoutes.ts";

const router = express.Router();

router.use(itemRoutes);

export default router;
