function add(x,y){
    if(x==0){
        throw "invalid sides"
    }
    if(y==0){
        throw Error("Y value can not be zero");
    }
    console.log("The division",x/y);
}
try{
    add(0,10);

}
catch(e){
    console.log(e);
    // console.log(message);
}
finally{
    console.log("The program is executed");
}