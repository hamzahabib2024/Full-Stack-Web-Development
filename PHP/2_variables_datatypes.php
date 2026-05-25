<?php
    // strings, integer, float, boolean, array, object, null

    $name = "Muhammad Hamza Habib"; // string
    $age = 20; // integer
    $height = 5.9; // float
    $isStudent = true; // boolean
    $hobbies = ["reading", "swimming", "coding"]; // array
    $person = (object) [
        "name" => "Muhammad Hamza Habib",
        "age" => 20,
        "height" => 5.9,
        "isStudent" => true,
        "hobbies" => ["reading", "swimming", "coding"]
    ]; // object
    $nullValue = null; // null

    echo "-----------\$\$\$   Hello {$name}!   \$\$\$-----------";
    echo "<br><br>";

    echo "Name: " . $name . "<br>";
    echo "Age: " . $age . "<br>";   
    echo "Height: " . $height . "<br>";
    echo "Is Student: " . ($isStudent ? "Yes" : "No") . "<br>";
    echo "Hobbies: " . implode(", ", $hobbies) . "<br>";
    echo "Null Value: " . ($nullValue === null ? "Null" : "Not Null") . "<br>";


    echo "<br><br>Person Object: <br>";
    echo "Name: " . $person->name . "<br>";
    echo "Age: " . $person->age . "<br>";
    echo "Height: " . $person->height . "<br>";
    echo "Is Student: " . ($person->isStudent ? "Yes" : "No") . "<br>";
    echo "Hobbies: " . implode(", ", $person->hobbies) . "<br>";
?>