const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const port = 3000;

// connect mongoose
mongoose.connect('mongodb://localhost/shop_shoes', {

});

// set static folder
app.use(express.static("./public"));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// set template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', "./src/app/views" );

// route init
const route = require('./src/app/routes');

// route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
