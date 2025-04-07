import dotenv from "dotenv";

dotenv.config();

export const config = {
  itemsCollection: process.env.ITEMS_COLLECTION || "",
  dbHost: process.env.DB_HOST || "",
  dbPort: process.env.DB_PORT || "",
  dbUser: process.env.DB_USER || "",
  dbPassword: process.env.DB_PASSWORD || "",
  dbName: process.env.DB_NAME || "",
};
