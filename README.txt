COME FUNZIONA QUESTO SITO
==========================

Struttura dei file:

  index.html              → homepage
  about.html               → pagina "about"
  style.css                → tutto lo stile grafico (colori, layout, font)
  assets/preview.svg       → segnaposto nero dell'anteprima in homepage
  works/
    meta-shitposting.html  → pagina di dettaglio di UN lavoro, usala come modello


IL VIDEO DEL TITOLO IN HOMEPAGE
==================================

Il video "titolo.mp4" (in assets/) sostituisce ora la scritta "martina borgese":
parte in automatico, in loop, senza audio (necessario perché i browser bloccano
l'autoplay con audio). Se vuoi cambiarlo basta sostituire il file
assets/titolo.mp4 con un altro video con lo stesso nome.


LO SLIDESHOW NEL RIQUADRO NERO DELLA HOMEPAGE
================================================

Il riquadro nero sotto "about" non è più cliccabile: mostra le immagini
in "assets/preview/" una alla volta, in ordine casuale (cambia ogni volta
che ricarichi la pagina), con un cambio istantaneo (nessuna dissolvenza).

Per personalizzarlo:

1. Metti le tue immagini dentro "assets/preview/" (jpg, png o svg vanno bene).

2. Apri "assets/slideshow.js" e modifica l'elenco IMAGES in cima al file,
   scrivendo il percorso di ogni immagine, es.:

     var IMAGES = [
       "assets/preview/foto1.jpg",
       "assets/preview/foto2.jpg",
       "assets/preview/foto3.jpg"
     ];

   Puoi aggiungerne o toglierne quante vuoi.

3. Se vuoi cambiare quanto tempo resta visibile ogni immagine, modifica
   il valore INTERVAL_MS (in millisecondi: 2500 = 2 secondi e mezzo).

4. Se in futuro vuoi una vera dissolvenza tra un'immagine e l'altra,
   in "style.css" cerca la riga:

     transition: opacity 0s;

   e aumenta il valore, ad esempio "transition: opacity 0.6s;".

5. IMPORTANTE — cache del browser: ogni volta che modifichi
   "slideshow.js" e ricarichi il file su GitHub, il browser potrebbe
   continuare a mostrarti la versione vecchia. In "index.html" trovi
   questa riga:

     <script src="assets/slideshow.js?v=2"></script>

   Ogni volta che aggiorni slideshow.js, cambia il numero dopo "v="
   (es. v=3, v=4...): questo obbliga il browser a scaricare la
   versione nuova invece di usare quella salvata in cache.


SLIDESHOW DI CLIP VIDEO IN UNA PAGINA DI LAVORO
==================================================

La pagina "meta shitposting" ora mostra 5 clip video con una fila di
miniature cliccabili sotto il player: cliccando su una miniatura parti
subito a guardare quella clip. Se non clicchi nulla, quando una clip
finisce parte automaticamente la successiva, in loop continuo.

Per sostituire le 5 clip e miniature segnaposto con le tue:

1. Metti i tuoi file video dentro "assets/works/meta-shitposting/"
   (sostituisci clip1.mp4 ... clip5.mp4, o usa altri nomi).

2. Metti le miniature (immagini piccole, es. un fotogramma della clip)
   dentro "assets/works/meta-shitposting/thumbs/"
   (sostituisci clip1.jpg ... clip5.jpg).

3. Apri "works/meta-shitposting.html":
   - nel blocco "clip-thumbs" verso metà pagina, controlla che ogni
     <img src="..."> punti alla miniatura giusta
   - in fondo alla pagina, aggiorna l'elenco CLIPS con i percorsi
     corretti delle clip, MANTENENDO LO STESSO ORDINE delle miniature
     (la miniatura n.1 deve corrispondere a CLIPS[0], la n.2 a
     CLIPS[1], ecc.)

Per aggiungere lo stesso effetto (clip multiple + miniature cliccabili)
a un ALTRO lavoro (es. "pipe dream"):

1. Crea una cartella "assets/works/nome-lavoro/" per le clip e una
   sottocartella "assets/works/nome-lavoro/thumbs/" per le miniature.

2. Nella pagina di quel lavoro, al posto dell'iframe Vimeo metti:

     <div class="work-media">
       <video id="clip-player" controls playsinline></video>
     </div>

     <div class="clip-thumbs" id="clip-thumbs">
       <button class="clip-thumb" data-index="0">
         <img src="../assets/works/nome-lavoro/thumbs/clip1.jpg" alt="clip 1">
       </button>
       <button class="clip-thumb" data-index="1">
         <img src="../assets/works/nome-lavoro/thumbs/clip2.jpg" alt="clip 2">
       </button>
       <!-- aggiungi un bottone per ogni clip, aumentando data-index -->
     </div>

3. Prima di "</body>" aggiungi:

     <script>
       var CLIPS = [
         "../assets/works/nome-lavoro/clip1.mp4",
         "../assets/works/nome-lavoro/clip2.mp4"
       ];
     </script>
     <script src="../assets/clip-slideshow.js?v=1"></script>

Nota sulla cache: se modifichi "clip-slideshow.js" in futuro, ricordati
di alzare il numero dopo "v=" (es. v=2) per evitare che il browser
mostri la versione salvata in cache — stesso discorso già visto per
lo slideshow della homepage.


COME AGGIUNGERE GLI ALTRI 7 LAVORI
====================================

1. Vai nella cartella "works", duplica il file "meta-shitposting.html"
   e rinominalo (es. "pipe-dream.html", stesso nome che hai già messo
   nel link dentro index.html).

2. Apri il nuovo file e modifica:
   - il <title> in cima
   - il testo dentro <h1 class="work-title-heading">
   - il link dentro l'<iframe> (vedi sotto per il video)
   - i due paragrafi dentro <div class="work-statement">
   - le 4 righe dentro <div class="work-meta"> (tecnica, durata, anno...)

3. Fatto: il link da index.html a quella pagina funzionerà subito,
   perché i nomi dei file combaciano con quelli già scritti in index.html.


COME METTERE I VIDEO
======================

Hai due strade:

A) Vimeo/YouTube (consigliato, file leggeri):
   - Su Vimeo apri il video → Condividi → Incorpora (Embed)
   - Copia l'URL che inizia con "https://player.vimeo.com/video/..."
   - Incollalo al posto di "https://player.vimeo.com/video/XXXXXXXXX"
     dentro il tag <iframe> nella pagina del lavoro.
   - Stessa cosa per YouTube, cambia solo l'URL (embed).

