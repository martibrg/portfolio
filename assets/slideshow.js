/* ===================================================
   slideshow.js
   Slideshow non cliccabile per il riquadro di anteprima
   in homepage. Immagini in ordine casuale (shuffle),
   transizione impostata a 0 secondi (cambio istantaneo).
   =================================================== */

(function () {

  // -------- 1. ELENCO IMMAGINI --------
  // Aggiungi/rimuovi/rinomina qui i percorsi delle tue immagini.
  // Puoi mettere quante immagini vuoi.
  var IMAGES = [
    "assets/preview/1.jpg",
    "assets/preview/10.png",
    "assets/preview/11.png",
    "assets/preview/12.png",
    "assets/preview/13.png",
    "assets/preview/14.jpg",
    "assets/preview/15.jpg",
    "assets/preview/2.png",
    "assets/preview/3.png",
    "assets/preview/4.png",
    "assets/preview/5.png",
    "assets/preview/6.png",  
    "assets/preview/7.png",
    "assets/preview/8.png",
    "assets/preview/9.png",       
  ];

  // -------- 2. TEMPO DI VISUALIZZAZIONE --------
  // Millisecondi che ogni immagine resta visibile prima di cambiare.
  var INTERVAL_MS = 5000;

  // -------- shuffle (Fisher-Yates) --------
  function shuffle(array) {
    var a = array.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("home-preview");
    if (!container || IMAGES.length === 0) return;

    var layerA = container.querySelector(".preview-img.layer-a");
    var layerB = container.querySelector(".preview-img.layer-b");

    var order = shuffle(IMAGES);
    var pos = 0;
    var showingA = true;

    // mostra la prima immagine
    layerA.src = order[pos];
    layerA.classList.add("active");

    if (order.length <= 1) return; // niente da alternare

    setInterval(function () {
      pos++;
      if (pos >= order.length) {
        order = shuffle(IMAGES); // rimescola quando il giro finisce
        pos = 0;
      }

      var incoming = showingA ? layerB : layerA;
      var outgoing = showingA ? layerA : layerB;

      incoming.src = order[pos];
      incoming.classList.add("active");
      outgoing.classList.remove("active");

      showingA = !showingA;
    }, INTERVAL_MS);
  });

})();
