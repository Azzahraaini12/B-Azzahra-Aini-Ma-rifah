let latihan = ["Ray", "Fiki", "Fadhilla", "Farah"];

// Tambah pembeli baru: Nabila
latihan.push("Nabila");

// Tambah dua pembeli baru: Maza dan Elsi
latihan.push("Maza", "Elsi");

// Pembeli terakhir (Elsi) pulang
latihan.pop();

// Pembeli pertama (Ray) sudah mendapatkan belanjaan
latihan.shift();

// Pembeli kedua (Fiki) sudah mendapatkan belanjaan
latihan.shift();

// Pembeli baru yang nyerobot antrian: Tomi
latihan.unshift("Tomi");

// Cetak hasil akhir antrian
console.log(latihan);