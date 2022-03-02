import express from "express";
import bodyParser from "body-parser";

import userRouter from "./src/moduls/User/router";
import rentbookRouter from "./src/moduls/RentBook/router";
import bookRouter from "./src/moduls/Book/router";
import autherRouter from "./src/moduls/Author/router";
import genreRouter from "./src/moduls/Genre/router";
import createError from "http-errors";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user/", userRouter);
app.use("/rentbook/", rentbookRouter);
app.use("/book/", bookRouter);
app.use("/author/", autherRouter);
app.use("/genre/", genreRouter);

app.use(function (req, res) {
  createError(404).then(res.send("Not found"));
});

app.listen(3011, () => console.log("server creat"));
