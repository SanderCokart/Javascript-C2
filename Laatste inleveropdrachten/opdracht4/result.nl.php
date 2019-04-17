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


    echo "je naam is " . $name . ". Je bent geboren op " . $birthday . " dus dat moet betekenen dat je " . calculateDoB($birthday) . " jaar oud bent, ik zie ook dat je woont in " . $city . " op " . $address . " en de postcode is " . $postcode . " en dat betkend vast dat je nationalteit " . $nationality . " is en als laatste kan ik zien dat je een " . $profession . " bent. Nou wat leuk! En je bericht is als volgt: <br><br>" . $comment;

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
