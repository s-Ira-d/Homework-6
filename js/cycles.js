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
