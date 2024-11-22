function calculate() {
    const amount = parseFloat(document.getElementById("amount").value);
    const isDisabled = document.getElementById("disabled").value === "yes";
    const maxContribution = isDisabled ? 4000 : 2000;
    let governmentContribution = 0;
    let userContribution = 0;
    let totalAmount = 0;

    if (amount > 0) {
        // Calculate government contribution (25% of the amount paid)
        governmentContribution = (amount / 8) * 2;
        
        // Cap the government contribution at maxContribution
        if (governmentContribution > maxContribution) {
            governmentContribution = maxContribution;
        }
        
        // Calculate user contribution and total payable
        userContribution = amount;
        totalAmount = userContribution + governmentContribution;
        
        // Update the HTML to display results
        document.getElementById("govContribution").textContent = governmentContribution.toFixed(2);
        document.getElementById("userContribution").textContent = userContribution.toFixed(2);
        document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
    } else {
        document.getElementById("govContribution").textContent = "0.00";
        document.getElementById("userContribution").textContent = "0.00";
        document.getElementById("totalAmount").textContent = "0.00";
        alert("Please enter a valid amount.");
    }
}
nn
