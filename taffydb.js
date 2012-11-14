var TAFFY = require('./index');
var db = new TAFFY();

db.insert({foo:'bar'});

console.log(db().get());