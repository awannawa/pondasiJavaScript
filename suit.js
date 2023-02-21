var tanya = true;
while (tanya) {
  // menentukan pilihan player
  var o = prompt("Silahkan Pilih dan Ketik Gajah/Semut/Orang");
  p = o.toLowerCase();
  console.log("user memasukan : ", p);
  if (p === "gajah" || p === "semut" || p === "orang") {
    //menangkap pilihan komputer &
    //mengaktifkan bilangan random dengan function math

    var k = Math.random();
    if (k < 0.34) {
      k = "semut";
    } else if (k >= 0.34 && k < 0.67) {
      k = "orang";
    } else {
      k = "gajah";
    }
    console.log("komputer memilih :", k);

    var hasil = "";
    // menentukan rules
    if (p === k) {
      hasil = "seri";
    } else if (p === "semut") {
      // if (k === "orang") {
      //   hasil = "Kalah";
      // } else {
      //   hasil = " Menang";
      // }
      hasil = k === "orang" ? "Waduh Kamu Kalah!" : "Selamat! Kamu Menang!";
    } else if (p === "orang") {
      hasil = k === "gajah" ? "Waduh Kamu Kalah!" : "Selamat! Kamu Menang!";
    } else if (p === "gajah") {
      hasil = k === "semut" ? "Waduh Kamu Menang" : "Selamat! Kamu Kalah";
    }
    console.log(`hasil : ${hasil}`);
    alert(hasil);
    // tampilkan hasilnya
  } else {
    alert(`WADUH ! kamu memasukan ${o} tidak sesuai pilihan`);
  }
  tanya = confirm("mau bermain lagi?");
}
alert("Terima kasih telah bermain dengan kami");
