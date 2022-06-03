// Code your solutions in this file

const names = ["Guadalupe","Ollie","Aki"];
const thankYou=[]
function writeCards(names,event){
    for (let person = 0; person < names.length; person++) {
        thankYou.push(`Thank you, ${names[person]},  for the wonderful ${event} gift!`);
        
    }
    return thankYou;


}

function countDown(num){

    while (num>-1) {
        console.log(num);
        num=num-1;
        
    }
}
writeCards(names,"surprise");
console.log(thankYou);
countDown(4);