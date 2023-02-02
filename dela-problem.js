// frist time input jim 84 , dela 75 . second time jim 69  and dela 97. who get the delicious cakes
// function getCakes(jim, dela){
//     const maxNum = Math.max(jim, dela);
//     if(maxNum === jim){
//         return ("Jim get the delicious cake🤗")
//     }
//     return("Dela get the delicious cake😎")
// }

// console.log(getCakes(84, 75));
// console.log(getCakes(69, 97));

function getCakes(jim, dela, chinku){
    const maxNum = Math.max(jim, dela, chinku);
    if(maxNum === jim){
        return ("Jim get the delicious cake🤗")
    }
    else if(maxNum === dela){
        return ("Dela get the delicious cake🤗")
    }
    return("chinku get the delicious cake😎")
}
console.log(getCakes(84, 75, 95));
console.log(getCakes(66, 95, 85));
console.log(getCakes(82, 75, 50));

console.log("=================================")
function getCakes(jim, dela, chinku){
    const minNum = Math.min(jim, dela, chinku);
    if(minNum === jim){
        return ("Jim  don't get the delicious cake🤗")
    }
    else if(minNum === dela){
        return ("Dela don't get the delicious cake🤗")
    }
    return("chinku don't get the delicious cake😎")
}
console.log(getCakes(84, 75, 95));
console.log(getCakes(66, 95, 85));
console.log(getCakes(82, 75, 50));


