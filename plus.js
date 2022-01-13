export function plus(...values) {
  return values.reduce(plus2)
}

function plus2(a, b) {
  return a + b
}
