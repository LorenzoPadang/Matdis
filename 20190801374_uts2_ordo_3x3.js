//Soal
console.log("Buatlah program untuk matrik : "); //disamping ini adalah soal uts no 2 matdis
console.log("a. Ordo 3x3");
console.log("Untuk proses bagi masing-masing matrik adalah sebagai berikut : ");

console.log("a. Penjumlahan"); 
console.log("b. Pengurangan");
console.log("c. Perkalian");
console.log("d. Determinan");
console.log("e. Invers");



console.log("Matrix 3x3");
console.log("  ┌2,5,1┐     ┌4,9,2┐"); 
console.log("A │3,7,3│ B : │6,8,4│");
console.log("  └2,3,5┘     └2,3,6┘");


//Jawab

//variabel array
var a = [[2,5,1],[3,7,3],[2,3,5]]; //kita masukan variabel a matriks 3x3
var b = [[4,9,2],[6,8,4],[2,3,6]]; //sama seperti di atas kita masukan variabel b matriks 3x3

//penjumlahan
var data1 = a[0][0] + b[0][0]; //untuk program penjumlahan kita masukan array sesuai dengan data yang harus dijumlahkan
var data2 = a[0][1] + b[0][1]; //data 2 sampai dengan data 9 sama seperti data 1 hanya menggunakan array yang berbeda sesuai data yang harus dijumlahkan
var data3 = a[0][2] + b[0][2];
var data4 = a[1][0] + b[1][0];
var data5 = a[1][1] + b[1][1];
var data6 = a[1][2] + b[1][2];
var data7 = a[2][0] + b[2][0];
var data8 = a[2][1] + b[2][1];
var data9 = a[2][2] + b[2][2];
    console.log("Penjumlahan ordo 3x3 : ")  
    console.log(data1,data2,data3); //output data diinput seperti di samping
    console.log(data4,data5,data6);
    console.log(data7,data8,data9);
console.log("=========================")

//pengurangan
var data10 = a[0][0] - b[0][0]; //untuk pengurangan kita masukkan array sesuai dengan data yang harus dikurangi sesuai dengan array yang dibutuhkan
var data11 = a[0][1] - b[0][1]; //data 10 sampai dengan data 18 sama seperti data 10 hanya berbeda array sesuai dengan yang dibutuhkan
var data12 = a[0][2] - b[0][2];
var data13 = a[1][0] - b[1][0];
var data14 = a[1][1] - b[1][1];
var data15 = a[1][2] - b[1][2];
var data16 = a[2][0] - b[2][0];
var data17 = a[2][1] - b[2][1];
var data18 = a[2][2] - b[2][2];
    console.log("Pengurangan ordo 3x3 : ")
    console.log(data10,data11,data12); //output data seperti disamping
    console.log(data13,data14,data15);
    console.log(data16,data17,data18);
console.log("=========================")

//perkalian
var data19 = a[0][0] * b[0][0] + a[0][1] * b[1][0] + a[0][2] * b[2][0]; //untuk perkalian kita menggunakan rumus baris dikalikan dengan kolom, hati-hati dalam menginput array agar tidak salah menginput nilai yang seharusnya
var data20 = a[0][0] * b[0][1] + a[0][1] * b[1][1] + a[0][2] * b[2][1];
var data21 = a[0][0] * b[0][2] + a[0][1] * b[1][2] + a[0][2] * b[2][2];

var data22 = a[1][0] * b[0][0] + a[1][1] * b[1][0] + a[1][2] * b[2][0];
var data23 = a[1][0] * b[0][1] + a[1][1] * b[1][1] + a[1][2] * b[2][1];
var data24 = a[1][0] * b[0][2] + a[1][1] * b[1][2] + a[1][2] * b[2][2];

