var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
function describeColor(color) {
    return "What a beautiful shade of ".concat(color, ".");
}
console.log(describeColor(Color.Red));
console.log(describeColor(Color.Green));
console.log(describeColor(Color.Blue));
