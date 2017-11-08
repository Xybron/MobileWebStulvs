<!doctype html>
<html>
    <head>
        <title>Npunto Pay</title>
        <meta charset = 'UTF-8'>
    </head>
    <body>
        <h1>Create An Account</h1>

        <form method = 'POST' action = 'createAccount.php'>
            <input type = 'text'  name = 'username' placeholder = 'Username'><br>
            <input type = 'password'  name = 'password' placeholder = 'Password'><br>
            <input type = 'number'  name = 'number' placeholder = 'My Number'><br>
            <!-- <input type = 'text'  name = 'vendor' placeholder = 'Mobile Money Vendor'><br> -->

            <button type = 'submit'>Create Account</button>

        </form>


    </body>
</html>

<?php

$username = $_POST['username'];
$password = $_POST['password'];
$number = $_POST['number'];


global $vendorType;

if(isset($username) && isset($password) && isset($number)){
    checkVendor($number);
    session_start();
    
    $_SESSION["session_username"] = $username;
    $_SESSION["session_password"] = $password;
    $_SESSION["session_number"] = $number; 
    $_SESSION["session_vendor"] = $vendorType; 

    header('Location: transactionPage.php');
}


function checkVendor($number){
    global $vendorType;
        $vendor = array(
            'Vodafone' => array('020','050'),
            'Airtel' => array('026','056'),
            'MTN' => array('024','054')
        );
    
        $numHead = substr($number,0,3);
        if($numHead === '020'){
            $vendorType = 'Vodafone';
        }
        elseif($numHead === '026'){
            $vendorType = 'Airtel';
        }
        elseif($numHead === '024'){
            $vendorType = 'MTN';
        }
    }
    


?>
