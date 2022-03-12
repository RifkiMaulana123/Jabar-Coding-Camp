//Soal No. 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
daftarHewan.sort()
daftarHewan.forEach(function (hewan) {
    console.log(hewan)
})

//Soal No. 2
function introduce(name, age, address, hobby) {
    return name.age, address, hobby
}
var data = { name: "John", age: 30, address: "Jalan Pelesiran", hobby: "Gaming" }

var perkenalan = introduce(data)
console.log('Nama Saya ' + data.name, 'Umur saya ' + data.age + ' tahun', 'alamat saya di ' + data.address, 'dan saya punya hobby yaitu ' + data.hobby)

//Soal No. 3

// Soal No. 4
function hitung(angka){
    return angka * 2 - 2
}

console.log(hitung(0)) 
console.log(hitung(1)) 
console.log(hitung(2)) 
console.log(hitung(3))
console.log(hitung(5))