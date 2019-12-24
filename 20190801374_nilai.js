console.log("WELCOME");

var bacakeyboard = require("readline-sync");

var Nilai = parseInt(bacakeyboard.question("Masukkan Nilai : "));

if (Nilai>85){
    console.log("Your Grade A");
} else 

if ((Nilai>70) && (Nilai<86)){
    console.log("Your Grade B");
} else 

if ((Nilai>60) && (Nilai<71)){
    console.log("Your Grade C");
} else 

if ((Nilai>50) && (Nilai<61)){
    console.log("Your Grade D");
} else 

if ((Nilai<51)){
    console.log("Your Grade E");
}
    console.log("Thank You");