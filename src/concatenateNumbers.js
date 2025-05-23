function concatenateNumbers(num1, num2) {
    return String(num1) + String(num2);
}

// CommonJS export (para Node/Jest)
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = concatenateNumbers;
}

// Export global para navegador (sin import/export)
if (typeof window !== 'undefined') {
    window.concatenateNumbers = concatenateNumbers;
}