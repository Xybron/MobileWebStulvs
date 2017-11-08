<?php

//extract data from the post
//set POST variables
$url = 'http://pay.npontu.com/api/pay';


//Parameters
$number = '0265578245';
$vendor = 'Airtel';
$uid = 'Xybron';
$pass = '1234';
$tp = '0001';
$cbk = 'http://gmpay.npontu.com/api/tigo?transaction_id=001&responseMessage=Testing&status=true';
$msg = 'Npunto Pay trial';
$amt = 5;
$vou = 422572322;
$pin = md5($uid.$pass);
$trans_type = 'Debit';


$fields = array(
	'number' => urlencode($number),
	'vendor' => urlencode($vendor),
	'uid' => urlencode($uid),
	'pass' => urlencode($pass),
	'tp' => urlencode($tp),
	'cbk' => urlencode($cbk),
    'amt' => urlencode($amt),
    'msg' => urlencode($msg),
    'vou' => urlencode($vou),
    'pin' => urlencode($pin),
	'trans_type' => urlencode($trans_type)
);

//url-ify the data for the POST
global $fields_string;
foreach($fields as $key=>$value) { 
    echo "\n".$key.' : '.$value;
    $fields_string .= $key.'='.$value.'&'; 
}
rtrim($fields_string, '&');

//open connection
$ch = curl_init();

//set the url, number of POST vars, POST data
curl_setopt($ch,CURLOPT_URL, $url);
curl_setopt($ch,CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch,CURLOPT_HEADER, 0);
curl_setopt($ch,CURLOPT_POST, count($fields));
curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);

//execute post
$result = curl_exec($ch);

//Check to see if it was successful
if($result === FALSE){
    echo 'cURL Error : '. curl_error($ch);
}

echo $result;
//close connection
curl_close($ch);

?>