# Historische Entwicklung von Micro&shy;interactions

Die Geschichte der Mensch-Maschine-Interaktion ist tatsächlich die Geschichte der Mikro-Interaktionen, da sich diese über viele Jahrzehnte erhalten und weiterentwickelt haben. Auch heute selbstverständliche, grundlegende Interaktionen wie Links, Scrollbalken oder Zoom wurden irgendwann erfunden.
Diese Evolution kann nach Andries van Damm in vier Hauptphasen eingeteilt werden:^[van Dam, Andries: Post-WIMP User Interfaces. In: Communications of the ACM 40(2), 1997] 

1.  In der ersten Phase, den 1950er und 60er Jahren, werden Computer im _batch_-Modus bedient. Mit Hilfe von Lochkarten werden Befehle stapelweise nacheinander verarbeitet.
2.  Die zweite Phase, in den 60er bis 80er Jahren, ist dominiert durch die _Kommandozeile_; Befehle werden in Textform über ein CLI (Command Line Interface) eingegeben.
3.  Die bis heute andauernde dritte Phase beginnt in den 70er Jahren mit der Erfindung der Computermaus und den ersten grafischen Benutzeroberflächen. Metaphern wie _Desktop_ bzw. _Schreibtisch_ und (Programm-)Fenster machen Computer massentauglich.
4.  Die vierte Phase steckt noch in den Anfängen, doch Spracherkennung, Gestenkontrolle und Künstliche Intelligenz sollen hier die Nutzung allerhand 'smarter' Geräte vereinfachen.

Die geschichtliche Betrachtung soll Einblicke ermöglichen, warum bestimmte Interaktionen so erfolgreich sind und wie sie sich weiterentwickelt haben. Viele haben trotz des enormen technischen Fortschritts überdauert.

<!-- XXXX
Die Idee führt die Hand
Problem: Werkzeug und Hand beschränken das Denken -->

## Microinteractions in mechanischen und elektrischen Mensch-Maschine-Schnittstellen

