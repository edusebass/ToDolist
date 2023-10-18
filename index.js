import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.get("/works", (req, res) => {
    res.render("works");
});

let items = [];

app.get("/", (req, res) => {
    res.render("index", { items: items });
});

app.post("/", (req, res) => {
    const newItemValue = req.body.newItem;
    items.push(newItemValue);
    res.redirect("/"); 
});



app.listen(port, () => {
    console.log(`listening on ${port}`);
});