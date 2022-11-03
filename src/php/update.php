<?php
include 'hit_result.php';

$response = [];
$current_time = date('H:i:s');

session_start();
const values_of_X = [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2];
const MIN_Y = -3;
const MAX_Y = 5;
const MIN_R = 1;
const MAX_R = 4;

if (isset($_GET["x_array"]) && isset($_GET["y"]) && isset($_GET["r"])){
    $x_array = $_GET["x_array"];
    $y= $_GET["y"]; 
    $r= $_GET["r"];
    if (!is_numeric($y) || !is_numeric($r)) {
        http_response_code(400);
        exit("Only number must be passed");
    }
    $response = $_SESSION['table'];
    for ($i = 0; $i < count($x_array); $i++) {
        $x = $x_array[$i];
        if (!is_numeric($x)) {
            http_response_code(400);
            exit("Only number must be passed");
        } else {
            if(is_hit($x, $y, $r)) {
                $res = "true";
            }
            else {
                $res = "false"; 
            }
    
            $execution_time = round((microtime(true) - $_SERVER['REQUEST_TIME_FLOAT']) * 1000, 2) . 'мс';
               
          
            $hours =  str_pad($_GET['hours'], 2, '0', STR_PAD_LEFT);
            $minutes =  str_pad($_GET['minutes'], 2, '0', STR_PAD_LEFT);
            $seconds =  str_pad($_GET['seconds'], 2, '0', STR_PAD_LEFT);
            if (!is_numeric($hours) || !is_numeric($minutes) || !is_numeric($seconds)) {
                http_response_code(400);
                exit("Only number must be passed");
            }
            $client_time = $hours . ':' . $minutes . ':' . $seconds;
            
            $x= substr($x, 0, 11); 
            $y= substr($_GET["y"], 0, 11); 
            $r= substr($_GET["r"], 0, 11);
            $line = "
            <tr>
                <td>$x</td>
                <td>$y</td>
                <td>$r</td>
                <td>$res</td>
                <td>$client_time</td>
                <td>$execution_time</td>    
            </tr>
            ";

            $response = $response . $line;    
        }
    }
    if(!isset($_SESSION['table'])) {
        $_SESSION['table'] = '';
    }
    $_SESSION['table'] = $response;
    echo $response;
}
else{
    http_response_code(400);
    exit("Not all parameters were passed");
}

?>
