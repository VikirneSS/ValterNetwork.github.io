document.getElementById('upload-image').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        document.getElementById('rounded-image').src = reader.result;
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
        document.getElementById('rounded-image').src = "";
    }
});