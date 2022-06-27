




const { MongoClient } = require("mongodb");
const assert = require('assert');

// Replace the url string with your MongoDB deployment's connection string.
const url =
  "mongodb://localhost:27017";

const dbName = "fruitDB"

const client = new MongoClient(url, { userNewUrlParser: true });

  client.connect(err);
  assert.equal(null, err);
  console.log("Connected Successfully to server");

  const db = client.db(dbName);

insertDocuments(db, function () {
  client.close();
});


const insertDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection("fruits");
  // Insert some documents
  collection.insertMany([
    {
      name: "Apple",
      score: 8,
      reviiew: "Great Fruit"
    }, {
      name: "Orange",
      score: 6,
      reviiew: "Sour"
    }, {
      name: "Banana",
      score: 9,
      reviiew: "Sweet"
    }


  ], function (err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
};