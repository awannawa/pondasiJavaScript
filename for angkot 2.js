var jmlAngkot = prompt(`masukkan jumlah total angkot yang kamu punya`);
var angkotBeroperasi = prompt(
  `masukkan jumlah angkot yang tidak rusak lebih dari ${jmlAngkot}`
);
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
  noAngkot++;
}
for (noAngkot > angkotBeroperasi; noAngkot <= jmlAngkot; noAngkot++) {
  console.log(`Angkot no. ${noAngkot} sedang tidak beroperasi`);
}
