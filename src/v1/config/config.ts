import dotenv from "dotenv";

dotenv.config();

export const config = {
  dbConnString: process.env.DB_CONN_STRING || "",
  dbName: process.env.DB_NAME || "",
  itemsCollection: process.env.ITEMS_COLLECTION || "",
};
