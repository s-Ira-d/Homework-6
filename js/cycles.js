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
