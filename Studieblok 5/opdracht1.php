<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Opdracht 1</title>
    </head>
    <body>

        <div>
        <form id="form" method="post" onsubmit="Validate()">
            <input type="text" id="postcode" name="postcode" placeholder=postcode><br>
            <input type="text" id="email" name="email" placeholder="email"><br>
            <input type="text" id="phone" name="phone" placeholder="phone"><br>
            <input type="text" id="adres" name="adres" placeholder="adres"><br>
            <select id="gender">
                <option value="female">male</option>
                <option value="male">female</option>
            </select><br><br>
            <input type="submit" name="submit" value="submit">
        </form>
    </div>
    </body>
    <script src="opdracht1.js"></script>
</html>
