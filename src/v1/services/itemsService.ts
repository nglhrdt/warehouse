import { MongoClient, ObjectId } from "mongodb";
import MongoClientSingleton from "../../utils/mongoClient.ts";
import { DB_NAME, ITEMS_COLLECTION } from "../config/constants.ts";

type Item = {
  id: string;
  name: string;
  description: string;
};

class ItemsService {
  private client: MongoClient;

  constructor() {
    this.client = MongoClientSingleton.getInstance();
  }

  private async getCollection() {
    return this.client.db(DB_NAME).collection(ITEMS_COLLECTION);
  }

  async getAllItems() {
    const collection = await this.getCollection();
    return (await collection.find({}).toArray()).map(this.toItem);
  }

  async getItemById(id: string) {
    const collection = await this.getCollection();
    const model = await collection.findOne({ _id: new ObjectId(id) });
    return model ? this.toItem(model) : null;
  }

  async createItem(item: any) {
    const collection = await this.getCollection();
    const result = await collection.insertOne(item);
    return this.toItem({ _id: result.insertedId, ...item });
  }

  async updateItem(id: string, item: any) {
    const collection = await this.getCollection();
    await collection.updateOne({ _id: new ObjectId(id) }, { $set: item });
    return this.toItem({ _id: id, ...item });
  }

  async deleteItem(id: string) {
    const collection = await this.getCollection();
    await collection.deleteOne({ _id: new ObjectId(id) });
    return { message: `Item with id ${id} deleted` };
  }

  toItem(model): Item {
    return {
      id: model._id.toString(),
      name: model.name,
      description: model.description,
    };
  }
}

export default new ItemsService();
