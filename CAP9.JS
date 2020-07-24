console.log( /cat/.test("concatenate") );

console.log( /\bconcatenat\b/.test("concatenate") );

console.log("Borobucur".replace(/[o-u]/g, "a"));

var stock = "no lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) // only one left, remove the 's'
	unit = unit.slice(0, unit.length - 1);
  else if (amount == 0)
	amount = "no";
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

var input = "A text with 3 numbers in it... 42 and 88.";
var re = /\b(\d+)\b/g;
var match;
while (match = re.exec(input))
  console.log("Found", match[1], "at", match.index);