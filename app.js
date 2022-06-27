// Using Node.js `require()`
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");


const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number
});


const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Soild as a fruit."
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  firstName: "Asif",
  lastName: "Hossain",
  age: 30
});

//person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 5,
  review: "Not too tasty"
});

const orange = new Fruit({
  name: "Orange",
  score: 6,
  review: "Sour"
});

const banana = new Fruit({
  name: "Banana",
  score: 9,
  review: "Sweet"
});


Fruit.insertMany([kiwi, orange, banana]).then (function(){
    console.log("Successfully saved all the fruits to fruitsDB")
  }).catch (function(error){
    console.log(error)
  });