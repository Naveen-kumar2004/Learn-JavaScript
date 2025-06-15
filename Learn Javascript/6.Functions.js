// Default param:
// function regisuser(user)
function regisuser(user="nk")
{
    // if(!user) {user="nk"}
    return user + " is registered";

}
console.log(regisuser());
//------------------------------------------------------------
// Rest param:
function reuser(...number)
{
    //total 
    let tot=0;
    for(const num of number)
    {
        tot+=num;
    }
    return "total is : "+ tot;
}
console.log(reuser(1,22,3,8,7,91));
//----------------------------------------------------------
// Object as param:
function regisUser(user)
{
    return `the user ${user.name} with id of ${user.id} is registered`;
}
// console.log(regisUser(
//     {
//         id:2,
//         name:"nk",  
//     }));
const user={
    id:83,
    name: "nk",
};
console.log(regisUser(user));
//-----------------------------------------------------------
//array as param
function randNum(arr)
{
    const ranIndex=Math.floor(Math.random()*arr.length);
    const item = arr[ranIndex];
    console.log(item);
}
randNum([1,66,23,12,7,9]);
//-----------------------------------------------------------
//Global scope
window.alert("user")  
