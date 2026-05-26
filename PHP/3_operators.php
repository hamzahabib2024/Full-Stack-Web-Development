<?php
    // Arithmetic Operators: +, -, *, /, %, **
    //increment and decrement operators: ++, --
    // Assignment Operators: =, +=, -=, *=, /=, %=
    // Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
    // Logical Operators: &&, ||, !
    //operators precedence and associativity
        //1. Parentheses ()
        //2. Exponentiation **
        //3. Multiplication *, Division /, Modulus %
        //4. Addition +, Subtraction -


    // Example of arithmetic operators
    $x = 10;
    $y = 5;
    $z = null;

    $z = $x + $y; // 15
    echo "Addition: " . $z . "<br>";
    $z = $x - $y; // 5
    echo "Subtraction: " . $z . "<br>";
    $z = $x * $y; // 50
    echo "Multiplication: " . $z . "<br>";
    $z = $x / $y; // 2
    echo "Division: " . $z . "<br>";
    $z = $x % $y; // 0
    echo "Modulus: " . $z . "<br>";
    $z = $x ** $y; // 100000
    echo "Exponentiation: " . $z . "<br>";


    // Example of increment and decrement operators
    $x++; // 11
    echo "Increment: " . $x . "<br>";
    $y--; // 4
    echo "Decrement: " . $y . "<br>";


    // Example of assignment operators
    $x += 5; // 16
    echo "Addition Assignment: " . $x . "<br>";
    $y *= 2; // 8
    echo "Multiplication Assignment: " . $y . "<br>";
    $z -= 3; // 147
    echo "Subtraction Assignment: " . $z . "<br>";


    // Example of comparison operators
    $a = 10;
    $b = "10";
    echo "Equal: " . ($a == $b ? "True" : "False") . "<br>"; // True
    echo "Identical: " . ($a === $b ? "True" : "False") . "<br>"; // False
    echo "Not Equal: " . ($a != $b ? "True" : "False") . "<br>"; // False
    echo "Not Identical: " . ($a !== $b ? "True" : "False") . "<br>"; // True
    echo "Greater Than: " . ($a > $b ? "True" : "False") . "<br>"; // False
    echo "Less Than: " . ($a < $b ? "True" : "False") . "<br>"; // False
    echo "Greater Than or Equal: " . ($a >= $b ? "True" : "False") . "<br>"; // True
    echo "Less Than or Equal: " . ($a <= $b ? "True" : "False") . "<br>"; // True   


    // Example of logical operators
    $x = true;
    $y = false;
    echo "Logical AND: " . ($x && $y ? "True" : "False") . "<br>"; // False
    echo "Logical OR: " . ($x || $y ? "True" : "False") . "<br>"; // True
    echo "Logical NOT: " . (!$x ? "True" : "False") . "<br>"; // False


    // Example of operator precedence and associativity
    $result = 10 + 5 * 2; // 20
    echo "Operator Precedence: " . $result . "<br>";
    $result = (10 + 5) * 2; // 30
    echo "Parentheses: " . $result . "<br>";
    $result = 10 - 5 + 2; // 7
    echo "Left Associativity: " . $result . "<br>";

?>