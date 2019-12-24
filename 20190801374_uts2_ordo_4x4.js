//Soal
console.log("Buatlah program untuk matrik : "); //soal disamping adalah soal uts matdis no 2 ordo matriks 4x4
console.log("b. Ordo 4x4");
console.log("Untuk proses bagi masing-masing matrik adalah sebagai berikut : ");

console.log("a. Penjumlahan");
console.log("b. Pengurangan");
console.log("c. Perkalian");
console.log("d. Determinan");
console.log("e. Invers");



console.log("Matrix 4x4");
console.log("  ┌ 1, 2 ,3, 4┐     ┌4,5,2,7┐")
console.log("A │ 8, 7, 6, 5│ B : │2,3,5,2│")
console.log("  │ 9,-1,-2,-3│     │9,7,2,7│")
console.log("  └-4,-5,-5,-4┘     └1,5,1,9┘")


//Jawab
console.log("Welcome");
console.log("Matrix 4x4");
console.log("  ┌ 1, 2 ,3, 4┐     ┌4,5,2,7┐")
console.log("A │ 8, 7, 6, 5│ B : │2,3,5,2│")
console.log("  │ 9,-1,-2,-3│     │9,7,2,7│")
console.log("  └-4,-5,-5,-4┘     └1,5,1,9┘")
var A = [[1,6,9,2],[6,3,5,2],[9,5,6,3],[2,2,3,9]] //pertama kita masukan variabel A matriks 4x4
var B = [[2,3,1,2],[3,3,9,8],[1,9,3,9],[2,8,9,2]] //masukan variabel B matriks 4x4

//Penjumlahan
var Hasil_1 = A[0][0] + B[0][0] //untuk penjumlahan, kita jumlahkan sesuai array yang dibutuhkan. hati-hati dalam menginput array yang dibutuhkan
var Hasil_2 = A[0][1] + B[0][1]
var Hasil_3 = A[0][2] + B[0][2]
var Hasil_4 = A[0][3] + B[0][3]
var Hasil_5 = A[1][0] + B[1][0]
var Hasil_6 = A[1][1] + B[1][1]
var Hasil_7 = A[1][2] + B[1][2]
var Hasil_8 = A[1][3] + B[1][3]
var Hasil_9 = A[2][0] + B[2][0]
var Hasil_10 = A[2][1] + B[2][1]
var Hasil_11 = A[2][2] + B[2][2]
var Hasil_12 = A[2][3] + B[2][3]
var Hasil_13 = A[3][0] + B[3][0]
var Hasil_14 = A[3][1] + B[3][1]
var Hasil_15 = A[3][2] + B[3][2]
var Hasil_16 = A[3][3] + B[3][3] //karena ini adalah matriks 4x4, jadi ada 16 hasil dari penjumlahan

console.log("Penjumlahan ordo 4x4 : ")
console.log("|"+Hasil_1,Hasil_2,Hasil_3,Hasil_4+"|") //output data seperti yang disamping
console.log("|"+Hasil_5,Hasil_6,Hasil_7,Hasil_8+"|")
console.log("|"+Hasil_9,Hasil_10,Hasil_11,Hasil_12+"|")
console.log("|"+Hasil_13,Hasil_14,Hasil_15,Hasil_16+"|")
console.log("==================")

//Pengurangan
var Hasil_1 = A[0][0] - B[0][0] //pengurangan juga sama dengan penjumlahan hanya berubah tanda operasi hitung
var Hasil_2 = A[0][1] - B[0][1]
var Hasil_3 = A[0][2] - B[0][2]
var Hasil_4 = A[0][3] - B[0][3]
var Hasil_5 = A[1][0] - B[1][0]
var Hasil_6 = A[1][1] - B[1][1]
var Hasil_7 = A[1][2] - B[1][2]
var Hasil_8 = A[1][3] - B[1][3]
var Hasil_9 = A[2][0] - B[2][0]
var Hasil_10 = A[2][1] - B[2][1]
var Hasil_11 = A[2][2] - B[2][2]
var Hasil_12 = A[2][3] - B[2][3]
var Hasil_13 = A[3][0] - B[3][0]
var Hasil_14 = A[3][1] - B[3][1]
var Hasil_15 = A[3][2] - B[3][2]
var Hasil_16 = A[3][3] - B[3][3] //ada 16 data yang akan dihasilkan dari pengurangan matriks 4x4

