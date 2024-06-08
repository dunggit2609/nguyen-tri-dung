// with this function
// I decide to use the simplest way to calculate sum from 1 to n
// I will loop from i = 1 to i = n and calculate sum of i and n at each loop
// Final, I return the sum variable
const sum_to_n_a = (n) => {
  if (n < 1) {
    return 0;
  }
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
};

// In thí function, I will iterate the numbers from 1 to n
// In each while loop, I will add 2 number of the start and the end
// after each loop, I will increase 1 for the position of start  
// and decrease 1 for the position of end
// The time complexity of this function is O(n / 2)
const sum_to_n_b = (n) => {
  if (n < 1) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  let start = 1;
  let end = n;
  let sum = 0;

  while (start <= end) {
    if (start === end) {
      sum += start;
    } else {
      sum = sum + start + end;
    }
    start += 1;
    end -= 1;
  }

  return sum;
};

//The sum_to_n_c function calculates the sum of all natural numbers from 1 to n 
//using recursion. It works by calling itself with a smaller value of n 
// The function calls itself with n - 1 as the argument. 
//This creates a chain of recursive calls until the base case is reached.
// until it reaches the base case of n being 1.
// The time complexity of this function is O(n)
const sum_to_n_c = (n) => {
  if (n < 1) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return (n += sum_to_n_c(n - 1));
};

module.exports = { sum_to_n_a, sum_to_n_b, sum_to_n_c };
