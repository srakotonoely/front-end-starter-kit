module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('_pages/index.pug');
  });
  app.get('/404', function (req, res) {
    res.render('_pages/404.pug');
  });
};
