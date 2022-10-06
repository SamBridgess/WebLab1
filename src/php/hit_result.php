<?php

function is_hit($x, $y, $r ): bool {
    return (square_hit($x, $y, $r) || tringle_hit($x, $y, $r) || circle_hit($x, $y, $r));
}
 
function square_hit($x, $y, $r): bool {
    return (($x <= $r) && ($y <= $r) && ($x>=0) && ($y>=0));
}

function tringle_hit($x, $y, $r): bool {
    return  (($x<=0) && ($y>=0) && ($y - $x <=$r/2));        
}

function circle_hit($x, $y, $r): bool {
    return (($x>=0) && ($y <= 0) && ( pow($r/2,2) >= (pow($x, 2) + pow($y,2))));
}
?>