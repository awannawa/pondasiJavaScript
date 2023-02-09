var makanan = prompt(
  "Masukkan nama makanan/minuman yang mau dicek \n (cth: nasi, daging, susu, berger, martabak)"
);

switch (makanan) {
  case `nasi`:
  case `dageing`:
  case `susu`:
    alert(`makanan/minuman SEHAT!`);
    break;
  case `berger`:
  case `martabak`:
    alert(`makanan/minuman TDK SSEHAT!`);
    break;
  default:
    alert(`Anda memasukkan nama makanan / minuman yang tidak ada di db kami`);
    break;
}
