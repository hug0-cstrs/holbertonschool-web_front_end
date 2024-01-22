const globalVariable = "Welcome";

function outer() {
  console.log(`${globalVariable}`);
  const course = "Holberton";

  function inner() {
    console.log(`${globalVariable} ${course}`);
    const exclamation = "!";

    function inception() {
      console.log(`${globalVariable} ${course}${exclamation}`);
    }
    inception();
  }
  inner();
}
outer();
