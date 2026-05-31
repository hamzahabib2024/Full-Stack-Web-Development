<?php
    // two usefull php functions:
    //1. isset() - check if a variable is set or not
                //  - returns true if the variable exists and is not NULL, otherwise it returns false
    //2. empty() - check if a variable is empty or not
                //  - returns true if the variable is empty (i.e., it is NULL, an empty string, or 0), otherwise it returns false


    // $username = "hamza";
    $username = null;
    // $username = "";
    // $username = true;


    if (isset($username)) {
        echo "The variable is set.";
    } else {
        echo "The variable is not set.";
    }

    echo "<br>";

    if (empty($username)) {
        echo "The variable is empty.";
    } else {
        echo "The variable is not empty.";
    }
?>