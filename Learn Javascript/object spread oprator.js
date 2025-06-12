let x;

const todo= new Object();
todo.id=1;
todo.name="milk";
todo.completed=false;

// object spreading 
const obj1={a:1,b:2};
const obj2={c:3,d:4};
const obj3={...obj1,...obj2};
//using object assign
const obj4=Object.assign({},obj1,obj2);

console.log(obj3);
console.log("using assign : "+obj4);

//creating a constructor

x=todo;
console.log(x);


//

let todos=[
    {id:1,name:"nk"},
    {id:2,name:"go to work"},
    {id:3,name:"learn"},
]
x=todos;
x=todos[0];
console.log("todo is : ",todo);
let y=Object.keys(todo);   ///keys
let nmuofd=Object.keys(todo).length;  // no of datas
let v=Object.values(todo);       // values alone
let e=Object.entries(todo);
let p=Object.hasOwnProperty("age");    //checking


console.log(x);
console.log(y);
console.log("total datasin object : ",nmuofd);
console.log(v);
console.log(e);
console.log(p);





