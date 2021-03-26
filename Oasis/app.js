const express = require('express');
const app = express();
const mysql = require('mysql');

const con = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'oasis'

});

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
app.post('/gist', (req,res)=>{
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO blogPost (title, author,body) VALUES (?,?,?)";
        con.query(sql,[req.body.blogTitle,req.body.blogAuthor,req.body.blogBody], function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });
});