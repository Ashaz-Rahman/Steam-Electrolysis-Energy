// Event listener for the button click
document.getElementById("calculateButton").addEventListener("click", calculateResults);

function calculateResults() {
    // Get the water amount from the input field
    const waterAmount = parseFloat(document.getElementById("waterInput").value);
    
    // Validate the input
    if (isNaN(waterAmount) || waterAmount <= 0) {
        document.getElementById("result").textContent = "Please enter a valid water amount.";
        return; // Exit the function if the input is invalid
    }
    
    // Perform the calculations
    const molesOfWater = waterAmount / 18.015; // Molar mass of water = 18.015 g/mol
    const h2Produced = molesOfWater;           // 1 mole of water produces 1 mole of H2
    const o2Produced = molesOfWater / 2;       // 1 mole of water produces 0.5 moles of O2
    const energyRequired = molesOfWater * 39.4; // Energy required in kWh (39.4 kWh per mole of water)

    // Display results
    document.getElementById("result").innerHTML = `
        <h2>Results:</h2>
        H2 Produced: ${h2Produced.toFixed(2)} moles<br>
        O2 Produced: ${o2Produced.toFixed(2)} moles<br>
        Energy Required: ${energyRequired.toFixed(2)} kWh
    `;
}

