const checkButton = document.getElementById("check-button")
const wordOneInput = document.getElementById("word-1")
const wordTwoInput = document.getElementById("word-2")
const resultDisplay = document.getElementById("result")
const displayWordOne = document.getElementById("display-word-1")
const displayWordTwo = document.getElementById("display-word-2")


checkButton.addEventListener("click", function () {
    const wordOne = wordOneInput.value.trim()
    const wordTwo = wordTwoInput.value.trim()

    displayWordOne.textContent = wordOne
    displayWordTwo.textContent = wordTwo

    let wordOneConfirmation = wordOne.split('').sort().join('')
    let wordTwoConfirmation = wordTwo.split('').sort().join('')

    const isAnagram = wordOneConfirmation === wordTwoConfirmation
    resultDisplay.textContent = isAnagram ? "Yes, they're anagrams." : "Nope, not anagrams."
})