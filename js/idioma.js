const BtnFlats = document.getElementById('idioma-flat');

BtnFlats.addEventListener('click', function(){
  let mySrc = BtnFlats.getAttribute('src')
  console.log(mySrc);
  if (mySrc === './img/idioma/esp.png') {
    BtnFlats.setAttribute('src','./img/idioma/ingl.png')
  } else {
    BtnFlats.setAttribute('src','./img/idioma/esp.png')
  }
});
