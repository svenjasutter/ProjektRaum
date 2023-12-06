# ProjektRaum

Die webbasierte CampusExplorer-Lösung ist ein aufregendes Projekt, das darauf abzielt, die
Interaktion und Erkundung des OST-Campus in Rapperswil-Jona zu verbessern.

Es ist ein Angularprojekt, welches folgende Funktionen beinhaltet:
- Visualisierung des Campus
- Bürgerbeteiligung für Bauprojekte
- Geospatiale Informationen

## Projekt selber ausführen
### Voraussetzungen
1. Stellen Sie sicher, dass **Git** und **Node.js** auf Ihrem Rechner installiert sind. 
2. Öffnen Sie Ihr Terminal / Kommandozeile und navigieren Sie zu dem Ort, an dem Sie das Projekt speichern möchten. Führen Sie dann den folgenden Befehl aus, um das Repository zu klonen:
```
git clone https://github.com/svenjasutter/ProjektRaum.git
```
3. Navigieren Sie in das Projektverzeichnis mit dem folgenden Befehl:
```
cd ProjektRaum
```
4. Installieren Sie Projektabhängigkeiten
```
npm install
```
### Angular Projekt starten
```
cd proj-raum-app
ng serve --open
```

Viel Spaß beim Erkunden des Projekts! 🚀


## Betreiben
In diesem Abschnitt wird der Serverseitige Aufbau beschrieben, wie die Web-Applikation angedenkt ist für die produktive Umgebung. Die Web-Applikation soll in einem Kubernetes Cluster betrieben werden, dies ermöglicht uns eine gute Scalability und um die Availability aufrecht zu erhalten. Dazu kann ein bekannter Webhosting anbieter verwendet werden, welcher möglicherweise nicht mit Kubernetes arbeitet, jedoch die gesamte Applikation cloudifiziert.

### Wie werden die Daten verarbeitet als Admin?
Die Daten werden in einer SQL Datenbank abgelegt. Dazu werden zwei Datenbanken benötigt. Zum einen eine Datenbank mit den bestehenden Gebäuden und zum anderen eine Datenbank mit den Bauprojekten. So können diese zwei Bereiche der Webapplikation sauber voneinander getrennt werden.

### Wie werden sie weitergegeben?
Die Webapplikation kann die Datenbank mit regulären SQL Statements ansprechen um an die gewünschten Informationen zu kommen. Zum schreiben der Datenbank muss sich der Datenbank Admin jedoch damit verbinden und die Daten so einfüllen.

### Beschreibung ob Restful, Monolitisch etc.


### Was für ein Framework wird verwendet?
Als Framework haben wir Angular Material Design verwendet. Dies lässt uns einfach und schnell eine schöne Oberfläche bauen da sehr viele Elemente vorhanden sind. Für die Karteneinbindung haben wir Leaflet genutzt, welches uns die Karte zur Verfügung stellt und wir so unsere eigenen Layer für die Gebäude und die Infopoints einfügen konnten.
