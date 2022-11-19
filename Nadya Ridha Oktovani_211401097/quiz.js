(function() {
    var questions = [{
      question: "Berapakah Hasil dari 20 mod 3?",
      choices: [3, 5, 6, 4, 2],
      correctAnswer: 4
    }, {
      question: "Berapa Hasil dari akar 81?",
      choices: [23, 24, 9, 16, 18],
      correctAnswer: 2
    }, {
      question: "Berapa Hasil dari 150-16?",
      choices: [63, 72, 108, 134, 156],
      correctAnswer: 3
    }, {
      question: "Berapa Hasil dari 1000/200?",
      choices: [4, 5, 6, 7, 8],
      correctAnswer: 1
    }, {
      question: "Berapakah Hasil dari 8*8?",
      choices: [64, 30, 40, 50, 65],
      correctAnswer: 0
    }];
    
    var questionCounter = 0; 
    var selections = []; 
    var quiz = $('#quiz'); 
    
    
    displayNext();
    
    
    $('#next').on('click', function (e) {
      e.preventDefault();
      
    
      if(quiz.is(':animated')) {        
        return false;
      }
      choose();
      

      if (isNaN(selections[questionCounter])) {
        alert('Pilih jawaban atau saya denda 100jeti!');
      } else {
        questionCounter++;
        displayNext();
      }
    });
    
   
    $('#prev').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      choose();
      questionCounter--;
      displayNext();
    });
    

    $('#start').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      questionCounter = 0;
      selections = [];
      displayNext();
      $('#start').hide();
    });
    

    $('.button').on('mouseenter', function () {
      $(this).addClass('active');
    });
    $('.button').on('mouseleave', function () {
      $(this).removeClass('active');
    });
    

    function createQuestionElement(index) {
      var qElement = $('<div>', {
        id: 'question'
      });
      
      var header = $('<h2>Pertanyaan ' + (index + 1) + ':</h2>');
      qElement.append(header);
      
      var question = $('<p>').append(questions[index].question);
      qElement.append(question);
      
      var radioButtons = createRadios(index);
      qElement.append(radioButtons);
      
      return qElement;
    }
    

    function createRadios(index) {
      var radioList = $('<ul>');
      var item;
      var input = '';
      for (var i = 0; i < questions[index].choices.length; i++) {
        item = $('<li>');
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += questions[index].choices[i];
        item.append(input);
        radioList.append(item);
      }
      return radioList;
    }
    

    function choose() {
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }
    
    // Displays next requested element
    function displayNext() {
      quiz.fadeOut(function() {
        $('#question').remove();
        
        if(questionCounter < questions.length){
          var nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion).fadeIn();
          if (!(isNaN(selections[questionCounter]))) {
            $('input[value='+selections[questionCounter]+']').prop('checked', true);
          }
          
          if(questionCounter === 1){
            $('#prev').show();
          } else if(questionCounter === 0){
            
            $('#prev').hide();
            $('#next').show();
          }
        }else {
          var scoreElem = displayScore();
          quiz.append(scoreElem).fadeIn();
          $('#next').hide();
          $('#prev').hide();
          $('#start').show();
        }
      });
    }
    
    function displayScore() {
      var score = $('<p>',{id: 'question'});
      
      var numCorrect = 0;
      for (var i = 0; i < selections.length; i++) {
        if (selections[i] === questions[i].correctAnswer) {
          numCorrect++;
        }
      }
      
      score.append('Kamu Menjawab Benar ' + numCorrect + ' pertanyaan dari ' + 
                   questions.length + ' pertanyaan!!!');
      return score;
    }
  })();