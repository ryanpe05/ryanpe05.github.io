$(document).ready(function() {
  var received;
  $("#random").click(function(){
  window.open("https://en.wikipedia.org/wiki/Special:Random");
 });
 $("#submit").click(function(){
   $('#instructions').empty();
   $('#mytable').empty();
   $('#mytable').css(
     'display', 'none'
   );
   var search = $("#searchIt")[0].value;
   $.ajax( {
    url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + search,
    crossDomain: true,
    dataType: 'jsonp'
    } ).done( function ( data ) {
        render(data);
    } );
 });
 function render(wikiData){
     $("#topic").html(wikiData[0]);
     $('#instructions').html("Below are some helpful Wikipedia links!");
     for(i = 0; i < 20; i++){
       $('#mytable')
         .append($("<div/>", {"class": "well link", "id": "slider"})
           .append($("<a/>",{"href": wikiData[3][i], "text": wikiData[1][i]}), $("<p/>",{"text": wikiData[2][i]}))
       );
       if(wikiData[1][i+1] === undefined){
         break;
       }
     }
   $("#mytable").slideDown(1000);
   }
  $(document).keypress(function(e){
        if(e.which == 13){//Enter key pressed
          $('#submit').click();//Trigger search button click event
          e.preventDefault();
        }
    });
});