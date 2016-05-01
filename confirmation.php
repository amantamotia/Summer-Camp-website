<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;
    charset=iso-8859-1" />
    <title>Confirmation </title>
<link rel="stylesheet" type="text/css" href="css/tablestylesheet.css" />


</head>
  

<body>
<?php $program=$_POST['check_program'];
	$camp_value="" ;
	for($i = 0; $i < count($program); $i++) {


		if ($program[$i]=="1") {
           $camp_value.="Basketball Camp".",";
       } elseif ($program[$i]=="2") {
          $camp_value.="Baseball Camp".",";
       }elseif ($program[$i]=="3") {
          $camp_value.="Physical Training".",";
       } elseif ($program[$i]=="4") {
          $camp_value.="Band Camp".",";
       } elseif ($program[$i]=="5") {
          $camp_value.="Swimming".",";
       } elseif ($program[$i]=="6") {
          $camp_value.="Nature Discovery".",";
       }



	}
	$camp_value=substr($camp_value,0,strlen($camp_value)-1);
		//echo "$camp_value";
		?>

<h1><?=$params[1]." ".$params[2]." ".$params[3] ?>, thank you for registering.</h1>

    <table id="t01">

    <tr>
    <td>check_program</td>
    <td><?=$camp_value?> </td>
    </tr>


    <tr>
    <td>  Relationship          </td>
    <td><?=$params[4]?>  </td>
    </tr>

    <tr>
    <td>   Parent Address         </td>
    <td><?=$params[5]?>  </td>
    </tr>

    <tr>
    <td> Parent Address Line2           </td>
    <td><?=$params[6] ?> </td>
    </tr>

    <tr>
    <td> Parent City           </td>
    <td><?=$params[7] ?> </td>
    </tr>

    <tr>
    <td>  Parent State          </td>
    <td><?=$params[8]?>  </td>
    </tr>

    <tr>
    <td> Parent Zip Code           </td>
    <td><?=$params[9]?>  </td>
    </tr>

    <tr>
    <td>Parent Home Phone            </td>
    <td><?=$params[10].$params[11].$params[12]?> </td>
    </tr>



    <tr>
    <td>  Parent Cell Phone          </td>
    <td><?=$params[13].$params[14].$params[15] ?></td>
    </tr>

    <tr>
    <td> Email           </td>
    <td><?=$params[16];?> </td>
    </tr>

    <tr>
    <td>  Child Name          </td>
    <td><?=$params[17]." ".$params[18]." ".$params[19]?> </td>
    </tr>



    <tr>
    <td>Child Nickname            </td>
    <td><?=$params[20] ?></td>
    </tr>

    <tr>
    <td>   Gender         </td>
    <td><?=$params[21]?> </td>
    </tr>

    <tr>
    <td>  BirthDate           </td>
    <td><?=$params[23]."/".$params[22]."/".$params[24]?> </td>
    </tr>



    <tr>
    <td>  Profile Picture          </td>
	<td><?php
    $UPLOAD_DIR = 'image_s';
    $COMPUTER_DIR = '/home/jadrn036/public_html/proj3/image_s/';
	$d = dir($COMPUTER_DIR.'/');
    while($fname = $d->read()) {
        $data[$fname] = $fname;
        }
    foreach($data as $fname => $fvalue) {
        if($fname == "." || $fname == "..") {
            ;
            }
        else if($fname== $params[25]){
            echo "<img src=\"$UPLOAD_DIR/$fname\""." width='100px' />\n";
        }
    }

	?></td>
    </tr>

    <tr>
    <td>  Medical Conditions          </td>
    <td><?=$params[26]?> </td>
    </tr>

    <tr>
    <td>  Diet          </td>
    <td><?=$params[27]?> </td>
    </tr>

    <tr>
    <td> Emergency Contact Name           </td>
    <td><?=$params[28]." ".$params[29]?> </td>
    </tr>


    <tr>
    <td>  Emergency Contact Number         </td>
    <td><?=$params[30].$params[31].$params[32]?> </td>
    </tr>

   	</table>



</body></html>
