import express from "express";
import indexRouter from "./routes/index.js";
import path from "path";
import bodyParser from "body-parser";
import "dotenv/config.js";
const app = express();
const port = +process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("views", path.resolve("dist/views/"));
app.set("view engine", "ejs");
app.use("/", indexRouter);
app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
});
