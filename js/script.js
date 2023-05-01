function whatsapp() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date").value;
  var address = document.getElementById("address").value;
  var phone = document.getElementById("phone").value;
  var father = document.getElementById("father").value;
  var parentphone = document.getElementById("parent-phone").value;
  var education = document.getElementById("education").value;
  var pastschool = document.getElementById("past-school").value;
  var arabic = document.getElementById("arabic-value").value;
  var english = document.getElementById("english-value").value;
  var math = document.getElementById("math-value").value;
  var it = document.getElementById("it-value").value;
  var recitation = document.getElementById("recitation").value;
  var achievement = document.getElementById("achievement").value;
  var superiority = document.getElementById("superiority").value;
  var hobby = document.getElementById("hobby").value;
  var blog = document.getElementById("blog").value;
  var video = document.getElementById("video").value;
  var facebook = document.getElementById("facebook").value;
  var instagram = document.getElementById("instagram").value;
  var whatsapp = document.getElementById("whatsapp").value;
  var example = document.getElementById("example").value;
  var recommendation = document.getElementById("recommendation").value;
  var motivation = document.getElementById("motivation").value;
  var readiness = document.getElementById("readiness").value;

  var url =
    "https://wa.me/6285342894681?text=" +
    "*Calon Santri Baru Ma'had IT* " +
    "%0a" +
    "*DATA PRIBADI*" +
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
    "%0a" +
    "*RIWAYAT PENDIDIKAN*" +
    "%0a" +
    "*Pendidikan Terakhir :* " +
    education +
    "%0a" +
    "*Alamat Sekolah Terakhir :* " +
    pastschool +
    "%0a" +
    "*Nilai B. Arab :* " +
    arabic +
    "%0a" +
    "*Nilai B. Inggris :* " +
    english +
    "%0a" +
    "*Nilai Matematika :* " +
    math +
    "%0a" +
    "*Nilai TIK :* " +
    it +
    "%0a" +
    "*Jumlah Hafalan :* " +
    recitation +
    "%0a" +
    "%0a" +
    "PRESTASI PENDAFTAR" +
    "%0a" +
    "*Kelebihan Pada IT / DKV :* " +
    achievement +
    "%0a" +
    "*Pencapaian / Prestasi / Keahlian Khusus :* " +
    "%0a" +
    superiority +
    "%0a" +
    "%0a" +
    "*Hobby :* " +
    "%0a" +
    "%0a" +
    "*WEB DAN SOSMED*" +
    "%0a" +
    "*Web Blog :* " +
    blog +
    "%0a" +
    "*Pernah Upload Video Di YouTube? :* " +
    video +
    "%0a" +
    "*Facebook :* " +
    facebook +
    "%0a" +
    "*Instagram :* " +
    instagram +
    "%0a" +
    "*No. Whatsapp :* " +
    whatsapp +
    "%0a" +
    "%0a" +
    "*TOKOH DAN ULAMA*" +
    "%0a" +
    "*Tokoh Teladan Dan Cara Menirunya :* " +
    "%0a" +
    example +
    "%0a" +
    "%0a" +
    "*REKOMENDASI USTADZ / PESANTREN / YAYASAN*" +
    "%0a" +
    "*Darimana Tahu Ma'had IT? :* " +
    recommendation +
    "%0a" +
    "*Motivasi Masuk Ma'had IT :* " +
    motivation +
    "%0a" +
    "*Siap Ikuti Aturan? :* " +
    readiness;

  window.open(url, "_blank").focus();
}
