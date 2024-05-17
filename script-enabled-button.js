document.getElementById('configuration-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('settings-panel').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('nickname').addEventListener('input', function () {
    if (this.value.trim() !== '' && this.value.trim() !== '') {
        document.getElementById('save-button').disabled = false;
    } else {
        document.getElementById('save-button').disabled = true;
    }
});

document.getElementById('cancel-button').addEventListener('click', function () {
    closeSettingsPanel();
});

document.getElementById('save-button').addEventListener('click', function () {
    alert('Настройки сохранены');
    closeSettingsPanel();
});

document.getElementById('overlay').addEventListener('click', function () {
    closeSettingsPanel();
});

function closeSettingsPanel() {
    document.getElementById('settings-panel').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}