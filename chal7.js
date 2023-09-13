/**
 * Konversi Array ke Objek
 * 
 * Diberikan sebuah array yang berisi string, [ 'Apel', 'Mangga', 'Pisang', 'Jeruk' ] dan sebuah array berisi number, [4, 6, 6, 5]. 
 * Ubahlah array tersebut menjadi objek dengan kunci berupa nama buah dan nilai berupa panjang dari nama buah tersebut.
 */
console.log("=====================Konversi Array ke Objek=====================");
let fruits = [ 'Apel', 'Mangga', 'Pisang', 'Jeruk' ]
let amount = [4, 6, 6, 5]


let fruitAmount 

for (let i = 0; i<fruits.length ; i++ ){
    fruitAmount=fruits[i]+": " + amount[i];
    console.log(fruitAmount);
}


// OUTPUT: { Apel: 4, Mangga: 6, Pisang: 6, Jeruk: 5 }


/**
 * Menghitung Kemunculan Kata
 * 
 * Diberikan sebuah kalimat, "saya suka makan nasi goreng dan saya juga suka minum teh". 
 * Buatlah sebuah objek yang menghitung berapa kali masing-masing kata muncul di dalam kalimat tersebut.
 */
console.log("=====================Menghitung Kemunculan Kata=====================");
let favWord = "saya suka makan nasi goreng dan saya juga suka minum teh"
const ar = favWord.split(" ")

let newAr= [];

for (let i=0 ; i < ar.length; i++ ){
    let patern= ar[i];
    if (!newAr[patern]) {
        newAr[patern]=1;
    }
    else{
        newAr[patern]+=1;
    }
    
}
console.log(newAr);




// OUTPUT:  { saya: 2, suka: 2, makan: 1, nasi: 1, goreng: 1, dan: 1, juga: 1, minum: 1, teh: 1 }


/**
 * Grup Orang Berdasarkan Usia
 * 
 * Diberikan sebuah array objek yang berisi nama dan usia.
 * 1. Akses umur Dewi
 * 2. Kelompokkan objek didalam array berdasarkan usia, dan keluarkan dalam bentuk objek
 * 
 */
console.log("===================== Grup Orang Berdasarkan Usia=====================");

const people = [
    { nama: "Budi", usia: 25 },
    { nama: "Ana", usia: 20 },
    { nama: "Citra", usia: 25 },
    { nama: "Dewi", usia: 32 },
    { nama: "Eka", usia: 30 }
];

let umurDewi; 

let collectionUmur = {};

for (let person of people) {
    const { nama, usia } = person;
    
    if (nama === "Dewi") {
        umurDewi = usia;
    }

    if (!collectionUmur[usia]) {
        collectionUmur[usia] = [{ nama, usia }];
    } else {
        collectionUmur[usia].push({ nama, usia });
    }
}

console.log("Umur Dewi:", umurDewi);
console.log("Collection Umur:", collectionUmur);


// OUTPUT:
// {
//     20: [ { nama: 'Ana', usia: 20 } ],
//     25: [ { nama: 'Budi', usia: 25 }, { nama: 'Citra', usia: 25 } ],
//     30: [ { nama: 'Eka', usia: 30 } ],
//     32: [ { nama: 'Dewi', usia: 20 } ]
// }


/**
 * Mengakses Properti Bertingkat
 * 
 * Diberikan sebuah objek bertingkat. Akses value dar key city
 */
console.log("=====================Mengakses Properti Bertingkat=====================");
const data = {
    user: {
        profile: {
            name: "John Doe",
            address: {
                city: "Jakarta",
                postalCode: "12345"
            }
        }
    }
};

let result = data.user.profile.address.city  // "Jakarta"
console.log(result);

/**
 * Penghitungan Suara Pemilihan
 * 
 * Terdapat sebuah array berisi suara pemilihan. Hitunglah total suara untuk masing-masing kandidat dan kembalikan dalam bentuk objek.
 */
console.log("=====================Penghitungan Suara Pemilihan=====================");
const suara = ['Budi', 'Ana', 'Budi', 'Citra', 'Ana', 'Budi', 'Dewi', 'Dewi', 'Ana'];
let jumlahSuara= [ ]

