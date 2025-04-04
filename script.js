document.addEventListener('DOMContentLoaded', () => {
    const characterAmountRange = document.getElementById('characterAmountRange');
    const characterAmountNumber = document.getElementById('characterAmountNumber');
    const includeUppercase = document.getElementById('includeUppercase');
    const includeNumbers = document.getElementById('includeNumbers');
    const includeSymbols = document.getElementById('includeSymbols');
    const passwordDisplay = document.getElementById('password');
    const form = document.querySelector('.form');
    const copyButton = document.getElementById('copyButton');
    const showHideButton = document.getElementById('showHideButton');

    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    characterAmountRange.addEventListener('input', syncCharacterAmount);
    characterAmountNumber.addEventListener('input', syncCharacterAmount);

    function syncCharacterAmount(event) {
        const value = event.target.value;
        characterAmountNumber.value = value;
        characterAmountRange.value = value;
    }

    function generatePassword() {
        let passwordLength = characterAmountNumber.value;
        let characters = lowercaseLetters;

        if (includeUppercase.checked) characters += uppercaseLetters;
        if (includeNumbers.checked) characters += numbers;
        if (includeSymbols.checked) characters += symbols;

        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

        passwordDisplay.value = password;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        generatePassword();
    });

    copyButton.addEventListener('click', () => {
        passwordDisplay.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
    });

    showHideButton.addEventListener('click', () => {
        if (passwordDisplay.type === 'password') {
            passwordDisplay.type = 'text';
            showHideButton.textContent = 'Hide';
        } else {
            passwordDisplay.type = 'password';
            showHideButton.textContent = 'Show';
        }
    });
});
