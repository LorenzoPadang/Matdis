//Soal
console.log("Diketahui himpunan-himpunan sebagai berikut : "); //disamping ini adalah soal uts matdis no 1 :)
console.log("a. A = {1,2,5,8,9,10}");
console.log("b. B = {4,2,8,10,11,12");
console.log("c. C = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15");

console.log("Tentukan : ");
console.log("a. Irisan A dengan B ?");
console.log("b. Irisan B dengan C ?");
console.log("c. Irisan C dengan A ?");
console.log("d. Kardinal A + Kardinal C ?");

//di bawah adalah script penyelesaian pertanyaan di atas dalam bahasa pemrograman Node.js :)

//Jawab
console.log("Welcome")
var x = require('array-intersection') //pertama kita download dulu module array-intersection di terminal (npm install array-intersection)

var a = [1,2,5,8,9,10];  //masukan variabel a
var b = [4,2,8,10,11,12];  //masukan variabel b
var c = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];  //masukan variabel c

var irisan1 = x (a,b);  //soal yang a. adalah irisan himpunan a dan himpunan b, jadi kita masukan formula penyelesaiannya seperti di samping
    console.log("Irisan A dengan B : " + irisan1); //untuk outputnya jangan lupa menambahkan variabel di belakang 

var irisan2 = x (b,c); //soal b dan c tentang irisan juga masih memakai rumus yang sama, hanya berbeda himpunan. jangan lupa menambahkan variabel irisannya.
    console.log("Irisan B dengan C : " + irisan2);

var irisan3 = x (a,c);
    console.log("Irisan C dengan A : " + irisan3);

var Kardinala = a.length //untuk kardinal A kita masukan banyaknya data himpunan a
var Kardinalc = c.length //untuk kardinal C kita masukan banyaknya data himpunan c
var Kardinal = Kardinala + Kardinalc //untuk variabel kardinal, kita masukan menjadi kardinal a + kardinal c
    console.log("Kardinal A + Kardinal C : " + Kardinal); //untuk outputnya jangan lupa menambahkan variabelnya
    console.log("Soal no 1 selesai, terima kasih");