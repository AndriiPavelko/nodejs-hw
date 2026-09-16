import { Schema, model} from 'mongoose';

const noteSchema = new Schema({
  id: {
      type: String,
      trim: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
      enum: ["Todo" , "Work" , "Personal" , "Meeting" , "Shopping"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
});


export const Note = model("Note", noteSchema);
