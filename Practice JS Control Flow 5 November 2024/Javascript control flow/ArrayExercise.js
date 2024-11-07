const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

/*Loop melalui array people
for (let i = 0; i < people.length; i++) {
  // Cetak nama dalam huruf kapital
  console.log(people[i].toUpperCase());
}*/

let text = "";
for (let x of people) {
  text += x + "<br>";
}