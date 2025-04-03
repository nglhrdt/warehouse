import { Router } from "express";
import ItemsService from "../services/itemsService.ts";

const router = Router();

router.get("/", async (req, res) => {
  const items = await ItemsService.getAllItems();
  res.json(items);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const item = ItemsService.getItemById(id);
  res.json(item);
});

router.post("/", (req, res) => {
  const item = req.body;
  const createdItem = ItemsService.createItem(item);
  res.json(createdItem);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const item = req.body;
  const updatedItem = ItemsService.updateItem(id, item);
  res.json(updatedItem);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const result = ItemsService.deleteItem(id);
  res.json(result);
});

export default router;
