 //calculator bmi
 let btn_hitung = document.getElementById('btn-hitung');
 let btn_reset = document.getElementById('btn-reset');
 btn_hitung.addEventListener('click', function(){
     let weight = document.getElementById('weight-input').value;
     let height = document.getElementById('height-input').value;
     let finalbmi = (weight / (height * height) * 10000);
     document.getElementById('bmi-output').value = finalbmi;
     if(finalbmi <= 18.4 ){
         alert('underweight')
     }else if(finalbmi >= 18.5 && finalbmi <= 24.9){
         alert('Normal')
     }else if(finalbmi >= 25.0 && finalbmi <= 39.9){
        alert('Overweight')
    } else if(finalbmi >= 40.0){
        alert('Overweight')
    } 
 })
 btn_reset.addEventListener('click', function(){
     let reset = 0;
     document.getElementById('bmi-output').value = reset;
     document.getElementById('weight-input').value = reset;
     document.getElementById('height-input').value = reset;
     document.getElementById('quiz-output').value = reset;
 })