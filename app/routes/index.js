module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('_pages/Landing/index.pug');
  });
  app.get('/404', function (req, res) {
    res.render('_pages/PageNotFount/index.pug');
  });
};
