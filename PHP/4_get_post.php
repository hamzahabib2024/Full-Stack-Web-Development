<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>_GET_POST</title>
</head>
<body>
<form action="4_get_post.php" method="post">
    <label>username: </label>
    <input type="text" name="username" id="username">
    <br><br>
    <label>password: </label>
    <input type="password" name="password" id="password">
    <br><br>
    <input type="submit" value="Login">
</form>
</body>
</html>

<?php
    // $_GET and $_POST: they both are special superglobal variables in PHP that are used to collect data from HTML forms.
    // data is sent to the file in the action attribute of <form>.
    // <form action="4_get_post.php" method="get">

    // $_GET: it collects data from the form and appends it to the URL in the form of key-value pairs. 
    //It is visible in the URL and has a limit of 2048 characters.
    //Not secure
    //char limit: 2048
    //bookmark is possible w/ values
    // GET requests can be cached by the browser
    // better for a search page or when you want to share the URL with the form data


    // $_POST: it collects data from the form and sends it in the HTTP request body.
    //It is not visible in the URL --> more secure
    //No char/data limit
    // cannot be bookmarked with values.
    // GET requests cannot be cached by the browser
    // better for a login page or when you want to submit sensitive data


    echo $_POST["username"] . "<br>"; //it is technically an array.
    echo $_POST["password"] . "<br>";
?>