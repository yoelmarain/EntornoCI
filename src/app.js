document.getElementById('concatButton').addEventListener('click', () => {
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;

    // Concatenar los números como cadenas
    const result = number1 + number2;

    // Mostrar el resultado
    document.getElementById('result').textContent = `Resultado: ${result}`;
});