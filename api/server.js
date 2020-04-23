require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");

const app = express()

mongoose.connect(process.env.DATABASE_URL, 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connected to db"));

app.use(express.json());

app.use("/user", userRouter);

app.listen(3001, () => {
  console.log("Server started");
});