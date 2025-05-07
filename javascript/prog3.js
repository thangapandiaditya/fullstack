x={
    name:"John",
    age:30,
    city:"New York"
}
console.log(x.name);
console.log(x.age);
console.log(x["city"]);
for (let i in x){
    console.log(i,x[i]);
}
for (let i of Object.keys(x)){
    console.log(i,x[i]);
}