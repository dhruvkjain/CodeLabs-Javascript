// map
const array = [1,2,4,5];
const double = [];
const newArray=array.forEach(num =>{
	double.push(num*2);
})

// instead of using 'forEach' use 'map'
const mapArray = array.map(num=>{
	return num*2;
})

//------------------------------------------------------------------------------------
//filter
const array = [1,2,4,5];
const filterarray = array.filter(num =>{
	return num>5;
})

//------------------------------------------------------------------------------------
//reduce
const array = [1,2,4,5];
const reduceArray() = array.reduce((accumulator,num)=>{
	return accumulator+num;
},0);

//accumulator accumulates the last sum like here
// '0'in last tells the default accumulator value
//logic goes as 0+1 = 1 
//              1+2 = 3
//              3+4 = 7
//              7+5 = 12

//------------------------------------------------------------------------------------
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

const usernameArray=array.map(details=>{
	return details.username += "!";
})
console.log(usernameArray);

// OUTPUT :: ['john!', 'becky!', 'susy!', 'tyson!']

//------------------------------------------------------------------------------------
// here i is index of array elements
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})

//------------------------------------------------------------------------------------
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
];

const usernameArray=array.map(details=>{
	   const arr = details.items.map(item=>{
	   	return item += "!";
	   });
	   return arr;
});
console.log(usernameArray);

//------------------------------------------------------------------------------------


let array =["hi","bye"];
array.join("@");

// OUTPUT ::
// 'hi@bye'

//------------------------------------------------------------------------------------

const pets = ["dog", "cat", "bird"];
pets.includes("dog");
pets.includes("bat");

// use ** instead of ^ for exponent
const cube = (x) => x**3;


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.filter(name => name.includes('John')) // ['Johnathan']

//------------------------------------------------------------------------------------


let arr =[1,[2,3],4,5,[6],7,[8,9]];
arr.flat();

// OUTUT ::
// (9)[1, 2, 3, 4, 5, 6, 7, 8, 9]


let arr2 =[1,[2,3],4,5,[6,7,[8,9]],0];
arr2.flat();

// OUTPUT ::
// (9)[1, 2, 3, 4, 5, 6, 7, Array(2), 0]


let arr3 =[1,[2,3],4,5,[6,7,[8,9]],0];
arr3.flat(2);

// OUTPUT ::
// (10)[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


let arr4 =[1,2,3,,,,,4,5]
arr4.flat();

// OUTPUT ::
// (5)[1, 2, 3, 4, 5]


//------------------------------------------------------------------------------------

// NOTE :::
// Object.entries make array from object 
// To make object from array USE Object.fromEntries()

let arr = [["Rudolf",18],["Mike",32],["Raven",21]];
Object.fromEntries(arr);

// OUTPUT ::
// {Rudolf: 18, Mike: 32, Raven: 21}


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
//Solution:
console.log(greeting.flatMap(x => x.join(' ')))

