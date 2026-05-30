<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bill</title>
</head>
<body>
    <form action="4_b_resturant_bill.php" method="post">
        <label>quantity: </label>
        <input type="number" name="quantity" id="quantity">
        <br><br>
        <input type="submit" value="Process Order">

    </form>
</body>
</html>
<?php
    $item = "pizza";
    $price = 5;
    $total = null;
    $quantity = $_POST['quantity'];

    $total = $price * $quantity;

    echo "You have ordered {$quantity} X {$item}<br>";
    echo "Your total bill is \${$total}";
?>