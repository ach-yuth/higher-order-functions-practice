// first answer
const nums = [1, 2, 3, 4, 5, 6];

function filteredNums(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}
console.log(filteredNums(nums));

//second answer
const fruits = ["apple", "banana", "orange", "kiwi"];

function fruitsLength(fruits) {
  return fruits.map((fruit) => fruit.length);
}
console.log(fruitsLength(fruits));

//third answer
const numbers = [1, 2, 3, 4, 5];
function doubleNums(nums) {
  return nums.map((num) => num + num);
}
console.log(doubleNums(numbers));

//fourth answer
const fruitsArray = ["apple", "banana", "orange", "kiwi"];

function fruitsWithMaxLength(fruits) {
  return fruits.filter((fruit) => {
    if (fruit.length > 5) {
      return fruit;
    }
  });
}
console.log(fruitsWithMaxLength(fruitsArray));

//fifth answer
const data = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Doe", age: 30 },
];

function personNames(list) {
  const obj = list.filter((person) => {
    if (person.age > 18) {
      return person.name;
    }
  });
  return obj.map((person) => person.name);
}
console.log(personNames(data));

//sixth answer
const numbs = [1, 2, 3, 4, 5];
function squareNums(nums) {
  return nums.map((num) => num * num);
}
console.log(squareNums(numbs));

//seventh answer
const fruitsList = ["apple", "banana", "orange", "kiwi"];

function fruitsWithCapital(fruits) {
  return fruits.map(
    (fruit) => fruit.slice(0, 1).toUpperCase() + fruit.slice(1)
  );
}
console.log(fruitsWithCapital(fruitsList));

//eight answer
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 60 },
];

function productsName(data) {
  const obj = data.filter((item) => {
    if (item.price > 500) {
      return item.name;
    }
  });
  return obj.map((item) => item.name);
}
console.log(productsName(products));

//ninth answer
const numsArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function simplifiedNums(numbs) {
  const addedNums = numbs.map((number) => {
    let numCount = 0;

    number.forEach((num) => {
      numCount = num + numCount;
    });
    return numCount;
  });
  return addedNums;
}
console.log(simplifiedNums(numsArrays));

//tenth answer

const duplicateArray = ["apple", "banana", "orange", "apple", "kiwi"];

function filterDuplicateFruits(fruits) {
  let uniqueFruits = [];
  fruits.filter((fruit) => {
    if (!uniqueFruits.includes(fruit)) {
      uniqueFruits.push(fruit);
    }
  });
  return uniqueFruits;
}
console.log(filterDuplicateFruits(duplicateArray));
