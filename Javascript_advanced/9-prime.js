// Prime numbers & timing execution

function countPrimeNumbers() {
  // function to count prime numbers from 2 to 100
  let count = 0;
  let prime;

  for (let i = 2; i <= 100; i++) {
    prime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }

    if (prime) {
      count += 1;
    }
  }

  return count;
}

console.log(
  "The number of prime numbers from 2 to 100 is : ",
  countPrimeNumbers()
);

const t0 = performance.now();
countPrimeNumbers();

const t1 = performance.now();

console.log(
  `Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`
);
