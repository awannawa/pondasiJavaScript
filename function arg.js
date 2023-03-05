function noHpNamaP() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

var coba = noHpNamaP("123:awann", "456:awann", "789:awann", "0123:awann");
console.log(coba);
