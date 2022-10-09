// A Fibonacci sequence is written as
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ….
// The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1.
// After that, the next term is defined as the sum of the previous two terms.
// How would you get the nth Fibonacci number?
// Example: fibonacci(12) should output 144

const fibonacci = (n) => {
  let a = 0,
    b = 1,
    c = n;

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
};

const result = fibonacci(12);
console.log("The fibonacci number for 12 is: ", result);
