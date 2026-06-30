const display = document.getElementById("display");

// Add value to display
function appendValue(value) {

    if (display.value === "Error") {
        display.value = "";
    }

    display.value += value;
}

// Clear display
function clearDisplay() {

    display.value = "";
}

// Delete last character
function deleteLast() {

    if (display.value === "Error") {
        display.value = "";
        return;
    }

    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {

    if (display.value.trim() === "") {
        return;
    }

    try {

        const result = eval(display.value);

        display.value = result;

        // Glow animation
        display.classList.remove("display-glow");

        // Restart animation
        void display.offsetWidth;

        display.classList.add("display-glow");

    }

    catch (error) {

        display.value = "Error";

        display.classList.remove("display-glow");
    }
}
