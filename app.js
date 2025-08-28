import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT;


app.set("view engine", "ejs");
app.set("view engine", "ejs");


// ROUTES
app.get('/', (req, res) => {
    res.send("Hello World!");
});


// PORT 
app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}, url: http://localhost:${PORT}`)
})