import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import todos from "./routes/todos.js";
import notFound from "./middlewares/notFound.js";
//!DB
import con from "./db/connect.js";

const app = express();

//!middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//?routes
app.use("/api/v1/todos", todos);
app.use(notFound);
const start = async () => {
  try {
    await con();
    app.listen(process.env.PORT, () => {
      console.log(`Backend listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
