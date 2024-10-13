const test = require('./test');

function route(app) {
    app.use('/test', test);
}

module.exports = route;