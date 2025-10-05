let message:string ='This is a string message';
console.log(message);



// how to write function in ts

function add(a:number,b:number) : number // this is for number return type
{
 return a+b;
}

add(3,4);

//objects in ts

let person : {name: string , age : number} = { name :'bob', age: 34}
console.log('non interface', person.name)
//another way is using interface

interface Person{
    name: string,
    age : number
}

let person1 : Person ={ name : 'bob',age : 34};
console.log(person1.name);