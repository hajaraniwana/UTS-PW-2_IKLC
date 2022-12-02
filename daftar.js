function daftar(e) {
    event.preventDefault();
    
    
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var errorUser = document.getElementById('error-user')
    var errorPass = document.getElementById('error-pass')
    
    var user = {
        username : username,
        password : pass,
    }
    
    var json = JSON.stringify(user)
    localStorage.setItem(username,json)
    
        alert('regis berhasil')
        window.localStorage = "login.html"
        window.location.href ='login.html'
    }
    
    function login(e) {
        event.preventDefault();
        
        var username = document.getElementById('username').value
        var pass = document.getElementById('password').value
        var errorUser = document.getElementById('error-user')
        var errorPass = document.getElementById('error-pass')
    
        var user = localStorage.getItem(username);
        var data = JSON.parse(user);
    
        if(user == null) {
           errorUser.style.display = 'block'
           errorPass.style.display = 'none'
        } else if(username == data.username && pass == data.password){
            alert('login berhasil')
            window.location.href = "berhasil.html"
    
            errorUser.style.display = 'none'
            errorPass.style.display = 'none'
        } else {
            errorPass.style.display = 'block'
            errorUser.style.display = 'none'
        }
    }
    
    const btnLogout = document.getElementById('menuList')
    btnLogout.addEventListener('click', function(){
        window.location.href ='login.html'
    });