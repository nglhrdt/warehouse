import mongoose, { Document, Schema } from 'mongoose';

interface Product extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
});

const Product = mongoose.model<Product>('Product', ProductSchema);

export default Product;
