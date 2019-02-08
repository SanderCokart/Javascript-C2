<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <style media="screen">
            *{
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }

            body{
                /* font-size: 1.5vw; */
                display: grid;
                grid-template-columns: 50vw 50vw;
                grid-template-rows: 50vh 50vh;
            }

            .topright{
                display: grid;
                grid-auto-flow: row;
                padding: 40px;
                grid-column: 2/2;
                grid-row: 1/2;
                width: 100%;
                height: 100%;
                background-color: red;
                font-size: 1.5vw;
            }

            button{
                grid-column: 2/2;
                grid-row: 2/2;
                font-size: 5vw;
            }
        </style>
        <meta charset="utf-8">
        <title>opdracht2</title>
    </head>
    <body>
        <div class="topright">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, aliquam.</p>
            <p>Provident nihil quidem, dolor facere et esse delectus voluptatem numquam!</p>
            <p>Eveniet repellat dolorum placeat eum nisi a dolore, neque sequi.</p>
            <p>Non, quia? Vero debitis itaque earum impedit cum, dolore unde.</p>
            <p>Eos sit officiis repudiandae harum. Laudantium repudiandae maxime quaerat aut?</p>
        </div>
        <button type="button" name="button">BUTTON</button>
    </body>
    <script src="../jquery-3.3.1.js"></script>
    <script src="opdracht2.js"></script>
</html>
