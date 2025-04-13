<?php
$page = "home";

if (isset($_GET['page'])) {
    $page = $_GET['page'];
    switch ($page) {
        case "home":
            $page = "home";
            break;
        case "nature":
            $page = "nature";
            break;
        case "city":
            $page = "city";
            break;
        case "animals":
            $page = "animals";
            break;
        case "space";
            $page = "space";
            break;
        case "food";
            $page = "food";
            break;
        default:
            header("Location: ?page=home");
            break;
    }
} else {
    header("Location: ?page=home");
}
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Gallerise</title>
    <link rel="icon" type="image/png" href="img/gallerise.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
    <link rel="stylesheet" href="shared/css/styles.css">
</head>

<body data-bs-theme="dark">
    <div id="imageModal" class="modal">
        <span class="close">x</span>
        <img class="modal-content" id="modalImage">
    </div>

    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="?page=home">
                <img src="img/gallerise.png" alt="Logo" height="40px" class="d-inline-block align-text-top">
                Gallerise
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-white" id="navbarSupportedContent">
                <ul class="mb-0">
                    <li><a class="link-style" href="?page=nature">Nature</a></li>
                    <li><a class="link-style" href="?page=city">City</a></li>
                    <li><a class="link-style" href="?page=animals">Animals</a></li>
                    <li><a class="link-style" href="?page=space">Space</a></li>
                    <li><a class="link-style" href="?page=food">Foods and Drinks</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <?php include("shared/" . $page . ".php"); ?>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
        crossorigin="anonymous"></script>
    <script src="shared/js/script.js"></script>
</body>

</html>