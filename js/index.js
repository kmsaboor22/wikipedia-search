// running jquery
$(document).ready(function() {
  // when "search" is click on run code
  $('#search').click(function() {
    // get search input
    var searchTerm = $('#searchTerm').val();
    //API URL with "search term" being the input used to find results from wiki
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {
        /* 
        //Get heading 
        console.log(data[1][0]);
        //Get description 
        console.log(data[2][0]);
        //Get link 
        console.log(data[3][0]);
         */
        $('#output').html('');
        for (var i = 0; i < data[1].length; i++) {
          $('#output').prepend("<li><a href= " + data[3][i] +">"+ data[1][i] +"</a><p>"+ data[2][i] + "</p></li>");
        }
      },
      error: function(errorMessage) {
        alert("Error");
      }
    });
  });
});