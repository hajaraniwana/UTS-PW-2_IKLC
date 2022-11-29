//navbar
const nav = document.querySelector('.navbar');
window.onscroll = function () { 
    var top = window.scrollY;
    console.log(top);
    if (top >= 680) {
        nav.classList.add('activated')
    }
    else { 
        nav.classList.remove('activated');
    }
}