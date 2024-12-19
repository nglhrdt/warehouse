import mongoose, { Schema, model, Document } from 'mongoose';

interface StorageUnit extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  columns: number;
  rows: number;
}

const StorageUnitSchema = new Schema({
  name: { type: String, required: true },
  columns: { type: Number, required: true },
  rows: { type: Number, required: true },
});

const StorageUnit = model<StorageUnit>('StorageUnit', StorageUnitSchema);

export default StorageUnit;
