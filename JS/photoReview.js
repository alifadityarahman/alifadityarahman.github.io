var inputfoto = document.getElementById('inputfoto');
inputfoto.addEventListener('change', function (inputfoto) {
    var box = document.getElementById("box");
    var img = inputfoto.target.files;
    var reader = new FileReader();
    reader.onload = function (e) {
        box.setAttribute('src', e.target.result);
    }
    reader.readAsDataURL(img[0]);
});