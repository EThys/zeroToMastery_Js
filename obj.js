
const name="noel"
const person={
    name:"Ethberg",
    sexe:"M",
    aliments:['pondu','haricot'],
    habits:{
        pantalon:['jaune','vert'],
        chemise:'noir'
    },
    getSelect:()=>{
        console.log('hello')
    }
}
console.log(person.aliments[0])
console.log(person.habits.pantalon[1])

const {habits,name:namePerson}=person
console.log(habits,namePerson,name)

//Tester l'existence d'une proprieté
//person.name or "name" in person

if("name" in person){
    console.log('ok')
}
else{
    console.log('ko')
}

//add and delete props in object
person.nationality='Congolais'
const {nationality}=person
//console.log(nationality)
delete person.name
person.sexe = null
//console.log(person)

const {...copyPerson}=person
copyPerson.niveau='Diplomé'
copyPerson.etatCivil='Marié'
//console.log(person,copyPerson)

const newPerson={...copyPerson,...person}//fusion de deux objets
console.log(newPerson)

//Iterer sur des objets

for(const prop in person){
    // console.log(prop)
    // console.log(person[prop])
}

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

//Le json

const json=JSON.stringify(person)
//console.log(json)
const parse=JSON.parse(json)
// console.log(parse)

//chainage optionnel

console.log(person?.city)



