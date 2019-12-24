console.log("Welcome");
var inputkeyboard = require("readline-sync");

var usia = parseInt(inputkeyboard.question("Masukkan Usia : "));

if ((usia >=3) && (usia <=4)){
    console.log("Tingkat PG");
} else 

if ((usia >=5)&&(usia <=6)){
    console.log("Tingkat TK");
} else 

if ((usia >= 7)&&(usia<=12)){
    console.log("Tingkat SD");
} else 

if ((usia >=13)&&(usia<=15)){                        
    console.log("Tingkat SMP");
} else 

if ((usia>=16)&&(usia<=18)){
    console.log("Tingkat SMA");
}
console.log("Thank you");