import { MongoClient } from "mongodb";
import { config } from "../v1/config/config.ts";

class MongoClientSingleton {
  private static instance: MongoClient;

  private constructor() {}

  static getInstance(): MongoClient {
    if (!MongoClientSingleton.instance) {
      const connectionString = `mongodb://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
      MongoClientSingleton.instance = new MongoClient(connectionString);
    }
    return MongoClientSingleton.instance;
  }
}

export default MongoClientSingleton;
