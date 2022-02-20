// All the below code is to print the keyboard on screen
const keyboardContainer = document.querySelector(".qwerty__keyboard")
const rowContainers = [...document.querySelectorAll(".row")]
const keys = []

GRID.forEach(row => {
  const oneRow = []
  row.forEach(cell => {
    let key = document.createElement("button")
    key.textContent = cell
    key.className = "key"
    oneRow.push(key)
  })
  keys.push(oneRow)
})

let i = 0
rowContainers.forEach(row => {
  row.append(...keys[i])
  i++
})



// From here to below, is to make a validation that the input is correct
const input = document.querySelector(".qwerty__input > input")
const trigger = document.querySelector(".qwerty__input > button")
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".modal__button")

input.addEventListener("input", (e) => {
  trigger.disabled = e.target.value ? false : true
})
trigger.addEventListener("click", () => {
  const word = input.value.trim().toUpperCase()
  const validation = regexValidation.exec(word)
  if(validation){
    modal.style.display = "grid"
  }else{
    // Here is when the real process starts
    printWord(word);
    reset()
  }
})
closeModal.addEventListener("click", () => {
  reset()
  modal.style.display = "none"
})

function reset(){
  input.value = ""
  trigger.disabled = true
}