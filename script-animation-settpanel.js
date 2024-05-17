document.getElementById('configuration-link').addEventListener('click', function (event) {
    event.preventDefault();
    var settingsPanel = document.getElementById('settings-panel');
    var overlay = document.getElementById('overlay');
    settingsPanel.classList.add('slide-down');
    overlay.style.display = 'block';
});