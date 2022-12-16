function factorial(a) {
  let result = 1;
  if (a < 2)
    return 1;

  for (i = 2; i <= a; i++) {
    result *= i;
  }
  return result
}