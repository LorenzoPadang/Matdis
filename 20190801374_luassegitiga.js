var input_dari_keyboard = require("readline-sync");

var a = parseInt(input_dari_keyboard.question("Masukkan Nilai alas : "));
var t = parseInt(input_dari_keyboard.question("Masukkan Nilai tinggi : "));

var luassegitiga = (a*t/2);

console.log("Luas segitiga : " +luassegitiga);

