// Soal 1
var pertama = "saya sangat senang hari ini ";
var kedua = "belajar javascript itu keren";
var upper = kedua.substring(8,18).toUpperCase()
// saya senang belajar JAVASCRIPT
console.log(pertama.substring(0,4)+" "+pertama.substring(12,19)+kedua.substring(0,7)+" "+upper);

// Soal 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

var a = parseInt(kataPertama);
var b = parseInt(kataKedua);
var c = parseInt(kataKetiga);
var d = parseInt(kataKeempat);

console.log(a+b*c+d);
console.log((c-b)*(a+b));
console.log(d/b*c*b);


// Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0,3); 
var kataKedua = kalimat.substring(4,14); 
var kataKetiga = kalimat.substring(14,18); 
var kataKeempat = kalimat.substring(18,25); 
var kataKelima = kalimat.substring(25,31); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);