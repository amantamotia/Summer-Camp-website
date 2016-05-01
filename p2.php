<?php


function validate_data($params) {
    $msg = "";
    if(strlen($params[0]) == 0 )
        $msg .= "Please enter atleast one camp<br />";
    if(strlen($params[1]) == 0)
        $msg .= "Please enter the parent first name<br />";
    if(strlen($params[3]) == 0)
        $msg .= "Please enter the parent first name<br />";
    if(strlen($params[4]) == 0)
        $msg .= "Please enter the Relationship<br />";
    if(strlen($params[5]) == 0)
        $msg .= "Please enter the Parent Address<br />";
    if(strlen($params[7]) == 0)
        $msg .= "Please enter Parent City<br />";

    if(strlen($params[9]) == 0)
        $msg .= "Please enter the zip code<br />";
    elseif(!is_numeric($params[9]))
        $msg .= "Zip code may contain only numeric digits<br />";
    if(strlen($params[16]) == 0)
        $msg .= "Please enter email<br />";
    elseif(!filter_var($params[16], FILTER_VALIDATE_EMAIL))
        $msg .= "Your email appears to be invalid<br/>";
	$msg = "";
    if(strlen($params[8]) == 0 )
        $msg .= "Please enter a Parent State.<br />";

    if(strlen($params[10]) == 0||!is_numeric($params[10]))
        $msg .= "Please enter the parent area phone<br />";
    if(strlen($params[11]) == 0||!is_numeric($params[11]))
        $msg .= "Please enter the parent prefix phone<br />";
    if(strlen($params[12]) == 0||!is_numeric($params[12]))
        $msg .= "Please enter the parent phone<br />";
    if(strlen($params[13]) == 0||!is_numeric($params[13]))
        $msg .= "Please enter the child area phone<br />";
    if(strlen($params[14]) == 0||!is_numeric($params[14]))
        $msg .= "Please enter the child prefix phone<br />";
    if(strlen($params[15]) == 0||!is_numeric($params[15]))
        $msg .= "Please enter the child phone<br />";
    if(strlen($params[17]) == 0)
        $msg .= "Please enter the child first name<br />";
    if(strlen($params[19]) == 0)
        $msg .= "Please enter the child first name<br />";
    if(strlen($params[21]) == 0)
        $msg .= "Please enter gender.<br />";

	if(strlen($params[22]) == 0||!is_numeric($params[22]))
        $msg .= "Please enter the date in DOB<br />";
    if(strlen($params[23]) == 0||!is_numeric($params[23]))
        $msg .= "Please enter the month in DOB<br />";
    if(strlen($params[24]) == 0||!is_numeric($params[24]))
        $msg .= "Please enter the year date in DOB<br />";
    if(strlen($params[25]) == 0)
        $msg .= "Please select picture.<br />";
     if(strlen($params[28]) == 0)
        $msg .= "Please enter the emergency first name<br />";
    if(strlen($params[29]) == 0)
        $msg .= "Please enter the emergency first name<br />";

	if(strlen($params[30]) == 0||!is_numeric($params[30]))
        $msg .= "Please enter the emergency area phone<br />";
    if(strlen($params[31]) == 0||!is_numeric($params[31]))
        $msg .= "Please enter the emergency prefix phone<br />";
    if(strlen($params[32]) == 0||!is_numeric($params[32]))
        $msg .= "Please enter the emergency phone<br />";


	if($msg) {
        write_form_error_page($msg);
        exit;
        }
    }



function process_parameters() {
    global $bad_chars;
    $params = array();

$params[] = trim($_POST['check_program']);
$params[] = trim(str_replace($bad_chars, "",$_POST['parent_fname']));
$params[] = trim(str_replace($bad_chars, "",$_POST['parent_mname']));
$params[] = trim(str_replace($bad_chars, "",$_POST['parent_lname']));
$params[] = trim(str_replace($bad_chars, "",$_POST['relationship']));
$params[] = trim(str_replace($bad_chars, "",$_POST['parent_address']));
$params[] = trim(str_replace($bad_chars, "",$_POST['parent_address_1']));
$params[] = trim(str_replace($bad_chars, "",$_POST['parent_city']));
$params[] = trim(str_replace($bad_chars, "",$_POST['parent_state']));
$params[] = trim(str_replace($bad_chars, "",$_POST['parent_zip']));
$params[] = trim(str_replace($bad_chars, "",$_POST['parent_home_area_phone']));
$params[] = trim(str_replace($bad_chars, "",$_POST['parent_home_prefix_phone']));
$params[] = trim(str_replace($bad_chars, "",$_POST['parent_h_phone']));
$params[] = trim(str_replace($bad_chars, "",$_POST['parent_cell_area_phone']));
$params[] = trim(str_replace($bad_chars, "",$_POST['parent_cell_prefix_phone']));
$params[] = trim(str_replace($bad_chars, "",$_POST['parent_c_phone']));
$params[] = trim(str_replace($bad_chars, "",$_POST['parent_email']));
$params[] = trim(str_replace($bad_chars, "",$_POST['child_fname']));
$params[] = trim(str_replace($bad_chars, "",$_POST['child_mname']));
$params[] = trim(str_replace($bad_chars, "",$_POST['child_lname']));
$params[] = trim(str_replace($bad_chars, "",$_POST['child_nickname']));
$params[] = trim(str_replace($bad_chars, "",$_POST['gender']));
$params[] = trim(str_replace($bad_chars, "",$_POST['dd']));
$params[] = trim(str_replace($bad_chars, "",$_POST['mm']));
$params[] = trim(str_replace($bad_chars, "",$_POST['yyyy']));
//$params[] = trim(str_replace($bad_chars, "",$_POST['pic']));
$params[] = trim(str_replace($bad_chars, "",$_FILES['pic']['name']));
$params[] = trim(str_replace($bad_chars, "",$_POST['medical']));
$params[] = trim(str_replace($bad_chars, "",$_POST['diet']));
$params[] = trim(str_replace($bad_chars, "",$_POST['emergency_fname']));
$params[] = trim(str_replace($bad_chars, "",$_POST['emergency_lname']));
$params[] = trim(str_replace($bad_chars, "",$_POST['emergency_area_phone']));
$params[] = trim(str_replace($bad_chars, "",$_POST['emergency_prefix_phone']));
$params[] = trim(str_replace($bad_chars, "",$_POST['phone_emergency']));

    return $params;
    }

