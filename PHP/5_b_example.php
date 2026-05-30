<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>example</title>
</head>
<body>
    <form action="5_b_example.php" method="post">
        <label>Radius: </label>
        <input type="number" name="radius" id="radius">
        <br><br>
        <input type="submit" value="Calculate">
    </form>
</body>
</html>
<?php
    $radius = $_POST['radius'];
    $area = null;
    $circumference = null;
    $volume = null;

    $area = pi() * pow($radius, 2);
    $area = round($area, 2);

    $circumference = 2 * pi() * $radius;
    $circumference = round($circumference, 2);

    $volume = (4/3) * pi() * pow($radius, 3);
    $volume = round($volume, 2);

    echo "The circumference of the circle is: {$circumference}<br>";
    echo "The area of the circle is: {$area}<br>";
    echo "The volume of the sphere is: {$volume}<br>";
    
?>