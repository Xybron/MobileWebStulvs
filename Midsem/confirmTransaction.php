<?php

session_start();


$password = $_SESSION["session_password"];
$receipientNumber = $_SESSION["session_number"];
$vendorType = $_SESSION["session_vendor"];
$receiptientNumber = $_SESSION["session_receipientNumber"];
$transactionAmount = $_SESSION["session_transactionAmount"];
?>


<!doctype html>
<html>
    <head>
        <title>Npunto Pay</title>
        <meta charset = 'UTF-8'>
    </head>
    <body>
        <h1>Confirm Transaction</h1>
        <h3>Vendor Type: <?php echo $vendorType?></h3>
        <h3>Receipient Number: <?php echo $receiptientNumber?></h2>
        <h3>Transaction Amoount: <?php echo $transactionAmount?></h2>
        <p>Kindly enter your password to continue</p>

        

        <form method = 'POST' action = 'confirmTransaction.php'>
          
            <input type = 'password' name = 'userPassword' placeholder = 'Password'><br>

            <button type = 'submit'>Confirm Transaction</button>

        </form>


    </body>
</html>


<?php

$userPassword = $_POST['userPassword'];

if(isset($userPassword)){
    if($userPassword === $password){
        header('Location: confirmationPage.php');
    }
    else{
        echo 'Password is incorrect';
        
    }
}


?>
