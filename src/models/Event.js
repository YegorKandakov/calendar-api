import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    start: {type: String, required: true},
    duration: {type: Number, required: true},
    title: {type: String, required: true},
    // userId: { type: mongoose.Schema.Types.ObjectId, required: true }
  }
);

export default mongoose.model("Event", schema);

