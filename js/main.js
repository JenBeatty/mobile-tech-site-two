$().ready(function() {

  $("button").click(function(){
  if (localStorage.buttonClick) {
   localStorage.buttonClick=Number(localStorage.buttonClick)+1;
   document.getElementById("result").innerHTML = "<em>You have clicked the button " + localStorage.buttonClick + " time(s).</em>";
    }
    else{
     localStorage.buttonClick=1;
     document.getElementById("result").innerHTML = "<em>You have clicked the button " + localStorage.buttonClick + " time(s).</em>";
}

});

  $(".nostore").click(function(){
    localStorage.clear();
    document.getElementById("result").innerHTML = "<em>You have clicked the button " + localStorage.buttonClick + " time(s).</em>";
    
  });


});