B) File video caricato direttamente nel sito:
   - Metti il file .mp4 dentro la cartella "assets"
   - Sostituisci il blocco <iframe>...</iframe> con:
       <video src="../assets/nome-file.mp4" controls></video>
   - Attenzione: GitHub ha un limite di 100MB per file (e 1GB per repo
     nel piano gratuito), quindi va bene per anteprime ma non per video
     molto pesanti in alta risoluzione: in quel caso meglio Vimeo.


COME SOSTITUIRE L'ANTEPRIMA NERA IN HOMEPAGE
================================================

Metti la tua immagine (jpg o png) dentro "assets", ad esempio
"assets/preview.jpg", poi in index.html cambia:

    <img src="assets/preview.svg" alt="anteprima">

in:

    <img src="assets/preview.jpg" alt="anteprima">


COME PUBBLICARLO GRATIS SU GITHUB PAGES
==========================================

1. Crea un account su github.com (gratuito).

2. Crea un nuovo repository pubblico, ad esempio chiamato
   "portfolio" (Settings → visibilità: Public).

3. Carica dentro TUTTI i file e le cartelle di questo progetto
   (index.html, about.html, style.css, works/, assets/) mantenendo
   la stessa struttura di cartelle. Puoi farlo trascinando i file
   dalla pagina del repository su GitHub ("Add file" → "Upload files"),
   niente terminale necessario.

4. Vai su Settings → Pages (nel menu a sinistra).

5. In "Source" scegli il branch "main" e la cartella "/ (root)",
   poi salva.

6. Dopo circa un minuto il sito sarà online a un indirizzo tipo:
   https://tuonomeutente.github.io/portfolio/

Se vuoi un dominio tuo (es. martinaborgese.com) puoi collegarlo
in seguito da Settings → Pages → Custom domain: GitHub Pages resta
comunque gratuito, paghi solo il dominio se lo vuoi.
