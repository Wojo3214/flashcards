<?php
    $server = "localhost";
    $username = "root";
    $password = "abc123";
    $database = "cards_app";

    $mySQL = new mysqli($server, $username, $password, $database);

    if(!$mySQL){
        die("Could not connect to the MySQL server: " . mysqli_connnect_error());
    }