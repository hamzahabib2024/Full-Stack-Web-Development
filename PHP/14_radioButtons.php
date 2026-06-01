<!-- // working with radio buttons in PHP -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="14_radioButtons.php" method="post">
        <input type="radio" name="credit_card" value="Visa">Visa <br>
        <input type="radio" name="credit_card" value="Mastercard">Mastercard <br>
        <input type="radio" name="credit_card" value="American Express">American Express <br>

        <input type="submit" name="confirm" value="confirm">
    </form>
</body>
</html>
<?php
    if (isset($_POST['confirm'])) {
        $credit_card = null;


        if (isset($_POST['credit_card'])){
            $credit_card = $_POST['credit_card'];
        } else {
            echo "Please select a credit card.";
        }
        
        switch ($credit_card) {
            case "Visa":
                echo "You have selected the Visa credit card.";
                break;
            case "Mastercard":
                echo "You have selected the Mastercard credit card.";
                break;
            case "American Express":
                echo "You have selected the American Express credit card.";
                break;
            default:
                echo "Please select a credit card.";
        }
    }
?>