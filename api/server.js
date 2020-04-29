require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const loginRouter = require("./routes/login");
const postRouter = require("./routes/post");
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

app.use(cors());

app.use("/login", loginRouter);
app.use("/post", postRouter);
app.use("/user", userRouter.router);

app.listen(3001, () => {
  console.log("Server started");
});
