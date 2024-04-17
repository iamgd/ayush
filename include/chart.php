<?php
// Database connection
$host = 'localhost'; // Change this to your database server hostname or IP
$username = 'root'; // Change this to your MySQL username
$password = ''; // Change this to your MySQL password
$database = 'userform'; // Change this to your database name

$mysqli = new mysqli($host, $username, $password, $database);

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Query to retrieve member counts for each category
$query = "SELECT Category, COUNT(*) as Count FROM members GROUP BY Category";
$result = $mysqli->query($query);
// Initialize an empty array to store category data
$categoryData = [];

// Fetch and format the data
while ($row = $result->fetch_assoc()) {
    $categoryData[$row['Category']] = $row['Count'];
}

// Convert the data to a JSON string for JavaScript
$categoryDataJSON = json_encode($categoryData);
?>
<!DOCTYPE html>
<html>
<head>
    <title>Donut Chart</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <div style="width: 400px; height: 400px;">
        <canvas id="donutChart"></canvas>
    </div>

    <script>
        // Retrieve the category data from PHP
        var categoryData = <?php echo $categoryDataJSON; ?>;
        
        // Get the canvas element
        var ctx = document.getElementById("donutChart").getContext("2d");

        // Create the donut chart
        var donutChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: Object.keys(categoryData),
                datasets: [{
                    data: Object.values(categoryData),
                    backgroundColor: ["#FF5733", "#33FF57", "#3366FF"], // You can set your own colors
                }],
            },
        });
    </script>
</body>
</html>
