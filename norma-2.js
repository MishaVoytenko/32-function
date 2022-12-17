function isPerfectNumber(num) {
  let sum = 0
  let reminder
  for (let i = 1; i < num - 1; i++) {
    reminder = num % i;
    if (reminder === 0) {
      sum += i;
    }
  }

  if (sum === num) {
    alert(`${num}` + ' совершеное число')
  }
}


function perfectNumbers(a, b) {
  for (let i = a; i <= b; i++) {
    isPerfectNumber(i)
  }
}
perfectNumbers(1, 10)