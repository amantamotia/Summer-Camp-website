<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;
    charset=iso-8859-1" />
    <title>Report </title>
<link rel="stylesheet" type="text/css" href="css/tablestylesheet.css" />


</head>
  

<body>
<h2> Report of Registered Childern in Camp</h2>
<?php

include('helpers.php');
$db = get_db_handle();


$sql = "select p.first_name,p.last_name,p.primary_phone,c.first_name,c.last_name,c.nickname,c.image_filename,c.emergency_name,c.emergency_phone,TIMESTAMPDIFF(YEAR,c.birthdate,CURDATE()) AS AGE,prog.description from parent p,child c,program prog,enrollment e where c.parent_id = p.id and prog.id=e.program_id and e.child_id = c.id group by e.program_id,e.child_id;";
    $result = mysqli_query($db,$sql);
    if(mysqli_num_rows($result) >0) {
    //    $row = mysqli_fetch_array($result);

	}
	//echo $result[0];



		?>

<table id="t01">
	<thead>
		<tr >


			<th>Parent first_name</th>
			<th>Parent last_name </th>
			<th>primary_phone</th>
			<th>child first_name</th>
			<th>child last_name </th>
			<th>child nickname</th>
			<th>Image</th>
			<th>Emergency Name</th>
			<th>Emergency num</th>
			<th>Age</th>
			<th>Descp</th>


		</tr>
	</thead>
<?php

    while($row = mysqli_fetch_array($result)) {


?>

	<tr>


       <td><?=$row[0]; ?></td>
       <td><?=$row[1]; ?></td>
       <td><?= $row[2]; ?></td>
       <td><?=$row[3]; ?></td>
       <td><?=$row[4]; ?></td>
       <td><?=$row[5]; ?></td>
     <td><?php  $UPLOAD_DIR = 'image_s';
    $COMPUTER_DIR = '/home/jadrn036/public_html/proj3/image_s/';
	$d = dir($COMPUTER_DIR.'/');
    while($fname = $d->read()) {
        $data[$fname] = $fname;
        }
    foreach($data as $fname => $fvalue) {
        if($fname == "." || $fname == "..") {
            ;
            }
        else if($fname== $row[6]){
            echo "<img src=\"$UPLOAD_DIR/$fname\""." width='100px' />\n";
        }

    }?></td>

       <td><?=$row[7]; ?></td>
       <td><?=$row[8]; ?></td>
       <td><?=$row[9]; ?></td>
	   <td><?=$row[10]; ?></td>
       </tr>
<?php
    }




?>

</table>
</body></html>
