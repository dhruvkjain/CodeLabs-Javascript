try {
	bob+"hi";
}
catch(error){
	console.log("you messed up");
	console.log(error);
}

// OUTPUT ::
// you messed up
// ReferenceError: bob is not defined

let basket=["apples","grapes","oranges"];

// for(let i=0;i<basket.length;i++)
// {
// 	console.log(basket[i]);
// }
// This can also be written as

for(item of basket)
{
	console.log(item);
}

//------------------------------------------------------------------------------------

let person1 ={
	dog : {
		weight : 30,
		height : 0.4
	}
}
let weight1 = person1?.dog?.weight;
console.log(weight1);

// ? check if it exist otherwise return undefined
// OUTPUT :: 30

let weight2 = person1?.cat?.weight;
console.log(weight2);

// OUTPUT :: undefined

//------------------------------------------------------------------------------------

let arr = [1,2,3,4,5];

console.log(arr[arr.length-2]);
console.log(arr.at(-2));
console.log(arr.at(0));

//OUTPUT :: 
// 4
// 4
// 1


////  VVIP :: NOTE :: 
// whenever we write debugger; the whole code freezes at that line;

let basket=["apples","grapes","oranges"];
for(let i=0;i<basket.length;i++)
{
	if(i=1)
	{
		debugger;
	}
	console.log(basket[i]);
}


//------------------------------------------------------------------------------------
// VVVIMP NOTE ::
// Asynchronous javascript ::

console.log("1");
setTimeout(()=>
{
	console.log("2");
},2000)
console.log("3");

// Here console.log("3") is executed first and console.log("2") is placed
// in callback queue for 2000 milliseconds or 2 sec so after 3 is 
// printed it waits for 2 sec and then prints the callback queue 
// OUTPUT :: 
// 1
// 3
// 2

console.log("1");
setTimeout(()=>
{
	console.log("2");
},0)
console.log("3");

// Here console.log("2") is placed in callback queue for 0 miliseconds but 
// as it is placed in call back queue even for 0 sec console.log("3")
// gets executed and ask if there is any call back 
// OUTPUT :: 
// 1
// 3
// 2

// NOTE :: after every line it asks if any callback exist

