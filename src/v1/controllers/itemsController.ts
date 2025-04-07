import { type RequestHandler } from "express";
import ItemsService from "../services/itemsService.ts";

export const getItems: RequestHandler = async (req, res) => {
  const items = await ItemsService.getAllItems();
  res.json(items);
};

export const getItemByID: RequestHandler = (req, res) => {
  const id = req.params.id;
  const item = ItemsService.getItemById(id);
  res.json(item);
};

export const createItem: RequestHandler = (req, res) => {
  const item = req.body;
  const createdItem = ItemsService.createItem(item);
  res.json(createdItem);
};

export const updateItem: RequestHandler = (req, res) => {
  const id = req.params.id;
  const item = req.body;
  const updatedItem = ItemsService.updateItem(id, item);
  res.json(updatedItem);
};

export const deleteItem: RequestHandler = (req, res) => {
  const id = req.params.id;
  const result = ItemsService.deleteItem(id);
  res.json(result);
};
