<?php
    // function happyBirthday(){
    //     echo "Happy birthday to you! <br>";
    // }
    // function happyBirthday($name){
    //     echo "Happy birthday to you, $name! <br>";

    // }
    function happyBirthday($name, $age){
        echo "Happy birthday to you, $name! <br>";
        echo "You are $age years old! <br>";

    }

    // happyBirthday("Hamza", 20);
    // happyBirthday("Umar", 14);
    // happyBirthday("Hassan", 13);

    function even_odd(int $num){
        if ($num % 2 == 0){
            return "$num is even! <br>";
        }
        else {
            return "$num is odd! <br>";
        }
    }

    $num1 = even_odd(15);
    echo $num1;

?>