console.log("Pengurangan ordo 4x4 : ")
console.log("|"+Hasil_1,Hasil_2,Hasil_3,Hasil_4+"|") //output data seperti di samping
console.log("|"+Hasil_5,Hasil_6,Hasil_7,Hasil_8+"|")
console.log("|"+Hasil_9,Hasil_10,Hasil_11,Hasil_12+"|")
console.log("|"+Hasil_13,Hasil_14,Hasil_15,Hasil_16+"|")
console.log("==================")

//Rumus Dari Perkalian//
//Perkalian
var Hasil_1 = A[0][0] * B[0][0] + A[0][1] * B[1][0] + A[0][2] * B[2][0] + A[0][3] * B[3][0] //perkalian menggunakan rumus baris dikalikan dengan kolom
var Hasil_2 = A[0][0] * B[0][1] + A[0][1] * B[1][1] + A[0][2] * B[2][1] + A[0][3] * B[3][1]
var Hasil_3 = A[0][0] * B[0][2] + A[0][1] * B[1][2] + A[0][2] * B[2][2] + A[0][3] * B[3][2]
var Hasil_4 = A[0][0] * B[0][3] + A[0][1] * B[1][3] + A[0][2] * B[2][3] + A[0][3] * B[3][3]

var Hasil_5 = A[1][0] * B[0][0] + A[1][1] * B[1][0] + A[1][2] * B[2][0] + A[1][3] * B[3][0]
var Hasil_6 = A[1][0] * B[0][1] + A[1][1] * B[1][1] + A[1][2] * B[2][1] + A[1][3] * B[3][1]
var Hasil_7 = A[1][0] * B[0][2] + A[1][1] * B[1][2] + A[1][2] * B[2][2] + A[1][3] * B[3][2]
var Hasil_8 = A[1][0] * B[0][3] + A[1][1] * B[1][3] + A[1][2] * B[2][3] + A[1][3] * B[3][3]

var Hasil_9  = A[2][0] * B[0][0] + A[2][1] * B[1][0] + A[2][2] * B[2][0] + A[2][3] * B[3][0]
var Hasil_10 = A[2][0] * B[0][1] + A[2][1] * B[1][1] + A[2][2] * B[2][1] + A[2][3] * B[3][1]
var Hasil_11 = A[2][0] * B[0][2] + A[2][1] * B[1][2] + A[2][2] * B[2][2] + A[2][3] * B[3][2]
var Hasil_12 = A[2][0] * B[0][3] + A[2][1] * B[1][3] + A[2][2] * B[2][3] + A[2][3] * B[3][3]

var Hasil_13 = A[3][0] * B[0][0] + A[3][1] * B[1][0] + A[3][2] * B[2][0] + A[3][3] * B[3][0]
var Hasil_14 = A[3][0] * B[0][1] + A[3][1] * B[1][1] + A[3][2] * B[2][1] + A[3][3] * B[3][1]
var Hasil_15 = A[3][0] * B[0][2] + A[3][1] * B[1][2] + A[3][2] * B[2][2] + A[3][3] * B[3][2]
var Hasil_16 = A[3][0] * B[0][3] + A[3][1] * B[1][3] + A[3][2] * B[2][3] + A[3][3] * B[3][3] //ada 16 hasil perkalian yang dibutuhkan, hati-hati dalam melakukan penginputan array yang dibutuhkan

console.log("Perkalian ordo 4x4 : ")
console.log("|"+Hasil_1,Hasil_2,Hasil_3,Hasil_4+"|") //output data seperti yang di samping
console.log("|"+Hasil_5,Hasil_6,Hasil_7,Hasil_8+"|")
console.log("|"+Hasil_9,Hasil_10,Hasil_11,Hasil_12+"|")
console.log("|"+Hasil_13,Hasil_14,Hasil_15,Hasil_16+"|")
console.log("==================")



//Determinan 4x4//

var A = [[1,2,3,4],[8,7,6,5],[9,-1,-2,-3],[-4,-5,-5,-4]] //untuk determinan kita coba gunakan variabel yang berbeda

