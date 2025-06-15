 const post={
    id:1,
    title:"Post",
    body:"this the post body",

 };
 //convert objects to json string
const str=JSON.stringify(post);

//parse JSOn
const obj=JSON.parse(str);
//for array
const posts=[{
    id:1,
    title:"Post one",
    body:"this the post 1 body",

 },
 {
    id:2,
    title:"Post two",
    body:"this the post 2 body",
 },
];
const str2=JSON.stringify(posts);  // converting to json string





console.log(post);
console.log("object to json string :",str);
console.log("parsing : ",str);
console.log("array obj is: ",str2);

console.log(str.id); // undefined
console.log(obj.id);

//