# ProjektRaum: CampusExplorer

## Einführung

CampusExplorer ist eine wegweisende, webbasierte Plattform, die es Nutzern ermöglicht, den OST-Campus in Rapperswil-Jona interaktiv zu erkunden und sich aktiv an der Weiterentwicklung des Campus zu beteiligen. Die Plattform setzt der Fokus auf benutzerfreundlichen Funktionen, die eine effiziente Erkundung des Campus ermöglichen und relevante Informationen leicht zugänglich machen.

## Hintergrund und Bedürfnisse
Die Ausgangslage besteht in der Notwendigkeit, den Campus effizienter zu erkunden und relevante Informationen leicht zugänglich zu machen. CampusExplorer zielt darauf ab, diese Bedürfnisse durch innovative Technologien und Funktionen zu erfüllen.

## Funktionen
Die webbasierte CampusExplorer-Lösung ist ein aufregendes Projekt, das darauf abzielt, die
Interaktion und Erkundung des OST-Campus in Rapperswil-Jona zu verbessern.

Es ist ein Angularprojekt, welche folgenden Funktionen beinhaltet:
  
### Kartenansicht

Präsentiert den Campus mit markanten Orten und Gebäuden.

### Suche

Ermöglicht die bequeme Suche nach Gebäuden, Räumen oder Dienstleistungen.

### Standortbestimmung

Unterstützt dabei, den eigenen Standort auf dem Campus zu finden.

### Visualisierung des Campus (2D)

Bietet eine detaillierte 2D-Darstellung des OST-Campus, die es Benutzern ermöglicht, Gebäude und Räume aus verschiedenen Perspektiven zu erkunden, einschliesslich Innenräumen. Dazu gibt es ausführliche Informationen zu Instituten, Laboren und Einrichtungen.

### Bürgerbeteiligung

Ermöglicht Benutzern, Feedback zu existierenden und geplanten Gebäuden sowie Entwicklungsprojekten abzugeben. Umfragen, Abstimmungen und Diskussionen fördern die aktive Teilnahme der Gemeinschaft an Entscheidungsprozessen bezüglich des Campus.

### Geospatiale Informationen

Nutzt GIS, um geotagierte Informationen zu Campus-Einrichtungen bereitzustellen. Benutzer können Gebäudestandorte auf einer interaktiven Karte anzeigen und Routen zu ihren Zielen planen.

## Mögliche Weiterentwicklungen

### Eintauchende Erfahrung

Bietet Animationen, virtuelle Campus-Touren und multimediale Inhalte, um das Campusleben und verschiedene Studiengänge facettenreich zu präsentieren. Persönliche Geschichten von Studierenden, Dozenten und Mitarbeitern tragen zur erlebnisreichen Plattform bei.

### Visualisierung des Campus (3D)

Plant die Implementierung einer 3D-Darstellung des OST-Campus, um Benutzern eine noch effektivere Erkundung von Gebäuden und Räumen zu ermöglichen.

### Gamifizierung

Derzeit sind keine Gamifizierungsfunktionen verfügbar. Potenzielle Entwicklungen könnten die Integration von spielerischen Elementen beinhalten, um die Benutzerinteraktion zu verbessern und das Campus-Erlebnis interessanter zu gestalten.

### Integration von KI

Geplant ist die Integration von Künstlicher Intelligenz für personalisierte Empfehlungen, um Benutzern die besten Studiengänge, Kurse oder Aktivitäten vorzuschlagen.

### Erweiterung des Campus

Vorgesehen ist die Erweiterung um neue Gebäude und Räume, um eine noch umfassendere Darstellung des Campus zu bieten.

### Erhöhung der Interaktivität

Geplant ist die Integration von Chatbots, Sprachassistenten, Augmented Reality (AR) und Virtual Reality (VR) für eine noch interaktivere Plattform.

## Ziel

## Prozess Architektur

Die Prozess Architektur beschreibt, wie die verschiedenen Komponenten von CampusExplorer miteinander interagieren und welche Datenflüsse zwischen ihnen bestehen. Eine mögliche Prozess Architektur ist in der folgenden Abbildung dargestellt:

graph LR
A[Webbrowser] -- Anfrage --> B[Webserver]
B -- Antwort --> A
B -- API-Anfrage --> C[Backend]
C -- API-Antwort --> B
C -- Datenbankabfrage --> D[Datenbank]
D -- Datenbankantwort --> C
C -- Kartenanfrage --> E[Kartenanbieter]
E -- Kartenantwort --> C

### Datenquellen

Die Datenquellen für CampusExplorer sind die folgenden:

- Die Datenbank enthält die Informationen über die Gebäude, Räume, Dienstleistungen, Veranstaltungen und Feedbacks, die auf der Plattform angezeigt werden. Die Datenbank wird regelmässig aktualisiert, um die Änderungen auf dem Campus widerzuspiegeln.

