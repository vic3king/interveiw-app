let string = 'hello world hi hey"'
let arr = string.split('')
const chars = {}
let count = 0
for (let i = 0; i < arr.length; i++) {
  let currentLetter = arr[i]
  if (!chars.hasOwnProperty(currentLetter)) {
    chars[currentLetter] = 1
    count = 1
  } else {
    count += 1
    chars[currentLetter] = count
  }
}

for (let i = 0; i < arr.length; i++) {
  let x = arr[i]
  if (chars[x] == 1) {
    console.log(x)
    break
  }
}

console.log(chars)