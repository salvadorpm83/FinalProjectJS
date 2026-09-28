function upDate(previewPic) {
  console.log("Se disparo el evento mouseover");

  console.log("alt: " + previewPic.alt);
  console.log("src: " + previewPic.src);

  document.getElementById("image").innerHTML = previewPic.alt;

  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  document.getElementById("image").style.backgroundImage = "url('')";

  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}

// paso 8 y 9: al cargar la pagina, se le da tabindex a cada imagen
// para que tambien se pueda llegar a ellas con la tecla Tab
function agregarTabIndex() {
  // 9.1 - comprobar que el evento onload si se dispara
  console.log("Se disparo el evento onload, agregando tabindex");

  // 9.2 - recorrer cada imagen de la galeria con un for
  const fotos = document.querySelectorAll(".preview");
  for (let i = 0; i < fotos.length; i++) {
    // 9.3 - agregar el atributo tabindex por JavaScript (no en el HTML)
    fotos[i].tabIndex = 0;
  }
}