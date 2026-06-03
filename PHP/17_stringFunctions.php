<?php
    $username = "   Hamza Habib   ";
    $username2 = "Muhammad Umar Habib";
    $username3 = array("Muhammad", "Umar", "Habib");

    // $username = strtolower($username);
    // $username = strtoupper($username);
    // $username = trim($username);
    // $username = str_pad($username, 30, "*", STR_PAD_BOTH);
    // $username = str_replace(" ", "_", $username);
    // $username = strrev($username); 
    // $username = str_shuffle($username); 
    // $equal = strcmp($username, "  Hamza Habib   "); 
    // $count = strlen($username); 
    // $index = strpos($username, "H");
    // $firstname = substr($username, $index, 5);

    $fullname = explode (" ", $username2);
    // explode() function takes a string and splits it into an array based on a specified delimiter.

    $fullname2 = implode (" ", $username3);
    // implode() function takes an array and joins its elements into a single string using a specified delimiter.



    echo $username."<br>";
    // echo $count."<br>";
    // echo $index."<br>"  ;
    // echo $equal;
    // echo $firstname;

    echo $username2."<br>";

    echo "<br><br><br>";

    foreach($fullname as $name){
        echo $name."<br>";
    }

    echo "<br><br><br>";

    echo $fullname2."<br>";
?>