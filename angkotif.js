var x = (noAngkot = 1);
var y = (angkotRusak = 5);
var v = (lembur = 2);
var z = (jmlAngkot = 10);

for (x; x <= z; x++) {
  if (x == v) {
    console.log(`Nomor Angkot ${x} sedang lemburrrr`);
  } else if (x <= y) {
    console.log(`Nomor Angkot ${x} sedang Rusak`);
  } else {
    console.log(`Nomor Angkot ${x} beroperasi normal`);
  }
}
