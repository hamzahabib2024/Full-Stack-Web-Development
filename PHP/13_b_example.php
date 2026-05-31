<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="13_b_example.php" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <br><br>
        <input type="submit" name="login" value="Log in"><br><br>
    </form>
</body>
</html>
<?php
    foreach ($_POST as $key => $value){
        echo "{$key} : {$value} <br>";
    }

    if (isset($_POST['login'])){
        $username = $_POST['username'];
        $password = $_POST['password'];

        if (empty($username)){
            echo "enter the user name";
        }
        elseif (empty($password)){
            echo "enter the password";
        }
        else{
            echo "welcome {$username}";
        }

    }
?>