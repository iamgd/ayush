<?php 
require "connection.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome | Home</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

</head>
<body>

<div class="main">
    <div class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <h2 class="navbar-brand"><img src="./images/ayush_logo.jpg" width="80" height="80" alt="AYUSH"></h2>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="schemes.html">Schemes</a></li>
                    <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
                    <li class="nav-item"><a class="nav-link" href="products.html">Products</a></li>
                    <li class="nav-item"><a class="nav-link" href="dash.html">dash</a></li>
                </ul>
            </div>

            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Type to search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>

    <div class="content text-center">
        <h1 class="mt-5">Ayush - Startup <br><span>Portal</span></h1>
        <p class="par">The "Startup-AYUSH Portal" is a groundbreaking digital initiative that seeks to provide a comprehensive and user-friendly online platform for the AYUSH community, which encompasses Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homoeopathy. <br> The primary focus of this platform is on the rapidly evolving fields of MedTech, BioTech, and HealthTech, where innovation and technology are driving significant advancements in healthcare and wellness.</p>

        <!-- <?php echo $fetch_info['username'] ?> -->

        <form class="d-flex justify-content-center" id="form" method="post" action="find.php"></form>

        <button class="btn btn-primary mt-3"><a href="logout.php" class="text-white text-decoration-none">Logout</a></button>
    </div>
</div>

<div class="end-text text-center py-3">
    <p class="m-0">Copyright © @Ayush. All Rights Reserved. Designed By GD.</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kqO2T5yf8FV7vfS3s7VDM9aJoyoSUWe21k5rXbcfqt9t0q2racjzFL6o5IkJ0sE8" crossorigin="anonymous"></script>
</body>
</html>
