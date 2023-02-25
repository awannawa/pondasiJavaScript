//computer cari dengan fungsi Math.Random() dulu di jadiin desimal dari 1-10

// tanya mau main gak?
confirm("Apakah Anda mau bermain tebak angka dengan komputer?");

var tanya = true;

while (tanya) {
  // munculkan alert dengan option tebak angka 1-10 dan jumlah maximal percobaan 3x
  let k = Math.random();
  if (k <= 0.1) {
    k = 1;
  } else if (k > 0.1 && k <= 0.2) {
    k = 2;
  } else if (k > 0.2 && k <= 0.3) {
    k = 3;
  } else if (k > 0.3 && k <= 0.4) {
    k = 4;
  } else if (k > 0.4 && k <= 0.5) {
    k = 5;
  } else if (k > 0.5 && k <= 0.6) {
    k = 6;
  } else if (k > 0.6 && k <= 0.7) {
    k = 7;
  } else if (k > 0.7 && k <= 0.8) {
    k = 8;
  } else if (k > 0.8 && k <= 0.9) {
    k = 9;
  } else {
    k = 10;
  }
  console.log(`computer memilih : ${k}`);
  tanya = confirm("Apakah Anda mau bermain tebak angka lagi dengan komputer?");
}
alert("Terima kasih");

// muculkan prompt angka tebakan user bila salah 1x kesempatan hilang satu dan dimunculkan pemberitahuan apakah angka yang dimasukkan user terlalu besar atau kecil dst... selama 3x kesempatan...

// bila angka tertebak maka keluar dari loop

// munculkan confirm pop up apakah mau main tebak angka lagi
