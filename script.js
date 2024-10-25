// Function to calculate results
function calculateResults() {
    const waterAmount = parseFloat(document.getElementById("waterInput").value);
    
    // Validate the input
    if (isNaN(waterAmount) || waterAmount <= 0) {
        document.getElementById("result").textContent = "Please enter a valid water amount.";
        return;
    }
    
    // Constants for calculations
    const molarMassWater = 18.015; // g/mol
    const energyPerMole = 39.4;     // kWh per mole of water

    // Perform calculations
    const molesOfWater = waterAmount / molarMassWater; // Convert liters to moles
    const h2Produced = molesOfWater;                    // Moles of H2 produced
    const o2Produced = molesOfWater / 2;                // Moles of O2 produced
    const energyRequired = molesOfWater * energyPerMole; // Total energy required

    // Display results with better formatting
    document.getElementById("result").innerHTML = `
        <h2>Results:</h2>
        <p><strong>H<sub>2</sub> Produced:</strong> ${h2Produced.toFixed(2)} moles</p>
        <p><strong>O<sub>2</sub> Produced:</strong> ${o2Produced.toFixed(2)} moles</p>
        <p><strong>Energy Required:</strong> ${energyRequired.toFixed(2)} kWh</p>
    `;
}

// Event listener for the button click
document.getElementById("calculateButton").addEventListener("click", calculateResults);


