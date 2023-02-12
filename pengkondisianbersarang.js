// segitiga pascal pertambahan segitiga
function munculkanSegitigaPascal(n) {
  let segitiga = [];
  for (let i = 0; i < n; i++) {
    segitiga[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        segitiga[i][j] = 1;
      } else {
        segitiga[i][j] = segitiga[i - 1][j - 1] + segitiga[i - 1][j];
      }
    }
  }
  return segitiga;
}

function cetakSegitigaPascal(n) {
  let segitiga = munculkanSegitigaPascal(n);
  for (let i = 0; i < n; i++) {
    let baris = "";
    for (let a = 5; a > i; a--) {
      baris += " ";
    }
    for (let j = 0; j <= i; j++) {
      baris += segitiga[i][j] + " ";
    }
    console.log(baris);
  }
}

// contoh penggunaan
cetakSegitigaPascal(5);

// var s = "";

// // diamond
// for (i = 10; i > 0; i--) {
//   for (a = 0; a < i; a++) {
//     s += " ";
//   }
//   for (b = 10; b > i; b--) {
//     s += "0";
//   }
//   s += "1";
//   for (c = 10; c > i; c--) {
//     s += "2";
//   }
//   s += "\n";
// }
// for (j = 0; j <= 10; j++) {
//   for (d = 0; d < j; d++) {
//     s += " ";
//   }
//   for (e = 10; e > j; e--) {
//     s += "0";
//   }
//   s += "5";
//   for (f = 10; f > j; f--) {
//     s += "2";
//   }
//   s += "\n";
// }

// // segitiga mepet kanan
// for (i = 10; i > 0; i--) {
//   for (a = 0; a < i; a++) {
//     s += " ";
//   }
//   for (b = 10; b > i; b--) {
//     s += "+";
//   }
//   s += "\n";
// }
// for (j = 0; j < 10; j++) {
//   for (a = 0; a < j; a++) {
//     s += " ";
//   }
//   for (c = 10; c > j; c--) {
//     s += "+";
//   }
//   s += "\n";
// }

// // segitiga mepet tembok kiri done
// for (i = 1; i < 10; i++) {
//   for (a = 0; a < i; a++) {
//     s += "*";
//   }
//   s += "\n";
// }
// for (j = 10; j > 0; j--) {
//   for (a = 0; a < j; a++) {
//     s += "*";
//   }
//   s += "\n";
// }

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

// console.log(s);
