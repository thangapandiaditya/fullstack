//Promises example
function fetch(){
 return new Promise(function(reslove,reject){
         reslove("Loading the data");
        // reject("error");
    })
    // return p;
}
try{
let x=await fetch();
console.log(x);
}
catch(msg){
    console.log(msg);
}