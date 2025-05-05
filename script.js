
import * as tokens from './constant.js'

import { 
    stands4BaseLink
 } from './links.js'

import * as messages from './messages.js'

/* HTML Elements */

const displayIntroMessage = document.getElementById("intro-message")
const checkButton = document.getElementById("check-button")
const wordOneInput = document.getElementById("word-1")
const wordTwoInput = document.getElementById("word-2")
const resultDisplay = document.getElementById("result")
const displayWordOne = document.getElementById("display-word-1")
const displayWordTwo = document.getElementById("display-word-2")

const axiosInput = document.getElementById("axios-input")
const axiosButton = document.getElementById("axios-button")
const axiosCategory = document.getElementById("axios-category")




displayIntroMessage.textContent = messages.intro[randNum(messages.intro.length)]

/* AXIOS test calls */

axiosButton.addEventListener("click", async () => {

    let debugWord = axiosInput.value.trim()
    let debugCatagory = axiosCategory.value.trim()

    let testRes = await getWordStands4(debugCatagory, tokens.userID, tokens.tokenID, debugWord)
    console.log(testRes)

})



/* Event Listeners */

checkButton.addEventListener("click", function () {

    const wordOne = wordOneInput.value.trim()
    const wordTwo = wordTwoInput.value.trim()

    displayWordOne.textContent = wordOne
    displayWordTwo.textContent = wordTwo

    wordOneSorted = splitAndSort(wordOne)
    wordTwoSorted = splitAndSort(wordTwo)
    isAnagram = checkAnagram(wordOneSorted, wordTwoSorted)

    resultDisplay.textContent = isAnagram ? `${positive[randNum(positive.length)]} anagram.` : `${messages.anagram.negative[randNum(messages.anagram.negative.length)]} anagram.`
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

    let randIndex = Math.floor(Math.random() * maxNum) 
    return randIndex
}

/* AXIOS FUNCTIONS */

async function getWordFromDictionary(drill, word) {
    let response = await axios.get(`${drill}${word}`)
    console.log(response)
    return response
}

async function getWordStands4(catagory, userID, tokenID, word) {
    let link = stands4BaseLink + catagory.toLowerCase() + '.php'
    let response = await axios.get(`${link}?uid=${userID}&tokenid=${tokenID}&term=${word.toLowerCase()}&format=json`)
    return response.data
}

async function getWordMerriam(word) {
    let response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    console.log(response)
    return response
}