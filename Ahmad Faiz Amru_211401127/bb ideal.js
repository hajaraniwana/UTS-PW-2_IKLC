var tinggi, berat, bmi;

function hitung() {
  tinggi = parseFloat(document.getElementById("ipt_t").value);

  if (tinggi <= 140) {
    alert("Masukkan Tinggi badan lebih dari 100");
    parseFloat((document.getElementById("ipt_t").value = ""));
  }

  const checkedGender = document.querySelector('input[type="radio"]:checked')
    .value;

  switch (checkedGender) {
    case "laki_laki":
      bmi = tinggi - 100 - ((tinggi - 100) * 10) / 100;
      break;
    case "perempuan":
      bmi = tinggi - 100 - ((tinggi - 100) * 15) / 100;
      break;
  }

  document.getElementById("bmi").innerHTML =
    "Hasil perhitungan BBI : " + `${bmi} Kg`;
}
