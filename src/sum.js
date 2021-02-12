export function sum(a, b) {
  return a + b;
}

export function slowSum(a, b) {
  let foo = 1;
  for (let i = 0; i < 1000000000; i++) {
    foo++;
  }
  return sum(a, b) + foo - foo;
}
