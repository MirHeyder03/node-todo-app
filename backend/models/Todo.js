import mongoose from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name area is required"],
      trim: true,
      lowercase: true,
      maxlength: [20, "Name can't exceed 20 characters"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// todoSchema.pre("save", function (next) {
//   const name = this;
//   console.log(name);
// });

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
