/**
 * Computes the GCD of two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number} Greatest Common Divisor of a and b
 */
function gcd(a, b) {
  if (a === b) return a;

  if (a > b) return gcd(a - b, b);
  else return gcd(a, b - a);
}

// Common solution to expect:
function gcd2(a, b) {
  let gcd = 1;
  for (let i = 1; i < Math.max(a, b); i++) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }
  return gcd;
}

export default gcd;
