var input_keyboard = require("readline-sync");

var pi = 3.14;
var jari_jari = parseInt(input_keyboard.question("Masukkan nilai r : "));

var keliling = (2*pi*jari_jari);

console.log("Keliling Lingkaran : " +keliling);