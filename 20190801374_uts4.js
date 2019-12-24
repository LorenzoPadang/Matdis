//Soal
console.log("Carilah waktu terpanjang dan waktu tempuh tercepat dengan route seperti di bawah ini"); //disamping ini adalah soal uts matdis no 4 :)
console.log("(menggunakan Array 2 dimensi)"); //dimana kita harus menyelesaikan soal ini menggunakan array 2 dimensi
console.log("Asal -> Jalur A : 8,12 ; 4,7 ; 6,6");
console.log("Asal -> Jalur B : 7,10 ; 3,9 ; 8,5");

//Jawab
console.log("Welcome")
var inputkeyboard = require("readline-sync"); //karena kita sudah mengisntall readline-sync jadi kita hanya perlu memasukan variabel inputan keyboard dengan menggunakan readline-sync

var JalurA = [[8,12],[4,7],[6,6]] //kita masukan variabel jalur A, data pertama sebagai jarak dan data kedua sebagai waktu
var JalurB = [[7,10],[3,9],[8,5]] //sama seperti di atas kita masukan variabel jalur B dengan format yang sama

var jarak_JalurA = JalurA[0][0]+JalurA[1][0]+JalurA[2][0] //kita masukan variabel jarak jalur A dimana kita memasukan array data jarak dari variabel A
var jarak_JalurB = JalurB[0][0]+JalurB[1][0]+JalurB[2][0] //sama seperti di atas kita masukan variabel jarak jalur B dengan format yang sama

var waktu_tempuh_JalurA = JalurA[0][1]+JalurA[1][1]+JalurA[2][1] //kita masukan variabel waktu tempuh jalur A dengan memasukan array data waktu dari variabel A
var waktu_tempuh_JalurB = JalurB[0][1]+JalurB[1][1]+JalurB[2][1] //sama seperti di atas kita masukan variabel jarak jalur B dengan format yang sama

if (jarak_JalurA > jarak_JalurB && waktu_tempuh_JalurA > waktu_tempuh_JalurB){ //kita menggunakan program if, else dengan menggunakan gerbang logika
    console.log("Jarak Terpanjang :"+jarak_JalurA+"KM") //jika gerbang logika menyatakan true maka jarak jalur A dan waktu tempuh jalur A yang akan keluar sebagai output
    console.log("Waktu Tempuh Tercepat :"+waktu_tempuh_JalurA+"Menit")
}
else{ //sebaliknya
    console.log("Jarak Terpanjang :"+jarak_JalurB+"KM") //jika gerbang logika menyatakan false maka jarak jalur B dan waktu tempuh jalur B yang akan keluar sebagai output
    console.log("Waktu Tempuh Tercepat :"+waktu_tempuh_JalurB+"Menit")
}
    console.log("Soal UTS no 4 telah selesai, terima kasih");