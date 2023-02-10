var s = "";
// segitiga mepet tembok kiri done
for (i = 1; i < 10; i++) {
  for (a = 0; a < i; a++) {
    s += "*";
  }
  s += "\n";
}
for (j = 10; j > 0; j--) {
  for (a = 0; a < j; a++) {
    s += "*";
  }
  s += "\n";
}

// Segitiga sama kaki
// for (i = 0; i <= 10; i++) {
//   //buat nentuin spasi di kiri baris kosongnya
//   for (j = 10; j > i; j--) {
//     s += " ";
//   }
//   // buat baris kiri
//   for (k = 0; k < i; k++) {
//     s += "1";
//   }
//   // buat tengah tengahnya
//   s += "*";
//   // buat baris kanan
//   for (a = 0; a < i; a++) {
//     s += "2";
//   }
//   s += "\n";
// }

console.log(s);
