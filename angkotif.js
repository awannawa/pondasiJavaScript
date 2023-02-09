var x = (noAngkot = 1);
var y = (angkotRusak = 4);
var v = (lembur = 5);
var z = (jmlAngkot = 10);

for (x; x <= z; x++) {
  if (x <= y && x !== v) {
    console.log(`Nomor Angkot ${x} sedang Rusak`);
  } else if (x == v || x == 8 || x == 10) {
    console.log(`Nomor Angkot ${x} sedang lemburrrr`);
  } else {
    console.log(`Nomor Angkot ${x} beroperasi normal`);
  }
}
