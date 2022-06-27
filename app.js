// Using Node.js `require()`
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");


const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number
});


const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "No name specified"]},
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: 'Grape',
  rating: 10,
  review: "Soild as a fruit."
});
// fruit.save();

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  firstName: "Asif",
  lastName: "Hossain",
  age: 30
});

//person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 5,
//   review: "Not too tasty"
// });

// const orange = new Fruit({
//   name: "Orange",
//   score: 6,
//   review: "Sour"
// });

// const banana = new Fruit({
//   name: "Banana",
//   score: 9,
//   review: "Sweet"
// });


// Fruit.insertMany([kiwi, orange, banana]).then (function(){
//     console.log("Successfully saved all the fruits to fruitsDB")
//   }).catch (function(error){
//     console.log(error)
//   });



Fruit.updateOne({_id: "62b9b88c6751ae7884abef4e"}, {name: 'Mango'}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated");
  }
});


Fruit.find(function(err, fruits){
  fruits.forEach(function(fruit){
    console.log(fruit.name);
  });


Fruit.deleteOne({name: 'Banana'}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully Deleted");
  }
  });

// mongoose.connection.close();
});

