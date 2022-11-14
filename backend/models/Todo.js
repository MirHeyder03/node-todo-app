import mongoose from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, "Text area is required"],
      trim: true,
      lowercase: true,
      maxlength: [30, "Text can't exceed 30 characters"],
    },
    status: {
      type: String,
      default: "all",
    },
  },
  {
    timestamps: true,
  }
);
const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
