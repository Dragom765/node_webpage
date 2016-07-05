$(document).ready(function() {
  
  $("#greetings-button").click(function() {
    $.ajax({
      "method": "GET",
      "crossDomain": true,
      "url": "http://localhost:9000/api/",
      "headers": {
        "cache-control": "no-cache"
      },
      "success": function(data) {
          $("#greeting").empty();
          $("#bears").empty();
          $("#greeting").append("<p>"+data.message+"\n</p>");
      }
    });
  });
  
  $("#get-button").click(function() {
    $(this).text('Refresh list');
    $.ajax({
      "method": "GET",
      "crossDomain": true,
      "url": "http://localhost:9000/api/bears/",
      "headers": {
        "cache-control": "no-cache"
      },
      "success": function(data) {
        $("#bears").empty();
        $.each(data, function(i, bear) {
          $("#bears").append("<p>Name: "+bear.name+"\nID: "+bear.id+"\n</p>");
        });
      }
    });
  });

  $("#add-bear").click(function() {
    
    if($("#id").val() != '')
      alert("You cannot make the ID of the bear yourself, please clear the ID bar");
    
    else if($("#name").val() == '')
      alert("Please give the bear a name")
    
    else{
      $.ajax({
        "method": "POST",
        "crossDomain": true,
        "url": "http://localhost:9000/api/bears/",
        "data": {
          "name": $("#name").val()
        },
        "headers": {
          "cache-control": "no-cache"
        },
        "success": function(result) {
          $("#bears").empty();
          $("#greeting").empty();
          $("#bears").append("<p>"+result.message+"\n</p>");
        }
      });
    }
  });
  
  $("#update-bear").click(function() {
    
    if($("#id").val() == '' || $("#name").val() == '')
      alert("Please make sure both fields are filled in before requesting a bear's name to be updated");
    else{
      var url = "http://localhost:9000/api/bears/"
      
      $.ajax({
        "method": "PUT",
        "crossDomain": true,
        "url": "http://localhost:9000/api/bears/"+$("#id").val(),
        "data": {
          "name": $("#name").val()
        },
        "headers": {
          "cache-control": "no-cache"
        },
        "success": function(result) {
          $("#bears").empty();
          $("#greeting").empty();
          $("#bears").append("<p>"+result.message+"\n</p>");
        }
      });
    }
  });
  
    $("#delete-bear").click(function() {
    
    if($("#id").val() == '')
      alert("Please make sure the ID is listed to delete the desired bear");
    else{
      var url = "http://localhost:9000/api/bears/"
      
      $.ajax({
        "method": "DELETE",
        "crossDomain": true,
        "url": "http://localhost:9000/api/bears/"+$("#id").val(),
        "headers": {
          "cache-control": "no-cache"
        },
        "success": function(result) {
          $("#bears").empty();
          $("#greeting").empty();
          $("#bears").append("<p>"+result.message+"\n</p>");
        }
      });
    }
  });
 
});
