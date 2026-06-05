<!-- // how can we both sanitize and validate the user input -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sanitize and validate inputs</title>
</head>
<body>
    <form action="18_sanitize_validate_inputs.php" method="post"> 
        <label for="username">username: </label><br>
        <input type="text" name="username" id="username"><br>
        <label for="age">age: </label><br>
        <input type="text" name="age" id="age"><br>
        <label for="email">Email: </label><br>
        <input type="text" name="email" id="email"><br><br>
        <input type="submit" name="login" value="Login">

    </form>
</body>
</html>
<?php
    if (isset($_POST["login"])){
        // $username = $_POST["username"];
        // echo $username;

        // the filter_input() function takes 3 arguments.
        $username = filter_input(INPUT_POST, "username",
                                 FILTER_SANITIZE_SPECIAL_CHARS);

        $age = filter_input(INPUT_POST, "age", FILTER_SANITIZE_NUMBER_INT);

        $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);

        echo "<br>".$username;
        echo "<br>".$age;
        echo "<br>".$email;




        // validate inputs
        // FILTER_VALIDATE_SPECIAL_CHARS does not exist — use a regexp to validate username
        $username = filter_var($username, FILTER_VALIDATE_REGEXP, [
            "options" => ["regexp" => '/^[A-Za-z0-9_ -]+$/']
        ]);
        if (empty($username)){
            echo "<br>That is not a valid username.";
        }
        else {
            echo "<br>Your username is {$username}.";
        }




        $age = filter_input(INPUT_POST, "age", FILTER_VALIDATE_INT);
        if (empty($age)){
            echo "That number was not valid integer.";
        }
        else {
            echo "<br>You are {$age} years old.";
        }




        $email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);
        if (empty($email)){
            echo "<br>That is not a valid email address.";
        }
        else {
            echo "<br>Your email is {$email}.";
        }


    }

?>