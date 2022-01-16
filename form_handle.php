<?php
$name = $_POST["Name"];
$visitor_email = $_POST['Email'];
$rank = $_POST['Rank'];
$message = $_POST['Message'];

$form_name = "Contact NYIG"

$email_from = 'info@ny-go.org';

$email_subject = "$form_name form submission"

$email_body = "$name just submitted a form: $form_name.\n".
                 "<b>Message Details:</b>\n".
                 "Name: $name \n".
                 "Email: $visitor_email \n".
                 "Rank: $rank \n".
                 "Message: $message \n";

$to = 'info@ny-go.org';

$headers = "From: $email_from \r\n";

$headers .= "Reply to: $visitor_email \r\n";

mail($to, $email_subject, $email_body, $headers);

header("Location: contact.html");
?>