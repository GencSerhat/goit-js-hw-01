function makeTransaction(quantity, pricePerDroid) {
  let toplam = quantity * pricePerDroid;

  let mesaj = `You ordered   ${quantity}   droids worth   ${toplam}   droids worth `;

  return mesaj;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
