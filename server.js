const express = require(`express`);
const bodyParser = require(`body-parser`);
const path = require(`path`);

var app = express();
var PORT = env.process.PORT || 3000;

// Data parsing setup
app.use(bodyParser.urlencoded({extended: true}));
app.use (bodyParser.json());




// Router
require(`./routing/apiRoutes`)(app);
require(`./routing/htmlRoutes`)(app);

// Server start
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
})