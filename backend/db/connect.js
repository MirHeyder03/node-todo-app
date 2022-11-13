import mongoose from "mongoose";

const con = () => {
  mongoose
    .connect(process.env.MONGO, {
      dbName: "todos",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .catch((err) => {
      console.log(`Error connecting to MongoDB,${err}`);
    });
};
export default con;
