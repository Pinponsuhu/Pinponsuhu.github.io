const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.listen(port);
app.set('view engine','ejs');
app.set('views','pages');
app.use(express.static('public'));
app.use(express.urlencoded({ extended : true }));

const routes = require('./routes/routes');

app.use( '/', routes);
