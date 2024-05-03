<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Templated PHP Assignment for CS312">
    <meta name="keywords" content="HTML, Website, CS312, PHP, SPA, Dynamic">
    <meta name="author" content="Ayush Adhikari">

    <?php
        session_start();
        if ($_SERVER["REQUEST_METHOD"] == "POST") $_SESSION["current_page"] = $_POST["page"];
        $page = isset($_SESSION["current_page"]) ? $_SESSION["current_page"] : "homepage";

        $direction = (isset($_GET["direction"])) ? $_GET["direction"] : "west";
        $allowed_direction = array('east', 'west');

        if (!in_array($direction, $allowed_direction))
            header("Location: 404.php");

        $opp_direction = $direction === "east" ? "west" : "east";
    ?>

    <title> <?php echo strtoupper($direction) ?> </title>
    <link href=<?php echo "./css/$direction.css" ?> rel="stylesheet">
</head>
<body>
    <div id="navbar">
        <?php include("./content/navbar.html"); ?>
    </div>
    <main id="main_body">
        <header>
            <span id="head_note">
                <?php echo ucfirst($direction) . " " . ucfirst($page); ?>
            </span>
        </header>
        <div id="main_content">
            <?php include("./content/$page.html"); ?>
        </div>
        <footer>
            <span id="foot_note">Created by Ayush Adhikari for CS312</span>
        </footer>
    </main>
</body>
</html>