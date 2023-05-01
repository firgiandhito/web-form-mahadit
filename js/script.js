function whatsapp() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date").value;
  var address = document.getElementById("address").value;
  var phone = document.getElementById("phone").value;
  var father = document.getElementById("father").value;
  var parentphone = document.getElementById("parent-phone").value;
  var message = document.getElementById("message").value;

  var url =
    "https://wa.me/6285342894681?text=" +
    "*Calon Santri Baru Ma'had IT* " +
    "%0a" +
    "%0a" +
    "*Nama :* " +
    name +
    "%0a" +
    "*Email :* " +
    email +
    "%0a" +
    "*TTL :* " +
    date +
    "%0a" +
    "*Alamat :* " +
    address +
    "%0a" +
    "*No. Telp :* " +
    phone +
    "%0a" +
    "*Nama Bapak :* " +
    father +
    "%0a" +
    "*No. telepon ortu :* " +
    parentphone +
    "%0a" +
    "*Pesan :* " +
    message;

  window.open(url, "_blank").focus();
}
