<!doctype html>
<html>
    <head>
        <title>Npunto Pay</title>
        <meta charset = 'UTF-8'>
    </head>
    <body>
        <h1>Welcome to Npunto Pay</h1>

        <form method = 'POST' action = '729.php'>
            <input type = 'radio' value = 'createAccount' name = 'accountOption'>Create Account<br>
            <input type = 'radio' value = 'enterAccount' name = 'accountOption'>I already have an account<br>

            <button type = 'submit'>Next</button>

        </form>


    </body>
</html>

<?php

$accountOption = $_POST['accountOption'];

if($accountOption === 'createAccount'){
    header('Location: createAccount.php');
}
elseif($accountOption === 'enterAccount'){
    header('Location: transactionPage.php');
} 






?>