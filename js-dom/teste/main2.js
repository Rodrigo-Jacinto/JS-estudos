(function(win, doc){
  'use strict';

  var cont = 0;
  var btn = document.querySelector('[data-js="btn"]');
  var id;
  function timer() {
    console.log("Timer: ", cont++);
    id = setTimeout(timer, 1000);
  }
  
  timer();
  btn.addEventListener('click', function(){
    clearTimeout(id);
  }, false);

})(window, document);
