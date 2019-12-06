import isPrime from "../isPrime/problem.solution";

/*
Count the number of prime numbers less than a non-negative number, n.
Example:
  Input: 10
  Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/

/**
 * @param {number} N
 * @return {number}
 */
export default function countPrimes(N) {
  let primes = 0;
  let n = N;
  while (--n) {
    const prime = isPrime(n);
    console.log(`prime ${n} ${prime}`);
    if (prime) primes += 1;
  }
  return primes;
}
