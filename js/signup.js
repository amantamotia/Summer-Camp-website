

    function isEmpty(fieldValue) {
        //This trims the value of the field.
        return $.trim(fieldValue).length == 0;
        }

    function isValidState(state) {
        var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
        "DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA",
        "MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ",
        "NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX",
        "UT","VA","VT","WA","WI","WV","WY");
        for(var i=0; i < stateList.length; i++)
            if(stateList[i] == $.trim(state))
                return true;
        return false;
        }

    // copied from stackoverflow.com, not checked or validated for correctness.
    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
        }

    // for date validation
    function isValidDate() {
        var day = $("#dd").val();
        var month = $("#mm").val();
        var year = $("#yyyy").val();

        var test_Date = new Date(year, month-1, day);
        var test_Day = test_Date.getDate();
        var test_Month = test_Date.getMonth()+1;
        var test_Year = test_Date.getFullYear();

        if(day == test_Day && month == test_Month && year == test_Year)
            return true;
        else
            return false;
    }

$(document).ready( function() {
	var focus_temp = $('#check_focus');
	focus_temp.focus();
    var errorStatusHandle = $('#message_line');
    var elementHandle = new Array(23);
    elementHandle[0] = $('[name="check_program"]');
    elementHandle[1] = $('[name="parent_fname"]');
    elementHandle[2] = $('[name="parent_lname"]');
    elementHandle[3] = $('[name="relationship"]');
    elementHandle[4] = $('[name="parent_address"]');
    elementHandle[5] = $('[name="parent_city"]');
    elementHandle[6] = $('[name="parent_state"]');
    elementHandle[7] = $('[name="parent_zip"]');
    elementHandle[8] = $('[name="parent_home_area_phone"]');
    elementHandle[9] = $('[name="parent_home_prefix_phone"]');
    elementHandle[10] = $('[name="parent_h_phone"]');
    elementHandle[11] = $('[name="parent_email"]');
    elementHandle[12] = $('[name="child_fname"]');
    elementHandle[13] = $('[name="child_lname"]');
    elementHandle[14] = $('[name="gender"]');
    elementHandle[15] = $('[name="dd"]');
    elementHandle[16] = $('[name="mm"]');
    elementHandle[17] = $('[name="yyyy"]');
    elementHandle[18] = $('[name="emergency_fname"]');
    elementHandle[19] = $('[name="emergency_lname"]');
    elementHandle[20] = $('[name="emergency_area_phone"]');
    elementHandle[21] = $('[name="emergency_prefix_phone"]');
    elementHandle[22] = $('[name="phone_emergency"]');
	 elementHandle[23] = $('[name="pic"]');

    function isValidData() {

        if(($("input[name*='check_program']:checked").length)<=0) {
            elementHandle[0].addClass("error");
            errorStatusHandle.text("Please select atleast one program");
            elementHandle[0].focus();
            return false;
            }
        if(isEmpty(elementHandle[1].val())) {
            elementHandle[1].addClass("error");
            errorStatusHandle.text("Please enter your first name");
            elementHandle[1].focus();

            return false;
            }
        if(isEmpty(elementHandle[2].val())) {
            elementHandle[2].addClass("error");
            errorStatusHandle.text("Please enter your last name");
            elementHandle[2].focus();
            return false;
            }
        if(!$("input[name*='relationship']:checked").val()){
            elementHandle[3].addClass("error");
            errorStatusHandle.text("Please select your relationship to child");
            elementHandle[3].focus();
            return false;
            }
        if(isEmpty(elementHandle[4].val())) {
            elementHandle[4].addClass("error");
            errorStatusHandle.text("Please enter your address");
            elementHandle[4].focus();
            return false;
            }
        if(isEmpty(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("Please enter your city");
            elementHandle[5].focus();
            return false;
            }
        if(isEmpty(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("Please enter your state");
            elementHandle[6].focus();
            return false;
            }
        if(!isValidState(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("The state appears to be invalid, "+
            "please use the two letter state abbreviation");
            elementHandle[6].focus();
            return false;
            }
        if(isEmpty(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("Please enter your zip code");
            elementHandle[7].focus();
            return false;
            }
        if(!$.isNumeric(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("The zip code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[7].focus();
            return false;
            }
        if(elementHandle[7].val().length != 5) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("The zip code must have exactly five digits")
            elementHandle[7].focus();
            return false;
            }
        if(isEmpty(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("Please enter your area code");
            elementHandle[8].focus();
            return false;
            }
        if(!$.isNumeric(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("The area code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[8].focus();
            return false;
            }
        if(elementHandle[8].val().length != 3) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("The area code must have exactly three digits")
            elementHandle[8].focus();
            return false;
            }
        if(isEmpty(elementHandle[9].val())) {
            elementHandle[9].addClass("error");
            errorStatusHandle.text("Please enter your phone number prefix");
            elementHandle[9].focus();
            return false;
            }
        if(!$.isNumeric(elementHandle[9].val())) {
            elementHandle[9].addClass("error");
            errorStatusHandle.text("The phone number prefix appears to be invalid, "+
            "numbers only please. ");
            elementHandle[9].focus();
            return false;
            }
        if(elementHandle[9].val().length != 3) {
            elementHandle[9].addClass("error");
            errorStatusHandle.text("The phone number prefix must have exactly three digits")
            elementHandle[9].focus();
            return false;
            }
        if(isEmpty(elementHandle[10].val())) {
            elementHandle[10].addClass("error");
            errorStatusHandle.text("Please enter your phone number");
            elementHandle[10].focus();
            return false;
            }
        if(!$.isNumeric(elementHandle[10].val())) {
            elementHandle[10].addClass("error");
            errorStatusHandle.text("The phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[10].focus();
            return false;
            }
        if(elementHandle[10].val().length != 4) {
            elementHandle[10].addClass("error");
            errorStatusHandle.text("The phone number must have exactly four digits")
            elementHandle[10].focus();
            return false;
            }
        if(isEmpty(elementHandle[11].val())) {
            elementHandle[11].addClass("error");
            errorStatusHandle.text("Please enter your email address");
            elementHandle[11].focus();
            return false;
            }
        if(!isValidEmail(elementHandle[11].val())) {
            elementHandle[11].addClass("error");
            errorStatusHandle.text("The email address appears to be invalid,");
            elementHandle[11].focus();
            return false;
            }
        if(isEmpty(elementHandle[12].val())) {
            elementHandle[12].addClass("error");
            errorStatusHandle.text("Please enter child's first name");
            elementHandle[12].focus();
            return false;
            }
        if(isEmpty(elementHandle[13].val())) {
            elementHandle[13].addClass("error");
            errorStatusHandle.text("Please enter child's last name");
            elementHandle[13].focus();
            return false;
            }
        if(!$("input[name*='gender']:checked").val()){
            elementHandle[14].addClass("error");
            errorStatusHandle.text("Please select child's gender");
            elementHandle[14].focus();
            return false;
            }

        if(isEmpty(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("Please enter day");
            elementHandle[15].focus();
            return false;
            }
        if(!$.isNumeric(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("The day appears to be invalid, "+"numbers only please. ");
            elementHandle[15].focus();
            return false;
            }
        if(elementHandle[15].val().length != 2) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("The day must have exactly two digits")
            elementHandle[15].focus();
            return false;
            }

        if(isEmpty(elementHandle[16].val())) {
            elementHandle[16].addClass("error");
            errorStatusHandle.text("Please enter month");
            elementHandle[16].focus();
            return false;
            }
        if(!$.isNumeric(elementHandle[16].val())) {
            elementHandle[16].addClass("error");
            errorStatusHandle.text("The month appears to be invalid, "+"numbers only please. ");
            elementHandle[16].focus();
            return false;
            }
        if(elementHandle[16].val().length != 2) {
            elementHandle[16].addClass("error");
            errorStatusHandle.text("The month must have exactly two digits")
            elementHandle[16].focus();
            return false;
            }

        if(isEmpty(elementHandle[17].val())) {
            elementHandle[17].addClass("error");
            errorStatusHandle.text("Please enter year");
            elementHandle[17].focus();
            return false;
            }
        if(!$.isNumeric(elementHandle[17].val())) {
            elementHandle[17].addClass("error");
            errorStatusHandle.text("The year appears to be invalid, "+"numbers only please. ");
            elementHandle[17].focus();
            return false;
            }
        if(elementHandle[17].val().length != 4) {
            elementHandle[17].addClass("error");
            errorStatusHandle.text("The year must have exactly four digits")
            elementHandle[17].focus();
            return false;
            }

			 if(isEmpty(elementHandle[18].val())) {
            elementHandle[18].addClass("error");
            errorStatusHandle.text("Please enter your emergency contact first name");
            elementHandle[18].focus();
            return false;
            }
        if(isEmpty(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("Please enter your emergency contact last name");
            elementHandle[19].focus();
            return false;
            }

			if(isEmpty(elementHandle[20].val())) {
            elementHandle[20].addClass("error");
            errorStatusHandle.text("Please enter your emergency contact's area code");
            elementHandle[20].focus();
            return false;
            }
        if(!$.isNumeric(elementHandle[20].val())) {
            elementHandle[20].addClass("error");
            errorStatusHandle.text("The emergency contact's area code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[20].focus();
            return false;
            }
        if(elementHandle[20].val().length != 3) {
            elementHandle[20].addClass("error");
            errorStatusHandle.text("The emergency contact's area code must have exactly three digits")
            elementHandle[20].focus();
            return false;
            }
        if(isEmpty(elementHandle[21].val())) {
            elementHandle[21].addClass("error");
            errorStatusHandle.text("Please enter your emergency contact's phone number prefix");
            elementHandle[21].focus();
            return false;
            }
        if(!$.isNumeric(elementHandle[21].val())) {
            elementHandle[21].addClass("error");
            errorStatusHandle.text("The emergency contact's phone number prefix appears to be invalid, "+
            "numbers only please. ");
            elementHandle[21].focus();
            return false;
            }
        if(elementHandle[21].val().length != 3) {
            elementHandle[21].addClass("error");
            errorStatusHandle.text("The emergency contact's phone number prefix must have exactly three digits")
            elementHandle[21].focus();
            return false;
            }
        if(isEmpty(elementHandle[22].val())) {
            elementHandle[22].addClass("error");
            errorStatusHandle.text("Please enter your emergency contact's phone number");
            elementHandle[22].focus();
            return false;
            }
        if(!$.isNumeric(elementHandle[22].val())) {
            elementHandle[22].addClass("error");
            errorStatusHandle.text("The emergency contact's phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[22].focus();
            return false;
            }
        if(elementHandle[22].val().length != 4) {
            elementHandle[22].addClass("error");
            errorStatusHandle.text("The emergency contact's phone number must have exactly four digits")
            elementHandle[22].focus();
            return false;
            }
		if(isEmpty(elementHandle[23].val())) {
            elementHandle[23].addClass("error");
            errorStatusHandle.text("Please select a picture of your child");
            elementHandle[23].focus();
            return false;
            }








        var isValidDOB = true;
        if(!isValidDate()){
            $('[name="dd"]').addClass("error");
            $('[name="mm"]').addClass("error");
            $('[name="yyyy"]').addClass("error");
            errorStatusHandle.text("Please put a valid date");
            return false;
            isValidDOB = false;
        }

        if(isValidDOB){
            var date_birth = new Date();
            date_birth.setDate($('[name="dd"]').val());
            date_birth.setMonth($('[name="mm"]').val());
            date_birth.setFullYear($('[name="yyyy"]').val());

            var date_compare = new Date("June 1, 2016");
            var years = date_compare.getFullYear() - date_birth.getFullYear();
            var months = date_compare.getMonth() - date_birth.getMonth();
            var days = date_compare.getDate() - date_birth.getDate();

            if(years > 16 || (years == 16 && months > 0) || (years == 16 && months == 0 && days > 0)) {
                $('[name="mm"]').addClass("error");
                $('[name="dd"]').addClass("error");
                $('[name="yyyy"]').addClass("error");
                errorStatusHandle.text("Child age should be less than 16years");
                return false;
            }
            if(years < 7 || (years == 7 && months < 0) || (years==7 && months == 0 && days < 0)) {
                $('[name="mm"]').addClass("error");
                $('[name="dd"]').addClass("error");
                $('[name="yyyy"]').addClass("error");
                errorStatusHandle.text("Child must be atleast 7 years old");
                return false;
            }
        }

        return true;
        }





    elementHandle[11].on('blur', function() {
        if(isEmpty(elementHandle[11].val()))
            return;
        if(isValidEmail(elementHandle[11].val())) {
            $(this).removeClass("error");
            errorStatusHandle.text("");
            }
        });

    elementHandle[6].on('keyup', function() {
        elementHandle[6].val(elementHandle[6].val().toUpperCase());
        });

    elementHandle[8].on('keyup', function() {
        if(elementHandle[8].val().length == 3)
            elementHandle[9].focus();
            });

    elementHandle[9].on('keyup', function() {
        if(elementHandle[9].val().length == 3)
            elementHandle[10].focus();
            });




    elementHandle[15].on('keyup', function() {
        if(elementHandle[15].val().length == 2)
            elementHandle[16].focus();
            });

    elementHandle[16].on('keyup', function() {
        if(elementHandle[16].val().length == 2)
            elementHandle[17].focus();
            });

   function handleData(response){
   // $('#busy_wait').css('visibility','hidden');


    if(response.startsWith("DUP"))
        $('#status').text("This record appears to be a duplicate.");

    else if(response.startsWith("OK")) {
        $('#status').text("This record is OK, not a duplicate.");
       $('#personal_info_form').serialize();
       $('#personal_info_form').submit();
//         var confirm = response.split("||");
//         $('body').html(confirm[1]);
        }

    }
    $('#send_data').on('click', function() {
        for(var i=0; i < 24; i++)
            elementHandle[i].removeClass("error");
        errorStatusHandle.text("");
        var return_flag = isValidData();
		if(return_flag){
			//$('#personal_info_form').submit();
			var form_data= $('#personal_info_form').serialize();
			$.post("check_duplicate.php",form_data,handleData);
		}
		else
			return false;
        });

    $(':reset').on('click', function() {
        for(var i=0; i < 24; i++)
            elementHandle[i].removeClass("error");
        errorStatusHandle.text("");
        });
});
