
//for
// for(let i=0;i<=100;i++){
//     console.log(i);
//    if(i==50){
//     break;
//    }
// }

//while

// let i=0
// while(i<=100){
//     console.log(i)
//     i++

// }

// let i=0
// do{
//     i++
//     console.log(i)
// }while(i<100)


                                //lES NOMBRES
console.log((0.1 *10+0.2*10)/10)
const price=1e6

//3 manner to convert to string in number
let string="23"
let converTNumber=Number(string)
let convertPlus=+"45"
// console.log(typeof converTNumber )
// console.log(typeof convertPlus )
// console.log("parseInt",typeof (parseInt(string)))

const ab=75.5555555555
// console.log(parseFloat(ab.toFixed(2)))
// Math.E; // Nombre d’Euler
// Math.LN2; // Logarithme népérien de 2
// Math.LN10; // Logarithme népérien de 10
// Math.PI; // Pi
// Math.SQRT2; // Racine carrée de 2
const a=Math.pow(2,3) //exposant
const d=Math.ceil(85.698)
const e=Math.round(85.698)
const f=Math.floor(85.698)

// \n // saut de ligne line feed
// \t // tabulation
// \f // saut de page
// \' // échappement guillemet simple
// \" // échappement guillemet double
console.log(a,d,e,f)

const soleil="Je suis le 585soleil"
const z=soleil.endsWith("eil")
const y=soleil.toLowerCase().startsWith("je")
const w=soleil.includes('soleil')
const v=soleil.toLocaleUpperCase('tr')
const x=soleil.indexOf('ethberg')
const u=soleil.lastIndexOf('suis')
const s=soleil.concat('Comment')
const t=soleil.split('')
const p=soleil.slice(5)


// console.log("endsWith",z)
// console.log("startsWith",y)
// console.log("includes",w)
// console.log("toLocaleUpperCase",v)
// console.log("indexOf",x)
// console.log("lastIndexOf",u)
// console.log("concat",s)
// console.log("split",t)
// console.log("slice",p)

const evaluate=/\d{1,3}s/.test(soleil)
console.log(evaluate)

