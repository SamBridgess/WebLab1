<?php
include 'hit_result.php';

date_default_timezone_set("Europe/Moscow");
$start = microtime(true);
$response = [];
$current_time = date('h:i:s');

session_start();
const values_of_X = [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2];
const MIN_Y = -3;
const MAX_Y = 5;
const MIN_R = 1;
const MAX_R = 4;

if (isset($_GET["x"]) && isset($_GET["y"]) & isset($_GET["r"])){
    $r= $_GET["r"];
    $x= $_GET["x"];
    $y= $_GET["y"]; 
    if (!is_numeric($x) || !is_numeric($y) || !is_numeric($r)) {
        // http_response_code(400);
        exit("Only number must be passed");
    }
    else{
        //validate($x, $y, $r);
        $is_hit = is_hit($x, $y, $r);
        if($is_hit){
            $res = "true";
        }
        else{
            $res = "false"; 
        }

        $script_time = round((microtime(true) - $_SERVER['REQUEST_TIME_FLOAT']) * 1000, 2);

        $line = "
        <tr>
            <td>$x</td>
            <td>$y</td>
            <td>$r</td>
            <td>$res</td>
            <td>$current_time </td>
            <td> $script_time </td>    
        </tr>
        ";
        if(!isset($_SESSION['table'])) {
            $_SESSION['table'] = '';
        }

        $response = $_SESSION['table'].$line;

        $_SESSION['table'] = $response;

        echo $response;
    }
}
else{
    // http_response_code(400);
    exit("Not all parameters were passed");
}

function validate($x, $y, $r)
{
    if ((!is_int($x)) || (!is_int($y)) || (!is_int($r)) || 
        in_array($x, values_of_X) ||
        ($y < MIN_Y) || ($y > MAX_Y) || ($r < MIN_R) || ($r > MIN_R) 
     ){
       http_response_code(400);
       exit("Parameters are invalid");
    }
}
?>
