// split input based on words, leaving out spaces, commas and numbers
// for each word, find index of first available vowel
// first if: catch for vowel at loc 0 and add "way" to end
// second if: catch for vowel at next loc and push consonants prior to end and add "ay"
// nested if: catch for "qu" and move both to end, adding "ay"
// note: treat words beginning with 'y' as consonant
