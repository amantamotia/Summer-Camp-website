<?php



include('helpers.php');
include('p2.php');

check_post_only();
$params = process_parameters();
//validate_data($params);
$db_flag=store_data_in_db($params);

if($db_flag==true){
include('confirmation.php');
}
?>
