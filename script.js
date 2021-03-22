// These are the variables I will need to calculate area of a trapezoid.
let a = 0
let b = 0
let h = 0

// This script will connect my button to JavaScript.
document.getElementById('button1')addEventListener('click', calculate1)

// This script describes the functions listed above.
function calculate1 () {
  a = document.getElementById('text1').value
  b = document.getElementById('text2').value
  h = document.getElementById('text3').value
  a = parseInt(a)
  b = parseInt(b)
  h = parseInt(h)
  alert(h((a + b) / 2))
}
