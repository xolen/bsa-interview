import solution from "./problem.solution";

const TEST_CASES = [
  [1, false],
  [2, true],
  [3, true],
  [4, false],
  [19, true],
  [87, false],
  [97, true]
];

describe("Is prime", () => {
  TEST_CASES.forEach(([input, expected]) =>
    test(`${input}`, () => expect(solution(input)).toEqual(expected))
  );
});
