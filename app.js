const express=require('express')
const expressLayouts=require('express-ejs-layouts');
const app=express();
const port = process.env.PORT || 3000;
const routes=require(".server/routes/recipeController.js")

require('dotenv').config();

app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/',routes);


app.listen(port,()=>console.log(`Listening to port ${port}`));