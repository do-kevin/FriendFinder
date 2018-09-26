const path = require(`path`);

module.exports = function(app) {
    // GET route to survey
    app.get(`/survey`, function(req, res) {
        res.sendFile(path.join(__dirname, `../public/survey.html`));
    });
    // Default, catch all route
    app.get(`*`, function(req, res) {
        res.sendFile(path.join(__dirname, `../public/home.html`));
    });
}