enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

function describeColor(color: Color): string {
  return `What a beautiful shade of ${color}.`;
}

console.log(describeColor(Color.Red));
console.log(describeColor(Color.Green));
console.log(describeColor(Color.Blue));
