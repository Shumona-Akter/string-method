// function maxInHeight(numbers){
//     let tallerHeight = [0];
//     for(let i = 0; i < numbers.length; i++){
//         let index = i;
//         let element = numbers[index];
//         let tall = Math.max(element);
//         tallerHeight = tall

//     }
//     return tallerHeight;

// }
// const heights = [120, 300, 140, 90, 240, 350];
// const taller = maxInHeight(heights)
// console.log(taller);

function maxInHeight(numbers){
    // let tallerHeight = numbers[0];
    let tallerHeight = [0];
    for(let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        if(element > tallerHeight){
            tallerHeight = element
        }

    }
    return tallerHeight;

}
const heights = [520, 400, 140, 90, 240, 350];
const taller = maxInHeight(heights)
console.log(taller);