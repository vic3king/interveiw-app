//build out an  object of the string first

//select UI elements
const inputEL = document.getElementById('input')
const divDisplay = document.getElementById('display')
const buttonEl = document.getElementById('submit')

//event listener for button
buttonEl.addEventListener('click', (e) => {
  let input = inputEL.value.toString()
  firstNoRepeat(input)
  e.preventDefault();
})


const firstNoRepeat = (input) => {
  //type check
  if (typeof input !== 'string') {
    throw new Error('First argument value must be a string.')
  }
  //loop over each character in the string
  for (let char of input) {
    //checks if the current character's indexOf and lastIndexOf is a match
    if (input.indexOf(char) === input.lastIndexOf(char)) {
      return divDisplay.textContent = char
    }
  }
  return divDisplay.textContent = 'String does not contain any non-repeating characters.'
}
