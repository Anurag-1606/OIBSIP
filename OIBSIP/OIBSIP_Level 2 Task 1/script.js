const screen = document.getElementById('screen');

function appendNumber(number) {
    screen.value += number;
}

function appendOperator(operator) {
    const lastChar = screen.value[screen.value.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar)) {
        screen.value = screen.value.slice(0, -1) + operator;
    } else {
        screen.value += operator;
    }
}

function clearScreen() {
    screen.value = '';
}

function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

function calculateResult() {
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        screen.value = 'Error';
    }
}
