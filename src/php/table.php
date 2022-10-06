<?php 
session_start();
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if(!isset($_SESSION['table'])) {
        $_SESSION['table'] = '';
    }

    echo $_SESSION['table'];
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $_SESSION['table'] = null;

    echo "Table cleaned successfully!";
}
?>