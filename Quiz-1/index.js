//Soal No 1
function jumlah_kata() {
    var kalimat_1 = "Halo nama saya Muhammad Iqbal Mubarok".split(" ").length;
    var kalimat_2 = "Saya Iqbal".split(" ").length;
    var kalimat_3 = "Saya Muhammad Iqbal Mubarok".split(" ").length;
    console.log("Jumlah Kata: " +kalimat_1)
    console.log("Jumlah Kata: " +kalimat_2)
    console.log("Jumlah Kata: " +kalimat_3)
}

jumlah_kata()

// Soal 2 Contoh 1
function next_date(tanggal, bulan, tahun) {
    var tanggal = 29
    var bulan = 2
    var tahun = 2020
    var tglnext = new Date(tahun, bulan-1, tanggal+1);
    var format = {year: 'numeric', month: 'long', day: 'numeric' };
    console.log('\n'+tglnext.toLocaleDateString("id", format));
}
next_date()

// Soal 2 Contoh 2
function next_date2(tanggal, bulan, tahun) {
    var tanggal = 28
    var bulan = 2
    var tahun = 2021
    var tglnext = new Date(tahun, bulan-1, tanggal+1);
    var format = {year: 'numeric', month: 'long', day: 'numeric' };
    console.log(tglnext.toLocaleDateString("id", format));
}
next_date2()

// Soal 2 Contoh 1
function next_date3(tanggal, bulan, tahun) {
    var tanggal = 31
    var bulan = 12
    var tahun = 2020
    var tglnext = new Date(tahun, bulan-1, tanggal+1);
    var format = {year: 'numeric', month: 'long', day: 'numeric' };
    console.log(tglnext.toLocaleDateString("id", format));
}
next_date3()
