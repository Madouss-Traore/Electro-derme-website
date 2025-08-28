import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import expressLayouts from "express-ejs-layouts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layout"); 


app.use(express.static('./public'));
app.use(expressLayouts);


// ROUTES
app.get('/', (req, res) => {
    res.render('pages/home', { title: 'Electro Derme'});
});

app.get('/electrolyse', (req, res) => {
    res.render('pages/electrolysis', { title: `l'Electrolyse`});
});

app.get('/tarifs', (req, res) => {
    res.render('pages/pricing', { title: 'Tarifs'});
});

app.get('/contact', (req, res) => {
    res.render('pages/contact', { title: 'Contact'});
});

app.get('/faq', (req, res) => {
    res.render('pages/faq', { title: 'FAQ'});
});



// PORT 
app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}, url: http://localhost:${PORT}`)
})