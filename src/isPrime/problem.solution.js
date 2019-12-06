/*
  Given a number n, determine if it's prime or not.
  Reminder:
  - a prime number is the one with only two divisors:
  itself and 1.
  - prime numbers are > 1, thus, 1 is not prime
*/

// Naive solution
/**
 * Returns
 * @param {number} n
 * @returns {boolean} True if n is prime, false otherwise
 */
export default function isPrime(n) {
  if (n < 2) return false;
  let i = n;

  while (--i > 1) {
    // if there is a divisor different than 1, it's not prime
    if (n % i === 0) return false;
  }
  return true;
}
