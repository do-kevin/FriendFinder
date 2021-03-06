const express = require(`express`);
const bodyParser = require(`body-parser`);
const path = require(`path`);

var app = express();
var PORT = process.env.PORT || 3000;

// Data parsing setup
app.use(bodyParser.urlencoded({extended: true}));
app.use (bodyParser.json());




// Router
require(`./app/routing/apiRoutes`)(app);
require(`./app/routing/htmlRoutes`)(app);

// Server start
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
})