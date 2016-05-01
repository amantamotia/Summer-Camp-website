<?php
  

$bad_chars = array('$','%','?','<','>','php');

function check_post_only() {
if(!$_POST) {
    write_error_page("This scripts can only be called from a form.");
    exit;
    }
}

function get_db_handle() {
    $server = 'opatija.sdsu.edu:3306';
    $user = 'jadrn036';
    $password = 'drawer';
    $database = 'jadrn036';

    if(!($db = mysqli_connect($server, $user, $password, $database))) {
        write_error_page("Cannot Connect to Database.!");
        }
    return $db;
    }

function write_error_page($msg) {
    //write_header();
    echo "<h2>Sorry, an error occurred<br />",
    $msg,"</h2>";


    //write_footer();
    }



?>
