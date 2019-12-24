console.log("Welcome");

var inputkeyboard = require("readline-sync");

var usia = parseInt(inputkeyboard.question("Masukkan usia : "));
switch (true){
    case (usia >=3) && (usia <=4):
        console.log("Tingkat PG");
        break;
    case (usia >=5) && (usia <=6):
        console.log("Tingkat TK");
        break;
    case (usia >=7) && (usia <=12):
        console.log("Tingkat SD");
        break;
    case (usia >=13) && (usia <=15):
        console.log("Tingkat SMP");
        break;
    case (usia >=16) && (usia <=18):
        console.log("Tingkat SMA");
        break;
}
    console.log("Thank You");