//A
var a = A[0][0] * A[1][1] * A[2][2] * A[3][3] //untuk menyelesaikan determinan matriks 4x4 kita menggunakan rumus Gauss-Jordan
var b = A[0][1] * A[1][2] * A[2][3] * A[3][0]
var c = A[0][2] * A[1][3] * A[2][0] * A[3][1]
var d = A[0][3] * A[1][0] * A[2][1] * A[3][2]
var e = A[0][0] * A[1][3] * A[2][2] * A[3][1]
var f = A[0][1] * A[1][0] * A[2][3] * A[3][2]
var g = A[0][2] * A[1][1] * A[2][0] * A[3][3]
var h = A[0][3] * A[1][2] * A[2][1] * A[3][0]
var Hasil_A = a-b+c-d-e+f-g+h

//B
var a1 = A[0][0] * A[1][1] * A[2][3] * A[3][2]
var b1 = A[0][1] * A[1][2] * A[2][0] * A[3][3]
var c1 = A[0][2] * A[1][3] * A[2][1] * A[3][0]
var d1 = A[0][3] * A[1][0] * A[2][2] * A[3][2]
var e1 = A[0][0] * A[1][3] * A[2][1] * A[3][2]
var f1 = A[0][1] * A[1][0] * A[2][2] * A[3][3]
var g1 = A[0][2] * A[1][1] * A[2][3] * A[3][0]
var h1 = A[0][3] * A[1][2] * A[2][0] * A[3][1]

var Hasil_B = -a1+b1-c1+d1+e1-f1+g1-h1

//C
var a2 = A[0][0] * A[1][2] * A[2][3] * A[3][2]
var b2 = A[0][1] * A[1][3] * A[2][0] * A[3][2]
var c2 = A[0][2] * A[1][0] * A[2][1] * A[3][3]
var d2 = A[0][3] * A[1][1] * A[2][2] * A[3][0]
var e2 = A[0][0] * A[1][2] * A[2][1] * A[3][3]
var f2 = A[0][1] * A[1][3] * A[2][2] * A[3][0]
var g2 = A[0][2] * A[1][0] * A[2][3] * A[3][1]
var h2 = A[0][3] * A[1][1] * A[2][0] * A[3][2] //hati-hati dalam menginput data array yang dibutuhkan

var Hasil_C = a2-b2+c2-d2-e2+f2-g2+h2

//Hasil Determinan :
var Determinan = Hasil_A + Hasil_B + Hasil_C //hasil dari determinan menggunakan rumus Gauss-Jordan seperti di samping

console.log("==================================")
console.log("|A| : " + Determinan) //output data seperti di samping, jangan lupa menambahkan variabelnya

//M//

//M11//
var aa = A[1][1] * A[2][2] * A[3][3] //untuk menyelesaikan invers matriks 4x4 kita membutuhkan minor untuk menemukan adjoin
var ab = A[1][2] * A[2][3] * A[3][1]
var ac = A[1][3] * A[2][1] * A[3][2]

var ad = A[1][3] * A[2][2] * A[3][1]
var ae = A[1][1] * A[2][3] * A[3][2]
var af = A[1][2] * A[2][1] * A[3][3]

var M11 = aa+ab+ac-ad-ae-af

//M12
var ag = A[1][0] * A[2][3] * A[3][2]
var ah = A[1][2] * A[2][0] * A[3][3]
var ai = A[1][3] * A[2][2] * A[3][0]

var aj = A[1][0] * A[2][2] * A[3][3]
var ak = A[1][2] * A[2][3] * A[3][0]
var al = A[1][3] * A[2][0] * A[3][2]

var M12 = ag+ah+ai-aj-ak-al

//M13
var am = A[1][0] * A[2][1] * A[3][3]
var an = A[1][1] * A[2][3] * A[3][0]
var ao = A[1][3] * A[2][0] * A[3][1]

var ap = A[1][0] * A[2][3] * A[3][1]
var aq = A[1][1] * A[2][0] * A[3][3]
var ar = A[1][3] * A[2][1] * A[3][0]

var M13 = an+am+ao-ap-aq-ar

