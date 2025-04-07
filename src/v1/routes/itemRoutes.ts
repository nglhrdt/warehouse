import express from "express";
import {
  createItem,
  deleteItem,
  getItemByID,
  getItems,
  updateItem,
} from "../controllers/itemsController.ts";

const router = express.Router();
const itemsRoute = "/items";

router.get(itemsRoute, getItems);
router.get(`${itemsRoute}/:id`, getItemByID);
router.post(itemsRoute, createItem);
router.put(`${itemsRoute}/:id`, updateItem);
router.delete(`${itemsRoute}/:id`, deleteItem);

export default router;
