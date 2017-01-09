$(document).ready(function(){
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?', function(data) {
    if(data.stream === undefined){
      $('#FCC').css('background-color', '#ff4d4d');
      $('#FCCdata').text('User does not exist');
      $('#FCC .watch').remove();
    }
    else if(data.stream === null){
      $('#FCC').css('background-color', '#ff4d4d');
      $('#FCCdata').text('Offline Now');
    }
    else{
      $('#FCC').css('background-color', '#66ff66');
      $('#FCCdata').text(data.stream.game);
    }
  });
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/Sodapoppin?callback=?', function(data2) {
    if(data2.stream === null){
      $('#Sodapoppin').css('background-color', '#ff4d4d');
      $('#Sodapoppindata').text('Offline Now');
    }
    else{
      $('#Sodapoppin').css('background-color', '#66ff66');             
      $('#Sodapoppindata').text(data2.stream.game);
    }
    if(data2.stream === undefined){
      $('#Sodapoppin').css('background-color', '#ff4d4d');
      $('#Sodapoppindata').text('User does not exist');
      $('#Sodapoppin .watch').remove();
    }
  });
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/TrumpSC?callback=?', function(data3) {
    if(data3.stream === null){
      $('#Trumpsc').css('background-color', '#ff4d4d');
      $('#Trumpscdata').text('Offline Now');
    }
    else{
      $('#Trumpsc').css('background-color', '#66ff66');
      $('#Trumpscdata').text(data3.stream.game);
    }
    if(data3.stream === undefined){
      $('#Trumpsc').css('background-color', '#ff4d4d');
      $('#Trumpscdata').text('User does not exist');
      $('#Trumpsc .watch').remove();
    }
  });
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/imaqtpie?callback=?', function(data4) {
    if(data4.stream === null){
      $('#imaqtpie').css('background-color', '#ff4d4d');
      $('#imaqtpiedata').text('Offline Now');
    }
    else{
      $('#imaqtpie').css('background-color', '#66ff66');
      $('#imaqtpiedata').text(data4.stream.game);
    }
    if(data4.stream === undefined){
      $('#imaqtpie').css('background-color', '#ff4d4d');
      $('#imaqtpie').text('User does not exist');
      $('#imaqtpie .watch').remove();
    }
  });
});