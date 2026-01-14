// Empty risk chart template
const ctx = document.getElementById("riskChart");

new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: ["Safe", "Risk"],
        datasets: [{
            data: [0, 0]   // Waiting for sensor values
        }]
    },
    options: {
        cutout: "70%"
    }
});

// Future function to update values from Arduino / API
function updateSensorData(data) {
    document.getElementById("rain").innerText = data.rain;
    document.getElementById("moisture").innerText = data.moisture;
    document.getElementById("vibration").innerText = data.vibration;
    document.getElementById("water").innerText = data.water;
    document.getElementById("weather").innerText = data.weather;
    document.getElementById("riskText").innerText = "Risk: " + data.risk + "%";
}
