var hexColorInput = document.getElementById('hex-color');
var colorPanel = document.getElementById('color-panel');

hexColorInput.addEventListener('input', function () {
    var color = this.value;
    if (/^#[0-9A-F]{6}$/i.test(color)) {
        colorPanel.style.backgroundColor = color;
    } else {
        colorPanel.style.backgroundColor = 'red';
    }
});