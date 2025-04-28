let number = 1;
while (number <= 10) {
  console.log(number);
  number += 1;
}
for (let i = 2; i <= 20; i += 1) {
  if (i % 2 !== 0) {
    continue;
  } else {
    console.log(i);
  }
}
for (let seven = 1; seven <= 10; seven += 1) {
  console.log(`7 x ${seven} = ${7 * seven}`);
}
let n = 7;
for (let q = 1; q < 100; q += 1) {
  if (q >= n) {
    break;
  } else {
    console.log(q);
  }
}
let w = 1;
while (w <= 20) {
  if (w % 3 === 0) {
    w++;
    continue;
  }
  console.log(i);
  w++;
}
