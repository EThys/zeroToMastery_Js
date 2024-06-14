//expression de fonction
const func=()=>{
    console.log('ici et maitenant')
}

//declaration de fonction
function ici(){
    console.log('nowww')
}

//parametre par defaut
const fonct=(param='default')=>{
    console.log('nowww')
}

const add=(operator,...numbers)=>{
    let total=0
    switch (operator) {
        case '+':
            for(let i=0;i<numbers.length;i++){
                total+=numbers[i]
            }         
            break;
        case '-':
            for(let i=0;i<numbers.length;i++){
                total-=numbers[i]
            }
            break; 
        default:
            break;
    }
    return total
    
}
// const total=add('+',10,2)
// console.log(total)


//chaine de portée
function a(){
    console.log(foo)
}
function b(){
    let foo=1
    a();
}

let foo=2
b()

function powerBy(power){
    return function(number){
        return number * power
    }
}
