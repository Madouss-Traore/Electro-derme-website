import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import expressLayouts from "express-ejs-layouts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layout"); 


app.use(express.static(path.join(__dirname, 'public')));

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

// FAQS
const faqs = [ 
  {
    question: `Qu’est-ce que l’électro-épilation ?`,
    answer: `
      <p>L’électro-épilation comprend : <strong>l’électrolyse</strong> et la <strong>thermolyse</strong>. 
      Il s’agit de la seule méthode d’épilation réellement définitive, traitant le poil <em>à l’unité</em>.</p>
      <p>Cette méthode consiste à insérer un micro-filament dans le follicule pileux afin de détruire les cellules germinatives du poil.</p>
      <p>Elle est efficace sur <strong>tous les types de peaux</strong> et <strong>tous les types de poils</strong>.</p>
    `
  },
  {
    question: `Est-ce que l’électrolyse est adaptée à ma peau ?`,
    answer: `
      <p>Oui, l’électrolyse convient à <strong>toutes les carnations</strong>, des peaux très claires aux peaux très foncées, ainsi qu’à <strong>tous les types de poils</strong>. 
      C’est ce qui la différencie fortement du laser.</p>
    `
  },
  {
    question: `À partir de quel âge peut-on commencer ?`,
    answer: `
      <p>L’électro-épilation peut se pratiquer à <strong>tout âge</strong>, mais il est préférable d’attendre la <strong>fin de la puberté</strong> pour plus d’efficacité.</p>
      <p>Pour les mineurs, le traitement est possible à partir de <strong>16 ans</strong>, avec une <strong>autorisation parentale</strong>.</p>
    `
  },
  {
    question: `Est-ce que c’est douloureux ?`,
    answer: `
      <p>La sensation dépend de la zone traitée et de ta sensibilité. Certaines personnes ressentent un <strong>léger picotement</strong> ou une <strong>chaleur passagère</strong>.</p>
      <p>Un test sera réalisé lors de la consultation pour évaluer ta tolérance.</p>
      <p>Pour mieux préparer ta séance :</p> <br>
      <ul>
        <li>• Hydrate ta peau de l’intérieur (bois suffisamment)</li>
        <li>• Hydrate aussi ta peau de l’extérieur (crème hydratante)</li>
      </ul>
      <p>Attention, certains facteurs peuvent rendre la peau plus réactive :</p> <br>
      <ul>
        <li>• Fatigue</li>
        <li>• Stress</li>
        <li>• Colère</li>
        <li>• Règles ou ovulation</li>
      </ul>
    `
  },
  {
    question: `Combien de séances sont nécessaires ?`,
    answer: `
      <p>Le nombre de séances dépend de :</p> <br>
      <ul>
        <li>• La zone traitée</li>
        <li>• Ta pilosité</li>
        <li>• Ton cycle de croissance du poil</li>
      </ul>
      <p>L’électro-épilation agit <strong>poil par poil</strong>, donc plusieurs séances sont nécessaires pour un résultat définitif.</p>
    `
  },
  {
    question: `Quelles zones peut-on traiter ?`,
    answer: `
      <p><strong>Toutes les zones du visage et du corps</strong> peuvent être traitées, y compris les zones sensibles :</p>  <br>
      <ul>
        <li>• Mentons</li>
        <li>• Lèvres supérieures</li>
        <li>• Aréoles</li>
        <li>• Maillot</li>
        <li>• Ventre…</li>
      </ul>
    `
  },
  {
    question: `Quelles précautions prendre avant la séance ?`,
    answer: `
      <p>Voici les précautions à prendre :</p> <br>
      <ul>
        <li>• Hydratez votre peau les jours précédents</li>
        <li>• Ne rasez pas vos poils</li>
        <li>• Venez avec la peau propre</li>
      </ul>
    `
  },
  {
    question: `Et après la séance ?`,
    answer: `
      <ul>
        <li>• Désinfecter, hydrater et protéger la zone traitée</li>
        <li>• Éviter piscine, sauna, hammam et soleil pendant 48h</li>
        <li>• Éviter les soins abrasifs pendant 48h (AHA, BHA, gommage, acide salicylique…)</li>
        <li > • Ne pas toucher la zone traitée</li>
      </ul>
    `
  },
  {
    question: `Y a-t-il des contre-indications ?`,
    answer: `
      <p>Oui, l’électro-épilation est déconseillée dans les cas suivants :</p> <br>
      <ul>
        <li>• Grossesse</li>
        <li>• Port de pacemaker ou autre dispositif électronique implanté</li>
        <li>• Certaines pathologies cutanées (infection, inflammation, herpès actif, plaies…)</li>
        <li>• Épilepsie non stabilisée</li>
        <li>• Prise de médicaments anticoagulants, photosensibilisants ou provoquant une hypersensibilité cutanée</li>
      </ul>
      <p>Un <strong>questionnaire santé</strong> sera rempli lors de la première séance pour vérifier que le traitement est adapté et sans risque.</p>
    `
  }
];


// MIDDLEWARE CASSE

app.use((req, res, next) => {
  let url = decodeURIComponent(req.url);  
  url = url.normalize("NFD")               
           .replace(/[\u0300-\u036f]/g, "") 
           .toLowerCase();                  
  req.url = url;
  next();
});




// ROUTES
app.get('/', (req, res) => {
    res.render('pages/home', { title: 'Electro Derme'});
});

app.get('/electrolyse', (req, res) => {
    res.render('pages/electrolysis', { title: `Electrolyse`});
});

app.get('/tarifs', (req, res) => {
    res.render('pages/pricing', { title: 'Tarifs',sessions:sessions, firstVisit:firstVisit});
});

app.get('/contact', (req, res) => {
    res.render('pages/contact', { title: 'Contact'});
});

app.get('/faq', (req, res) => {
    res.render('pages/faq', { title: 'FAQ', faqs});
});

// Toutes les routes non reconnues passent ici
app.use((req, res) => {
  res.status(404).render("pages/404", { title: "Page non trouvée" });
});



// PORT 
app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}, url: http://localhost:${PORT}`)
})