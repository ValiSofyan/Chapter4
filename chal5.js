
function Usia(Age) {
    if (typeof Age === "number") {
        if (Age > 0 && Age < 13) {
            return "Anak-anak";
        } else if (Age > 12 && Age < 20) {
            return "Remaja";
        } else if (Age > 19 && Age < 36) {
            return "Dewasa";
        } else {
            return "Tua";
        }
    } else {
        return "Isi yang bener";
    }
}

console.log(Usia(12)); // usia anak anak
console.log(Usia(13)); // usia remaja
console.log(Usia(20)); // usia dewasa
console.log(Usia(66)); // usia tua


console.log("============ Soal Dua ============");

function hitungBiayaParkir(lamaParkir,hari, liburNasional) {
    if (typeof lamaParkir === "number" && typeof hari === "string" && typeof liburNasional === "boolean") {

    let biaya = 0
    if (lamaParkir <=1 ) {
        let biaya = 10000;
        
        
    } else {
        biaya = 10000 + (lamaParkir-1)*5000
       
        if (lamaParkir > 5) {
            biaya -= 10000
        }
        
        if (hari === "Minggu" ) {
           biaya -= 5000
           }

        if (biaya > 30000 && liburNasional == true ) {
           biaya -= 7000
        
        }
        // return biaya
    }
    return biaya
}
else {
    console.log("Invalid input");
        return null;
}
} 

console.log(hitungBiayaParkir(2, "sabtu", false));
// Output: Biaya Parkir: Rp15000.
console.log(hitungBiayaParkir(6, "Minggu", true));
// Output: Biaya Parkir: Rp25000.



console.log("============ Soal Tiga ============");

function jadwalFestival(hari, cuaca, suhu, angin) {
    let acara=""
    let ruangan=""
    let DaftarAcara= acara+" "+ruangan
    
    if (hari !== ""&& cuaca !=="")  {
         acara += "pameran seni"
     }
    if (angin > 20 && hari === "hujan") {
        ruangan ="Acara dalam ruangan" 
    }
    if (cuaca ==="hujan" && angin < 20 ) {
            ruangan = "Acara dalam ruangan" 
        }
    if (suhu < 5) {
            ruangan = "Acara dalam ruangan" 
        }
    if (cuaca === "cerah" && suhu >25) {
            acara += " pesta eskrim"  
        }
    if (hari === "minggu" && cuaca === "cerah") {
            acara += " Acara Marathon senja" 
         }

    DaftarAcara= acara+" "+ruangan
    return "DaftarAcara : " + DaftarAcara
    }  
    
console.log(jadwalFestival('sabtu', 'hujan', 23, 30),);
// Output: Daftar Acara: Pameran Seni.
console.log(jadwalFestival('sabtu', 'hujan', 23, 10));
// Output: Daftar Acara: Pameran Seni, Acara Dalam Ruangan.
console.log(jadwalFestival('minggu', 'cerah', 27, 8));
// Output: Daftar Acara: Pameran Seni, Pesta Es Krim, Maraton Senja.

