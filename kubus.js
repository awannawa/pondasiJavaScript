// fungsi di dalam fungsi

function kubus(a, b) {
  var totalKubus;
  totalKubus = a * a * a + b * b * b;

  return totalKubus;
}

function jumlahDua(a, b) {
  var jum;
  jum = a + b;
  return jum;
}
alert(jumlahDua(kubus(6, 5), kubus(7, 8)));

// pengulangan arguments di dalam fungsi
//??
