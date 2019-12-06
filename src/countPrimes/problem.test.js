import solution from "./problem.solution";

const TEST_CASES = [[1, 0], [2, 0], [3, 1], [10, 4]];

describe("Count Primes", () => {
  TEST_CASES.forEach(([input, expected]) =>
    test(`${input}`, () => expect(solution(input)).toEqual(expected))
  );
});
