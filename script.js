function outer() {
  let x = 1;
  function inner() {
    x = x + 1;
    console.log(x);
  }

  return inner;
}

const incrementX = outer();
incrementX();
incrementX();
