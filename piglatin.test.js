//incomplete


// split input based on words, leaving out spaces, commas and numbers
// for each word, find index of first available vowel
// first if: catch for vowel at loc 0 and add "way" to end
// second if: catch for vowel at next loc and push consonants prior to end and add "ay"
// nested if: catch for "qu" and move both to end, adding "ay"
// note: treat words beginning with 'y' as consonant
var input = "test input"
var vowel = ["a","e","i","o","u"]
var test = "eye apple owl towel"

const pigLatin = (str) => {
    let arr = str.split(" ")
    let loc = []
    let holder = arr.map(value => {
        loc.push(value.indexOf(vowel[arr.map.key]))
        return value
    })
        console.log(holder);
        console.log(loc);
    let temp = holder.map(string => {
        loc.map(element => {
            if(element === 0){
                return string + "way"
            }else if(element > 0){
                let pusher = string.slice(0,loc)
                return string.slice(loc,-1) + pusher + "ay"
            }else{
                return string
            }
        })
    })
    return temp
}

console.log(pigLatin(test));
