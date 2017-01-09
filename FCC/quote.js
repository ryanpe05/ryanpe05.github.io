$(document).ready(function() {
  $('#getMessage').on('click', function() {  $.ajax( {
      url: 'https://crossorigin.me/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
      success: function(data) {
        var post = data.shift();
        $('.content').html(post.content + "<p>&mdash; " + post.title + "</p>");
      },
      cache: false
    });
  });
  
  $("#tweetIt").on('click', function() {
    var tweetHTML = document.getElementById("quote");
    var tweetMaterial = tweetHTML.textContent;
    console.log(tweetMaterial);
    
    window.open( 'http://twitter.com/home?status=' + tweetMaterial);
  });
  
});