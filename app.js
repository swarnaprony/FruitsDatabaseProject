// Using Node.js `require()`
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No name specified"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const pinapple = new Fruit({
  name: 'Pinapple',
  rating: 9,
  review: "Great."
});
pinapple.save();


const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  favoriteFruit: fruitSchema
});




const Person = mongoose.model("Person", personSchema);

const person = new Person({
  firstName: "Swarna",
  lastName: "Sarker",
  age: 12,
  favoriteFruit: pinapple
});

person.save();

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



// Fruit.updateOne({_id: "62b9b88c6751ae7884abef4e"}, {name: 'Mango'}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated");
//   }
// });


Fruit.find(function (err, fruits) {
  fruits.forEach(function (fruit) {
    console.log(fruit.name);
  });


  // Fruit.deleteMany({name: 'Orange'}, function(err) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Successfully Deleted");
  //   }
  //   });

  //     // mongoose.connection.close();
  // });


Fruit.updateOne({ _id: "62b9c72878932feabcba099d" }, {favoriteFruit: fruitSchema }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated");
  }
});

});
