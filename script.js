document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const expression = document.getElementById('expression');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let previousAnswer = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.id;

            if (value === 'clear') {
                currentInput = '';
                expression.textContent = '';
                display.textContent = '';
            } else if (value === 'del') {
                currentInput = currentInput.slice(0, -1);
                expression.textContent = currentInput;
                display.textContent = ''; // Clear display when deleting
            } else if (value === 'enter') {
                try {
                    const result = eval(currentInput);
                    display.textContent = result.toString();
                    previousAnswer = result.toString(); // Store result for 'ans' functionality
                    expression.textContent = currentInput; // Keep expression visible
                    currentInput = result.toString(); // Update currentInput for further calculations
                } catch {
                    display.textContent = 'Error';
                }
            } else if (value === 'sqrt') {
                try {
                    const result = Math.sqrt(eval(currentInput));
                    display.textContent = result.toString();
                    currentInput = result.toString(); // Update currentInput to the result
                    expression.textContent = currentInput; // Keep expression visible
                } catch {
                    display.textContent = 'Error';
                }
            } else if (value === '+/-') {
                if (currentInput.charAt(0) === '-') {
                    currentInput = currentInput.slice(1);
                } else {
                    currentInput = '-' + currentInput;
                }
                expression.textContent = currentInput;
            } else if (value === 'ans') {
                currentInput += previousAnswer;
                expression.textContent = currentInput;
            } else {
                currentInput += value;
                expression.textContent = currentInput;
            }
        });
    });
});
