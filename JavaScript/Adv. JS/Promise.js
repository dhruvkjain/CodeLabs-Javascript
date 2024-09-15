


// https://github.com/daumann/ECMAScript-new-features-list





const promise =new Promise((resolve,reject)=>{
    if(true){
        resolve("Stuff Worked !!");
    }
    else{
        reject("Error, it broke");
    }
})

promise
.then(result=> result+"!")
.then(result1 => result1+"?")
.then(result3 => console.log(result3))


// _____________________________________________________

const promise1 =new Promise((resolve,reject)=>{
    setTimeout(resolve, 1000, "Hola")
})

const promise2 =new Promise((resolve,reject)=>{
    setTimeout(resolve, 2000, "Amigos")
})

const promise3 =new Promise((resolve,reject)=>{
    setTimeout(resolve, 3000, "!!!")
})

Promise.allSettled([promise1,promise2,promise3])
.then(values=>{
    console.log(values);
})

// OUTPUT :: ['Hola', 'Amigos', '!!!'] (after 3000 millisecoonds)


// _______________________________________________________

// promise
fetch("https://jsonplaceholder.typicode.com/users")
.then(resp=>resp.json())
.then(console.log)

// NOTE :: both are doing same thing 

//async await
async function fetchUsers(){
    const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await resp.json();
    console.log(data);
}
fetchUsers();

// ________________________________________________________

const urls=
    [
        "https://jsonplaceholder.typicode.com/posts" ,
        "https://jsonplaceholder.typicode.com/albums" ,
        "https://jsonplaceholder.typicode.com/users"
    ];

// promise
Promise.allSettled(urls.map(url=>{
    return fetch(url).then(resp=>resp.json())
})).then(result=>
    {
        console.log(result[0])
        console.log(result[1])
        console.log(result[2])
    }).catch(()=>console.log("error"));


//async await
const getData = async function(){
    try {
        const [posts,albums,users]=Promise.allSettled(urls.map(url=>{
            return fetch(url).then(resp=>resp.json())
        }))
        console.log("users : ",users)
        console.log("albums : ",albums)
        console.log("posts : ",posts)
    }
    catch(err){
        console.log("error :",err);
    }
}
getData();


// _____________________________________________________________


const urls3=
    [
        "https://jsonplaceholder.typicode.com/posts" ,
        "https://jsonplaceholder.typicode.com/albums" ,
        "https://jsonplaceholder.typicode.com/users"
    ];

const getData2 = async function(){
    try {
        const [posts,albums,users]=Promise.allSettled(urls3.map(url=>{
            return fetch(url).then(resp=>resp.json())
        }))
        console.log("users : ",users)
        console.log("albums : ",albums)
        console.log("posts : ",posts)
    }
    catch(err){
        console.log("error :",err);
    }
}

// the above async can also be done by :
// for await of
const loopurls = async function(){
    const arrayofpromises= urls3.map(url=>{return fetch(url)});
    for await (let request of arrayofpromises){
        const data = await request.json();
        console.log(data);
    }
}



// ________________________________________________________

//Object spread operator
const animals={
    tiger:23,
    lion: 5,
    monkey: 2,
    bird: 40
}
function example(p1,p2,p3)
{
    console.log(p1);
    console.log(p2);
    console.log(p3);
}
const {tiger, lion, ...rest} = animals // this is called destructuring
example(tiger,lion,rest);

// ________________________________________________________

const urls2=
    [
        "https://jsonplaceholder.typicode.com/posts" ,
        "https://jsonplaceholder.typicode.com/albums" ,
        "https://jsonplaceholder.typicode.com/users"
    ];

// promise
Promise.allSettled(urls2.map(url=>{
    return fetch(url).then(resp=>resp.json())
})).then(result=>
    {
        console.log(result[0])
        console.log(result[1])
        console.log(result[2])
}).catch(()=>console.log("error"))
.finally(()=>console.log("extra"));

// finally run no matter what happens
// promise is rejected resolved or pending

// ________________________________________________________
