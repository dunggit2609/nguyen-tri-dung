// testing

const { sum_to_n_a, sum_to_n_b, sum_to_n_c } = require("./index.js");
const testCases = [
  {
    n: 0,
    expect: 0,
  },
  {
    n: 1,
    expect: 1,
  },
  {
    n: 5,
    expect: 15,
  },
  {
    n: 10,
    expect: 55,
  },
  {
    n: 100,
    expect: 5050,
  },
  {
    n: 1000,
    expect: 500500,
  },
  {
    n: -1,
    expect: 0,
  },
];

const test = () => {
  console.log("--------------------------------------------");
  console.log("Running tests sum from 1 to n");
  console.log(">>>>>>>>>>");
  testCases.forEach((testCase) => {
    const result = [
      sum_to_n_a(testCase.n),
      sum_to_n_b(testCase.n),
      sum_to_n_c(testCase.n),
    ];

    if (result.some((r) => r !== testCase.expect)) {
      console.log(
        `Test failed n=${testCase.n} - expected: ${testCase.expect} - found: ${result}`
      );
    } else {
      console.log("Test passed");
    }
  });
  console.log(">>>>>>>>>>");
  console.log("end");
  console.log("--------------------------------------------");
};

test();
