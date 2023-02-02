// const jim = 75; 
// const dela = 84;

// const maxNumber = Math.max(jim, dela);
// console.log(maxNumber)

// if(maxNumber == jim){
//     console.log("jim get the cake");
// }
// else{
//     // console.log("dela get the cakes");
// }

function getCakes(jim, dela){
    const maxNum = Math.max(jim, dela);
    if(maxNum === jim){
        console.log("jim get this testy cakes");
    }
    else{
        console.log("dela get this testy cakes");

    }
}


const jimNum = getCakes(75); 
const delaNum = getCakes(84);
