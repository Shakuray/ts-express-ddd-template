import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
const app = express();
import routes from "./routes";

process.on("uncaughtException", (err) => {
    console.error(err);
});

const port: number = parseInt(process.env.PORT || "3000");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(process.env.BASE_URL ?? "", routes);

app.listen(port, () => {
    console.log("✔ Server ready at port " + port);
});
