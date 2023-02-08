var noAngkot = 1;
var jmlAngkot = prompt(`Masukkan jumlah angkot`);
var angkotRusak = prompt(`Masukkan jumlah angkot rusak`);

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotRusak) {
    console.log(`Angkot no ${noAngkot} sedang Rusak`);
  } else {
    console.log(`Angkot no ${noAngkot} sedang beroperasi normal`);
  }
}
