function login(username,password){
    Jam = new Date().getHours();
    Detik = new Date().getSeconds();
    Menit = new Date().getMinutes();
    switch (new Date().getDay()) {
        case 0:
          day = "Minggu";
          break;
        case 1:
          day = "Senin ";
          break;
        case 2:
           day = "Selasa";
          break;
        case 3:
          day = "Rabu";
          break;
        case 4:
          day = "Kamis";
          break;
        case 5:
          day = "Jumat";
          break;
        case 6:
          day = "Sabtu";
      }
    Tanggal = new Date().getDate();
    Bulan = new Date().getMonth();
    Tahun = new Date().getFullYear();
    if (username == "admin" && password == "admin123"){
        window.alert("Login Success !");
        document.getElementById("titlesite").innerHTML = "Hello Admin!";
        document.getElementById("riwayat").innerHTML = "Admin";
        document.getElementById("jam").innerHTML = Jam+":"+Menit+":"+Detik;
        document.getElementById("tanggal").innerHTML = Tanggal+"/"+(Bulan+=1)+"/"+Tahun;
        document.getElementById("hari").innerHTML = day;
    }else{
        window.alert("Login Failed!");
    }
}

var inputLabel = document.getElementById('inputLabel');
     
    function pushBtn(obj) {
         
        var pushed = obj.innerHTML;
         
        if (pushed == '=') {
            // Calculate
            inputLabel.innerHTML = eval(inputLabel.innerHTML).toFixed(8);
             
        } else if (pushed == 'CLEAR') {
            // All Clear
            inputLabel.innerHTML = '0';
             
        } else {
            if (inputLabel.innerHTML == '0') {
                inputLabel.innerHTML = pushed;
                 
            } else {
                inputLabel.innerHTML += pushed;   
            }
        }
    }