//M14
var as = A[1][0] * A[2][2] * A[3][2]
var at = A[1][1] * A[2][0] * A[3][2]
var au = A[1][2] * A[2][1] * A[3][0]

var av = A[1][0] * A[2][1] * A[3][2]
var aw = A[1][1] * A[2][2] * A[3][0]
var ax = A[1][2] * A[2][0] * A[3][1]

var M14 = as+at+au-av-aw-ax

//Baris 2
//M21
var a1 = A[0][1] * A[2][3] * A[3][2]
var a2 = A[0][2] * A[2][1] * A[3][3]
var a3 = A[0][3] * A[2][2] * A[3][1]

var a4 = A[0][1] * A[2][2] * A[3][3]
var a5 = A[0][2] * A[2][3] * A[3][1]
var a6 = A[0][3] * A[2][1] * A[3][2]

var M21 = a1+a2+a3-a4-a5-a6

//M22
var a7 = A[0][0] * A[2][2] * A[3][3]
var a8 = A[0][2] * A[2][3] * A[3][0]
var a9 = A[0][3] * A[2][0] * A[3][2]

var a10 = A[0][0] * A[2][3] * A[3][2]
var a11 = A[0][2] * A[2][0] * A[3][3]
var a12 = A[0][3] * A[2][2] * A[3][0]

var M22 = a7+a8+a9-a10-a11-a12

//M23
var a13 = A[0][0] * A[2][3] * A[3][1]
var a14 = A[0][1] * A[2][0] * A[3][3]
var a15 = A[0][3] * A[2][1] * A[3][0]

var a16 = A[0][0] * A[2][1] * A[3][3]
var a17 = A[0][1] * A[2][3] * A[3][0]
var a18 = A[0][3] * A[2][0] * A[3][1]

var M23 = a13+a14+a15-a16-a17-a18

//M24
var a19 = A[0][0] * A[2][1] * A[3][2]
var a20 = A[0][1] * A[2][2] * A[3][0]
var a21 = A[0][2] * A[2][0] * A[3][1]

var a22 = A[0][0] * A[2][2] * A[3][1]
var a23 = A[0][1] * A[2][0] * A[3][2]
var a24 = A[0][2] * A[2][1] * A[3][0]

var M24 = a19+a20+a21-a22-a23-a24

//Baris 3
//M31
var a25 = A[0][1] * A[1][2] * A[3][3]
var a26 = A[0][2] * A[1][3] * A[3][1]
var a27 = A[0][3] * A[1][1] * A[3][2]

var a28 = A[0][3] * A[1][2] * A[3][1]
var a29 = A[0][1] * A[1][3] * A[3][2]
var a30 = A[0][2] * A[1][1] * A[3][3]

var M31 = a25+a26+a27-a28-a29-a30

//M32
var a31 = A[0][0] * A[1][3] * A[3][2]
var a32 = A[0][2] * A[1][0] * A[3][3]
var a33 = A[0][3] * A[1][2] * A[3][0]

var a34 = A[0][0] * A[1][2] * A[3][3]
var a35 = A[0][2] * A[1][3] * A[3][0]
var a36 = A[0][3] * A[1][0] * A[3][2]

var M32 = a31+a32+a33-a34-a35-a36

//M33
var a37 = A[0][0] * A[1][1] * A[3][3]
var a38 = A[0][1] * A[1][3] * A[3][0]
var a39 = A[0][3] * A[1][0] * A[3][1]

var a40 = A[0][0] * A[1][3] * A[3][1]
var a41 = A[0][1] * A[1][0] * A[3][3]
var a42 = A[0][3] * A[1][1] * A[3][0]

var M33 = a37+a38+a39-a40-a41-a42

//M34
var a43 = A[0][0] * A[1][2] * A[3][1]
var a44 = A[0][1] * A[1][0] * A[3][2]
var a45 = A[0][2] * A[1][1] * A[3][0]

var a46 = A[0][0] * A[1][1] * A[3][2]
var a47 = A[0][1] * A[1][2] * A[3][0]
var a48 = A[0][2] * A[1][0] * A[3][1]

var M34 = a43+a44+a45-a46-a47-a48