- Der Kartenanbieter ist Leaflet, ein führendes Open-Source-JavaScript-Bibliothek für interaktive Karten. Leaflet bietet viele Funktionen für die Erstellung und Anpassung von Karten, wie zum Beispiel die Standortbestimmung, die Suche, die Navigation, die Visualisierung und die Animation. Leaflet verwendet die Daten aus der Datenbank, um die Karten zu erstellen und zu aktualisieren.

- Die Nutzer sind die Quelle für die Eingaben, die auf der Plattform gemacht werden. Die Nutzer können über den Webbrowser auf die Plattform zugreifen und verschiedene Aktionen ausführen, wie zum Beispiel die Kartenansicht anpassen, nach Gebäuden, Räumen oder Dienstleistungen suchen, Feedback geben oder an Umfragen, Abstimmungen und Diskussionen teilnehmen.

### README Verzeichnis

Das README Verzeichnis enthält die Datei README.md, die die wichtigsten Informationen über das Projekt CampusExplorer enthält. Die README.md Datei ist in Markdown formatiert und kann mit einem Texteditor oder einem Markdown-Editor bearbeitet werden. Die README.md Datei sollte folgende Abschnitte enthalten:

- Einführung: Eine kurze Beschreibung des Projekts und seiner Funktionen.

- Hintergrund und Bedürfnisse: Eine Erläuterung der Motivation und der Ziele des Projekts.

- Funktionen: Eine Auflistung der Hauptfunktionen der Plattform und ihrer Vorteile für die Nutzer.

- Mögliche Weiterentwicklungen: Eine Beschreibung der geplanten oder potenziellen Erweiterungen oder Verbesserungen der Plattform.

- Prozess Architektur: Eine Darstellung der Prozess Architektur des Projekts und der beteiligten Komponenten und Datenquellen.

- Installation und Bedienung: Eine Anleitung für die Installation und Bedienung der Plattform, einschliesslich der erforderlichen Software und Hardware.

- Verwendete Technologien: Eine Auflistung der verwendeten Technologien und gegebenenfalls Links zu weiteren Informationen zu den Technologien.

- Lizenz und Urheberrecht: Eine Angabe der Lizenz und des Urheberrechts für das Projekt und die verwendeten Ressourcen.

Quelle: Leaflet - a JavaScript library for interactive maps. https://leafletjs.com/. : Leaflet features. https://leafletjs.com/features.html.

## Installation und Bedienung

