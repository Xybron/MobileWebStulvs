<?php
session_start();

$username = $_SESSION["session_username"];
$password = $_SESSION["session_password"];
$number = $_SESSION["session_number"];
$vendorType = $_SESSION["session_vendor"];

?>
<!doctype html>
<html>
    <head>
        <title>Npunto Pay</title>
        <meta charset = 'UTF-8'>
    </head>
    <body>
        <h1>Send Money</h1>
        <h3>Vendor Type: <?php echo $vendorType?></h3>

        <form method = 'POST' action = 'sendMoney.php'>
            <input type = 'number' name = 'receipient' placeholder = 'Receipient Number'><br>
            <input type = 'number' name = 'amount' placeholder = 'Amount'><br>
            <button type = 'submit'>Send</button>

        </form>


    </body>
</html>

<?php

$receiptient = $_POST['receipient'];
$transactionAmount = $_POST['amount'];

if(isset($receiptient) && isset($transactionAmount)){
    $_SESSION["session_receipientNumber"] = $receiptient;
    $_SESSION["session_transactionAmount"] = $transactionAmount;


    header('Location: confirmTransaction.php');
    
}
else{
    echo 'Kindly make sure all fields are filled.';
}


?>