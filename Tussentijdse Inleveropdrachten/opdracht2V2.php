<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="../css/tussentijd2V2.css">
        <title>opdracht2V2</title>
    </head>
    <body>
        <?php
            $x = 0;
            echo "<table border=\"1\">";
            for ($rows=0; $rows < 5; $rows++) {
                echo "<tr>";
                for ($columns=0; $columns < 5; $columns++) {
                    echo "<td id=\"$x\">$x</td>";
                    $x++;
                }
                echo "<tr>";
            }
            echo "</table>";
         ?>
    </body>
    <script src="opdracht2V2.js"></script>
</html>