1. Voraussetzungen: Stellen Sie sicher, dass Sie Git und Node.js auf Ihrem Rechner installiert haben. Sie können die CampusExplorer-Dateien von diesem [Repository](https://github.com/svenjasutter/ProjektRaum.git) herunterladen oder mit dem Befehl klonen:
   ```bash
   git clone https://github.com/svenjasutter/ProjektRaum.git
   ```

2. Webbrowser öffnen: Öffnen Sie die `index.html`-Datei in Ihrem bevorzugten Webbrowser.

3. Viel Spass beim Erkunden des Projekts! 🚀

## Projekt lokal ausführen

### Funktionen und Technologien
1. Voraussetzungen: Stellen Sie sicher, dass Git und Node.js auf Ihrem Rechner installiert sind.

2. Projekt klonen: Öffnen Sie Ihr Terminal / Ihre Kommandozeile und navigieren Sie zu dem Ort, an dem Sie das Projekt speichern möchten. Klonen Sie dann das Repository mit dem folgenden Befehl:
   ```bash
   git clone https://github.com/svenjasutter/ProjektRaum.git
   ```

3. In das Projektverzeichnis wechseln: Navigieren Sie in das Projektverzeichnis mit dem folgenden Befehl:
   ```bash
   cd ProjektRaum
   ```

4. Abhängigkeiten installieren: Installieren Sie die Projektabhängigkeiten mit dem folgenden Befehl:
   ```bash
   npm install
   ```

### Angular-Projekt starten
```bash
cd proj-raum-app
ng serve --open
```
Diese Schritte helfen Ihnen, das Projekt lokal auszuführen und zu erkunden. Viel Erfolg! 🌐

## Betreiben
In diesem Abschnitt wird der Serverseitige Aufbau beschrieben, wie die Web-Applikation angedenkt ist für die produktive Umgebung. Die Web-Applikation soll in einem Kubernetes Cluster betrieben werden, dies ermöglicht uns eine gute Scalability und um die Availability aufrecht zu erhalten. Dazu kann ein bekannter Webhosting anbieter verwendet werden, welcher möglicherweise nicht mit Kubernetes arbeitet, jedoch die gesamte Applikation cloudifiziert.

### Wie werden die Daten verarbeitet als Admin?
Die Daten werden in einer SQL Datenbank abgelegt. Dazu werden zwei Datenbanken benötigt. Zum einen eine Datenbank mit den bestehenden Gebäuden und zum anderen eine Datenbank mit den Bauprojekten. So können diese zwei Bereiche der Webapplikation sauber voneinander getrennt werden.

### Wie werden sie weitergegeben?
Die Webapplikation kann die Datenbank mit regulären SQL-Statements ansprechen, um an die gewünschten Informationen zu kommen. Zum schreiben der Datenbank muss sich der Datenbank Admin jedoch damit verbinden und die Daten so einfüllen.

### Software-Architektur
Die Webapplikation basiert auf einer RESTful Architektur, die eine standardisierte Schnittstelle für die Kommunikation zwischen den verschiedenen Komponenten bietet. Die Webapplikation besteht aus mehreren Microservices, die jeweils eine bestimmte Funktion erfüllen und unabhängig voneinander skaliert und aktualisiert werden können. Dies ist im Gegensatz zu einer monolithischen Architektur, bei der die gesamte Anwendungslogik in einer einzigen Codeeinheit zusammengefasst ist.

### Was für ein Framework wird verwendet?
Als Framework haben wir Angular Material Design verwendet. Dies lässt uns einfach und schnell eine schöne Oberfläche bauen da sehr viele Elemente vorhanden sind. Für die Karteneinbindung haben wir Leaflet genutzt, welches uns die Karte zur Verfügung stellt und wir so unsere eigenen Layer für die Gebäude und die Infopoints einfügen konnten.

## Limitationen

CampusExplorer, obwohl innovativ, hat einige Herausforderungen:

### Datenqualität: Abhängig von den verfügbaren Campusdaten, die möglicherweise nicht vollständig oder aktuell sind.

### Technische Anforderungen: Erfordert eine stabile Internetverbindung und einen kompatiblen Webbrowser.

### Benutzerakzeptanz: Aufgrund der Neuheit möglicherweise nicht von allen Benutzern sofort akzeptiert.

## Zukunftspotenzial

CampusExplorer ist eine innovative und digitale Lösung, die die Nutzererfahrung und die Zufriedenheit der Nutzer verbessert, die Bürgerbeteiligung und das Engagement der Nutzer fördert, die Attraktivität und die Sichtbarkeit des Campus erhöht, die Nachhaltigkeit und die Effizienz des Campus verbessert und den eigenen Beitrag zur Forschung leistet. CampusExplorer hat ein grosses Zukunftspotenzial, um sich weiterzuentwickeln und an die Veränderungen der Anforderungen und der Nutzeranzahl anzupassen. Mögliche Weiterentwicklungen sind die Implementierung einer RESTful Architektur, die eine standardisierte Schnittstelle für die Kommunikation zwischen den verschiedenen Komponenten bietet, die Nutzung von mehreren Microservices, die jeweils eine bestimmte Funktion erfüllen und unabhängig voneinander skaliert und aktualisiert werden können, die Integration von neuesten Technologien und Methoden für die Erstellung und Anpassung von Karten, die Analyse und Verarbeitung von Daten, die Nutzung von Künstlicher Intelligenz und die Integration von anderen Systemen, die Nutzung eines Kubernetes Clusters, der eine gute Skalierbarkeit und Verfügbarkeit gewährleistet, die Verwendung von Angular Material Design als Framework für die Benutzeroberfläche und Leaflet als Kartenanbieter, die Speicherung der Daten in einer SQL Datenbank und die Abfrage der Daten mit regulären SQL-Statements, sowie die Implementierung einer 3D-Darstellung des Campus, die Integration von spielerischen Elementen, Chatbots, Sprachassistenten, Augmented Reality und Virtual Reality, sowie die Erweiterung um neue Gebäude und Räume. CampusExplorer ist eine Plattform, die den Campus der OST auf eine neue und spannende Weise präsentiert und erlebbar macht.

Die webbasierte CampusExplorer-Lösung ist ein innovatives Projekt, das sich mit der Vision einer intelligenten urbanen Zukunft in Einklang bringt. Es ermöglicht Gemeindemitgliedern, aktiv am Entscheidungsprozess teilzunehmen, und bietet ein interaktives, informatives Erlebnis. CampusExplorer steht kurz davor, die Art und Weise zu revolutionieren, wie wir mit Bildungseinrichtungen und Stadtplanung interagieren.

## Team
- Charlotte Brehe(charlotte.brehe@ost.ch)
- Pascal Dietsche (pascal.dietsche@ost.ch)
- Petra Heeb (petra.heeb@ost.ch)
- Adnan Jusupovic (adnan.jusupovic@ost.ch)
- Raquel Kehl (raquel.kehl@ost.ch)
- Svenja Sutter (svenja.sutter@ost.ch)
- Dario Toma (dario.toma@ost.ch)
- Maximilian Albert von Felten (maximilianalbert.vonfelten@ost.ch)

## Lizenz

CampusExplorer ist ein Open-Source-Projekt, das unter der OST Ostschweizer Fachhochschule-Lizenz lizenziert ist. Sie können die Lizenzbedingungen in der LICENSE-Datei in diesem Repository einsehen.

## Kontakt

Bei Fragen, Anregungen oder Feedback zu CampusExplorer kontaktieren Sie uns gerne über:

- E-Mail: campusexplorer@ost.ch
- Twitter: [@CampusExplorer](https://twitter.com/CampusExplorer)
- Facebook: [CampusExplorer](https://facebook.com/CampusExplorer)

