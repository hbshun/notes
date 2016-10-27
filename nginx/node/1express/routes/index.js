var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('*', function (req, res, next) {
  console.log(req.header('host'));
  res.render('index', {title: 'Express', method: req.method, path: req.path, port: req.header('host').split(':')[1]||req.connection.server._connectionKey});
});

module.exports = router;
