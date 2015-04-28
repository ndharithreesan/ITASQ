var bodyParser = require('body-parser')

module.exports = function(app, express, passport){

  var searchRouter = express.Router();
  var userRouter = express.Router();

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../Client'));

  app.use('/Server/search', searchRouter);
  app.use('/Server/user', userRouter)
  
  require('../users/passportConfig.js')(passport)
  require('../search/searchRoutes.js')(searchRouter);
  require('../users/userRoutes.js')(userRouter);
  
}