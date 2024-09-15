function checkDriverAge(age)
{
	if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}

var list = ["apple", "orange", "banana", "kiwi", "pineapple"];
list.splice("banana");

var database = 
[
    {
       username: "andy",
       password: "secre"
    },
    {
      username: "jess",
      password: "123"
    }
] ;


var newsfeed = 
[
    {
       username: "bobby",
       timeline: "Hey guys! new to this stuff"
    },
    {
       username: "sally",
       timeline: "Kinda weird"
    }
];