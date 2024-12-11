let a:number =1
let b:string="123"

// let sum:number = a + b

function addTwo(a:number,b:number):number{
    return a+b
}

console.log(addTwo(23,12));

const numbers: Number[] = [1, 2, 3, 4];

const enum GENDER{
    MALE="male",
    FEMALE="female"
}
interface IPerson{
    name:string
    age:number
    favorite?:string
    gender:GENDER
}

const person:IPerson={
    name:"david",
    age:20,
    gender:GENDER.FEMALE

}