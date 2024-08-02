import express from "express";
const app = express();
import { fileURLToPath } from "url";
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { generate, count } from "random-words";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// console.log(generate());

const port = 8080;
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});  

app.get("/", (req, res) => {
    let response = generate();
    res.render("home.ejs", {response});
})
