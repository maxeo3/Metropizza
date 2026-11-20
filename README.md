# 🍕 MetroPizza - Multi-Blend W Engine

Calcolatore professionale per impasti pizza con supporto Blend Farine, calcolo automatico del lievito, metodo diretto e indiretto, archivio ricette e gestione catalogo farine.

![version](https://img.shields.io/badge/version-6.1-orange) ![PWA](https://img.shields.io/badge/PWA-enabled-green) ![offline](https://img.shields.io/badge/offline-ready-blue)

## 📋 Panoramica

MetroPizza è una web application progettata per pizzaioli, appassionati e professionisti che desiderano calcolare impasti in modo preciso utilizzando:

- Impasto diretto
- Impasto indiretto (Biga e Poolish)
- Blend di farine (fino a 2 farine)
- Calcolo automatico del lievito
- Gestione farine personalizzate
- Archivio ricette
- Progressive Web App (PWA)

L'obiettivo è simulare il comportamento reale delle farine tenendo conto non soltanto del valore W, ma anche della tipologia della farina e della sua presenza all'interno del blend.

## 🚀 Funzionalità principali

### Metodo Diretto

Calcolo classico dell'impasto. L'utente inserisce:

- numero panetti
- peso panetto
- idratazione
- sale
- olio
- tempi e temperature

Il sistema genera automaticamente farina totale (con ripartizione per ogni farina del blend), acqua, sale, olio e lievito necessario.

### Metodo Indiretto

| Prefermento | Idratazione prefermento | Lievito di riferimento nel prefermento |
|-------------|-------------------------|----------------------------------------|
| Biga        | 50%                     | 1% della farina del prefermento        |
| Poolish     | 100%                    | 0,2% della farina del prefermento      |

Le dosi di lievito sono per il lievito fresco; con il lievito secco vengono divise per 3. Il lievito nel prefermento non supera mai il totale calcolato: l'eventuale resto va nell'impasto finale. Il lievito madre viene messo tutto nell'impasto finale.

L'utente sceglie il tipo di prefermento e la percentuale di farina da usare nel prefermento. Il sistema divide gli ingredienti tra:

- **Fase 1 – Prefermento:** farina (ripartita per blend), acqua, lievito
- **Fase 2 – Impasto finale:** farina (ripartita per blend), acqua, sale, lievito residuo, olio

**Controllo di compatibilità:** se il prefermento richiede più acqua di quella prevista dall'idratazione totale (ad esempio Poolish al 70% con idratazione al 65%), la ricetta non viene mostrata. Compare un avviso con la percentuale massima di farina utilizzabile nel prefermento.

## 🌾 Sistema Blend Farine

Il motore consente di combinare fino a 2 farine. Esempio:

| Farina         | Percentuale |
|----------------|-------------|
| Manitoba W380  | 70%         |
| Integrale W300 | 30%         |

Il sistema calcola automaticamente:

- W medio corretto
- percentuale integrale totale
- suggerimento di idratazione
- equilibrio della forza del blend

Comportamento del blend:

- con 2 farine, modificando la percentuale di una l'altra si adegua automaticamente per arrivare a 100%;
- rimuovendo una farina (o eliminandola dal catalogo), quella rimasta torna automaticamente al 100%;
- se le percentuali non sommano 100%, la ricetta non viene mostrata e il salvataggio è bloccato.

### Tipologie di farina supportate

| Tipologia        | Coefficiente W |
|------------------|----------------|
| Raffinata / 00   | 1.00           |
| Tipo 1           | 0.97           |
| Tipo 2           | 0.94           |
| Integrale        | 0.88           |

Questo permette di simulare il comportamento reale delle farine meno raffinate.

### 💧 Correzione automatica dell'idratazione

Le farine integrali assorbono quantità maggiori di acqua. Il sistema suggerisce automaticamente eventuali aumenti di idratazione:

| Integrale nel blend | Aumento idratazione |
|---------------------|---------------------|
| 0-10%               | +0%                 |
| 10-20%              | +2%                 |
| 20-30%              | +4%                 |
| 30-40%              | +6%                 |
| 40-50%              | +8%                 |
| oltre 50%           | +10%                |

Esempio:

```
Idratazione impostata: 65%
Integrale nel blend:   40%
Idratazione consigliata: 71%
```

## 🧠 Smart W Engine

Il motore analizza tempi di fermentazione, temperatura ambiente e temperatura frigorifero, li converte in "ore equivalenti" di maturazione e confronta il blend scelto con la forza consigliata:

| Ore equivalenti | W consigliato |
|-----------------|---------------|
| fino a 6        | 180-240       |
| 6-16            | 220-280       |
| 16-32           | 280-330       |
| oltre 32        | 330-400       |

Messaggi mostrati:

- ✅ Blend bilanciato
- ⚠️ Blend troppo debole
- ⚠️ Blend troppo forte

## 🧫 Calcolo automatico del lievito

Supporta:

- Lievito Fresco (LDB)
- Lievito Secco (IDY)
- Lievito Madre (LM)

Il quantitativo viene adattato in funzione di ore e temperatura ambiente e di ore e temperatura frigorifero.

**Lievito madre:** il LM contiene già farina e acqua, quindi non è un ingrediente da sommare al peso. L'app considera un lievito madre solido idratato al 50% e mostra **farina e acqua da aggiungere**, già al netto di quelle contenute nel LM. Il peso totale dell'impasto resta quello impostato.

## ⭐ Catalogo Farine

L'utente può creare, modificare ed eliminare farine personalizzate e inserirle nei preferiti (anche quelle predefinite). I preferiti compaiono in cima alle liste.

Ogni farina contiene: nome, proteine, W stimato (calcolato dalle proteine), tipologia e preferito.

## 📚 Archivio Ricette

Tutte le ricette possono essere salvate localmente. Per ogni ricetta vengono memorizzati:

- data
- metodo (e tipo/percentuale di prefermento per l'indiretto)
- blend utilizzato e W medio
- ingredienti e tipo di lievito
- valutazione (stelle)
- note personali

## 📱 Progressive Web App

L'app può essere installata su smartphone, tablet e desktop e funziona offline grazie a `manifest.json`, `sw.js` e alle icone locali (`icon.svg`, `icon-192.png`, `icon-512.png`).

Il Service Worker:

- per i file dell'app usa **prima la rete**, così gli aggiornamenti arrivano subito; la copia in cache viene usata solo offline;
- per le librerie esterne (Tailwind, Font Awesome) usa prima la cache;
- all'attivazione cancella le cache delle versioni precedenti.

Per forzare la pulizia completa della cache dopo un aggiornamento importante, incrementa la costante `CACHE` in `sw.js` (es. `metropizza-v3`).

## 💾 Storage Locale

I dati vengono salvati tramite LocalStorage. Nessun dato viene inviato a server esterni.

| Chiave                     | Contenuto                         |
|----------------------------|-----------------------------------|
| `metropizza_flours`        | Farine personalizzate             |
| `metropizza_default_favs`  | Preferiti tra le farine predefinite |
| `metropizza_blend`         | Blend attivo                      |
| `metropizza_recipes`       | Ricette salvate, valutazioni e note |

Se i dati salvati risultano danneggiati, l'app riparte con i valori predefiniti invece di bloccarsi.

## 🔬 Formula di calcolo W Blend

Formula base:

```
W Blend = Σ(W × Percentuale)
```

Formula corretta:

```
W Blend = Σ(W × Coefficiente Tipo × Percentuale)
```

Esempio con 70% Manitoba W380 e 30% Integrale W300:

```
W base     = 356
W corretto ≈ 345
```

Il valore corretto è più vicino al comportamento reale dell'impasto.

## 🛠 Tecnologie utilizzate

- HTML5
- JavaScript Vanilla
- Tailwind CSS (CDN)
- Font Awesome
- LocalStorage
- Service Worker
- Progressive Web App

## 📝 Novità versione 6.1

- **Metodo indiretto:** niente più acqua negativa in Fase 2, con avviso e percentuale massima di prefermento.
- **Metodo indiretto:** lievito ripartito tra prefermento e impasto finale; olio e ripartizione del blend anche in Fase 2.
- **Lievito madre:** farina e acqua del LM scalate da quelle da aggiungere.
- **Blend:** la farina rimasta torna al 100% dopo una rimozione, e una nuova riga propone una farina diversa.
- **Blend non valido:** la ricetta non viene mostrata e il salvataggio è bloccato.
- **Interfaccia:** il badge del metodo si aggiorna al cambio Biga/Poolish.
- **Interfaccia:** i messaggi su W e i consigli di lavorazione seguono i tempi impostati.
- **Preferiti:** salvati anche per le farine predefinite.
- **Sicurezza:** nomi delle farine e note vengono resi in modo sicuro, e i dati salvati danneggiati non bloccano più l'app.
- **PWA:** Service Worker che prende i file dell'app prima dalla rete e pulisce le cache vecchie; icone locali al posto di quella esterna.

## 📈 Roadmap futura

- [ ] Calcolo maturazione automatica
- [ ] Calcolo ceneri (Ash Content)
- [ ] Database farine professionali
- [ ] Supporto Licoli
- [ ] Supporto Pasta Madre Solida configurabile
- [ ] Calcolo temperatura finale impasto
- [ ] Gestione impasti ad alta idratazione
- [ ] Esportazione PDF
- [ ] Condivisione ricette

## 📄 Licenza

Progetto open source rilasciato sotto licenza MIT.

## 👨‍🍳 Filosofia

MetroPizza nasce con l'obiettivo di diventare uno strumento pratico per trasformare dati tecnici (W, proteine, tempi e temperature) in indicazioni realmente utilizzabili durante la produzione di pizza e prodotti lievitati.
