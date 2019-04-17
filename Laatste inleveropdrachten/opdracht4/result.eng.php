<?php
 if (isset($_POST['submit'])) {
    $birthday = $_POST['birthday'];
    $name = $_POST['name'];
    $postcode = $_POST['postcode'];
    $address = $_POST['address'];
    $city = $_POST['city'];
    $nationality = $_POST['nationality'];
    $profession = $_POST['profession'];
    $comment = $_POST['comments'];


    echo "Your name is " . $name . ". You were born on " . $birthday . " which means you must be " . calculateDoB($birthday) . " years old, I also see you live in " . $city . " on " . $address . " and the postcode is " . $postcode . " and that means you nationality is " . $nationality . " and finally I can see you are a " . $profession . ", well how wonderfull! And your message reads as follows: <br><br>" . $comment;

 } else {
     echo "invalid birthdate please try again.";
 }

 function calculateDoB($birthday){
    $dob = new DateTime($birthday);
    $now = new DateTime();

    $difference = $now->diff($dob);

    $age = $difference->y;

    return $age;
 }
 ?>

 <!DOCTYPE html>
 <html lang="en" dir="ltr">
     <head>
         <meta charset="utf-8">
         <title></title>
     </head>
     <body>

     </body>
 </html>
