<?php 
session_start();

if(!isset($_SESSION['table'])) {
    $_SESSION['table'] = '';
}

echo $_SESSION['table'];
?>  