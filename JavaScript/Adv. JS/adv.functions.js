//DON'T USE var USE let 
//example
let a = false;
const b = 9;

if(b=9)
{
	let a = true;
	console.log('inside',a);
}

console.log('outside',a);

// OUTPUT :: inside true
//           outside false

// So 'let' inside any curly bracket of a function 
// makes a new variable like here 'a' for that function

var a = false;
const b = 9;

if(b=9)
{
	var a = true;
	console.log('inside',a);
}

console.log('outside',a);

// OUTPUT :: inside true
//           outside true

//------------------------------------------------------------------------------------
//const name = "Sally";
//const age = 34;
//when we create a new curly bracket it creates a new scope

function greet(name = '', age = 20)  // these are default values
{
	return "Hello "+name+" you seem to be of age "+age ;
}

//------------------------------------------------------------------------------------
function multiply(a,b)
{
	return a*b;
}

//the above function can be written as
const multiply = (a,b) => a*b ;

const add = (c) => (d) => c+b; //function inside function
// add(3)(4) 
// OUTPUT :: 7

//------------------------------------------------------------------------------------
//composing two fuctions
const compose = (h,k) => (f) =>h(k(f));
const sum = (num) => num+1;
//compose(sum,sum)(5)
//OUTPUT :: 7
// think logic by yourself

//------------------------------------------------------------------------------------
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
