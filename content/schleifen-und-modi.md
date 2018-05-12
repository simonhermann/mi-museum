# Schleifen und Modi in Micro&shy;interactions

Wie verändert sich die Microinteraction mit der Zeit? Bleiben die Regeln dieselben oder ändern sie sich bei mehrfacher Nutzung? Was passiert, wenn sich äußere Faktoren ändern? Bleibt eine Funktion angeschaltet, bis sie manuell wieder deaktiviert wurde oder schaltet sie sich unter Umständen automatisch aus? Schleifen und Modi beeinflussen als 'Meta-Regeln' das Verhalten von Microinteractions.

> Nothing big works.
> <cite>Victor Papanek^[Saffer, Dan: [Microinteractions - Designing with Details](http://microinteractions.com/), O'Riley Media, 2013]</cite>

## Modi

Ein _Modus_ ist ein Status eines Programms, in dem Befehle in dessen Kontext ausgeführt werden. Diese 'Verzweigung' der Regeln sollte in Microinteractions jedoch die Ausnahme sein. Hauptgrund dafür ist, dass sie häufig Fehler des Nutzers auslösen, besonders wenn neue Regeln in einer bereits bekannten Oberfläche angewendet werden. Die Regeln eines Modus müssen von Nutzern neu erlernt werden, bevor ein Modus genutzt werden kann.^[vgl. Saffer, Dan: [Microinteractions - Designing with Details](http://microinteractions.com/) (S. 111 - 114), O'Riley Media, 2013]
Saffer plädiert, Modi in Microinteractions möglichst zu vermeiden, einzige Ausnahme seien selten genutzte Funktionen, die sonst den Flow des Interfaces unterbrechen würden.^[Saffer, Dan: [Microinteractions - Designing with Details](http://microinteractions.com/) (S. 121), O'Riley Media, 2013] Doch Modi können – richtig eingesetzt – die Nutzungsgeschwindigkeit eines Interfaces deutlich erhöhen, ohne Abstriche bei der Nutzbarkeit zu machen. Sie benötigen meist etwas Einarbeitung von Seiten des Nutzers, doch einmal erlernt, können sie die Produktivität enorm steigern. Nicht umsonst sind sie häufig in professionellen Programmen mit hoher Nutzungsdauer zu finden.^[Beispiele für aktuell sehr erfolgreich eingesetzte Modi finden sich in: den Tasten <kbd>Shift</kbd>, <kbd>cmd</kbd>, <kbd>alt</kbd>, usw jeder Tastatur, den Texteditoren Vim, Visual Studio Code und sogar Microsoft Word, dem Designprogramm Sketch uvm.]

> Any darn fool can make something complex; it takes a genius to make something simple.
> <cite>Pete Seeger^[[goodreads.com: Pete Seeger > Quotes](https://www.goodreads.com/author/quotes/30113.Pete_Seeger)]</cite>

##### Rückfedernde Modi ('spring loaded modes')

Ein _rückfedernder Modus_ (oder _Quasimodus_ nach Jef Raskin^[Raskin, Jef: The Humane Interface, Addison-Wesley, 2000, [Download bei acm.org](https://dl.acm.org/citation.cfm?id=333103)]) ist so lange aktiv, wie ein Auslöser (typischerweise eine Taste) _gehalten_ wird oder auf andere Weise aktiv ist. Sobald dieser wieder losgelassen wird, kehrt der Auslöser in den Ursprungszustand zurück und der Modus endet.
Prominentes Beispiel ist die <kbd>Shift</kbd>-Taste, die schon bei Schreibmaschinen zum Einsatz kam, und typischerweise den Modus von _Kleinschreibung_ zu _Großschreibung_ wechselt. Diese Variation hat den Vorteil, dass sie vom Nutzer praktisch nicht vergessen werden kann, sie ist jedoch weniger geeignet für langwierige oder komplexe Eingaben.^[vgl. Saffer, Dan: [Microinteractions - Designing with Details](http://microinteractions.com/) (S. 111 - 114), O'Riley Media, 2013] <!-- Weiteres Beispiel wäre ein _Tooltip_, also ein Hinweis, der nur erscheint, wenn sich der Mauscursor über einem bestimmten Element befindet.  -->Rückfedernde Modi nutzen zumeist versteckte Auslöser und haben daher die [bereits beschriebenen Nachteile](/triggers).

##### Einmalige Modi ('one-off modes')

Ein _einmaliger Modus_ besteht nach seiner Aktivierung _für die Dauer einer einzigen darauffolgenden Aktion_. Er ist also so lange aktiv, bis die nächste Eingabe des Nutzers erfolgt ist.^[vgl. Saffer, Dan: [Microinteractions - Designing with Details](http://microinteractions.com/) (S. 111 - 114), O'Riley Media, 2013]
Beispiel hierfür sind die verschiedenen 'einsetzen'-Werkzeuge in Sketch: Wird etwa 'Rechteck', 'Text' oder 'Zeichenfläche' genutzt, bleibt das Werkzeug nur so lange aktiv bis ein entsprechendes Objekt erstellt wurde. Danach kehrt das Programm automatisch in den standardmäßigen Auswahlmodus zurück. Der Modus kann abgebrochen werden, indem <kbd>Esc</kbd> gedrückt oder ein anderer Modus gewählt wird.
Unter Android bringt längeres Gedrückthalten des Fingers auf Text die Textauswahl und ein Kontextmenü zum Vorschein. Dieses Menü bleibt so lange bestehen, bis eine der Optionen (kopieren, alles auswählen, suchen, usw.) genutzt oder der Modus durch Tippen auf einen anderen Bildschirmbereich abgebrochen wurde.

<figure class="content-tiny">
  <img data-src="/images/loops-and-modes/android-smart-text-selection.gif">
  <figcaption>
    Das Kontextmenü der Textauswahl in Android 8 erkennt, ob eine Adresse oder Telefonnummer ausgewählt wurde und bietet entsprechend intelligente Vorschläge an: Die Adresse kann direkt in Google Maps geöffnet und die Telefonnummer direkt angerufen werden.
    <sup><a href="http://www.androidbeat.com/android-8-oreo-features/">Bildquelle</a></sup>
  </figcaption>
</figure>

## Schleifen

Eine _Schleife_ (englisch _loop_) beschreibt eine Anweisung in den Regeln, welche wiederholt wird, meist bis eine bestimmte Bedingung erfüllt ist. Während deutliche Parallelen zu Schleifen in der Programmierung liegen, sind diese nicht gleichzusetzten, denn eine Schleife in den Regeln einer Microinteraction bedeutet nicht zwangsweise die technische Umsetzung durch eine Schleife. Die grundlegenden Arten von Schleifen sind^[vgl. Saffer, Dan: [Microinteractions - Designing with Details](http://microinteractions.com/) (S. 114f), O'Riley Media, 2013]:

* Die _Während-Schleife_ ('while loop') wiederholt sich, solange bestimmte Bedingungen erfüllt sind. Bei jedem Zyklus wird überprüft, ob dem so ist.
  Beispiel: Während Nacht ist, überprüft ein Bewegungsmelder alle 5 Sekunden ob Bewegung erkannt wurde.
* Die _Zählschleife_ ('for loop') wiederholt sich so oft, bis eine definierte Anzahl von Zyklen erreicht ist.
  Beispiel: Liste die neuesten E-Mails auf, bis 50 Einträge zu sehen sind.
* Die _Mengenschleife_ ('foreach loop') wird für jeden Eintrag einer vorgegebenen Liste einmal ausgeführt.
  Beispiel: Überprüfe für jedes Album in der Musiksammlung, ob ein Coverbild zur Verfügung steht.
* Die 'Endlosschleife' hat keine Bedingungen und wiederholt sich unbegrenzt.
  Beispiel: Überprüfe alle 5 Sekunden, ob eine Netzwerkverbindung besteht.

Diese Zeitspanne einer Microinteraction und damit die [Geschwindigkeit](animation-and-pace) haben erhebliche Auswirkungen darauf, wie diese vom Nutzer wahrgenommen wird. Der _Zyklus_ einer Schleife kann von wenigen Millisekunden bis zu mehreren Jahren reichen. Obwohl Microinteractions in der Regel von kurzer Dauer sind, kann eine Schleife die erneute Ausführung dieser auslösen und so die 'Lebensdauer' verlängern.
Wenn Microinteractions wiederholt werden, kann deren Funktionsweise angepasst werden, häufig verwendete [Auslöser](/triggers) könnten beispielsweise prominenter dargestellt werden. Durch Anpassung an den Schlafrhythmus eines Nutzers und damit einhergehende Ladezeiten eines Smartphones, könnte dessen Akkulebensdauer verlängert werden. Ein Nutzer, der ein Produkt über längere Zeit nutzt, ist mit diesem vermutlich recht vertraut und benötigt daher weniger Hinweise, _wie_ etwas zu benutzen ist.
Diese Personalisierung kann nicht nur extrem nützlich sein, sondern auch die emotionale Bindung eines Nutzers zum Produkt stärken. Richtig eingesetzt kann eine Erfahrung geschaffen werden, die Nutzer immer wieder Neues entdecken lässt und neue 'Wow'-Momente erzeugt.^[vgl. Saffer, Dan: [Microinteractions - Designing with Details](http://microinteractions.com/) (S. 118), O'Riley Media, 2013]
Gestalter sollten sich die Frage stellen: _Wie kann eine Microinteraction bei der zweiten, fünften oder hundertsten Nutzung verbessert werden?_

<figure class="content-tiny">
  <img data-src="/images/loops-and-modes/chrome-autocomplete.jpg">
  <figcaption>
    In der Adressleiste der meisten Browser wird eine Eingabe automatisch vervollständigt durch die Adressen früher besuchter Webseiten. Auf ähnliche Weise werden frühere Suchbegriffe von Suchmaschinen hervorgehoben.
  </figcaption>
</figure>

Eine personalisierte Nutzererfahrung scheint für digitale Produkte immer bedeutender zu werden. Die mächtigen Firmen der Digitalwelt sammeln produktübergreifend Daten und verwenden diese unter anderem, um jedem Nutzer eine individuelle Produkt&shy;erfahrung zu bieten.^[vgl. [Personalization trend in UX](https://blog.prototypr.io/personalization-trend-in-ux-678b6beaeeb6) von Nikita Gangwal] Mehr dazu, wie Microinteractions einen nachhaltigen Eindruck hinterlassen können, im folgenden Kapitel [Signature Moments](/signature-moments).

::: md-container-more

### Mehr zum Thema

* Kapitel _Loops and Modes_ im Buch: [Microinteractions](http://microinteractions.com/) von Dan Saffer
* Buch: [The Humane Interface](https://dl.acm.org/citation.cfm?id=333103) von Jef Raskin
* Artikel: [Poor UI Design Can Kill - Air Inter Flight 148, a harsh lesson learned](https://blog.martindoms.com/2011/01/24/poor-ui-design-can-kill) von Martin Doms
* Nicht nur als Kind spielerisch die Grundlagen der Programmierung lernen: mit [Lego Mindstorms](https://www.lego.com/de-de/mindstorms) oder [Swift Playgrounds](https://www.apple.com/swift/playgrounds/) 

:::
