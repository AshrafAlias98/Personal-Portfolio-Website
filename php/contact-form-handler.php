<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$email_from = 'ashraf69alias@gmail.com';

$email_subject = "New Form Submission";

$email_body = "User Name: $name.\n" . "User Email: $visitor_email.\n" . "User Message: $message.\n";


$to = "ashraf69alias@gmail.com";
$header = "From: $email_from \r\n";
$header .= "Reply-To: $visitor_email \r\n";

mail($to, $email_subject, $email_body, $header);

header("Location: index.html");