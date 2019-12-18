// PENGGUNAAN JQUERY
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      if (e != "") {
        $('#preview').show();
        $('#preview').attr('src', e.target.result);
      } else {
        $('#preview').show();
      }
    }
    reader.readAsDataURL(input.files[0]);
  }
}

$("#gambar_pro").change(function () {
  readURL(this);
});


// PENGGUNAAN NATIVE

// var inputfoto = document.getElementById('inputfoto');
// inputfoto.addEventListener('change', function (inputfoto) {
//   var box = document.getElementById("box");
//   var img = inputfoto.target.files;
//   var reader = new FileReader();
//   reader.onload = function (e) {
//     box.setAttribute('src', e.target.result);
//   }
//   reader.readAsDataURL(img[0]);
// });