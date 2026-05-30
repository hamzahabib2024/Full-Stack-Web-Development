<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Math Functions</title>
</head>
<body>
    <form action="5_math_functions.php" method="post">
        <label>X:</label>
        <input type="text" name="x" id="x"><br>
        <label>Y:</label>
        <input type="text" name="y" id="y"><br>
        <label>Z:</label>
        <input type="text" name="z" id="z">
        <br><br>
        <input type="submit" value="total">



    </form>
</body>
</html>
<?php
    $x = $_POST['x'];
    $y = $_POST['y'];
    $z = $_POST['z'];
    $total = null;

    // $total = pi();
    // $total = abs($x);
    // $total = round($x);
    // $total = floor($x);
    // $total = ceil($x);
    // $total = sqrt($x);
    // $total = pow($x, $y); 
    $total = max($x, $y, $z);
    // $total = min($x, $y, $z);
    // $total = rand();
    // $total = rand($x, $y); 


    echo $total;
    
?>