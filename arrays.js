const array=[22,'2023-12-05',"ethberg"]

const arr=['pondu','bitoto']

for(let i=0;i < array.length;i++){
    console.log(i)
}
//Recuperer le dernier element
console.log(array.at(-1),array[array.length-1])

const [,b]=array
const [,,c]=array
const [,...rest]=array
console.log(rest)

//add item in arrays
array.unshift(arr)
array.push('Freddy')
array.splice(2,0,'colette')


//delete item in arrays

array.pop()
array.shift()//delete in end
array.splice(2,2)
console.log(array)

const index=array.indexOf('colette')
const list=[
    {
        id:1,
        name:'ethberg',
        sexe:'M',
        fonction:'Etudiant',
        age:20
    },
    {
        id:2,
        name:'Alice',
        sexe:'F',
        fonction:'Avocate',
        age:18
    },
    {
        id:3,
        name:'Noel',
        sexe:'M',
        fonction:'Etudiant',
        age:10
    },
]

const find=list.findIndex(item=>item.id === 2)
const findlastindex=list.findLastIndex(item=>item.sexe==='M')
const elem=list.find(item=>item.id===2)
const findlast=list.findLast(item=>item.sexe==='M')
// console.log(array.includes("colette"))
console.log(findlast)
const copyArray=[...list]
// copyArray[1].name="Noella"

//Best and deep copy
const copy=list.with(1,{name:"noella"})
// console.log(copy,list)
const copyJso=JSON.parse(JSON.stringify(list))
copyJso.push('candide')
console.log(copy,list,copyJso)

const concat=[...copy,...copyJso]
const concater=copy.concat(copyJso)
console.log(concater)


//compare and trie

const fruits=['BANANE','ANANAS','Pomme','cérise','citron']
const nbr=[2,8,10,6,4,3,2,1]

console.log(fruits.sort((a,b)=>a.localeCompare(b)))//desc
console.log(fruits.sort((a,b)=>a.localeCompare(b) * -1)) //or console.log(fruits.sort((a,b)=>a-b))  asc

//trie sur number
console.log(nbr.sort((a,b)=>a-b))//desc
console.log(nbr.sort((a,b)=>b-a))//asc
console.log(list.sort((a,b)=>a.name.localeCompare(b.name) ))

//use toSorterd for get new array

const toSorterd=nbr.sort((a,b)=>a-b)
console.log(toSorterd)
console.log(nbr.reverse())

//Iterer sur les tableaux

for(const fruit of fruits){
    console.log(fruit)
}

fruits.forEach((item,key) => {
    console.log(`${key}====>${item}`)
});

//Map et filter

const map=fruits.map(value=>value.toLowerCase())
console.log(map)
const mapped=list.map((value)=>{
    return value.name
})
console.log(mapped)
const filter=list.filter(item=>item.age >= 15).map((item)=>{
    return{
        ...item,
        name:item.name.toUpperCase()
    }
})
console.log(filter)

import {login, logout} from './modules/authentifications'

login()
logout()



