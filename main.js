const password = document.querySelector(".password")
const copybtn = document.querySelector(".copy")
const range = document.querySelector(".range")
const rangeunit = document.querySelector(".rangeunit")
const number = document.querySelector(".number")
const character = document.querySelector(".character")

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const num = "123456789"
const char = "!@#$%&*"

// length
range.addEventListener("input", (e) => {
  rangeunit.textContent = `Length: ${e.target.value}`
  randompassword()
})

number.addEventListener("input", (e) => {
  randompassword()
})

character.addEventListener("input", (e) => {
  randompassword()
})

// random password
function randompassword() {
  let result = ""
  const length = parseInt(range.value)

  for (let i = 0; i < length; i++) {

    // randomletters
    randomletter = Math.floor(Math.random() * letters.length)
    randomletters = letters[randomletter]

    let addcharacter = randomletters

    // randomnumbers
    if (number.checked) {
      randomnumber = Math.floor(Math.random() * num.length)
      randomnumbers = num[randomnumber]
      if (Math.random < 0.3 || Math.random > 0.6) {
        addcharacter = randomnumbers
      }
    }

    // randomcharacters
    if (character.checked) {
      randomcharacter = Math.floor(Math.random() * char.length)
      randomcharacters = char[randomcharacter]
      if (Math.random() < 0.6) {
        addcharacter = randomcharacters
      }
    }
    result += addcharacter
  }
  password.value = result
}
randompassword()

copybtn.addEventListener("click", () => {

  password.select();
  password.setSelectionRange(0, 50)

  navigator.clipboard.writeText(password.value)
    .then(() => {
      alert("Password copied ✅");
    })
    .catch(err => {
      console.error("Failed to copy: ", err);
    });
})