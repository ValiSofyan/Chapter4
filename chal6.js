
console.log("============ looping 20x ============");

// start loopt iterasi 1 => 20
for (let index = 0; index <= 20; index++) {
    // print nilai index terbaru
    console.log(index);
}



console.log("============ Loop untuk menjumlahkan angka dari 1 hingga 100 ============");


let jumlah = 0;

for (let i = 0; i <= 100; i++) {
    // Menampilkan nilai 'i' saat ini
    console.log("ini ke ===> " + i);

    // Menambahkan nilai 'i' saat ini ke 'jumlah' untuk menghitung hasil penjumlahan
    jumlah = jumlah + i;
}

// Menampilkan hasil penjumlahan akhir
console.log("Hasil penjumlahan dari 1 hingga 100 adalah: " + jumlah)




console.log("============ increase ============");

let bintang = "";

for (let i = 1; i <= 5; i++) {
    // Membuat string dari tanda asterisk ('*') yang diulang sebanyak 'i' kali
    bintang = "*".repeat(i);
    
    
    console.log(bintang); // Menampilkan nilai 'bintang' saat ini
}


console.log("============ decrease ============");

let bintang2 = "";

for (let i = 5; i >= 1; i--) {
    // Membuat string dari tanda asterisk ('*') yang diulang sebanyak 'i' kali
    bintang2 = "*".repeat(i);
    
    console.log(bintang2); // Menampilkan nilai 'bintang2' saat ini
}


console.log("============ diamon ============");

let asteriks ="*"
let spaci
 
for (let i= 5; i >= 1; i--) {
    spaci = " ".repeat(i)// Membuat spasi berdasarkan nilai 'i'
    asteriks + asteriks// Menggandakan panjang string asterisk
    let bintangDikurang = asteriks.slice(0,-1)// Menghapus karakter terakhir dari 'asteriks'

    console.log(spaci,( asteriks + bintangDikurang));
    
    if (i >= 1) {
      asteriks += "*"// Menambahkan asterisk ke ujung 'asteriks'
    }
  }
  
  
spaci = "  "// Mengatur ulang variabel 'spasi' dengan dua spasi

// Bagian bawah diamon
for (let j= 4; j >= 1; j--) {
    asteriks = "**".repeat(j)
    let aga = asteriks.slice(0,-1)
    spaci + spaci

    console.log(spaci,(aga),);
    if (j >= 1) {
        spaci += " "
       }
}



console.log("============ Pola Segitiga Bilangan ============");

let asterisk = "*";
let num = "";

for (let n = 1; n <= 5; n++) {
  num += n;
  console.log(num);
  if (n < 5) {
    num += asterisk;
  }
}



