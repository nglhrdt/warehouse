import mongoose, { Schema, model, Document } from 'mongoose';

interface Organizer extends Document {
  _id: mongoose.Types.ObjectId;
  columns: number;
  rows: number;
  name: string;
}

const OrganizerSchema = new Schema({
  columns: { type: Number, required: true },
  rows: { type: Number, required: true },
  name: { type: String, required: true },
});

const Organizer = model<Organizer>('Organizer', OrganizerSchema);

export default Organizer;
