console.log("hello world");
function display(callback){
    setTimeout(function (){
        console.log("Aditya ");
        callback();
    },2000);
}
function starting(callback){
    setTimeout(function (){
        console.log("This is Aditya");
        callback();
    },2000);
}
function usage(){
    console.log("The data is used");
}
display(function(){
    starting(function (){
        usage();
    });
});