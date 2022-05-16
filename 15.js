arr = [ 
     {name:  "Jack" , age : 23}, 
     {name:  "Sam" , age : 12},  
     {name:  "Max" , age : 20} 
    ]


let userRes = 2

if(userRes==1) inst();
if(userRes==2) dlt();

function inst(){
   pos=3;
   arr.splice(pos, 0 , {name: 'Danial', age: 56})
   console.log(arr)
}

function dlt(){
    pos=2
    arr.splice(2,1)
    console.log(arr)
}