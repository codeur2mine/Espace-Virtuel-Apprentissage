
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var CahiermodelsSchema = new mongoose.Schema({
  title: String, 
  comment: String
}
);

CahiermodelsSchema.plugin(passportLocalMongoose);

var Cahiermodels = mongoose.model('Cahiermodels', CahiermodelsSchema);
module.exports = Cahiermodels;