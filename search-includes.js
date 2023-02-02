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

console.log(doseExixt)