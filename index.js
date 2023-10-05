
// sum of first n natural numbers
function summer(n) {
  if (n === 0) {
    return n;
  } else {
    outer = summer(n - 1);
    output = summer(n - 1) + n;
    return output;

  }
}

// fibonacci - TC: O(2^n)
function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    let fibber = fib(n - 2) + fib(n - 1);
    return fibber;
  }
}

// fibonnaci using Memoization - TC: O(n)
function fib(n) {
  var F = new Array(n);
  F.fill(-1);
  if (n <= 1) {
    F[n] = n;
    return n;
  } else {
    if (F[n - 2] === -1) {
      F[n - 2] = fib(n - 2);
    }
    if (F[n - 1] === -1) {
      F[n - 1] = fib(n - 1);
    }
    return F[n - 2] + F[n - 1];
  }

}
// The time complexity of the Fibonacci function you've provided is O(n). This is because you are using memoization to store and reuse previously computed Fibonacci numbers.

// Here's a breakdown of the time complexity:

// 1. When you call `fib(n)` for the first time, it will calculate `fib(n-2)` and `fib(n-1)` if they haven't been calculated before and store their results in the `F` array. These calculations take constant time for each value of `n`.

// 2. For any subsequent calls to `fib(k)` where `k` is less than or equal to `n`, the function will simply retrieve the precomputed values from the `F` array. This retrieval operation also takes constant time.

// Since you are calculating and storing each Fibonacci number once and then reusing the stored values for subsequent calculations, the time complexity is linear with respect to `n`, making it O(n). The memoization technique greatly reduces the number of recursive calls and redundant calculations, improving the efficiency of the Fibonacci function.