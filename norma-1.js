function perfectNumber(num) {
  let sum = 0
  let reminder
  for (let i = 1; i < num - 1; i++) {
    reminder = num % i;
    if (reminder === 0) {
      sum += i;
    }
  }

  if (sum === num) {
    alert(num + ' совершеное число')
  }
  else {
    alert('это не совершеное число')
  }
}

perfectNumber(6)