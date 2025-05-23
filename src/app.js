document.getElementById('concatButton').addEventListener('click', () => {
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;

    // Usa la función global
    const result = window.concatenateNumbers(number1, number2);
    document.getElementById('result').textContent = `Resultado: ${result}`;
});