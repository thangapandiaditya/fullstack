function Employee(name,sal,mgr){
    this.name=name;
    this.sal=sal;
    this.mgr=mgr;
}
function Aditya(name,age){
    this.name=name;
}
let c1=new Employee("aditya",10000,"block");
let c2=new Employee("vyshu",20000,"block");
let c3=new Aditya(function(name,age){
    return name("aditya");
})
console.log(c1);
console.log(c2);
console.log(c3);