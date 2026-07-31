COME FUNZIONA QUESTO SITO
==========================

Struttura dei file:

  index.html              → homepage
  about.html               → pagina "about"
  style.css                → tutto lo stile grafico (colori, layout, font)
  assets/preview.svg       → segnaposto nero dell'anteprima in homepage
  works/
    meta-shitposting.html  → pagina di dettaglio di UN lavoro, usala come modello


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
