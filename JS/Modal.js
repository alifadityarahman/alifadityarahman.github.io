var login = document.getElementById('box');
var mpLink = document.getElementById("tombol");
var close = document.getElementsByClassName("close")[0];
mpLink.onclick = function (tombol) {
    login.style.display = "block";
}
close.onclick = function (close) {
    login.style.display = "none";
}