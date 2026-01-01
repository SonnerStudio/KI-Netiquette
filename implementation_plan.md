# Implementierungsplan: Detail-Seiten

Wir erweitern die Webseite um Detail-Seiten für die 6 Hauptthemen (3 Werte + 3 Prompting-Regeln).

## Technische Strategie
Statt 6 * 3 = 18 HTML-Dateien zu erstellen, nutzen wir **eine** dynamische `details.html`.
Diese Seite liest einen URL-Parameter `?topic=` (z.B. `details.html?topic=transparency`) und lädt den entsprechenden Text aus unserem zentralen `translations` Objekt in `script.js`.

### Dateien
#### [NEW] [details.html](file:///c:/Dev/Repos/SonnerStudio/KI-Netiquette/details.html)
- Identisches Design zu `index.html` (Header, Footer).
- Main Content Area: Große Überschrift + Ausführlicher Textblock.
- "Zurück"-Button.

#### [MODIFY] [script.js](file:///c:/Dev/Repos/SonnerStudio/KI-Netiquette/script.js)
- **Erweiterung des Dictionaries**: Hinzufügen von langen, formatierten Texten für `val_transparency_detail`, `val_responsibility_detail`, etc. in allen 3 Sprachen.
- **Logik**: Funktion zum Befüllen der `details.html` basierend auf dem `source` Parameter.

#### [MODIFY] [index.html](file:///c:/Dev/Repos/SonnerStudio/KI-Netiquette/index.html)
- Konvertierung der `.glass-card` divs in `<a>` tags oder wrapping mit `<a>`.
- Links zeigen auf `details.html?topic=KEY`.

## Content-Plan (Details)
1.  **Transparenz**: Deep Dive in Labelling, Plagiatsvermeidung.
2.  **Verantwortung**: "Human in the Loop", Datenschutz.
3.  **Respekt**: Psychologische Aspekte, Trainingsdaten-Ethik.
4.  **Präzision**: Context Windows, Personas.
5.  **Dialog**: Chain-of-Thought, Iteration.
6.  **Höflichkeit**: Qualität der Outputs bei höflichen Prompts.
