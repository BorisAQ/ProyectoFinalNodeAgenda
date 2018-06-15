const http = require('http'),
      path = require('path'),      
      express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');




var routingGeneral = require('./rutasGeneral.js');



var imagenPath = path.join(__dirname,'../') + '/client/img/';
var cssPath = path.join(__dirname,'../') + '/client/css/';
var jsPath = path.join(__dirname,'../') + '/client/js/';

const PORT = 3000
const app = express()

const Server = http.createServer(app)
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/agenda')


app.use(express.static('client'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/',routingGeneral)


app.use(express.static(cssPath));
app.use(express.static(imagenPath));
app.use(express.static(jsPath));

Server.listen(PORT, function() {
  console.log('Server is listeng on port: ' + PORT); 
})
