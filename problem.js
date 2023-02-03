// কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার 
// একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 

function maxInHeight(numbers){
    // let tallerHeight = numbers[0];
    let tallerHeight = 0;
    for(let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        if(element > tallerHeight){
            tallerHeight = element;
            if(tallerHeight < element)
        }

    }
    return tallerHeight;

}

const heights = [520, 400, 140, 90, 240, 350];
const taller = maxInHeight(heights)
console.log(taller);