function store_data_in_db($params) {
     $db = get_db_handle();


    ### NOT A DUP
   // $parent_home_phone = "$params[10]"."$params[11]"."$params[12]";
	$parent_cell_phone = "$params[13]"."$params[14]"."$params[15]";

	$parent_id = 0;
    //$parent_phone=$_POST['areaM'].$_POST['preM'].$_POST['phoneM'];
	 $parent_home_phone = "$params[10]"."$params[11]"."$params[12]";
    $sql = "SELECT id from parent where primary_phone='$parent_home_phone';";
    $result = mysqli_query($db,$sql);
    if(mysqli_num_rows($result) >0) {
        $row = mysqli_fetch_array($result);
        $parent_id = $row[0];
		//echo "$parent_id";
        }
	else{

	       $sql_parent = "insert into parent(first_name,middle_name,last_name,address1,address2,city,state,zip,primary_phone,secondary_phone,email) ".
           "values('$params[1]','$params[2]','$params[3]','$params[5]','$params[6]','$params[7]','$params[8]','$params[9]','$parent_home_phone','$parent_cell_phone','$params[16]');";
	        mysqli_query($db,$sql_parent);
	        $how_many = mysqli_affected_rows($db);


			if($how_many != 1) {
				echo "A critical error occurred in saving parent information.";
                return false;
			}
			else
	        $parent_id = mysqli_insert_id($db);
			 //echo "$parent_id";
		}

	$child_id = 0;
    $cname=$_POST['child_fname'];
    $sql = "SELECT id from child where parent_id=$parent_id and first_name='$cname';";
    $result = mysqli_query($db,$sql);
    if(mysqli_num_rows($result) >0) {
        $row = mysqli_fetch_array($result);
        $child_id = $row[0];
        }
	else{

	$emergency_name = "$params[28]"."$params[29]";
	$emergency_phone = "$params[30]"."$params[31]"."$params[32]";
	$child_birth = "$params[23]"."/"."$params[22]"."/"."$params[24]";
	//echo "$emergency_phone";//STR_TO_DATE('$child_birth','%m/%d/%Y')
	//echo "$child_birth";
	//echo "$params[21]";

//	echo "$child_birthdate";

		$sql_child = "insert into child(parent_id,relation,first_name,middle_name,last_name,nickname,image_filename,gender,birthdate,conditions,diet,emergency_name,emergency_phone) ".
			   "values('$parent_id','$params[4]','$params[17]','$params[18]','$params[19]','$params[20]','$params[25]','$params[21]',STR_TO_DATE('$child_birth','%m/%d/%Y'),'$params[26]','$params[27]','$emergency_name','$emergency_phone');";


	mysqli_query($db,$sql_child);
   $how_many = mysqli_affected_rows($db);


			if($how_many != 1) {
				echo "A critical error occurred in saving child information.";
				return false;
			}
            else{
			photo_upload();
            $child_id = mysqli_insert_id($db);
			//echo "$child_id";
	}
	}
	$enrollment = 0;
	$program=$_POST['check_program'];

	for($i = 0; $i < count($program); $i++) {

		$camp_value = intval($program[$i]);
	//	echo "$camp_value";
        $sql_enroll = "insert into enrollment values('$camp_value','$child_id');";


	    mysqli_query($db,$sql_enroll);
        $how_many = mysqli_affected_rows($db);


			if($how_many != 1) {
				echo "A critical error occurred camp enrollment.";
			    return false;
			}
	        $enroll_id = mysqli_insert_id($db);

  	}

    mysqli_close($db);
	return true;
}
function photo_upload(){
    $UPLOAD_DIR = 'image_s/';

    $fname = $_FILES['pic']['name'];


    if(file_exists("$UPLOAD_DIR".$fname))  {
        echo "<b>Error, the file $fname already exists on the server.</b><br />\n";
		echo "<a href=\"signup.html\">Register for Camp</a>";
        return false;
		}
    elseif($_FILES['pic']['error'] > 0) {
    	$err = $_FILES['file']['error'];
        echo "Error Code: $err ";
		return false;
	if($err == 1)
		echo "The file was too big to upload, the limit is 2MB<br />";
	    return false;
        }
		//IMAGETYPE_GIF, IMAGETYPE_PNG, IMAGETYPE_BMP,IMAGETYPE_JPEG
    elseif(exif_imagetype($_FILES['pic']['tmp_name']) != IMAGETYPE_JPEG &&
	       exif_imagetype($_FILES['pic']['tmp_name']) != IMAGETYPE_GIF &&
	       exif_imagetype($_FILES['pic']['tmp_name']) != IMAGETYPE_PNG &&
	       exif_imagetype($_FILES['pic']['tmp_name']) != IMAGETYPE_BMP) {
        echo "ERROR, not a jpg file<br />";
        return false;
		}
## file is valid, copy from /tmp to your directory.
    else {
          move_uploaded_file($_FILES['pic']['tmp_name'], "$UPLOAD_DIR".$fname);

	}
	return true;

}



?>