var data25 = a[2][0] * b[0][0] + a[2][1] * b[1][0] + a[2][2] * b[2][0];
var data26 = a[2][0] * b[0][1] + a[2][1] * b[1][1] + a[2][2] * b[2][1];
var data27 = a[2][0] * b[0][2] + a[2][1] * b[1][2] + a[2][2] * b[2][2]; //sama seperti di atas penggunaan array yang dibutuhkan harus diperhatikan dengan seksama
    console.log("Perkalian ordo 3x3 : ")
    console.log(data19,data20,data21); //output data seperti di samping
    console.log(data22,data23,data24);
    console.log(data25,data26,data27);
console.log("=========================")

//determinan
var data28 = a[0][0] * a[1][1] * a[2][2]; //untuk determinan kita menggunakan rumus rules of triangles, hati-hati dalam menginput array yang dibutuhkan
var data29 = a[0][1] * a[1][2] * a[2][0];
var data30 = a[0][2] * a[1][0] * a[2][1];

var data31 = a[2][0] * a[1][1] * a[0][2];
var data32 = a[2][1] * a[1][2] * a[0][0];
var data33 = a[2][2] * a[1][0] * a[0][1];

var Hasil1 = data28+data29+data30
var Hasil2 = data31+data32+data33

var Determinan = Hasil1 - Hasil2 //hasil determinan adalah hasil pengurangan dari rumus rules of triangles
console.log("Determinan ordo 3x3      :" +Determinan) //output data dan jangan lupa menambahkan variabel
console.log("=========================")

//invers

//Minor//
var M11 = a[1][1] * a[2][2] - a[1][2] * a[2][1]; //untuk menyelesaikan invers kita membutuhkan minor terlebih dahulu dan kita menggunan rumus eliminasi Gauss-Jordan
var M12 = a[1][0] * a[2][2] - a[1][2] * a[2][0];
var M13 = a[1][0] * a[2][1] - a[1][1] * a[2][0];

var M21 = a[0][1] * a[2][2] - a[1][2] * a[2][1];
var M22 = a[0][0] * a[2][2] - a[0][2] * a[2][0];
var M23 = a[0][0] * a[2][1] - a[0][1] * a[2][0];

var M31 = a[0][1] * a[1][2] - a[0][2] * a[1][1];
var M32 = a[0][0] * a[1][2] - a[0][2] * a[1][0];
var M33 = a[0][0] * a[1][1] - a[0][1] * a[1][0]; //ada 9 minor yang dibutuhkan, hati-hati dalam menginput data array

//K.faktor//
var C11 = + M11 //sesuai dengan ketentuan rumus ada beberapa hal yang harus diperhatikan contohnya kofaktor
var C12 = - M12
var C13 = + M13
var C21 = - M21
var C22 = + M22
var C23 = - M23
var C31 = + M31
var C32 = - M32
var C33 = + M33

//Adjoin//
console.log("========================")
console.log("                     :"+"|"+C11,C21,C31+"|") //minor yang telah ditemukan dan dengan kofaktor akan menjadi adjoin
console.log("Adjoin A ordo 3x3    :"+"|"+C12,C22,C32+"|")
console.log("                     :"+"|"+C13,C23,C33+"|")

//Invers//
var Hasil_1 = C11/Determinan //untuk menyelesaikan invers A matriks 3x3 adalah adjoin dibagi dengan determinan
var Hasil_2 = C21/Determinan
var Hasil_3 = C31/Determinan
var Hasil_4 = C12/Determinan
var Hasil_5 = C22/Determinan
var Hasil_6 = C32/Determinan
var Hasil_7 = C13/Determinan
var Hasil_8 = C23/Determinan
var Hasil_9 = C33/Determinan

console.log("=========================")
console.log("                  :"+"|"+Hasil_1,Hasil_2,Hasil_3+"|") //output data seperti di samping
console.log("Invers A ordo 3x3 :"+"|"+Hasil_4,Hasil_5,Hasil_6+"|")
console.log("                  :"+"|"+Hasil_7,Hasil_8,Hasil_9+"|")
console.log("=========================")
console.log("Soal no 2 UTS matriks ordo 3x3 telah selesai, terima kasih");


