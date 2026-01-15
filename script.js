const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let input = "";

// Button click functionality
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        handleInput(value);
    });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if ((key >= '0' && key <= '9') || key === '.' || ['+', '-', '*', '/', '%'].includes(key)) {
        handleInput(key);
    } else if (key === 'Enter') {
        handleInput('=');
    } else if (key === 'Backspace') {
        handleInput('←');
    } else if (key === 'Escape') {
        handleInput('C');
    }
});

// Function to handle input
function handleInput(value) {
    if (value === "C") {
        input = "";
        display.value = "";
    } else if (value === "←") {
        input = input.slice(0, -1);
        display.value = input;
    } else if (value === "=") {
        try {
            input = eval(input);
            display.value = input;
        } catch {
            display.value = "Error";
            input = "";
        }
    } else {
        input += value;
        display.value = input;
    }
}
