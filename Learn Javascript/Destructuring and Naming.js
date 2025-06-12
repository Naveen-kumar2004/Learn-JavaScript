const fn="naveen";
const ln="kumar";
const age =21;
const person={
    fn,
    ln,
    age,
};
console.log(person);

//Destructing
const todo={
    id:1,
    title:"take out trash",
   user:{
        name:"naveen",
    },
    city:"cbe",



};
//const {id}=todo;

// destructuring 
const { }=todo;
//const {id,title,user : {name}}=todo; // destructuring 


// renaming : id value to todoid
const {
    id:todoID,
    title,
    user: {name},
}=todo;


console.log("afer renaming : ",todoID);
console.log("the title:" ,title);
console.log(name);

//Destructuring in ARRAYs
const arr=[12,87,45,62,23];
const [first,seconds]=arr;
console.log("first ele:",first);   
