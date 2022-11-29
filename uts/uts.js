function bayarwarnet(){
    var namakom=document.getElementById('namakom');
  var jamkom=document.getElementById('jamkom');
  var jeniswarnet=document.getElementById('jeniswarnet');
  var hargawarnet;
      if(jeniswarnet.value=="komputer"){
          hargawarnet=5000;
          var bayar=jamkom.value*hargawarnet;
          document.getElementById('hasilwarnet').value=bayar;
      }
     else if(jeniswarnet=="Ps2"){
      hargawarnet=3000;
      var bayar=jamkom.value*hargawarnet;
      document.getElementById('hasilwarnet').value=bayar;
     }
     else{
      hargawarnet=4000;
      var bayar=jamkom.value*hargawarnet;
      document.getElementById('hasilwarnet').value=bayar;
     }
  }


function cekumur(){
    var umur=document.getElementById('umur');
    var subumur=document.getElementById('subumur');
    var hasilumur=document.getElementById('hasilumur');

    if(umur.value >=1 && umur.value <=5){
        hasilumur.value ="Anda dalam masa balita";
    }
    else if(umur.value>5 && umur.value <=12){
        hasilumur.value ="Anda dalam masa anak anak";
}
else if(umur.value>12 && umur.value <=17){
        hasilumur.value ="Anda dalam masa remaja";
}
else if(umur.value>17 && umur.value <=45){
        hasilumur.value ="Anda termasuk dewasa";
}
else{
        hasilumur.value ="Anda sudah lansia";
}}

function login(){
    var done=0;
    var username=document.getElementById('username');
    var password=document.getElementById('password');
    window.location.href = "uts.html";

    if(username.value=="tento" && password.value=="1"){
      alert("Halo Tento!!! Kamu dapat masuk ke laman UTS ");
    }
    else{
      alert("Selamat !!! Kamu dapat masuk ke laman UTS ");
    }
  }

  function cekjawab(){
    var soal1=document.getElementById('soal1');
    var soal2=document.getElementById('soal2');
    var soal3=document.getElementById('soal3');
    var jwbsoal1=document.getElementById('jwbsoal1')
    var jwbsoal2=document.getElementById('jwbsoal2');
    var jwbsoal3=document.getElementById('jwbsoal3');

    if(soal1.value=="zoro"){
       jwbsoal1.innerHTML='Jawaban nomor 1 benar';
       jwbsoal1.style="color:azure;"
    }
    else{
       jwbsoal1.innerHTML='Jawaban anda salah';
       jwbsoal1.style="color:red"; 
    }
    if(soal2.value=="sanji"){
       jwbsoal2.innerHTML='Jawaban nomor 2 benar';
       jwbsoal2.style="color:azure"; 
    }
    else{
        jwbsoal2.innerHTML='Jawaban salah';
       jwbsoal2.style="color:red"; 
    }
    if(soal3.value=="rayleigh"){
       jwbsoal3.innerHTML='Jawaban nomor 3 benar';
       jwbsoal3.style="color:azure"; 
    }
    else{
        jwbsoal3.innerHTML='Jawaban salah';
       jwbsoal3.style="color:red"; 
    }
}

function insert(angka){
	document.kalku.input.value = document.kalku.input.value + angka;
}

function Hitung(){
	var hasil = document.kalku.input.value;
	document.kalku.input.value = eval(hasil);
}

function AC(){
	document.kalku.input.value = "";
}

function Del(){
	var hasil = document.kalku.input.value;
	document.kalku.input.value = hasil.substring(0,hasil.length-1);
}

function cekbmi() {
	var tinggibmi = document.getElementById('tinggibmi').value;
	var beratbmi = document.getElementById('beratbmi').value;
	
        if(tinggibmi > 0 && beratbmi > 0){	
		var bmi = beratbmi/(tinggibmi/100*tinggibmi/100);
		document.getElementById('bmi').value = bmi;
		
		if(bmi < 18.5){
			document.getElementById('hasilbmi').value = "Anda terlalu kurus.";
		}
		if(bmi > 18.5 && bmi < 24.9){
			document.getElementById('hasilbmi').value = "Anda normal dan sehat.";
		}
		if(bmi > 25){
			document.getElementById('hasilbmi').value = "Anda kelebihan berat badan.";
        }
}
	else{
		alert("Masukan informasi berat dan tinggi badan!")
	}
}

function cekbadan() {
    var jeniskelamin=document.getElementById("jeniskelamin").value;
	var tinggibbi = document.getElementById('tinggibbi').value;
	
        if(tinggibbi > 0){	
            if(jeniskelamin=="cowok"){
        var bbi= (tinggibbi - 100) - ((tinggibbi - 100)*10/100);
		document.getElementById('bbi').value = bbi;
	}
        else if(jeniskelamin=="cewek"){
            var bbi= (tinggibbi - 100) - (15/100 * (tinggibbi- 100));
		document.getElementById('bbi').value = bbi;
    }
}
	else{
		alert("Masukan informasi berat dan tinggi badan!")
	}
}

function bayar(){
    var pilihan=document.getElementById('pilihan').value;
    var jumlah=document.getElementById('jlhbrg').value;
    var harga;

    if(pilihan=="tas"){
        harga=35000;
        var total=harga*jumlah;
        document.getElementById('totbayar').value=total;
    }
    else if(pilihan=="jam"){
        harga=45000;
        var total=harga*jumlah;
        document.getElementById('totbayar').value=total;
    }
    else if(pilihan=="sepatu"){
        harga=50000;
        var total=harga*jumlah;
        document.getElementById('totbayar').value=total;
    }
}
function cekumur(){
    var umur=document.getElementById('umur');
    var subumur=document.getElementById('subumur');
    var hasilumur=document.getElementById('hasilumur');

    if(umur.value >=1 && umur.value <=5){
    subumur.addEventListener('click',function name(params) {
        hasilumur.value ="Anda dalam masa balita";
       })
}
    else if(umur.value>5 && umur.value <=12){
    subumur.addEventListener('click',function name(params) {
        hasilumur.value ="Anda dalam masa anak anak";
       })
}
else if(umur.value>12 && umur.value <=17){
    subumur.addEventListener('click',function name(params) {
        hasilumur.value ="Anda dalam masa remaja";
    })
}
else if(umur.value>17 && umur.value <=45){
    subumur.addEventListener('click',function name(params) {
        hasilumur.value ="Anda termasuk dewasa";
    })
}
else{
    subumur.addEventListener('click',function name(params) {
        hasilumur.value ="Anda sudah lansia";
    })
}}