Die Bedienung früher Maschinen erfolgte durch Hebel, Kurbeln oder Tretmühlen und war mit schwerer körperlicher Arbeit verbunden. Die direkte physische Verbindung zwischen Eingabegerät und Mechanik der Maschine hatte den Vorteil, dass direkt zu sehen war, welche Auswirkung eine Eingabe hatte.
<!-- Bild Tretmühle oÄ -->
Mit Einführung der Elektrizität war diese unmittelbare Rückmeldung erstmals nicht mehr auf natürliche Weise vorhanden: Derselbe Knopf konnte eine Lampe anschalten oder eine Bombe explodieren lassen. Der elektrische Knopf abstrahierte Bewegung – mit nur minimaler Arbeit vonseiten des Nutzers konnten nun große Bewegungen ausgelöst werden. Zudem konnte Ort der Eingabe weit entfernt vom eigentlichen Geschehen in der Maschine sein. Die Art der Aktion eines Nutzers wurde erstmals unabhängig vom Ergebnis.^[vgl. DeRouchy, Bill: [History of the Button](https://youtu.be/zdwUbhm-8Mw) UXLx / YouTube]

<figure class="content-thin">
  <img data-src="/images/history/torch-patent.jpg">
  <figcaption>
    Eine der ersten Anwendungen von elektrischen Knöpfen in Alltag war in Taschenlampen.
    <sup><a href="https://commons.wikimedia.org/wiki/File:Patent_617,592.png
">Bildquelle</a></sup>
  </figcaption>
</figure>

Um zu wissen, was eine Maschine gerade tat, war eine neue Form der "Sprache" von Geräten notwendig: Eine _Benutzerschnittstelle_ wurde eigens für den Austausch zwischen Mensch und Maschine hinzugefügt. Sie teilte den Status einer Maschine an den Nutzer mit und nahm dessen Eingaben entgegen. Die neu hinzugekommene Ebene der [Rückmeldung](/feedback) ermöglichte die Bedienung neuer, weitaus komplexerer Maschinen. 

Bevor elektronische oder gar digitale Rechenmaschinen gebaut wurden, sorgte die mechanische 'Hollerithmaschine' für Aufsehen. Erstmals in großem Maßstab eingesetzt wurde die Erfindung des Deutsch-Amerikaners Herman Hollerith (\*1860 †1929) bei der amerikanischen Volkszählung im Jahre 1890. Sie war gebaut für Experten, die sich mit der technischen Funktionsweise und deren Tücken genau auskannten. Die Bedienung, beziehungsweise Programmierung, erfolgte durch _Lochkarten_, welche händisch nach vorgegebenen Mustern gelocht wurden, um anschließend von einer Maschine gelesen zu werden. 
Holleriths Erfindung war weltweit erfolgreich und er gründete die 'Computing Tabulating Recording Corporation', welche 1924 in 'International Business Machines Corporation, IBM' umbenannt wurde und bis heute besteht. Auch in Deutschland wurde das System weiterentwickelt, in Berlin entstand die 'Hollerith Maschinen-Gesellschaft'. Locher bekamen Tastaturen, Karten wurden automatisch zugeführt und sortiert und darauf befindliche Daten addiert.^[vgl. [Thomas Willenberg: Die Geschichte der Computertechnik](http://privat.swol.de/SvenBandel/Hollerith.htm), [Stefan Winterstein: Von Hollerith zu IBM -Die Geschichte der kommerziellen Datenverarbeitung](http://stefan-winterstein.de/papers/hollerith-ibm/), [Zeitnahtv: Von der Lochkarte zum Computer](https://youtu.be/2_73R_MrDIQ)]

<figure class="content-thin">
  <img data-src="/images/history/hollerith-machine.jpg">
  <figcaption>
    Inspiriert durch die Funktionsweise von automatischen Pianola-Klavieren verarbeitete die Hollerithmaschine Daten durch Erkennung von Löchern in Karton.
    <sup><a href="http://www-03.ibm.com/ibm/history/ibm100/us/en/icons/tabulator/">Bildquelle</a></sup>
  </figcaption>
</figure>

Der nächste herausragende Schritt war die Entwicklung der ersten elektronischen Rechenmaschinen von Konrad Zuse in den 1940ern. Diese basierten im Gegensatz zu ihren Vorgängern, welche weitgehend mechanisch arbeiteten, ausschließlich auf elektromechanischen _Relais_. Die 'Schreibende Tabelliermaschine' wurde programmiert, indem Stifte in eine eingebaute Schalttafel gesteckt wurden. Je nach Position der Stifte produzierte das System ein anderes Ergebnis und druckt dieses aus.^[vgl. [Deutsches Museum: Die Z3 von Konrad Zuse im Deutschen Museum](https://youtu.be/aUXnhVrT4CI)]
Andere frühe Rechenmaschinen, wie der von der US-Armee entwickelte 'ENIAC', wurden hauptsächlich durch das Umstecken zahlreicher Kabel und Verstellen hunderter, direkt auf dem Schaltungsaufbau angebrachter Kippschalter bedient. Für jede neue Aufgabe musste die Maschine neu "verdrahtet" werden und war dafür für viele Stunden oder Tage außer Betrieb. Nachfolgende Entwicklungen nahmen sich dieses Problems an, in dem sie Arbeitsbefehle zusammen mit den Daten im Speicher ablegten.
Neben Knöpfen und Schaltern kamen Bedienfelder zum Einsatz, welche der Schreibmaschine entlehnt waren und mit heutigen Tastaturen grundlegend vergleichbar sind – jedoch mit dem entscheidenden Unterschied, dass die Eingabe nicht direkt sichtbar wurde. Der bedienende Ingenieur musste sich meist merken, was er zuletzt eingegeben hatte, bis die Berechnung abgeschlossen war und eine Schreibmaschine das Ergebnis ausdruckte.
Abgesehen davon war die Bedienung aus heutiger Sicht sehr komplex und erforderte tiefes Verständnis der Maschine. Beim Modell 'Zuse Z3' mussten beispielsweise Zahlen im Binärformat mit Hilfe der sogenannten 'polnischen Notation' eingegeben werden und Programme wurden geschrieben, indem Löcher in einen ausgemusterten Filmstreifen gestanzt wurden. Die Anordnung von Tastatur und Ergebnisausgabe entsprach beim Z3 in etwa der eines Computerarbeitsplatzes der heutigen Zeit; mit einer leicht zum Benutzer schrägstehenden Tastatur und einem senkrecht dahinter angebrachten 'Bildschirm'.

<figure class="content-thin">
  <img data-src="/images/history/eniac.jpg">
  <figcaption>
    Der ENIAC wurde durch das Umstecken bzw. -legen hunderter Kabel und Schalter von sechs eigens dafür angestellten Frauen bedient.
    <sup><a href="http://www.phillyvoice.com/70-years-ago-six-philly-women-eniac-digital-computer-programmers/">Bildquelle</a></sup>
  </figcaption>
</figure>

Der erste Computer, dessen Ziel eine – für damalige Verhältnisse – einfache Benutzung war, wurde Ende der 1940er vom Engländer Maurice Wilkes (\*1913 †2010) als Nachfolger des ENIAC vorgestellt. Das 'EDVAC' genannte System überzeugte zahlreiche Universitäten von der Nützlichkeit der Rechenmaschinen und sorgte dafür, dass Computer mehr und mehr zu Forschungszwecken eingesetzt wurden.

Elektromechanische Relais wurden zunächst durch Elektronenröhren und später durch Transistoren ersetzt, was die Geschwindigkeit von Computern um das Milliardenfache steigerte. Das technische Grundprinzip ist jedoch bei heutigen Computern noch immer dasselbe ('Von-Neumann-Architektur').
Von den damals gängigen 'Fernschreibern' wurden Tastatureinheit, welche weitgehend einer Schreibmaschine entsprach, und Druckwerk mit Papierrolle übernommen. Zwischen den 1950er und 1970er Jahren blieb dies die günstigste Methode der Datenausgabe von Rechnern. Ein Fernschreiber wurde wie eine Schreibmaschine bedient, wobei etwa durch farbliche Hervorhebung der gesendete vom empfangenen Text unterschieden werden konnte.
Kathodenstrahlröhren ersetzten in den frühen 60ern das Druckwerk und dienten als "virtuelles Papier". ^[[DF3OE'S Fernschreiber Museum](http://www.teleprinter.net/german/index.html), [PCWorld: A Brief History of Computer Displays](https://www.pcworld.com/article/209224/displays/historic-monitors-slideshow.html)]
Diese Röhrenbildschirme wurden auch an Computer angeschlossen und ermöglichten eine flexiblere Ausgabe als die vielfach verwendeten Indikationsleuchten, die jeweils nur den Status eines einzigen Elements anzeigen konnten. Bei frühen Vertretern dieser Computer mit Bildschirm wie dem 'IBM SAGE'^[[IBM - On Guard: The Story of SAGE (1956)](https://youtu.be/_qq-SX9KEkw)] oder der 'PDP-1'^[[Lyle Bickley explains the PDP-1 - CuriousMarc / YouTube](https://youtu.be/1EWQYAfuMYw)] wurde dieser eher zur Anzeige spezieller Ergebnisse als zur Rückmeldung von Status^[Singular: 'Status' [ˈʃtaːtʊs], Plural: 'Status' [ˈʃtaːtuːs]] genutzt. Beim militärisch eingesetzten SAGE konnte eine spezielle Lichtpistole direkt auf den Bildschirm gerichtet werden, um eine Stelle auf der angezeigten Landkarte zu markieren^[[The history of the graphic user interface - tobyonline / YouTube](https://youtu.be/U1Oy4X5Ni8Y?t=2m29s)] – der Vorgänger der später in Spielkonsolen eingesetzten 'Lightguns'.
<!-- Auf dem PDP-1 wurde am Massachusetts Institute of Technology (MIT) eines der ersten der Unterhaltung dienende Programm entwickelt. 'Spacewar!' XXXX
OXO: erstes grafisches Computerspiel -->

<figure class="content-thin">
  <img data-src="/images/history/ibm-sage.jpg">
  <figcaption>
    Die Kombination aus Lichtpistole und Röhrenbildschirm des _SAGE_ ermöglichte erstmals eine unmittelbare Rückmeldung auf die Eingabe eines Nutzers.  
    <sup><a href="http://www.tested.com/tech/pcs/453111-cold-war-era-governement-computer-created-first-art/">Bildquelle</a></sup>
  </figcaption>
</figure>

<!-- XXXX Fazit Phase 1 -->

## Microinteractions in Command Line Interfaces

Der Computer entwickelte sich langsam von einem Werkzeug des Mathematikers zum Universalwerkzeug. Doch noch immer waren Computer raumfüllend und tonnenschwer. Ob sie zur Forschung, im Militärbereich oder zur elektronischen Datenverarbeitung in Firmen eingesetzt wurden, sie blieben ein Werkzeug, das von Experten bedient wurde. Je kleiner Computer wurden, desto üblicher wurde die uns heute bekannte Computertastatur. Befehle wurden textbasiert eingegeben und die Darstellung erfolgte auf Röhrenbildschirmen.
Diese auf Tastatur und Text basierende Benutzerschnittstelle wird _Command line interface (CLI)_ genannt und ist noch heute weit verbreitet. Ein CLI, zu Deutsch _Kommandozeile_, _Konsole_ oder _Terminal_, wird genutzt, indem Befehle und Modifikatoren eingetippt und mit <kbd>⏎</kbd> bestätigt werden. Wurde ein gültiger Befehl eingegeben, wird in den folgenden Zeilen dessen Ausgabe angezeigt. Beispielsweise werden mit dem Befehl `ls` unter 'UNIX'-Systemen die Inhalte des momentanen Verzeichnisses gelistet, mit `ls -t` werden Inhalte nach Änderungsdatum sortiert angezeigt und `ls -R -S` gibt die Inhalte inklusive Unterverzeichnisse nach Dateigröße sortiert aus. Befehle sind hier nicht auswählbar, sondern müssen immer eingegeben werden. Die Nutzung dieser _versteckten_ Interaktionen erfordert also, dass der Nutzer diese bereits kennt.

Nutzerfreundlichkeit wird heute oft verstanden als Bedienkonzept, bei dem der Nutzer möglichst wenig nachdenken muss. Wer dem Kunden erst etwas beibringen muss, macht etwas falsch. Doch es kommt darauf an, Nutzer und deren Arbeitsweise zu kennen und die Art der Bedienungsweise entsprechend zu entwickeln. Meist wird man einen Kompromiss zwischen Präzision und Geschwindigkeit auf der einen Seite und Übersichtlichkeit und Erlernbarkeit auf der anderen Seite eingehen müssen.
Die Kommandozeile ist minimalistisch, nicht nur, was die verwendeten grafischen Elemente angeht – und in vielen Fällen trotzdem leistungsfähiger, also präziser und schneller zu nutzen als jede andere Form von _User Interface (UI)_, weshalb sie von zahlreichen Softwareentwicklern, Systemadministratoren und anderen professionellen Anwendern im IT-Bereich geschätzt wird.
Ein Command Line Interface lässt sich als Vorfahre von _Chatbots_ bzw. _Conversational Interfaces_ sehen. Ein Hauptunterschied ist, dass ein Chatbot darauf ausgerichtet ist, den Nutzer zu einer Aktion aufzufordern und diesen aktiv anzusprechen, während die Kommandozeile eher eine passive Rolle einnimmt. Anders ausgedrückt: Der _[Auslöser](/triggers)_ der (Mikro-)Interaktion ist beim CLI meist auf Nutzerseite, während er bei Chatbots öfter auf Seiten des Interfaces liegt.

<!-- XXXX Fazit Phase 2 -->

## Microinteractions in grafischen Benutzeroberflächen

Eine grafische Benutzerschnittstelle (engl. _graphical user interface, GUI_) erlaubt Nutzern im Gegensatz zum CLI die Funktionen eines Programms zu entdecken, anstatt diese von vornherein zu kennen oder in einer Dokumentation nachzulesen.
Auch wenn sich Micro-Interaktionen nicht auf die Nutzung von grafischen Benutzeroberflächen beschränken, so sind sie doch deren häufigste Ausprägung in den letzten 40 Jahren. Die Metapher des virtuellen Schreibtisches dirigiert seit der Vorstellung des _Macintosh_ den Aufbau von Benutzeroberflächen: Daten werden als 'Dokumente' gespeichert und in 'Ordnern' abgelegt. Ordner können 'geöffnet' und Dokumente 'verschoben' werden. Dokumente können gelöscht werden, indem sie in den 'Papierkorb' gelegt werden und verbleiben dort, bis dieser 'entleert' wird.
Aus der physischen Welt entlehnte Bezeichnungen und Ikonografie erzeugen bei Nutzern ein Gefühl von Bekanntheit. Die Art und Weise, wie ein Computer zu benutzen ist, ist stark an die analoge Welt angelehnt. Erst durch diese [Parallelen zu bereits Bekanntem](/skeuomorphism), konnte eine Intuitivität erzeugt werden, die den Siegeszug des Computers als Alltagsobjekt herbeigeführt hat. Die Rolle von der Gestaltung von Interaktionen ist nicht mehr Nebenprodukt der Technologie, sondern wird zunehmend zum eigenen Berufsfeld.

### Sketchpad

Ivan Sutherland (\*1938), einer der Pioniere der Computergrafik, entwickelte 1962/63 am MIT eine der ersten interaktiven Grafikanwendungen als Teil seiner Doktorarbeit. 'Sketchpad' gilt als der Vorfahre von Programmen des computergestützen Design wie 'Adobe Illustrator' und 'InDesign', 3D-Programmen wie 'Cinema4D' oder Architektur- und Statikprogrammen wie 'AutoCAD'. Außerdem war es ein wegweisender Durchbruch in der Computergrafik im Allgemeinen und schuf durch den Einsatz von Objekten und Instanzen im Programmcode die Grundlagen der _Objektorientierten Programmierung_.

<figure class="content-thin">
  <img data-src="/images/history/sketchpad.jpg">
  <figcaption>
    Arbeitsumgebung für Sketchpad: Die rechte Hand hält den Lichtgriffel, die linke bedient die Box mit etwa 40 Befehlstasten. Mit den schwarzen Drehknöpfen werden Skalierung und Position verändert.
    <sup><a href="https://mprove.de/diplom/_media/fig3.1_Sketchpad.jpg">Bildquelle</a></sup>
  </figcaption>
</figure>

Mit Hilfe des kürzlich erfundenen 'Lichtgriffels' (engl. 'lightpen') war es möglich, grafische Grundformen zu zeichnen und diese zu manipulieren. Die Nutzung lässt sich mit der eines Laserpointers vergleichen, es ist im Gegensatz zum _Stylus_ nicht nötig, den Bildschirm zu berühren. Wenn ein Nutzer mit dem Lichtgriffel auf den CRT-Bildschirm zeigt, gibt ein Lichtpunkt oder -kreuz, ähnlich dem heute verwendeten Mauszeiger, in Echtzeit Rückmeldung über die anvisierte Position.
Ebenfalls verzögerungsfrei konnten mit Sketchpad grafische Objekte verschoben und transformiert werden. Einzelne Linien konnten automatisch oder manuell zu Objekten verbunden werden. Der Schnittpunkt mehrerer Linien konnte mit dem Lichtgriffel 'angefasst' und verschoben werden, das Programm berechnete unmittelbar den neuen Verlauf aller betroffenen Linien. Das Programm arbeitete mit Vektoren, Objekte konnten beliebig in Größe und Rotation verändert werden.^[vgl. [Matthias Müller-Prove: Vision & Reality of Hypertext and Graphical User Interfaces - 3 Graphical User Interfaces](https://mprove.de/diplom/text/3_guis.html#sketchpad)]

<!-- Bild: vgl. 3D-Ansicht in 4 Perspektiven in Sketchpad und Cinema4D(2017) -->

Die beliebig zoombare Arbeitsfläche erstreckte sich über die Ränder des Bildschirms hinaus und wurde dort einfach nicht mehr dargestellt. Der Bildschirm verhielt sich wie ein Fenster in eine virtuelle Welt. Heute ist dieses Verhalten selbstverständlich, doch damals war die Interpretation des Bildschirms als 'Fenster' revolutionär und bald wurde das Prinzip zu den heute bekannten Programmfenstern weiterentwickelt.
Dreidimensionale Formen waren ebenfalls darstellbar. Der Bildschirm konnte in vier  Teilfenster (Draufsicht, Seitenansicht, Frontalansicht und perspektivische Darstellung) aufgeteilt werden. Die Manipulation des Objektes oder das Zeigen auf einen Teil des Objektes in einer der Ansichten, wurde simultan auf alle Ansichten übertragen.^[Ivan Sutherland : Sketchpad Demo - bigkif / YouTube [Teil 1](https://youtu.be/USyoT_Ha_bA), [Teil 2](https://youtu.be/BKM3CmRqK2o)]
<!-- XXXX Snapping -->
Sketchpad unterscheidet sich von heutigen Nachfolgern insofern, dass der Bildschirm ausschließlich zur Ausgabe des Ergebnisses genutzt wurde, es gab keine grafische Nutzeroberfläche mit virtuellen Knöpfen oder Menüs.
Die Eingabe über physische Bedienelemente wird auch heute noch geschätzt und vor allem im professionellen Bereich, z. B. in der Videobearbeitung, eingesetzt. 
<!-- XXXX. -->

### The Mother of all Demos

Neben Sutherland war der US-Amerikaner Douglas Engelbart (\*1925 †2013) einer der bedeutendsten Erfinder von Ein- und Ausgabegeräten früher Computer. Das Ziel seines Teams am 'Augmentation Research Center' war die Erweiterung des menschlichen Intellekts durch Computer.
Er erkannte, dass Bildschirme für die Darstellung von interaktiven Elementen verwendet werden konnten und ermöglichte damit einen weit flexiblere Einsatz dieser. Bis Ende der 1950er Jahre wurden Röhrenbildschirme lediglich zur Darstellung von Radardaten für das Luftverteidigungssystem SAGE verwendet.
Engelbart war der Meinung, dass Benutzer direkt mit dem Computersystem interagieren sollten, ohne sich mit Lochkarten, Teletype oder anderen Formen der Stapelverarbeitung auseinandersetzen zu müssen.

<!--
Außerdem involviert in erste Netzwerktechnik, Hypertext, Videokonferenzen und E-Mail.
Engelbart: NLS (oN-Line System) -->

Am 9. Dezember 1968 zeigte Engelbart in einer Vorführung, die als 'The Mother of all Demos'^[[The Mother of All Demos, presented by Douglas Engelbart (1968) - MarcelVEVO / YouTube](https://youtu.be/yJDv-zdhzMY)] in die Geschichte eingehen sollte, die Ergebnisse der Arbeit seines Projektteams. Die einflussreichste Neuerung war die Erfindung der Computermaus, daneben wurden jedoch auch revolutionäre Konzepte der Textbearbeitung und Vernetzung von Computern vorgeführt. Vor zahlreichen Computerspezialisten zeigten Engelbart und sein Team, was damals als Sensation aufgefasst wurde.
Der erste Teil der Demonstration befasste sich mit diversen Möglichkeiten, Texte zu bearbeiten; darunter Methoden, Textbausteine zu kopieren und zu verschieben, Listen neu zu ordnen und verschachtelte Listen zu erstellen. 
Anhand einer beispielhaften Einkaufsliste zeigte er, wie Verlinkungen (Hyperlinks) innerhalb des Dokuments erstellt werden können und wie sich mit Hilfe dieser auch Grafiken mit Text verknüpfen lassen. Er demonstrierte die Erstellung von  'Ansichtsketten' und veranschaulichte die Nützlichkeit von Hyperlinks, die das 'Springen' zwischen verschiedenen Ansichten ermöglichten. Ziel des 'NLS' ('oN-Line-System') genannten Systems war es, die Handhabung von komplexen Informationsstrukturen zu vereinfachen. Inhalte sollten einfach zu verfassen, erfassen und zu modifizieren sein. Die Struktur von Daten wurde erstmals nicht linear, sondern dem menschlichen Denken nachempfunden und _netzartig_ aufgebaut. Das NLS gilt neben 'Plato'^[[platohistory.org](http://www.platohistory.org/)] als einer der wichtigsten Vorfahren des heutigen Internets. 

Im zweiten Teil der Vorführung zeigte Engelbart die genutzten Eingabegeräte: Die neuartige 'Maus' als Zeigegerät, ein spezielles Gerät mit fünf Tasten ('Chording-Tastatur') und eine damals übliche Computertastatur mit 61 Tasten.
Es wurde demonstriert, wie sich der Mauszeiger, genannt 'bug' (Käfer), auf dem Bildschirm analog zur Maus auf dem Tisch bewegt. Die erste Maus bestand aus zwei rechtwinklig zueinander angebrachten Rädern, die über den Untergrund rollten beziehungsweise rutschten.
Um der natürlichen Bewegung des Handgelenks zu entsprechen, wurde die Steuerung der Maus so angepasst, dass eine leicht bogenförmige Bewegung der Maus einer horizontalen Bewegung des Mauszeigers entsprach. Laut Engelbart passten sich Testnutzer diesem Verhalten intuitiv an und es wurde nicht bewusst wahrgenommen.

<figure class="content-thin">
  <img data-src="/images/history/engelbart-input-devices.jpg">
  <figcaption>
    Engelbarts Eingabegeräte bei der Mother of all Demos.
    <sup><a href="http://frumlife.blogspot.de/2013/08/the-mother-of-all-demosdouglas-carl.html">Bildquelle</a></sup>
  </figcaption>
</figure>

Die Positionsrückmeldung (auf dem Bildschirm) erfolgte bei der Nutzung einer Maus an einem anderen Ort der Aufmerksamkeit als die Eingabe (auf dem Tisch). Was von der Tastatur seit Zeiten der Schreibmaschine bekannt war, wurde von Engelbarts Team auf das Zeigegerät übertragen. Obwohl Lichtgriffel oder Lichtpistole augenscheinlich intuitivere Eingabemöglichkeiten darstellten, da die Geräte _direkt_ auf den gewünschten Punkt gerichtet wurden, setzte sich die Maus schnell weltweit als Zeigegerät für Computer durch. Mäuse waren in der Herstellung deutlich billiger. Sie haben den Vorteil, dass der Nutzer sich nicht selbst einen Teil des Bildschirms verdeckt, indem er darauf zeigt. Außerdem ist längeres Arbeiten mit der Maus deutlich angenehmer, da Arm und Hand abgelegt werden können. Im Wechsel mit der Tastatur sind weniger Auf- und Abbewegungen nötig als mit dem Lichtgriffel. Ob jedoch tatsächlich bessere Ergonomie und günstigere Herstellung die ausschlaggebenden Faktoren des Erfolges der Maus waren, kann nur vermutet werden.
Die Chording-Tastatur, welche Engelbart zusätzlich bei seiner Demonstration verwendete, besaß fünf Tasten und ermöglichte die Eingabe von 31 Buchstaben durch Kombination von jeweils zwei Tasten. Somit konnten mit nur einer Hand alle Buchstaben und Befehle eingegeben werden, ohne dass ein Wechsel zwischen Tastatur und Maus nötig wurde. 

<figure class="content-thin">
  <img data-src="/images/history/engelbart-mouse-replica.jpg">
  <figcaption>
    Replik des Maus-Prototypen von Doug Engelbart und Bill English
    <sup><a href="http://www.computerhistory.org/revolution/input-output/14/350">Bildquelle</a></sup>
  </figcaption>
</figure>

Ohne die 'Mother of all demos' und die Begeisterung, die diese ausgelöst hatte, wären Computer vielleicht heute noch unbezahlbare Spielzeuge einer hochqualifizierten Elite. Engelbart war Pionier und Vordenker für die Entwicklung des Personal Computers. Seine Arbeit machte Computer interaktiv, vernetzt, grafisch und persönlich.

<!-- > It's the next thing after acid
> <cite>LSD-Aktivist Ken Kesey kommentiert die "Mother of all Demos"</cite> -->

### Vom Xerox Alto bis heute

Im Silicon Valley der 1970er Jahre, noch bevor Apple oder Microsoft überhaupt gegründet wurden, war Xerox das wohl innovativste Unternehmen hinsichtlich neuartiger Schnittstellen zwischen Mensch und Maschine. 
Der 1973 von zahlreichen ehemaligen Mitarbeitern Engelbarts unter der Leitung von Robert Taylor (\*1932 †2017) entwickelte 'Xerox Alto' war der Prototyp des folgenden Serienmodells 'Star'. Ziel war die Benutzung "freundlich und intuitiv" zu gestalten und so Computer einer breiteren Zielgruppe zugänglich zu machen. Die Nutzeroberfläche des Betriebssystems selbst war jedoch noch textbasiert. Um beispielsweise das Zeichenprogramm zu starten, tippte man `draw` ein und bestätigte mit <kbd>⏎</kbd>. 

> [...] and within ten Minutes, it was obvious to me that all computers would work like this some day.
> <cite>Steve Jobs über seinen ersten Eindruck der grafischen Nutzeroberfläche des Xerox Alto^[[How Steve Jobs got the ideas of GUI from XEROX - Ringo Pebam / YouTube](https://youtu.be/J33pVRdxWbw)]</cite>

Das Programm 'Draw' bot neuartige Möglichkeiten zur Erstellung und Manipulation von Zeichnungen und die _undo_-Funktion war erstmals nicht nur auf den letzten Schritt beschränkt. Es lässt sich als Vorgänger von heutiger Software wie 'Adobe Illustrator' oder 'Microsoft Paint' beschreiben und deren grundlegende Nutzung ist nicht unähnlich.^[Demonstration des Zeichenprogramms _Draw_: [Xerox Alto Restoration - CuriousMarc / YouTube](https://youtu.be/OKakermaQ68?t=6m54s)]

Das Layoutprogramm 'Bravo' hingegen unterschied sich deutlich von seinen Nachfahren wie Microsoft Word oder Adobe InDesign. Es war das erste Textverarbeitungsprogramm, in dem verschiedene Schriften ausgewählt werden konnten und bei dem das Druckerzeugnis und dessen Repräsentation am Bildschirm weitgehend übereinstimmten. Während die Ausgabe dem _WYSIWYG_-Prinzip ("what you see is what you get") entsprach, erinnerte die Eingabe oftmals an die Nutzung einer Kommandozeile und beruhte auf der Verwendung von [Modi](/loops-and-modes).
Nachdem eine Zeile Text eingegeben wurde, musste diese mit <kbd>Esc</kbd> bestätigt und ausgewählt werden. Nun konnte die Formatierung des Textes geändert werden, indem mit <kbd>L</kbd> der 'Look'-Modus aufgerufen wird. Anschließend wurde der Text beispielsweise mit <kbd>I</kbd> in Kursivtext umgewandelt. Um vorhandenen Text zu editieren, musste dieser mit Hilfe der Maus ausgewählt werden. Im 'Command'-Modus konnte dieser anschließend mit <kbd>R</kbd> ersetzt oder mit <kbd>D</kbd> gelöscht werden. Um Text zu kopieren und einzufügen, musste zuerst das Ziel mit der Maus ausgewählt werden, dann mit <kbd>I</kbd> in den 'insert'-Modus gewechselt werden. Nun konnte mit der Maus die zu kopierende Quelle innerhalb des Dokumentes ausgewählt und der Vorgang mit <kbd>Esc</kbd> bestätigt werden.
Mit Hilfe der Maus konnte zwar Text markiert werden, jedoch gab es keinerlei grafisches Menü. Die Nutzung von Bravo wurde daher stets vom Lesen des Handbuchs begleitet, sofern man die zahlreichen Tastaturbefehle nicht auswendig kannte.^[Demonsration des Layoutprogramms _Bravo_: [Xerox Alto Restoration - CuriousMarc / YouTube](https://youtu.be/OKakermaQ68?t=10m30s)]^[[Xerox Alto Bravo Demo - Meadhbh Hamrick / YouTube](https://youtu.be/390hhDkiJFM)]^[Smith, Douglas K.: Fumbling the Future: How Xerox Invented, then Ignored, the First Personal Computer, iUniverse, 1999, [books.google.de](https://books.google.de/books?id=3oCJBAAAQBAJ)]

<figure class="content-thin">
  <img data-src="/images/history/bravo-manual-summary.jpg">
  <figcaption>
    Ausschnitt der Kurzanleitung (!) für das Layoutprogramm Bravo aus dem Benutzerhandbuch des Xerox Alto (Seite 69 von 161), 1979
    <sup><a href="http://bitsavers.trailing-edge.com/pdf/xerox/alto/Alto_Users_Handbook_Sep79.pdf ">Bildquelle</a></sup>
  </figcaption>
</figure>

Nachfolger von Bravo wird 1975 'Gypsy'. Dieses Programm bot einen ähnlichen Funktionsumfang wie sein Vorgänger, jedoch eine vollkommen andere Benutzeroberfläche. Diese basierte nicht mehr auf Modi, sondern wurde komplett per GUI bedient. Erfinder Larry Tesler (\*1945) war geradezu versessen darauf, die Modi loszuwerden^[wie Teslers Website [nomodes.com](http://nomodes.com), sein Twitter-Account [@nomodes](https://twitter.com/nomodes) und die [Beschriftung seines Nummernschildes](http://nomodes.com/Larry_Tesler_Consulting/CV_files/NOMODES.jpg) beweisen]. 
Wenn die Taste eines Buchstabens gedrückt wurde, sollte dieser auch im Dokument erscheinen. Auch das Einfügen oder Ersetzen von Text wurde deutlich intuitiver und entsprach in etwa heutigen Textverarbeitungsprogrammen: Mit der Maus wurde einfach an die Stelle geklickt, an der Text hinzugefügt werden sollte. Um Text in Bravo zu selektieren, klickte der Benutzer in der Regel das erste und das letzte Zeichen, jeweils mit einer anderen Maustaste. In Gypsy konnte Text nun einfach ausgewählt werden, indem der Cursor mit gedrückter Maustaste über den zu markierenden Text gezogen wurde. Außerdem konnte komfortabel ein gesamtes Wort per Doppelklick selektiert werden. Formatierungen wie Fett, Kursiv oder Unterstrichen wurden mit den Tastenkürzeln <kbd>CTRL</kbd>+<kbd>b</kbd>/<kbd>i</kbd>/<kbd>u</kbd> vorgenommen. Auch die Kopierfunktion entsprach nun weitgehend heutigen Gewohnheiten und bestand aus einem _kopieren-_ und einem _einfügen_-Befehl.
Damit sich Nutzer weniger merken mussten, waren viele Funktionen außerdem über ein klickbares Menü zu erreichen. Weniger Modi bedeuteten weniger Unklarheiten darüber, in welchem Modus sich das System befand und welchen Effekt ein bestimmter Tastendruck haben würde.
Zahlreiche erstmals in Gypsy eingeführte Konzepte und Mikro-Interaktionen wurden schnell von anderen Entwicklern übernommen. Sie wurden unter anderem in Apples Lisa- und Macintosh-Computern verfeinert und von dort bis in heutige Textverarbeitungsprogramme vererbt.^[Smith, Douglas K.: Fumbling the Future: How Xerox Invented, then Ignored, the First Personal Computer, iUniverse, 1999, [books.google.de](https://books.google.de/books?id=3oCJBAAAQBAJ)]^[[Wikipedia.org: Gypsy (Software)](https://en.wikipedia.org/wiki/Gypsy_(software))] ^[[Burr, Betty & Kimball, Ralph: 'Gypsy' - An investigation of the Ginn computer-assisted editing system](http://www.bitsavers.org/pdf/xerox/alto/GypsyEvaluation_Sep76.pdf), Xerox Paolo Alto Research Center, 1976]

Der 'Xerox 8010', genannt 'Star', war das erste kommerzielle System, das verschiedene Technologien, die mittlerweile zum Standard in Personalcomputern geworden sind, integriert hatte. Eine fensterbasierte grafische Benutzeroberfläche, Symbole, Ordner, Zwei-Tasten-Maus, Ethernet-Vernetzung, eine E-Mail-Funktion, Datei- und Druckserver waren in einem System gebündelt.^[vgl. [Xerox Star User Interface (1982) 1 of 2 - VintageCG / YouTube](https://youtu.be/Cn4vC80Pv6Q)]

<!-- WYSIWYG screen=print -->
Der Apple Macintosh, als erster kommerziell erfolgreicher Computer mit grafischer Benutzeroberfläche, hat eine neue Ära des Desktop-Publishing eingeleitet. Das Paradigma des _WYSIWYG_ machte es zusammen mit erschwingbaren Laserdruckern für jedermann möglich, professionell aussehende Dokumente digital zu erzeugen und auszudrucken. Die Maus wurde von nun an Standardeingabegerät und die Bedienung immer komfortabler.
Apple wird unter Steve Jobs zum wichtigsten Innovationstreiber digitaler Benutzerschnittstellen, sei es mit dem 'click wheel' des iPod oder der Massentauglichkeit von (Multi-)Touchscreens mit iPhone und iPad. 
<!-- TODO: mehr! 
- T9, PDAs, Stylus, 
- Don Norman (Apple): Design = usability und funktionalität ("The Design of Everyday Things")
- Multitouch (kapazitiv) - erstmals direkte manipulation, ohne abstraktion = Skeumorphismus siehe kapitel
A Brief History of User Interface: https://youtu.be/1p954cqfTHY
XXXX -->

<!-- Erste Touch-Screens '82:[https://youtu.be/JAcZpQCLb4E]
Stylus/Lichtgriffel: https://youtu.be/r18i-uR6BD4, https://youtu.be/1EWQYAfuMYw?t=21m48s -->

<!-- XXXX Fazit Phase 3 -->

## Microinteractions in Interfaces der Zukunft

Das wohlbekannte Konzept von Benutzeroberflächen, bestehend aus Fenstern, Icons, Menüs und Maus, (_windows, icons, menus, pointer_, kurz _WIMP_) wird vielen Jahren verwendet und weiterentwickelt und ermöglicht überaus produktives Arbeiten. Doch vor allem im Verbraucherbereich wird wird diese Art Interface immer mehr von Touchscreens als vorherrschende Eingabemethode abgelöst. 
Als _natural user interfaces (NUI)_ bezeichnete Formen von Benutzerschnittstellen basieren auf der direkten Interaktion des Nutzers mit dem Inhalt, durch Gesten (wie Tippen, Wischen, Zeigen) oder Sprache ^[vgl. [Wikipedia.de: Natural User Interface](https://de.wikipedia.org/wiki/Natural_User_Interface)]. Es kann als Nachfahre des in Sketchpad angedeuteten und von Jef Raskin verfeinerten _zooming user interface (ZUI)_^[[Specification of 'The Humane Envoronment (THE)'](https://ia800200.us.archive.org/0/items/Specification84B/Specification%2084B.txt), [Wikipedia.org: Zooming user interface](https://en.wikipedia.org/wiki/Zooming_user_interface)] gesehen werden. Beide verbindet, dass Inhalte 'direkt' angefasst und verändert werden können. [Trigger](/triggers) von Microinteractions sind also nicht mehr spezielle eigens dafür geschaffene Elemente wie Buttons, sondern maßgeblich der Inhalt selbst. 
Am einfachen Beispiel einer Bildergalerie lässt sich zeigen, dass Trigger hier auf gewisse Weise _versteckter_ sind, da nicht mehr unbedingt eindeutig ist, _welche_ Aktion stattfinden wird. Andererseits kann deutlicher werden, _mit welchem Inhalt_ die Interaktion stattfindet: In klassischen WIMP-Interfaces würde ein Wechsel zum nächsten Bild durch Betätigung eines Buttons erfolgen, also einem ergänzenden UI-Element, es fehlt der direkte Bezug zum Inhalt. Wenn dagegen auf Art eines NUI das Bild selbst zur Seite 'gewischt' wird, ist die Verbindung zum Inhalt vorhanden, allerdings fehlt ein Hinweis darauf, _was_ passieren wird, da Icons oder Beschriftungen wie "nächstes Bild" fehlen.

Neben der Anwendung auf Touchscreens gewinnen Variationen von NUI auch mehr und mehr Bedeutung für Anwendungen in _Virtual Reality (VR)_ und _Augmented Reality (AR)_ bzw. _Mixed Reality (MR)_. Formen dieser 'Post-WIMP'-Interfaces finden sich in zahlreichen aktuellen Produkten, obwohl sie nicht selten eher Spielerei und 'Gimmick' als produktive Benutzerschnittstelle zu sein scheinen. 
Die Präzision und Nutzungsgeschwindigkeit von "klassischen" Eingabegeräten, wie Maus und Tastatur, werden von Interfaces dieser Art bisher kaum erreicht. Fehlende _haptische Rückmeldung_ scheint der größte Schwachpunkt zu sein^[[Pointing to the future of UI | John Underkoffler](https://youtu.be/b6YTQJVzwlI), 2010 - TED / YouTube], da sie sich auf das deutlich langsamer wahrgenommene visuelle Feedback verlassen müssen. Prototypen für haptische Touchscreens, die dieses Problem minimieren könnten, existieren zwar seit vielen Jahren, scheinen aber noch immer nicht marktreif zu sein. Konzepte für [haptisches Feedback](/feedback#arten-von-feedback) in VR und AR sind ebenfalls in Arbeit, große pneumatische Handschuhe^[[A Real Life Haptic Glove (Ready Player One Technology Today) - Smarter Every Day 190](https://youtu.be/OK2y4Z5IkZ0) - SmarterEveryDay / YouTube] oder multidirektionale Laufbänder^[[The Infinadeck Omnidirectional Treadmill - Smarter Every Day 192 (VR Series)](https://youtu.be/fvu5FxKuqdQ) - SmarterEveryDay / YouTube] scheinen aber noch einige Jahre entfernt von der Nutzbarkeit im Alltag. Selbst medizinische Chirurgie-Roboter wie das 'Da Vinci-Operationssystem' geben rein visuell Rückmeldung, und benötigen langes Training, bevor sie zuverlässig genutzt werden können. Versionen mit taktiler Rückmeldung sind bisher nur Forschungsprojekte.^[[VerroTouch: Haptic Instrument Vibration Feedback For Robotic Minimally Invasive Surgery](http://haptics.seas.upenn.edu/index.php/Research/VerroTouch) - Katherine J. Kuchenbecker /  University of Pennsylvania, 2012]^[[Haptically-Enabled Robotic Assisted Minimally Invasive Surgical System (HeroSurg)](https://youtu.be/BCrIAh98-o0) - Intelligent Systems Research (IISRI), Deakin University - deakinresearch / YouTube, 2016]
Die Erzeugung eines künstlichen Schwerkraftgefühls wird ebenfalls erforscht. Über elektrische Muskelstimulation aktivieren Elektroden auf der Haut den Gegenspieler jenes Muskels, der aktiv gegen die Schwerkraft anarbeiten müsste. Dadurch entsteht beim Anheben eines virtuellen Gegenstandes tatsächlich eine Illusion von Gewicht.^[[Zeit Online: Haptik - Zurück zum Spüren](https://www.zeit.de/2018/09/haptik-digitalisierung-forschung-sinneseindruecke) - Eva Wolfangel / Zeit.de, 2018]

<figure class="content-normal">
  <video muted autoplay loop preload="none" poster="" src="/images/history/microsoft-hololens.mp4" controls controlsList="nodownload" playsinline></video>
  <figcaption> ›Microsoft HoloLens‹ soll mit Hilfe einer Mixed-Reality-Brille jede Oberfläche zum Interface werden lassen.
    <sup><a href="https://www.thestreet.com/story/13019564/1/is-microsofts-hololens-a-tech-breakthrough-or-the-next-kinnect.html">Quelle</a><sup>
  </figcaption>
</figure>
<!-- <figure class="content-normal">
  <img data-src="/images/history/microsoft-hololens.gif">
  <figcaption>Microsoft HoloLens soll durch eine Mixed-Reality-Brille jede Oberfläche zum Interface werden lassen.
     <sup><a href="https://www.thestreet.com/story/13019564/1/is-microsofts-hololens-a-tech-breakthrough-or-the-next-kinnect.html">Bildquelle</a></sup>
  </figcaption>
</figure> -->

Bill DeRouchy beschreibt eine Zukunft, in der die Grenze zwischen Nutzer und Interface verschwimmt, dieser selbst zum Button wird und dadurch mit jeder Oberfläche interagieren kann. ^[vgl. DeRouchy, Bill: [History of the Button](https://youtu.be/zdwUbhm-8Mw) UXLx / YouTube] Steht uns eine "Zukunft ohne Buttons" bevor?^[[Future UI Design Without Buttons](https://www.toptal.com/designers/ui/future-ui-design-without-buttons) von  Wojciech Dobry] Schließlich sind direkte Schnittstellen zwischen Gehirn und Computern (_brain-computer-interface, BCI_) inzwischen genau genug um Roboterarme steuern^[[Gehirn-Computer-Schnittstellen - Mit der Kraft der Gedanken](https://www.spektrum.de/news/gehirn-computer-schnittstellen-werden-alltagstauglicher/1398145) - Manuela Lenzen/spektrum.de]. Oder wird – wie in der Science Fiction – ein einziger 'Make-it-so-Button' immer die Aktion ausführen, die ein Nutzer gerade im Kopf hat?^[[Shedroff, Nathan &  Noessel, Christopher: Make it so - Interaction Design Lessons from Science Fiction](https://rosenfeldmedia.com/books/make-it-so/), Rosenfeld Media, 2012]

<!-- http://www.chrisharrison.net/index.php/Research/Skinput -->
<!-- feedback direkt ins Gehirn? -->

<figure class="content-normal">
  <img data-src="/images/history/starwars-makeitso.jpg">
  <figcaption>
    Im Film 'Star Wars: Episode I' nutzt Königin Amidala den selben Button um eine Hologramm-Verbindung aufzubauen, eine Sternenkarte aufzurufen und das Raumschiff zu landen. <sup><a href="https://99percentinvisible.org/episode/future-screens-are-mostly-blue/">Bildquelle</a></sup>
  </figcaption>
</figure>


<!-- XXXX Fazit Phase 4 -->
<!-- XXXX Fazit Historie -->


::: md-container-more

### Erlesene Links zum Thema

- Video: [Ivan Sutherland : Sketchpad Demo Teil 1](https://youtu.be/USyoT_Ha_bA) und [Teil 2](https://youtu.be/BKM3CmRqK2o)
- Video: [The Mother of All Demos, presented by Douglas Engelbart (1968)](https://youtu.be/yJDv-zdhzMY)
- Video: [Demonstration von Draw und Bravo auf dem Xerox Alto](https://youtu.be/OKakermaQ68?t=6m29s)
- Webseite: [Vision & Reality of Hypertext and Graphical User Interfaces](https://mprove.de/diplom/)
- Podcast-Episode: [Mixed Reality & the Future of Design with Austin Knight](https://userdefenders.com/podcast/mixed-reality-and-the-future-of-design-part-1-with-austin-knight/) von User Defenders
- Düsteres, aber nicht unrealistische Fiktion einer Zukunft, in der VR/AR/MX und andere NUIs alltäglich sind: [Black Mirror](https://www.netflix.com/de/title/70264888), insbesondere in den Episoden 'White Christmas', 'The Entire History of You', 'White Bear', 'Playtest' oder 'USS Callister'
- Emotionale KI-gesteuerte Sprachassistentin in der Hauptrolle im Film: [Her](https://www.imdb.com/title/tt1798709/) von Spike Jonze

:::

<!-- Die Bedienung einer im Fahrradhelm verbauten Blinkanlage scheint über die verbundene Smartwatch doch eher umständlich zu sein, da diese nur die Gesten einer Hand erkennt.^[[Lumos Helmet - How To Calibrate The Apple Watch Feature, With The Folks At Mission Bicycle Company!](https://youtu.be/5x4JkxKJa_k) - Lumos Helmet
 / YouTube] -->

<!-- Organic User Interface (OUI) https://en.wikipedia.org/wiki/Organic_user_interface -->
<!-- SILK? -->
