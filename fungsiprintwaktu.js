function printWaktu() {
    let date = new Date();

    // Mendefinisikan opsi untuk menampilkan tanggal
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    // Membuat string yang berisi waktu
    let timeString = date.toLocaleTimeString("id-ID", { hour12: false });
    // Membuat string yang berisi tanggal
    let dateString = date.toLocaleDateString("id-ID", options);
    // Menggabungkan string waktu dan tanggal
    let dateTimeString = dateString + " || " + timeString;
    console.log(dateTimeString)
  }

  printWaktu();