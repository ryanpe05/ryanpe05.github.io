$( document ).ready(function() {
  var started = false;
  var timer;
  $('#work').click(function(e){
    var curWork = $('#work h3').html();
    var div2Height = $(this).innerHeight();
    var div2Offset = $(this).offset(); 
    var y2 = e.pageY - div2Offset.top;
    if(div2Height/2 > y2){
      curWork = dateChange(curWork,1);
    }
    else{
      curWork = dateChange(curWork,0);
    }
    $('#work h3').html(curWork);
    if($('#starter h2').html().indexOf('&nbsp; Work:') >= 0 && !started){
      $('#starter h2 b').remove();
      $('#starter h2').append('<b>&nbsp;' +  curWork + '</b>');
    }
  });
  $('#rest').click(function(e){
    var curRest = $('#rest h3').html();
    var divHeight = $(this).innerHeight();
    var divOffset = $(this).offset(); 
    var y = e.pageY - divOffset.top;
    if(divHeight/2 > y){
      curRest = dateChange(curRest,1);
    }
    else{
      curRest = dateChange(curRest,0);
    }
    $('#rest h3').html(curRest);
    if($('#starter h2').html().indexOf('&nbsp; Rest:') >= 0 && !started){
      $('#starter h2 b').remove();
      $('#starter h2').append('<b>&nbsp;' +  curRest + '</b>');
    }
  });
  $('#starter').click(function(){
    if(!started){
      started = true;
      timer = setInterval(function(){
        var inner = $('#starter h2 b').html();
        var data = inner.slice(6,inner.length);
        data = dateChange(data, 0);
        $('#starter h2 b').remove();
        $('#starter h2').append('<b>&nbsp;' +  data + '</b>');
        if(data === '0:00'){
          var audio = new Audio('http://www.oringz.com/oringz-uploads/sounds-917-communication-channel.mp3');
			    audio.play();
          if($('#starter h2').html().indexOf('&nbsp; Rest:') >= 0){
            var workTime = $('#work h3').html();
            $('#starter h2').remove();
            $('#starter').append('<h2>&nbsp; Work:<b>&nbsp;' + workTime + '</b></h2>');
          }
          else{
            var restTime = $('#rest h3').html();
            $('#starter h2').remove();
            $('#starter').append('<h2>&nbsp; Rest:<b>&nbsp;' + restTime + '</b></h2>');
          }
        }
      }, 1000);
    }
    else{
      started = false;
      clearInterval(timer);
    }
  });
  function dateChange(date, action){
    date = date.split(':');
    var minutes = parseInt(date[0]);
    var seconds = parseInt(date[1]);
    if(action === 0){
      seconds--;
      if(seconds < 0){
        seconds = 59;
        minutes--;
      }
    }else{
      seconds++;
      if(seconds === 60){
        seconds = 0;
        minutes++;
      }
    }
    var strSec = seconds.toString();
    if(strSec.length === 1){
      strSec = '0' + strSec;
    }
    var newDate = minutes.toString() + ':' + strSec;
    return newDate;
  }
});