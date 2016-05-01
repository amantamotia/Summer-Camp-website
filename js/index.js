


$(document).ready(function(){
  $("#Home").slideDown('fast');
 $("#Basketball_Camp").hide('fast');
  $("#Baseball_Camp").hide('fast');
  $("#Physical_Training").hide('fast');
  $("#Band_Camp").hide('fast');
  $("#Swimming").hide('fast');
  $("#Nature_Discovery").hide('fast');

		  $( "#hm" ).click(function() {
				  $( "#Home" ).slideDown( "fast", function() {
					  $("#Basketball_Camp").hide('fast');
					  $("#Baseball_Camp").hide('fast');
					  $("#Physical_Training").hide('fast');
					  $("#Band_Camp").hide('fast');
					  $("#Swimming").hide('fast');
					  $("#Nature_Discovery").hide('fast');
				  });
			});



			$( "#bsc" ).click(function() {
				  $( "#Basketball_Camp" ).slideDown( "fast", function() {
					  $("#Home").hide('fast');
					  $("#Baseball_Camp").hide('fast');
					  $("#Physical_Training").hide('fast');
					  $("#Band_Camp").hide('fast');
					  $("#Swimming").hide('fast');
					  $("#Nature_Discovery").hide('fast');
				  });
			});

			$( "#bbc" ).click(function() {
				  $( "#Baseball_Camp" ).slideDown( "fast", function() {
					  $("#Home").hide('fast');
					  $("#Basketball_Camp").hide('fast');
					  $("#Physical_Training").hide('fast');
					  $("#Band_Camp").hide('fast');
					  $("#Swimming").hide('fast');
					  $("#Nature_Discovery").hide('fast');
				  });
			 });
			$( "#pt" ).click(function() {
				  $( "#Physical_Training" ).slideDown( "fast", function() {
					  $("#Home").hide('fast');
					  $("#Baseball_Camp").hide('fast');
					  $("#Basketball_Camp").hide('fast');
					  $("#Band_Camp").hide('fast');
					  $("#Swimming").hide('fast');
					  $("#Nature_Discovery").hide('fast');
				  });
			 });
			$( "#bc" ).click(function() {
				  $( "#Band_Camp" ).slideDown( "fast", function() {
					  $("#Home").hide('fast');
					  $("#Baseball_Camp").hide('fast');
					  $("#Physical_Training").hide('fast');
					  $("#Basketball_Camp").hide('fast');
					  $("#Swimming").hide('fast');
					  $("#Nature_Discovery").hide('fast');
				  });
			 });
			$( "#swim" ).click(function() {
				  $( "#Swimming" ).slideDown( "fast", function() {
					  $("#Home").hide('fast');
					  $("#Baseball_Camp").hide('fast');
					  $("#Physical_Training").hide('fast');
					  $("#Band_Camp").hide('fast');
					  $("#Basketball_Camp").hide('fast');
					  $("#Nature_Discovery").hide('fast');
				  });
			 });
			$( "#nd" ).click(function() {
				  $( "#Nature_Discovery" ).slideDown( "fast", function() {
					  $("#Home").hide('fast');
					  $("#Baseball_Camp").hide('fast');
					  $("#Physical_Training").hide('fast');
					  $("#Band_Camp").hide('fast');
					  $("#Swimming").hide('fast');
					  $("#Basketball_Camp").hide('fast');
				  });


			});




  });
