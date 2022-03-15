// Soal 1
const luasPersegiPanjang = (p, l) => {
    return p * l;
}
console.log(luasPersegiPanjang(6, 5));

const kelilingPersegiPanjang = (p, l) => {
    return 2 * (p + l);
}
console.log(kelilingPersegiPanjang(6, 5));

// Soal 2
const newFunction = (firstName, lastName) => {
    return {
        fullName: function () {
            console.log(firstName + " " + lastName)
        }
    }
}

//Driver Code 
newFunction("William", "Imoh").fullName()

// Soal 3
const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
}
const { firstName, lastName, address, hobby } = newObject
// Driver code
console.log(firstName, lastName, address, hobby)

//Soal 4
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)

//Soal 5
const planet = "earth" 
const view = "glass" 
const before = `Lorem ${view}, dolor sit amet,  consectetur adipiscing elit, ${planet}` 
console.log(before)