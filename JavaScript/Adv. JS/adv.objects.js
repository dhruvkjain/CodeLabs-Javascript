
// let obj = {
// 	properties/keys : value;
// }

//reference type
[] === [];
// OUTPUT :: false
// because both arrays have different locations
let obj1 = {value:10};
let obj2 = obj1;
let obj3 = {value:10};

obj1 === obj2;
//true
obj1 === obj3
// false

//------------------------------------------------------------------------------------
// context 
//'this' keyword is used to make reference to the object in which it is
const obj = {
	a: function() {console.log(this);}
}
obj.a();

// OUTPUT ::{a: ƒ}
//------------------------------------------------------------------------------------

// instantiation
class Player{
	constructor (name, type)
	{
		console.log(this);
		this.name = name;
		this.type = type;
	}
	introduce()
	{
		console.log("Hi I am "+this.name+", I am a "+this.type);
	}
}

class Wizard extends Player
{
	constructor(name,type)
	{
		super(name, type);
	}
	play()
	{
		console.log("I am known as "+this.type);
	}
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magician");

//------------------------------------------------------------------------------------
// pass by value :: primitive data types
let a = 5;
let b = a;
b++;
console.log(a);
console.log(b);

// OUTPUT :: 5
//           6
// here b just copies value of a

// pass by reference :: objects like arrays

let obj4 = {name:"ginger", value:123}
let obj5 = obj4;

obj5.value=1234

console.log(obj4);

// OUTPUT :: {name:"ginger", value:1234}
// here both obj4 and obj5 points at same address of object so if one
// is changed other changes automatically
// inshort both are referencing to same address

// so to have same value of an object at two different address to change
// any one later we cando thing as

let obj6 = Object.assgin({},obj4);
// "{}" in brackets represent the object in which we need to paste value
// of the object after comma


//------------------------------------------------------------------------------------

let obj ={
	username0: "Santa",
	username1: "Rudolf",
	username2: "Mr.Grinch",
}

Object.keys(obj).forEach((key,index) =>{
	console.log(key,obj[key]);
	console.log(index);
})

// OUTPUT ::
// username0 Santa
// 0
// username1 Rudolf
// 1
// username2 Mr.Grinch
// 2

let obj ={
	username0: "Santa",
	username1: "Rudolf",
	username2: "Mr.Grinch",
}
Object.values(obj).forEach((value)=>{
	console.log(value);
})

// OUTPUT ::
// Santa
// Rudolf
// Mr.Grinch


let obj ={
	username0: "Santa",
	username1: "Rudolf",
	username2: "Mr.Grinch",
}
Object.entries(obj).forEach((value)=>{
	console.log(value);
})

// OUTPUT ::
// (2)['username0', 'Santa']
// (2)['username1', 'Rudolf']
// (2)['username2', 'Mr.Grinch']


let obj ={
	username0: "Santa",
	username1: "Rudolf",
	username2: "Mr.Grinch",
}
Object.entries(obj).map((value)=>{
	return value[1]+value[0].replace("username","");
})

// OUTPUT::
// (3)['Santa0', 'Rudolf1', 'Mr.Grinch2']

// NOTE :::
// Object.entries make array from object 
// To make object from array USE Object.fromEntries()

let arr = [["Rudolf",18],["Mike",32],["Raven",21]];
Object.fromEntries(arr);

// OUTPUT ::
// {Rudolf: 18, Mike: 32, Raven: 21}

