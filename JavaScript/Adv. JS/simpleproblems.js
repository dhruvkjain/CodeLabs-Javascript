// problem 1
let arr = [];
let arrs = [];
let arrsort = [1,2,4,591,392,391,2,5,"p",10,2,1,1,591,"g",1,20,20,591];

for(let k=0;k<arrsort.length;k++)
{
    if(typeof(arrsort[k]) === "string")
    {
        arrs.push(arrsort[k]);
    }
    if(typeof(arrsort[k]) === "number")
    {
        arr.push(arrsort[k]);
    }
}

for(let i=0;i<arr.length;i++)
{
    let pos=0;
    let temp;
    for(let j=i+1;j<arr.length;j++)
    {
        if (arr[j] < arr[i])
        {
            pos = j;
            temp=arr[pos];
            arr[pos]=arr[i];
            arr[i]=temp;
        }
    }
}

let arr2 = [];
let arrtemp = [];
let pos = 0;
let time = 0;
let ele = arr[0];

for(let i=0;i<arr.length;i++)
{
    if(arr[pos]!==arr[i])
    {
        time = i-pos;
        pos=i;
        console.log("time",time);
        console.log("pos",pos);
        if(time>1)
        {
            for(let j=0;j<time;j++)
            {
                arrtemp.push(ele);
            }
            arr2.push(arrtemp);
            arrtemp=[];
        }
        else{
            arr2.push(ele);
        }
        ele = arr[pos];
    }
    if(i===(arr.length-1))
    {
        time = (i-pos)+1;
        console.log("TIME",time);
        if(time>1)
        {
            for(let j=0;j<time;j++)
            {
                arrtemp.push(arr[arr.length-1]);
            }
            arr2.push(arrtemp);
            arrtemp=[];
        }
        else{
            arr2.push(arr[arr.length-1]);
        }
    }
}

console.log(arr2.concat(arrs));

//----------------------------------------------------------------
// problem 2
const answer = (arr,num) =>{
    for (let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]+arr[j] === num)
            {
                let arr2=[arr[i],arr[j]];
                return arr2;
            }
        }
    }
}


//----------------------------------------------------------------
// problem 3

function hexToRgb(hex) 
{
    var r = parseInt(hex.substring(0,2), 16);
    var g = parseInt(hex.substring(2,4), 16);
    var b = parseInt(hex.substring(4,6), 16);
  
    return "rgb(" + r + ", " + g + ", " + b + ")";
}



function componentToHex(c) {
   var hex = c.toString(16);
   return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) 
{
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
















