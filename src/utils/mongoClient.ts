import { MongoClient } from "mongodb";
import { config } from "../v1/config/config.ts";

class MongoClientSingleton {
  private static instance: MongoClient;

  private constructor() {}

  static getInstance(): MongoClient {
    if (!MongoClientSingleton.instance) {
      MongoClientSingleton.instance = new MongoClient(config.dbConnString);
    }
    return MongoClientSingleton.instance;
  }
}

export default MongoClientSingleton;
