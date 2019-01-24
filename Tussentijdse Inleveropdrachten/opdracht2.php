<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="../css/tussentijd.css">
        <title>opdracht2</title>
    </head>
    <body>
        <?php
        echo "<table border=\"1\" id=\"opdr1\">";
        $x = 0;
         for ($i=0; $i < 5; $i++) {
             echo "<tr>";
             for ($j=0; $j < 5; $j++) {
                 echo "<td class=\"square\" id=\"$x\"></td>";
                 $x++;
             }
             echo "</tr>";
         }
         echo "</table>";
         ?>
    </body>
    <script src="opdracht2.js"></script>
</html>
