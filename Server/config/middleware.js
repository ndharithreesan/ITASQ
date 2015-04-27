var bodyParser = require('body-parser')

module.exports = function(app, express){

  var searchRouter = express.Router();

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));

  app.use('/Server/search', searchRouter;

  require('../search/searchRoutes.js')(searchRouter);
  
}