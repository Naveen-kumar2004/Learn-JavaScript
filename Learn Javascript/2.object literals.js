const person={
    name:"naveen",
    age:18,
    addresss:{
        street:"TVS ",
        city:"palladam",
        Distrct:"itirupur",
        pincode:64167,

    }

};


x=person.name;
x=person['age']
console.log(x);
//x=person.addresss.city;
let pn=person.addresss.pincode;
console.log("pin code : "+pn);

//deleting age
delete person.age;

x=person;
console.log(x);
//check it has children
 b=person.hasChildren=true;
console.log(b);

//using function 
person.greet = function(){
    console.log(`hello my name is ${this.name} `);
};
person.greet();

const person={

}







