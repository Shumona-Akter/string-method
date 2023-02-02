// string taka o paki tumi uire uira aso. uiRa Uira aisa Tumi amar dale bose. O taka o pakhi

const lyrics = "taka o pakhi tumi uIRA uira aso. uiRa Uira aisa Tumi amar dale bose. O taka o pakhi";
console.log(lyrics);

// const doseExixt = lyrics.includes("pakhi");

// var declear kore khuja
const search = "pakhi";
// const doseExixt = lyrics.includes(search);
const lyricsToLowCase = lyrics.toLocaleLowerCase();
const searching = "uira";
const searchingToLowCase = search.toLocaleLowerCase();
const doseExixt = lyricsToLowCase.includes(searchingToLowCase);

// console.log(doseExixt);

// indexOf 
if(lyrics.indexOf("taka") !== -1){
    console.log("exixt inside the string 😱");
}
else{
    console.log("it can not find")
}
const index = "uiRA";
const indexLow = index.toLocaleLowerCase();


if (lyricsToLowCase.indexOf(indexLow) !== -1){
    console.log("taka ase 😎😎")
}
else{
    console.log("nei nei nei ami nei");
}

// startWith
if(lyrics.startsWith("taka")){
    console.log("😎😎")
}
else{
    console.log("😢😢")
}
// endWith
if(lyrics.endsWith("taka")){
    console.log("😎😎")
}
else{
    console.log("😢😢")
}

const img = "media.png";
if(img.endsWith("png")){
    console.log("right")
}
else{
    console.log("wromg")
}