for (let i=0 ; i < suara.length; i++ ){
    let patern2= suara[i];
    if (!jumlahSuara[patern2]) {
        jumlahSuara[patern2]=1;
    }
    else{
        jumlahSuara[patern2]+=1;
    } 
}
console.log(jumlahSuara);
// OUTPUT :
// { Budi: 3, Ana: 3, Citra: 1, Dewi: 2 }


/**
 * Menggabungkan Beberapa Objek
 * 
 * Terdapat beberapa objek dengan struktur yang sama. 
 * Gabungkan objek-objek tersebut sehingga setiap kunci memiliki nilai yang merupakan total dari ketiga objek tersebut.
 */
console.log("=====================Menggabungkan Beberapa Objek=====================");

const obj1 = { a: 5, b: 7, c: 3 };
const obj2 = { a: 4, b: 1, c: 8 };
const obj3 = { a: 9, b: 2, c: 5 };

let semua = {};

for (let key in obj1) {
    semua[key] = (obj1[key]  ) + (obj2[key] ) + (obj3[key]);
}

console.log(semua);


// OUTPUT:
// { a: 18, b: 10, c: 16 }


/**
 * Penyusunan Ulang Objek
 * 
 * Diberikan sebuah objek. Susun ulang objek tersebut agar semua informasi ada di tingkat yang sama,
 * tetapi namai kunci dengan kombinasi informasi yang mereka wakili
 */
console.log("=====================Penyusunan Ulang Objek=====================");
const orang = {
    nama: "Budi",
    alamat: {
        jalan: "Jl. Raya",
        kota: "Jakarta",
        kodePos: "10000"
    },
    kontak: {
        email: "budi@mail.com",
        telepon: "080080080"
    }
};

function baris(obj, indukKey = "") {
    let result = {};
    for (let key in obj) {
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            const anakKey = baris(obj[key], `${indukKey}${key}`);
            result = { ...result, ...anakKey };
        } else {
            result[`${indukKey}${key}`] = obj[key];
        }
    }
    return result;
}

const hasil = baris(orang);

console.log(hasil);


// OUTPUT
// {
//   nama: "Budi",
//   alamat_jalan: "Jl. Raya",
//   alamat_kota: "Jakarta",
//   alamat_kodePos: "10000",
//   kontak_email: "budi@mail.com",
//   kontak_telepon: "080080080"
// }


/**
 * Mencari Nilai Tertinggi dan tampilkan nama dan nilainya
 * 
 * Gunakan looping untuk mencarinya. Lalu resultnya menjadi string dengan pernyataan
 */
console.log("=====================Mencari Nilai Tertinggi dan tampilkan nama dan nilainya=====================");
const mahasiswa = [
    { nama: "Budi", nilai: 85 },
    { nama: "Ana", nilai: 90 },
    { nama: "Dono", nilai: 78 },
    { nama: "Dewi", nilai: 92 }
];
let maxVAlue = -Infinity
let se=[]

for ( let key of mahasiswa){
    if (key.nilai>maxVAlue) {
        maxVAlue=key.nilai
        nama1=key.nama
        se= key.nilai,key.nama
    }
   
}
console.log(`Students yang mendapatkan nilai terbesar adalah ${nama1} dengan nilai ${maxVAlue}`);


// OUPUT: Students yang mendapatkan nilai terbesar adalah ... dengan nilai ...
  

/**
 * Konversi Objek ke Array
 * 
 * Rubah objek menjadi array dengan metode looping yang dimana akan dinamis.
 */
console.log("=====================Konversi Objek ke Array=====================");
const kota = {
    Jakarta: 10,
    Bandung: 5,
    Surabaya: 7,
    Medan: 4
};
let arrayKota=[ ]
for (let key in kota){
    let arr = {
        namaKota : key,
        nilai : kota[key]
    }
   
    arrayKota.push(arr)
}
console.log(arrayKota);

// OUTPUT:
// [
//   { namaKota: "Jakarta", nilai: 10 },
//   ...
// ]