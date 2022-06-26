const { MongoClient } = require("mongodb");
const assert = require("assert");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb://localhost:27017";
const client = new MongoClient(uri);
async function executeInMongo() {
  try {
    await client.connect();
    console.log("Connected to the Database");
    const database = client.db('shopDB');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    assert.equal(movie.title, 'Back to the Future');

    await database.collection('inventory').insertOne({
      item: 'canvas',
      qty: 100,
      tags: ['cotton'],
      size: { h: 28, w: 35.5, uom: 'cm' }
    });
    

    
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
executeInMongo();