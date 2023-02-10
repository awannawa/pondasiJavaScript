var s = "";

for (i = 0; i <= 10; i++) {
  //s += "*";
  for (j = 10; j > i; j--) {
    s += " ";
  }
  for (k = 0; k < i; k++) {
    s += "*";
  }
  s += "*";
  for (a = 0; a < i; a++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);
