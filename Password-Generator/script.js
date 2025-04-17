
function generatePassword() {
    // Get values from the input and checkboxes
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    // Define character sets
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let validChars = '';

    // Append selected character types to validChars
    if (includeUppercase) validChars += uppercaseChars;
    if (includeLowercase) validChars += lowercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += symbolChars;

    // If no options selected, show warning and stop
    if (validChars === '') {
        alert('Please select at least one character type');
        return;
    }

    let password = '';

    // Loop to generate password of desired length
    for (let i = 0; i < length; i++) {
        // Get a random index within the validChars string
        const randomIndex = Math.floor(Math.random() * validChars.length);

        // Add the random character to the password
        password += validChars[randomIndex];
    }

    // Show generated password in the HTML
    document.getElementById('generated-password').textContent = password;
}

function copyPassword() {
    const passwordEl = document.getElementById('generated-password');
    const password = passwordEl.textContent;

    // Only copy if password is not empty
    if (password) {
        // Use Clipboard API to copy the password
        navigator.clipboard.writeText(password).then(() => {
            alert('Password copied to clipboard!');
        });
    }
}

// Automatically generate a password when the page loads
generatePassword();

