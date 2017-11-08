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
        <h1>Welcome <?php echo $username?></h1>
        <h3>Vendor Type: <?php echo $vendorType?></h3>

        <form method = 'POST' action = 'transactionPage.php'>
            <input type = 'radio' value = 'sendMoney' name = 'accountOperation'>Send Money<br>
            <input type = 'radio' value = 'viewTransaction' name = 'accountOperation'>View Transactions<br>

            <button type = 'submit'>Next</button>

        </form>


    </body>
</html>
<?php

$choice = $_POST['accountOperation'];
if(isset($choice)){
    if($choice === 'sendMoney'){
        header('Location: sendMoney.php');
    }
    else{
        header('Location: userTransactions.php');
    }
}




?>