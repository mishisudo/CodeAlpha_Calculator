const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let input = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

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
    });
});
