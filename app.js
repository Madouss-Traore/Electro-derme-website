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


// sessions duration 
function durationFormat(mins) {
  if (mins >= 60) {
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;
    if (minutes === 0) {
      return `${hours}h`;
    }
    const mm = String(minutes).padStart(2, '0'); // 05, 09, etc.
    return `${hours}h ${mm}min`;
  }
  return `${mins}min`;
}

// 1st session
const firstVisit = [
    
    { duration: 30, price: "15,00 €", total: "20min", durationDisplayed: durationFormat(30)},

];


// others sesssions 
const sessions = [
    
    { duration: 5, price: "20,00 €", total: durationFormat(25), durationDisplayed: durationFormat(5) },
    { duration: 10, price: "30,00 €", total: durationFormat(30), durationDisplayed: durationFormat(10) },
    { duration: 15, price: "40,00 €", total: durationFormat(35), durationDisplayed: durationFormat(15) },
    { duration: 20, price: "50,00 €", total: durationFormat(40), durationDisplayed: durationFormat(20) },
    { duration: 25, price: "60,00 €", total: durationFormat(45), durationDisplayed: durationFormat(25) },
    { duration: 30, price: "70,00 €", total: durationFormat(50), durationDisplayed: durationFormat(30) },
    { duration: 35, price: "80,00 €", total: durationFormat(55), durationDisplayed: durationFormat(35) },
    { duration: 40, price: "90,00 €", total: durationFormat(55), durationDisplayed: durationFormat(40) },
    { duration: 45, price: "100,00 €",total: durationFormat(60), durationDisplayed: durationFormat(45) },
    { duration: 50, price: "110,00 €",total: durationFormat(70), durationDisplayed: durationFormat(50) },
    { duration: 55, price: "115,00 €",total: durationFormat(75), durationDisplayed: durationFormat(55) },
    { duration: 60, price: "120,00 €",total: durationFormat(80), durationDisplayed: durationFormat(60) },
    { duration: 75, price: "140,00 €",total: durationFormat(95), durationDisplayed: durationFormat(75) },
    { duration: 90, price: "170,00 €", total: durationFormat(110), durationDisplayed: durationFormat(90) },
    { duration: 105, price: "200,00 €",total: durationFormat(125), durationDisplayed: durationFormat(105) },
    { duration: 120, price: "230,00 €", total: durationFormat(140), durationDisplayed: durationFormat(120) },
   
    
    
];


// ROUTES
app.get('/', (req, res) => {
    res.render('pages/home', { title: 'Electro Derme'});
});

app.get('/electrolyse', (req, res) => {
    res.render('pages/electrolysis', { title: `l'Electrolyse`});
});

app.get('/tarifs', (req, res) => {
    res.render('pages/pricing', { title: 'Tarifs',sessions:sessions, firstVisit:firstVisit});
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