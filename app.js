import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static('./public'));


// ROUTES
app.get('/', (req, res) => {
    res.render('pages/home');
});

app.get('/electrolyse', (req, res) => {
    res.render('pages/electrolysis');
});

app.get('/tarifs', (req, res) => {
    res.render('pages/pricing');
});

app.get('/contact', (req, res) => {
    res.render('pages/contact');
});

app.get('/faq', (req, res) => {
    res.render('pages/faq');
});



// PORT 
app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}, url: http://localhost:${PORT}`)
})