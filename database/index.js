const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/pokemon';


module.exports.getPokemon = (callback) => {

  mongo.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, database) => {
    if (err) {
      callback(err);
    }
    database
      .db("pokemon")
      .collection("pokedex")
      .toArray((err, data) => {
        if (err) {
          callback(err);
        } else {
          callback(null, data);
          database.close();
        }
      })
  });
}