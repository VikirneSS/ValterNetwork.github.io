document.getElementById('input-discord').addEventListener('input', checkInputs);
document.getElementById('input-password').addEventListener('input', checkInputs);

function checkInputs() {
    var discordInput = document.getElementById('input-discord').value;
    var passwordInput = document.getElementById('input-password').value;
    var continueButton = document.getElementById('continue-button');

    if (discordInput === '' || passwordInput === '') {
        continueButton.disabled = true;
        continueButton.style.backgroundColor = '#C3C7CA';
        continueButton.style.borderColor = '#C3C7CA';
        continueButton.style.color = '#7B7D80';
    } else {
        continueButton.disabled = false;
        continueButton.style.backgroundColor = '#0083FF';
        continueButton.style.borderColor = '#0083FF';
        continueButton.style.color = 'white';
    }
}