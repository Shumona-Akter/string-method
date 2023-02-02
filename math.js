const number = Math.pow(3, 6);
console.log(number);

// Math.abs() this ignore pluse or minus or negetive values
const khushisMoney = 200;
const jannatMoney = 1000;

const differentMoney = Math.abs(khushisMoney - jannatMoney);
if(differentMoney <= 200){
    console.log("They are best friends😍")
}
else{
    console.log("They was best friend ❤️❤️")
}

const myMarks = 50;
const khusisMarks =80;
const marksDif = Math.abs(myMarks - khusisMarks);
if (marksDif <= 5){
    console.log("We are friends 🤗🤗")
}
else{
    console.log("otherwise we are also friend😘😘")
}

// Math.round() its creat a integer number of their nearest number.

const myNum = 3.87;
const myRoundNum = Math.round(myNum)
console.log(myRoundNum);

const myFriNum = 3.27;
const myFriRoundNum = Math.round(myFriNum)
console.log(myFriRoundNum);

// Math.ceil() its creat a number for nearest upper integer number
const potato = 34.0958;
const potatoceilling = Math.ceil(potato);
console.log(potatoceilling);

const alu = 20.649;
const piyaj = 30.756;
const capsikum = 25.2294;
const rorun = 43.3333;

const totalPrice =  alu + piyaj + capsikum + rorun;

const totalPersInt = totalPrice.toFixed(2);
const totalCeilling = Math.ceil(totalPersInt)
console.log(totalCeilling);
const totalFloorlling = Math.floor(totalPersInt)

console.log(totalFloorlling);
// Math.random creat a value 0 to 1
const random = Math.random();
console.log(random);

for(let i = 1; i <= 20; i++){
    const random =  Math.round(Math.random()*6);
    console.log(random)
}


for (let i = 0; i < 100; i++){
    const random = Math.round(Math.random()*100);
    console.log(random);
}