//Soal
console.log("Buatlah program untuk mencari n! (n Faktorial) dengan menggunakan looping for"); //di samping ini adalah soal uts matdis no 3 :)

//di bawah ini adalah penyelesaian soal no 3 dengan menggunakan node.js

//Jawab
console.log("Welcome");

var inputkeyboard = require('readline-sync'); //pertama kita install dulu module readline-sync di terminal (npm install readline-sync)

var a = 1 //kita masukan var a = 1 sebagai batasan looping

var n = parseInt(inputkeyboard.question("Masukan nilai n : ")); //kita masukan var n menggunakan inputan dari keyboard setelah menginstall readline-sync, jangan lupa menggunakan parseInt agar inputan dibaca sebagai nilai

for(var b=1; b<=n; b++){  //kita masukan rumus looping menggunakan for dengan menggunakan variabel b sebagai awal looping dan dibatasi sampai variabel a
    a = b*a;  //kita masukan rumusnya seperti di samping
}
    console.log("Faktorial n : " +n); //kita masukan output untuk mencari faktorial apa dan jangan lupa menambahkan variabel n sebagai nilai yang akan di faktorial
    console.log("Hasil n faktorial : " +a); //kita masukan output untuk hasil dari faktorial tersebut, jangan lupa menambahkan variabel a yang sudah menjadi hasil faktorial
    console.log("Soal no 3 telah selesai, terima kasih");