console.log('------------- # 4');

function getSum(a, b) {
  return a + b;
}

function getDiff(a, b) {
  return a - b;
}

function getMulti(a, b) {
  return a * b;
}

function getDiv(a, b) {
  return a / b;
}

console.log(getSum(10, 5));
console.log(getDiff(15, 11));
console.log(getMulti(6, 8));
console.log(getDiv(105, 15));

// =====================================================

console.log('------------- # 5');

function getNumbers(num) {
  if (Number.isInteger(num) && num >= 1) {
    for (let i = 1; i <= num; i++) {
      console.log(i);
    }
  } else {
    console.log('Вводить нужно только целые положительные числа');
  }
}

getNumbers(5);
getNumbers(-5);

// =====================================================

console.log('------------- # 6');

// =====================================================

console.log('------------- # 7');

// =====================================================

console.log('------------- # 8');

// =====================================================

console.log('------------- # 9');
