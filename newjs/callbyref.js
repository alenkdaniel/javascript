// call by value
let a;
a=10;
let b=a;
// a=20;
console.log(a);
console.log(b);
f1(a,b);
// call by reference
let obj1={
    name:"harry",
    age: 10
}

let obj2=obj1;
console.log("obj1:",obj1);
console.log("obj2 :",obj2);
f2(obj1,obj2);
// obj1.name="potter";
// console.log(obj1);
// console.log(obj2);
function f1(a,b){
    a=20;
    // b1=30;

console.log(a);
console.log(b);
}
 function f2(obj1,obj2){
    obj1.name='alwin';
    console.log("obj1:",obj1);
    console.log("obj2",obj2);
 }
// write array using with and without function
function fa() {
    let v1=40;
    function fb(){
        return `v1 ${v1}`;
    }
    return fb;
}
let result=fa();

console.log("result1:" , result);

console.log("result1:" , result());
 


