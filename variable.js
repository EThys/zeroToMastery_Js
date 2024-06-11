
//For declaration use const and let

const myName="Ethberg Muzola"
let fatherName
fatherName="Bakulubakisa"
//console.log("Me and my Father", myName,fatherName)

//string
const name=""
//number
const age=20
const poids=75.85
//boolean
const fille=true
//undefined
let gender 

//object
const arrays=[]
const objet={}
const today= new Date
//console.log(typeof today)

let x = 7, y = 3;
x = y++ + 50 // != x = ++y + 50 console.log(x)

//conversion implicite 
String(1);  // "1"
Number("22"); // 22
Boolean("true"); // true

let str="11"
let conversion=Number(str)
let calc= 23 + conversion
//console.log(typeof conversion,calc)

//Modification par reference pour les objest et par valeur pour les primitives
let arr=[2,3,4,5,6,8]

arr[2]=10
//console.log(arr)

let userName
userName && console.log(userName)

let names= name || "john"
//console.log(names)

//Les ternaires

// const yearOld=20
// const isMajor=(yearOld>18) ? "Is major" : "You are not major"
// console.log(isMajor)

const person={
    name:"Muzola eth ethberg",
    age:22,
    phone:"0854434602"
}
const agePerson=person.age
const majeur=(agePerson>18) ? "Is major" : "You are not major"
console.log(majeur)

let roues="3"
let vehiculeType

switch(roues){
    case 4: 
        vehiculeType ="Voiture"
        break;
    case "3":    
    case 3:
        vehiculeType="Keweseki"
        break
    case 2:
        vehiculeType ="Wewa"
        break;
    default:
        break;   
}   

console.log(vehiculeType)





