/* ===================================================
   clip-slideshow.js
   Player con più clip video. L'utente può:
   - lasciare che una clip finita faccia partire la successiva
     (loop continuo)
   - oppure cliccare su una miniatura per scegliere subito
     quale clip guardare

   Come usarlo in una pagina di lavoro:

   1. Nell'HTML metti il player:
        <div class="work-media">
          <video id="clip-player" controls playsinline></video>
        </div>

      e, subito sotto, la fila di miniature cliccabili
      (una per ogni clip, nello stesso ordine dell'elenco CLIPS):
        <div class="clip-thumbs" id="clip-thumbs">
          <button class="clip-thumb" data-index="0">
            <img src="../assets/works/nome-lavoro/thumbs/clip1.jpg" alt="clip 1">
          </button>
          <button class="clip-thumb" data-index="1">
            <img src="../assets/works/nome-lavoro/thumbs/clip2.jpg" alt="clip 2">
          </button>
          ...
        </div>

   2. Prima della chiusura di </body> aggiungi:
        <script>
          var CLIPS = [
            "../assets/works/nome-lavoro/clip1.mp4",
            "../assets/works/nome-lavoro/clip2.mp4"
          ];
        </script>
        <script src="../assets/clip-slideshow.js?v=1"></script>

      (la variabile CLIPS va definita PRIMA di richiamare questo file,
      con l'elenco delle clip di QUEL lavoro, nello stesso ordine
      delle miniature)
   =================================================== */

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var player = document.getElementById("clip-player");
    if (!player || typeof CLIPS === "undefined" || CLIPS.length === 0) return;

    var thumbsContainer = document.getElementById("clip-thumbs");
    var thumbs = thumbsContainer
      ? thumbsContainer.querySelectorAll(".clip-thumb")
      : [];

    var index = 0;

    function setActiveThumb(i) {
      for (var t = 0; t < thumbs.length; t++) {
        thumbs[t].classList.toggle("active", t === i);
      }
    }

    function loadClip(i, autoplay) {
      index = i;
      player.src = CLIPS[index];
      setActiveThumb(index);
      if (autoplay) {
        player.play();
      }
    }

    // avanza alla clip successiva quando quella in corso finisce
    player.addEventListener("ended", function () {
      loadClip((index + 1) % CLIPS.length, true);
    });

    // clic su una miniatura: passa subito a quella clip
    for (var i = 0; i < thumbs.length; i++) {
      thumbs[i].addEventListener("click", function (e) {
        var chosen = parseInt(e.currentTarget.getAttribute("data-index"), 10);
        loadClip(chosen, true);
      });
    }

    loadClip(0, false);
  });
})();
