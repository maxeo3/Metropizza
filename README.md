🍕 MetroPizza - Multi-Blend W Engine

Calcolatore professionale per impasti pizza con supporto Blend Farine, calcolo automatico del lievito, metodo diretto e indiretto, archivio ricette e gestione catalogo farine.

https://img.shields.io/badge/version-6.0-orange https://img.shields.io/badge/PWA-enabled-green https://img.shields.io/badge/offline-ready-blue

📋 Panoramica

MetroPizza è una web application progettata per pizzaioli, appassionati e professionisti che desiderano calcolare impasti in modo preciso utilizzando:

Impasto diretto
Impasto indiretto
Biga
Poolish
Blend di farine multiple
Calcolo automatico del lievito
Gestione farine personalizzate
Archivio ricette
Progressive Web App (PWA)

L'obiettivo è simulare il comportamento reale delle farine tenendo conto non soltanto del valore W, ma anche della tipologia della farina e della sua presenza all'interno del blend.

🚀 Funzionalità principali
Metodo Diretto

Calcolo classico dell'impasto.

L'utente inserisce:

numero panetti
peso panetto
idratazione
sale
olio
tempi e temperature

Il sistema genera automaticamente:

farina totale
acqua totale
sale totale
olio totale
lievito necessario
Metodo Indiretto

Supporta:

Biga
Idratazione prefermento: 50%
Poolish
Idratazione prefermento: 100%

L'utente può decidere:

percentuale farina nel prefermento
tipo di prefermento

Il sistema divide automaticamente gli ingredienti tra:

Fase 1

Prefermento

Fase 2

Impasto finale

🌾 Sistema Blend Farine

Il motore consente di combinare più farine.

Esempio:

Farina	PercentualeManitoba W380	70%
Integrale W300	30%

Il sistema calcola automaticamente:

W medio corretto
percentuale integrale totale
suggerimento di idratazione
equilibrio della forza del blend
🌾 Tipologie di farina supportate

Ogni farina può essere classificata come:

Raffinata / 00

Coefficiente W:

Plain Text
1.00
Tipo 1

Coefficiente W:

Plain Text
0.97
Tipo 2

Coefficiente W:

Plain Text
0.94
Integrale

Coefficiente W:

Plain Text
0.88

Questo permette di simulare il comportamento reale delle farine meno raffinate.

💧 Correzione automatica dell'idratazione

Le farine integrali assorbono quantità maggiori di acqua.

Il sistema suggerisce automaticamente eventuali aumenti di idratazione.

Integrale nel blend	Aumento idratazione0-10%	+0%
10-20%	+2%
20-30%	+4%
30-40%	+6%
40-50%	+8%
oltre 50%	+10%

Esempio:

Plain Text
Idratazione impostata: 65%
 
Integrale nel blend: 40%
 
Idratazione consigliata: 71%
🧠 Smart W Engine

Il motore analizza:

tempi di fermentazione
temperatura ambiente
temperatura frigorifero

e confronta il blend scelto con la forza consigliata.

Esempio:

Plain Text
Fermentazione breve
Consigliato: W 220-280
Plain Text
Fermentazione lunga
Consigliato: W 330-400

Viene mostrato un messaggio automatico:

✅ Blend bilanciato

⚠️ Blend troppo debole

⚠️ Blend troppo forte

🧫 Calcolo automatico del lievito

Supporta:

Lievito Fresco (LDB)
Lievito Secco (IDY)
Lievito Madre (LM)

Il quantitativo viene adattato automaticamente in funzione di:

ore a temperatura ambiente
temperatura ambiente
ore in frigorifero
temperatura frigorifero
⭐ Catalogo Farine

L'utente può:

creare farine personalizzate
modificarle
eliminarle
inserirle nei preferiti

Ogni farina contiene:

Plain Text
Nome
Proteine
W stimato
Tipologia
Preferito
📚 Archivio Ricette

Tutte le ricette possono essere salvate localmente.

Per ogni ricetta vengono memorizzati:

data
metodo
blend utilizzato
W medio
ingredienti
valutazione
note personali
📱 Progressive Web App

L'app supporta:

installazione su smartphone
installazione su tablet
installazione su desktop
utilizzo offline

Grazie a:

Plain Text
manifest.json
sw.js
💾 Storage Locale

I dati vengono salvati tramite LocalStorage.

Nessun dato viene inviato a server esterni.

Vengono memorizzati:

Plain Text
Catalogo farine
Preferiti
Blend
Ricette salvate
Valutazioni
Note
🔬 Formula di calcolo W Blend

Formula base:

Plain Text
W Blend =
Σ(W × Percentuale)

Formula corretta:

Plain Text
W Blend =
Σ(W × Coefficiente Tipo × Percentuale)

Esempio:

Plain Text
70% Manitoba W380
30% Integrale W300

Risultato:

Plain Text
W corretto ≠ 356
 
W corretto ≈ 345

più vicino al comportamento reale dell'impasto.

🛠 Tecnologie utilizzate
HTML5
JavaScript Vanilla
Tailwind CSS
Font Awesome
LocalStorage
Service Worker
Progressive Web App
📈 Roadmap futura

Funzionalità pianificate:

 Calcolo maturazione automatica
 Calcolo ceneri (Ash Content)
 Database farine professionali
 Supporto Licoli
 Supporto Pasta Madre Solida
 Calcolo temperatura finale impasto
 Gestione impasti ad alta idratazione
 Esportazione PDF
 Condivisione ricette
📄 Licenza

Progetto open source rilasciato sotto licenza MIT.

👨‍🍳 Filosofia

MetroPizza nasce con l'obiettivo di diventare uno strumento pratico per trasformare dati tecnici (W, proteine, tempi e temperature) in indicazioni realmente utilizzabili durante la produzione di pizza e prodotti lievitati.