//Baris 4
//M41
var a49 = A[0][1] * A[1][3] * A[2][2]
var a50 = A[0][2] * A[1][1] * A[2][3]
var a51 = A[0][3] * A[1][2] * A[2][1]

var a52 = A[0][1] * A[1][2] * A[2][3]
var a53 = A[0][2] * A[1][3] * A[2][1]
var a54 = A[0][3] * A[1][1] * A[2][2]

var M41 = a49+a50+a51-a52-a53-a54

//M42
var a55 = A[0][0] * A[1][2] * A[2][3]
var a56 = A[0][2] * A[1][3] * A[2][0]
var a57 = A[0][3] * A[1][0] * A[2][2]

var a58 = A[0][3] * A[1][2] * A[2][0]
var a59 = A[0][0] * A[1][3] * A[2][2]
var a60 = A[0][2] * A[1][0] * A[2][3]

var M42 = a55+a56+a57-a58-a59-a60

//M43
var a61 = A[0][0] * A[1][3] * A[2][1]
var a62 = A[0][1] * A[1][0] * A[2][3]
var a63 = A[0][3] * A[1][1] * A[2][0]

var a64 = A[0][0] * A[1][1] * A[2][3]
var a65 = A[0][1] * A[1][3] * A[2][0]
var a66 = A[0][3] * A[1][0] * A[2][1]

var M43 = a61+a62+a63-a64-a65-a66

//M44
var a67 = A[0][0] * A[1][1] * A[2][2]
var a68 = A[0][1] * A[1][2] * A[2][0]
var a69 = A[0][2] * A[1][0] * A[2][1]

var a70 = A[0][2] * A[1][1] * A[2][0]
var a71 = A[0][0] * A[1][2] * A[2][1]
var a72 = A[0][1] * A[1][0] * A[2][2]

var M44 = a67+a68+a69-a70-a71-a72

var C11 = M11
var C12 = M12
var C13 = M13
var C14 = M14
var C21 = M21
var C22 = M22
var C23 = M23
var C24 = M24
var C31 = M31
var C32 = M32
var C33 = M33
var C34 = M34
var C41 = M41
var C42 = M42
var C43 = M43
var C44 = M44 //ada 16 hasil minor yang dihasilkan sesuai rumus yang ada, jangan sampai salah menginput data array yang dibutuhkan
              //minor yang dihitung adalah setiap baris dan kolom
//Adjoin

// | C11 C21 C31 C41
// | C12 C22 C32 C42
// | C13 C23 C33 C43
// | C14 C24 C34 C44

console.log("==================================")
console.log("      : "+"|"+C11,C21,C31,C41+"|") //output data seperti di samping
console.log("Adj A : "+"|"+C12,C22,C32,C42+"|")
console.log("      : "+"|"+C13,C23,C33,C43+"|")
console.log("      : "+"|"+C14,C24,C34,C44+"|")
console.log("==================================")

//Invers
//A Invers = Adjoin / Determinan

var Hasil_1  = C11/Determinan //hasil invers adalah adjoin dibagi determinan
var Hasil_2  = C12/Determinan
var Hasil_3  = C13/Determinan
var Hasil_4  = C14/Determinan
var Hasil_5  = C21/Determinan
var Hasil_6  = C22/Determinan
var Hasil_7  = C23/Determinan
var Hasil_8  = C24/Determinan
var Hasil_9  = C31/Determinan
var Hasil_10 = C32/Determinan
var Hasil_11 = C33/Determinan
var Hasil_12 = C34/Determinan
var Hasil_13 = C41/Determinan
var Hasil_14 = C42/Determinan
var Hasil_15 = C43/Determinan
var Hasil_16 = C44/Determinan

console.log("         : "+"|"+Hasil_1,Hasil_5,Hasil_9,Hasil_13+"|") //output data seperti di samping
console.log("Invers A : "+"|"+Hasil_2,Hasil_6,Hasil_10,Hasil_14+"|")
console.log("         : "+"|"+Hasil_3,Hasil_7,Hasil_11,Hasil_15+"|")
console.log("         : "+"|"+Hasil_4,Hasil_8,Hasil_12,Hasil_16+"|")
console.log("==================================")
console.log("Soal UTS no 2 matriks 4x4 telah selesai, terima kasih");