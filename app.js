const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const loginRouter = require("./routes/loginRouter");
const userRouter = require("./routes/userRouter");
const inboxRouter = require("./routes/inboxRouter");

const app = express();
dotenv.config();

//database connection
const db = require("./db/db");
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorhandler");
//request parsers

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine

app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies

app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use("/", loginRouter);
app.use("/users", userRouter);
app.use("/inbox", inboxRouter);

// 404 error handler
app.use(notFoundHandler);

//common error handling
app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`server is running ${process.env.PORT}`)
);
