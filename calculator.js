#!/usr/bin/env node

// Importujemy moduł 'process' dla obsługi argumentów wiersza poleceń (Node.js automatycznie go udostępnia)
import process from 'process';

// Pobieramy argumenty z wiersza poleceń, pomijając pierwsze dwa elementy (node i ścieżka pliku)
const [, , operation, num1, num2] = process.argv;

// Funkcja sprawdzająca, czy argumenty są poprawnymi liczbami
const parseNumber = (value) => {
    const number = parseFloat(value);
    return isNaN(number) ? null : number;
};

// Konwertujemy argumenty num1 i num2 na liczby
const a = parseNumber(num1);
const b = parseNumber(num2);

// Walidacja wejściowych argumentów
if (!operation || a === null || b === null) {
    console.error('Błąd: Podaj operację i dwie liczby! Użycie: node calculator.js <operacja> <liczba1> <liczba2>');
    process.exit(1);
}

// Definiujemy obiekt z obsługiwanymi operacjami
const operations = {
    add: (x, y) => x + y,
    sub: (x, y) => x - y,
    mul: (x, y) => x * y,
    div: (x, y) => (y === 0 ? 'Błąd: Dzielenie przez zero jest niedozwolone!' : x / y),
};

// Sprawdzamy, czy podana operacja jest obsługiwana
if (!operations[operation]) {
    console.error('Błąd: Nieznana operacja! Użyj: add, sub, mul, div.');
    process.exit(1);
}

// Obliczamy wynik
const result = operations[operation](a, b);

// Wyświetlamy wynik lub komunikat o błędzie przy dzieleniu przez zero
console.log(`Wynik: ${result}`);
