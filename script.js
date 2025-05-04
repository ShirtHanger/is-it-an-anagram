let userID
let tokenID
let testWord = 'Noodle'

/* Dictionary and Anagram API Drills */

/* Listed in order

https://github.com/meetDeveloper/freeDictionaryAPI?tab=readme-ov-file
https://developer.oxforddictionaries.com/documentation/making-requests-to-the-api (https://developer.oxforddictionaries.com/documentation)
https://www.api-ninjas.com/api/dictionary (https://www.api-ninjas.com/profile)
https://dictionaryapi.com/products/index (https://dictionaryapi.com/products/json)

http://www.anagramica.com/api


 */

const apiNinjaKeyScrambled = `` // Will insert later or figure out how to env.
const apiNinjaKey = atob(apiNinjaKeyScrambled)

let freeDictionaryAPIDrill = `https://api.dictionaryapi.dev/api/v2/entries/en/`
let oxfordDrill = `https://od-api-sandbox.oxforddictionaries.com/api/v2/`
let apiNinjaDrill = `https://www.api-ninjas.com/api/`
let merriumWebsterDrill = ``
let anagramicaDrill = `http://www.anagramica.com/all/`

/* Stands 4 API drills, consider using these guys exclusively
https://www.anagrams.net/ana_api.php
 */

let stands4AnagramDrill = `https://www.stands4.com/services/v2/ana.php?uid=${userID}&tokenid=${tokenID}&term=${testWord}&format=json`
let stands4DefinitionsDrill = `https://www.stands4.com/services/v2/defs.php?uid=${userID}&tokenid=${tokenID}&word=${testWord}&format=json`
let stands4RhymeDrill = `https://www.stands4.com/services/v2/rhymes.php?uid=${userID}&tokenid=${tokenID}&term=${testWord}&format=json`
let stands4LiteratureDrill = `https://www.stands4.com/services/v2/literature.php?uid=${userID}&tokenid=${tokenID}&term=${testWord}&format=json`



/* HTML Elements */

const displayIntroMessage = document.getElementById("intro-message")
const checkButton = document.getElementById("check-button")
const wordOneInput = document.getElementById("word-1")
const wordTwoInput = document.getElementById("word-2")
const resultDisplay = document.getElementById("result")
const displayWordOne = document.getElementById("display-word-1")
const displayWordTwo = document.getElementById("display-word-2")

/* Lists for unique feedback */

yesAnAnagram = [
    "Yes, this is an", "Heck yeah!", "yep, it's an", 
    "sure it's an", "indeed", "We found another"
]

notAnAnagram = [
    "No, this isn't an", "Nah this ain't an", "Nope, not an", "Not really an", "Not at all an", 
    "Never could be considered an", "Absolutely not an", "These are definitely not an", "In what universe is this"
]

introMessageList = [
    "Electric boogaloo!", "The Empire Strikes Back!", "Word = Drow", "Anagram Z", 
    "Anagram Z Kai", "Anagram Super", "Anagram Shippuden", "Reign of The Anagrams", 
    "Age of the Anagrams", "Part 2", "Remastered", "Go Beyond! Plus Ultra!", "Brotherhood",
    'Mighty Morphin Word Force', "Roll out!", "Endgame", "Spider-Man 2"
]


displayIntroMessage.textContent = introMessageList[randNum(introMessageList.length)]

/* AXIOS test calls */

res = getWordFromDictionary(freeDictionaryAPIDrill, testWord)
console.log(res)

/* Event Listeners */

checkButton.addEventListener("click", function () {

    const wordOne = wordOneInput.value.trim()
    const wordTwo = wordTwoInput.value.trim()

    displayWordOne.textContent = wordOne
    displayWordTwo.textContent = wordTwo

    wordOneSorted = splitAndSort(wordOne)
    wordTwoSorted = splitAndSort(wordTwo)
    isAnagram = checkAnagram(wordOneSorted, wordTwoSorted)

    resultDisplay.textContent = isAnagram ? `${yesAnAnagram[randNum(yesAnAnagram.length)]} anagram.` : `${notAnAnagram[randNum(notAnAnagram.length)]} anagram.`
})

/* Functions */

function splitAndSort(word) {
    wordSorted = word.split('').sort().join('')
    return wordSorted
}

function checkAnagram(wordOne, wordTwo) {
    const isAnagram = wordOne === wordTwo
    return isAnagram
}

function randNum(maxNum) {
    /* Returns a random number between 0 and the length of given array */
    /* Used for randomizing responses for website */

    randIndex = Math.floor(Math.random() * maxNum) 
    return randIndex
}

/* AXIOS FUNCTIONS */

async function getWordFromDictionary(drill, word) {
    let response = await axios.get(`${drill}${word}`)
    console.log(response)
    return response
}

async function getWordMerriam(word) {
    let response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    console.log(response)
    return response
}