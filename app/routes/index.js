module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('landing/index.pug');
  });
  app.get('/holding', function (req, res) {
    res.render('holding/index.pug');
  });
  app.get('/404', function (req, res) {
    res.render('errors/404.pug');
  });
};
