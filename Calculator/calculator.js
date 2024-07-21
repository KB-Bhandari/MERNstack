let displayValue = '0'; // Initialize display value
let pendingValue; // To store the first operand of the operation
let operator; // To store the operator (+, -, *, /)

// Function to append numbers and operators to the display
function appendToDisplay(value) {
    // If current display value is '0', replace it with the new value
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay(); // Update the display
}

// Function to clear the display and reset all variables
function clearDisplay() {
    displayValue = '0';
    pendingValue = undefined;
    operator = undefined;
    updateDisplay();
}

// Function to perform the calculation when '=' button is clicked
function calculateResult() {
    if (pendingValue !== undefined && operator !== undefined) {
        let result;
        const currentValue = parseFloat(displayValue); // Convert current display value to float

        switch (operator) {
            case '+':
                result = pendingValue + currentValue;
                break;
            case '-':
                result = pendingValue - currentValue;
                break;
            case '*':
                result = pendingValue * currentValue;
                break;
            case '/':
                result = pendingValue / currentValue;
                break;
            case '=':
                displayValue = result.toString(); // Convert result to string for display
        pendingValue = undefined; // Clear pendingValue
        operator = undefined; // Clear operator
                updateDisplay();
                break;
            default:
                return;
        }

        
        //updateDisplay(); // Update the display with the result
    }
}

// Function to update the display with the current displayValue
function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

// Function to handle operator buttons (+, -, *, /)
function setOperator(op) {
    if (displayValue !== '0') {
        // If there's no pending operation, set pendingValue to current displayValue
        if (pendingValue === undefined) {
            pendingValue = parseFloat(displayValue);
        } else { // Otherwise, perform the calculation for the pending operation
            calculateResult();
        }

        operator = op; // Set the operator
        displayValue = '0'; // Reset displayValue for the next input
        updateDisplay(); // Update the display
    }
}
