// main js file 
$(document).ready(function () {
  //your code here

	$('#home').click(function() 
	{
		 // $('.container').animate({height:'550px'}, 250);
		 // $('#title').load("aboutme.html #hometitle");

		 $.ajax({
        url : "test.txt",
        dataType: "text",
        success : function (data) {
            $("#title").html(data);
        }
    });

		 alert('poo');
	});

});