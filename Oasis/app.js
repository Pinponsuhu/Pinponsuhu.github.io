const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.listen(port);
app.set('view engine','ejs');
app.set('views','pages');
app.use(express.static('public'));
app.use(express.urlencoded({ extended : true }));

app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/create',(req,res)=>{
    res.render('create');
});
app.get('/about',(req,res)=>{
    res.render('about');
});
