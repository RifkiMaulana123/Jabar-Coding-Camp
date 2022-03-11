//Soal 1
var nilai = 80;
if ( nilai >= 85 ){
    console.log("A")
} else if(nilai >= 75 && nilai < 85){
    console.log("B")
} else if(nilai >= 65 && nilai < 75){
    console.log("C")
} else if(nilai >= 55 && nilai < 65){
    console.log("D")
} else if(nilai < 55){
    console.log("E")
} 
// B

//Soal 2
var tanggal = 7;
var bulan = 6;
var tahun = 2000;
switch(bulan) {
    case 1:   { console.log(tanggal+'Januari'+tahun); break; }
    case 2:   { console.log(tanggal+'Februari'+tahun); break; }
    case 3:   { console.log(tanggal+'Maret'+tahun); break; }
    case 4:   { console.log(tanggal+'April'+tahun); break; }
    case 5:   { console.log(tanggal+'Mei'+tahun); break; }
    case 6:   { console.log(tanggal+' Juni '+tahun); break; }
    case 7:   { console.log(tanggal+'Juli'+tahun); break; }
    case 8:   { console.log(tanggal+'Agustus'+tahun); break; }
    case 9:   { console.log(tanggal+'September'+tahun); break; }
    case 10:   { console.log(tanggal+'Oktober'+tahun); break; }
    case 11:   { console.log(tanggal+'November'+tahun); break; }
    case 12:   { console.log(tanggal+'Desember'+tahun); break; }   
}
// 7 Juni 2000

//Soal 3
var hasil = '';
for (var n = 0; n < 3; n++) {
    for (var j = 0; j <= n; j++) {
        hasil += '# ';
    }
    hasil += '\n';
}
console.log(hasil);

var hasil = '';
for (var n = 0; n < 7; n++) {
    for (var j = 0; j <= n; j++) {
        hasil += '# ';
    }
    hasil += '\n';
}
console.log(hasil);

//Soal 4
kata1 = "programming"
kata2 = "Javascript"
kata3 = "VueJS"
var m =10;
for (var i = 1; i <= m; i++) { 
    if (i % 3 == 1){
      console.log(i + " - I love " + kata1);
    }
    else if (i % 3 == 2){
      console.log(i + " - I love " + kata2)
    }
    else if (i % 3 == 0) {
      console.log(i + " - I love " + kata3)
    }
    if (i % 3 == 0) { 
    console.log("===");
  } 
}