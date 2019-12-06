import solution from "./problem.solution";

const TEST_CASES = [
  {
    input: [2, 7, 11, 15],
    target: 9,
    solution: [0, 1]
  },
  {
    input: [1, 2, 3, 4, 5, 6],
    target: 10,
    solution: [3, 5]
  }
];

// describe("Two Sum", () => {
//   TEST_CASES.forEach(testCase =>
//     test(`${testCase.input} == ${testCase.solution}`, () =>
//       expect(solution(testCase.input, testCase.target).sort()).toEqual(
//         testCase.solution
//       ))
//   );
// });
