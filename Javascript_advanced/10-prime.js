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

const t0 = performance.now();
for (let x = 0; x < 100; x++) {
  countPrimeNumbers();
}

const t1 = performance.now();

console.log(
  `Execution time of calculating prime numbers 100 times was ${
    t1 - t0
  } milliseconds.`
);
