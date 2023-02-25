var bermain = true;

while (bermain) {
  // tanya mau main gak?
  bermain = confirm("Apakah Anda mau bermain tebak angka dengan komputer?");
  //computer cari dengan fungsi Math.Random() dulu di jadiin desimal dari 1-10
  // var k = Math.random();
  // if (k <= 0.1) {
  //   k = "1";
  // } else if (k > 0.1 && k <= 0.2) {
  //   k = "2";
  // } else if (k > 0.2 && k <= 0.3) {
  //   k = "3";
  // } else if (k > 0.3 && k <= 0.4) {
  //   k = "4";
  // } else if (k > 0.4 && k <= 0.5) {
  //   k = "5";
  // } else if (k > 0.5 && k <= 0.6) {
  //   k = "6";
  // } else if (k > 0.6 && k <= 0.7) {
  //   k = "7";
  // } else if (k > 0.7 && k <= 0.8) {
  //   k = "8";
  // } else if (k > 0.8 && k <= 0.9) {
  //   k = "9";
  // } else {
  //   k = "10";
  // }
  var k = Math.floor(Math.random() * 10) + 1;
  console.log(`computer memilih : ${k}`);
  const nyawa = 3;
  let i = nyawa;
  // muculkan prompt angka tebakan user bila salah 1x kesempatan hilang satu dan dimunculkan pemberitahuan apakah angka yang dimasukkan user terlalu besar atau kecil dst... selama 3x kesempatan...
  for (i; i > 0; i--) {
    const p = parseInt(
      prompt(
        `Ini adalah kesempatan ke : ${i}\nInput angka berapa yang kira kira komputer pilih`
      )
    );
    console.log(`Tebakan orang : ${p}`);
    let j = i - 1;
    if (p == k) {
      alert(`Angka yg kamu masukkan : ${p}\nSelamat Kamu Benar`);
      break;
    } else if (p < k) {
      if (j == 0) {
        // bila angka tertebak maka keluar dari loop
        alert("Mati");
      } else {
        alert(`Terlalu rendah\nKamu masih memiliki nyawa ${j}`);
      }
    } else if (p > k) {
      if (j == 0) {
        // bila angka tertebak maka keluar dari loop
        alert("Mati");
      } else {
        alert(`Terlalu tinggi\nKamu masih memiliki nyawa ${j}`);
      }
    }
  }
  // munculkan confirm pop up apakah mau main tebak angka lagi
  bermain = confirm(
    "Apakah Anda mau bermain tebak angka lagi dengan komputer?"
  );
}

alert("Terima kasih");
