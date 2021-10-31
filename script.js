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

function getIncreaseNums(num) {
  if (Number.isInteger(num) && num >= 1) {
    for (let i = 1; i <= num; i++) {
      console.log(i);
    }
  } else {
    console.log('Вводить нужно только целые положительные числа');
  }
}

getIncreaseNums(5);
getIncreaseNums(-5);

// =====================================================

console.log('------------- # 6');

function getDecreaseNums(num) {
  if (Number.isInteger(num) && num >= 1) {
    for (let i = num; i >= 1; i--) {
      console.log(i);
    }
  } else {
    console.log('Вводить нужно только целые положительные числа');
  }
}

getDecreaseNums(5);
getDecreaseNums(-5);

// =====================================================

console.log('------------- # 7');

function getPow(x, n) {
  return x ** n;
}

console.log(getPow(2, 5));

// =====================================================

console.log('------------- # 8');

function isBigger(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return a > b;
  } else {
    return 'Вводить нужно только числа';
  }
}

console.log(isBigger(5, 'abc'));
console.log(isBigger(5, 5));
console.log(isBigger(5, -1));

// =====================================================

console.log('------------- # 9');

function isSmaller(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return a < b;
  } else {
    return 'Вводить нужно только числа';
  }
}

console.log(isSmaller(5, 'abc'));
console.log(isSmaller(5, 5));
console.log(isSmaller(-5, -1));
console.log(isSmaller(5, -1));
