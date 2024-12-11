import mongoose, { Schema, model, Document } from 'mongoose';
import Product from './product';

interface Organizer extends Document {
  _id: mongoose.Types.ObjectId;
  columns: number;
  rows: number;
  name: string;
  products: {
    product: Product;
    column: number;
    row: number;
    quantity: number;
  }[];
}

const OrganizerSchema = new Schema({
  columns: { type: Number, required: true },
  rows: { type: Number, required: true },
  name: { type: String, required: true },
  products: [
    {
      product: { type: mongoose.Types.ObjectId, ref: 'Product', required: true },
      column: { type: Number, required: true },
      row: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

const Organizer = model<Organizer>('Organizer', OrganizerSchema);

export default Organizer;
