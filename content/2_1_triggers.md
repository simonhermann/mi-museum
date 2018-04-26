# Auslöser (Trigger) von Microinteractions

Bevor ein Dialog zwischen einer Benutzerschnittstelle und einem Nutzer aufgebaut werden kann, stellt sich die Frage: _Wer spricht wen an?_ Der 'Trigger' oder 'Auslöser' einer Microinteraction kann entweder durch eine unmittelbare _Aktion des Nutzers_ oder _von Seiten des Systems_ initiiert werden. In beiden Fällen bildet dieser die erste Phase jeder Microinteraction.

<figure class="content-thin">
    <img data-src="/images/triggers/touch-start.jpg">
    <figcaption>Bevor Touchscreens alltäglich waren, mussten Nutzer sehr direkt auf deren Funktionsweise hingewiesen werden, wie hier auf dem Startbildschirm eines Fahrkartenautomaten der New Yorker U-Bahn. Tatsächlich war es egal, wo der Bildschirm berührt wurde, die gesamte Fläche startete den&nbsp;Kaufvorgang.<sup><a href="http://fyi.oreilly.com/2009/02/communicating-interactive-gest.html">Bildquelle</a></sup>
    </figcaption>
</figure>

Welche Art von Auslöser für eine Interaktion geeignet ist, hängt direkt von den Bedürfnissen des Nutzers in ebendiesem Moment ab, daher sollte diesen in der Konzeptionsphase besondere Aufmerksamkeit zukommen. Was will der Nutzer erreichen? Wie und wie häufig will er dies tun? 
Bei der Gestaltung von Triggern sollte darauf geachtet werden, dass dieser vom Nutzer _als Trigger erkannt werden kann_. Hier hängt viel vom Vorwissen des Nutzers ab – wer mit dem Internet vertraut ist, wird einen unterstrichenen Text schnell als Link erkennen, für alle Anderen ist es eben nur genau das: unterstrichener Text. Ferner sollte vermieden werden, nicht-interaktive wie interaktive Elemente aussehen zu lassen. Wenn ein Trigger wie en Button aussieht, sollte er auch wie ein Button funktionieren.^[vgl. Saffer, Dan: Microinteractions - Designing with Details, O'Riley Media, Sebastopol CA, 2013, [microinteractions.com](http://microinteractions.com/)] _Da die Existenz der Interaktion eines Interfaces mit Nutzern hier von deren Gewohnheiten und Erwartungen^[hierzu auch: [Jakob's Law of Internet UX](https://www.nngroup.com/videos/jakobs-law-internet-ux/) von Jakob Nielsen] abhängig ist, sollten Trigger genau auf diesen aufbauen._
Die jeweilige Situation spielt ebenso eine wichtige Rolle: zwischen den Gestaltungs&shy;anforderungen von Triggern für Chat-Apps, Fahrkarten&shy;automaten, Alarmknöpfe oder Fahrzeug&shy;innenräume bestehen erhebliche Unterschiede. Durch Recherche und regelmäßige Nutzertests sollten Erfordernisse der späteren Nutzergruppen ergründet und in den Gestaltungsprozess einbezogen werden. Ebenso sollten die [Barrierefreiheit bzw. Inklusivität](/practical) des Produktes hinsichtlich der Trigger sichergestellt werden, von einer Rot-Grün-Sehwchwäche sind beispielsweise etwa 9% aller Männer betroffen^[[Wikipedia.de: Rot-Grün-Sehschwäche](https://de.wikipedia.org/wiki/Rot-Grün-Sehschwäche)].
Ein weiteres wichtiges Kriterium eines Triggers ist dessen gute Auffindbarkeit. Nutzer sollten nicht erst suchen müssen, um ein Vorhaben ausführen zu können. Aus diesem Grund sollte etwa das sogenannte 'Hamburger-Icon' und das damit einhergehende, versteckte Off-Screen-Menü nur als sekundäre Art der Navigation genutzt werden^[Mehr zu den Nachteilen des 'Hamburger-Menüs': [Obvious Always Wins](https://www.lukew.com/ff/entry.asp?1945) von Luke Wroblewski]. Je häufiger eine Microinteraction genutzt wird, desto leichter sollte sie auffindbar sein.
Visuelle Möglichkeiten Aufmerksamkeit auf einen Trigger zu lenken, sind zum Beispiel Beschriftungen (Labels) und Icons Größe und Farbe des Elements oder [Animationen](/animation-and-pace). 

### Nutzerseitige Trigger

Nutzerseitige Trigger entstehen aus Bedürfnissen des Nutzers: Das Bedürfnis nachts etwas sehen zu können, führt einen Nutzer dazu, mit einem Lichtschalter zu interagieren und so das Licht einzuschalten. Das Bedürfnis, keine lauten Unterbrechungen durch Anrufe zu haben, führt dazu, ein Telefon auf 'stumm' zu schalten. Das Bedürfnis einen Moment als Foto festzuhalten, führt zum Betätigen des Auslösers einer Kamera. Hier besteht natürlich keine Eins-zu-eins-Verbindung; ein Bedürfnis kann auf verschiedene Arten gestillt werden und eine einzige Interaktion kann durch verschiedenste Bedürfnisse ausgelöst werden.
Wenn Nutzer mit einem Produkt in Berührung kommen, tun sie das oft zuerst über eine Mikro-Interaktion; sie schalten es 'ein', drücken 'Start' oder 'öffnen' ein Programm. Je nach Zustand bzw. [Modus](loops-and-modes) eines Produktes, kann der selbe Trigger zu unterschiedlichen Ergebnissen führen; der Home-Button unter iOS führt entweder auf den Startbildschirm oder öffnet die Suche, wenn sich ein Nutzer bereits dort befindet. Genauso kann die Art der Nutzung einen Unterschied machen, langes Drücken, doppeltes Drücken, 'Force Touch' oder andere Versionen der Eingabe können variabel genutzt werden. Hier ist jedoch zu bedenken, dass diese Mehrfachbelegung eines Bedienelementes sparsam genutzt werden sollte, da sie meist unsichtbar ist und erlernt werden muss. _In der Regel sollte der selbe Trigger zum selben Ereignis führen_^[vgl. Saffer, Dan: Microinteractions - Designing with Details, O'Riley Media, Sebastopol CA, 2013, [microinteractions.com](http://microinteractions.com/)].

XXXX
Bring the data forward

### Systemseitige Trigger

Systemseitige Auslöser entstehen durch ein Ereignis des Gerätes. Ein Trigger bei eingehender Nachricht auf dem Handy könnte durch Ton, Vibration und eine Benachrichtigung auf dem Bildschirm angezeigt werden – in diesem Fall führen sie zur Interaktion des Öffnens der Nachricht.
Ein Trigger dieser Art könnte auch eine festgelegte Uhrzeit, ein bestimmter Ort sein oder eine Statusleuchte sein. Der Warnton einer Industriellen Maschine könnte auf Überhitzung hinweisen und die Einblendung einer Augmented-Reality-Brille könnte auf Sehenswürdigkeiten aufmerksam machen.
Eine Integration mit dem Kalender des Nutzers könnte dessen Mobiltelefon nachts oder wenn dieser sich in einem Meeting befindet automatisch stumm schalten. Der Trend zur Automatisierung nimmt rapide zu und von _Künstlicher Intelligenz_ gesteuerte _persönliche Assistenten_ übernehmen immer mehr Entscheidungen, die vorher der Nutzer selbst getroffen hat.
Je nach Betrachtungsweise kann ein App-Icon bereits als visueller Trigger angesehen werden, der das Bedürfnis diese zu öffnen auslöst. Es empfiehlt sich jedoch, abzugrenzen zwischen einem unveränderlichen Element (z. B. Icon) und einem durch gewisse Ereignisse _veränderten Status_ und damit einhergehende _Adaption des Interfaces_ (z. B. Indikator für neue Nachricht).
Wie auch bei nutzerseitigen Auslösern, können unterschiedliche Trigger natürlich zur selben Interaktion führen. Bei wichtigen Systemereignissen redundante Trigger sollten über verschiedene Kanäle genutzt werden. Ein eingehender Anruf wird beispielsweise meist durch Ton, Vibration und visuelle Hinweise gleichzeitig signalisiert, um sicherzustellen, dass dieser in verschiedensten Situationen wahrgenommen werden kann.

<figure class="content-thin">
    <img data-src="/images/triggers/incoming-call.gif">
    <figcaption>Diese Animation für einen eingehenden Anruf ist dem Klingeln eines klassischen analogen Telefons nachempfunden.
    <sup><a href="https://material.io/">Bildquelle</a></sup>
    </figcaption>
</figure>

### Unsichtbare Trigger

Gesten

<figure class="content-thin">
    <img data-src="/images/triggers/pocket-copied-url.jpg">
    <figcaption>Wenn Pocket geöffnet wird, während sich ein Link in der Zwischenablage befindet, fragt die App, ob man den Link zur Leseliste hinzufügen möchte.
    </figcaption>
</figure>

Speichern unter" ab OSX 10.8 nur über Tastenkürzel

### Dark Patterns

Sogenannte Dark Patterns sind Methoden und Muster von im Interactiondesign, die Nutzer dazu verführen, etwas zu tun, das nicht deren (bewusste) Absicht ist.^[vgl. [https://darkpatterns.org](https://darkpatterns.org/)] Dark Patterns können nicht nur Teil des Triggers einer Microinteraction sein, sondern sich auch auf Rückmeldung, Regeln, Schleifen und Modi auswirken. Sie können sowohl dazu beeinflussen, etwas zu _tun_, als auch auch davon _abhalten_ etwas zu tun.

<figure class="content-thin">
    <img data-src="/images/triggers/darkpattern-dirt.jpg">
    <figcaption>Ein Fleck auf dem Werbebanner verleitet Nutzer, diesen wegzuwischen und versehentlich auf die Anzeige zu klicken.
    <sup><a href="https://www.reddit.com/r/mildlyinfuriating/comments/7tzwz8/this_mobile_ad_designed_to_make_it_look_like_you/">Bildquelle</a></sup>
    </figcaption>
</figure>

### Fitt's Law

Das 'Fitts'sches Gesetz' ist ein mathematisches Modell, das beschreibt, wie gut ein Mensch auf etwas Zeigen kann. Es wurde mitte des 20. Jahrhunderts vom Psychologen Paul Fitts entwickelt. Es beschreibt das Verhältnis der Größe und Entfernung einer Fläche und der benötigten Zeit, diese mit einem bestimmten Eingabegerät (z. B. Maus, Trackpad, Touchscreen) zu erreichen.^[vgl. [What is Fitts’ Law? - interaction-design.org](https://www.interaction-design.org/literature/topics/fitts-law)] Es ist eine der wenigen quantitativen Methoden, Interaktonen zu erforschen. Die in zahlreichen Versuchen erpobte Formel Formel wird beispielsweise auch von Algorithmen zur Gestenerkennung verwendet.
<!-- Versuche zeigen, wie die Distanz des und Größe eines Zieles die Geschwindigkeit einer Genauigkeit der Bewegung beeinflussen. Je schneller eine Bewegung, desto ungenauer wird sie in der Regel, da mehr Fehler gemacht werden.
Es zeigt sich also, dass eine höhere Geschwindigkeit gegen niedrigere Genauigkeit getauscht werden kann. Je größer das Ziel oder je geringer die Entfernung, desto geringer ist die benötigte Zeit, dieses zu erreichen.
Die Geschwindigkeit einer Bewegung ist meist niedriger, je schwieriger die gestellte Aufgabe wird, denn je höher die Geschwindigkeit einer Bewegung ist, desto mehr Variation tritt auf und desto ungenauer wird sie. Je höher die Distanz oder je kürzer die Bewegungsdauer desto niedriger ist die durchschnittlich gemessene Genauigkeit. Durch Übung kann die Genauigkeit und Geschwindigkeit aber erhöht werden. -->
Zeigen ist Grundbestanteil jeder grafischen Benutzeroberfläche, daher sollten Designer verstehen, wie schnell und genau ein Mensch unter bestimmten Bedingungen zeigen kann. Fitts' Gesetzt ist seit Jahrzehnten sehr einflussreich in auf Designprozesse und Forschung. Es half beispielsweise Xerox Parc, das Potential der Maus zu erkennen, da mathematisch gezeigt werden konnte, dass diese sehr effektiv ist und zum Beispiel besser als ein Joystick.^[XXXX Quelle]
<!-- Weitere Experimente zeigten, dass Maus und Trackpad bei einfachen Aufgaben etwa gleichauf sind, je schwieriger die Aufgabe jedoch wird, desto deutlicher Zeigt sich die Überlgenheit der Maus.^[XXXX Quelle] -->

Einfluss auf UI-Design:

* Mache Dinge größer, die oft benötigt werden. zB Ribbon in MS Word
* Bildschirmränder ermöglichen unendlich große Schaltflächen bei Nutzung von Cursor.
bsp: Menü-Bar in MacOS: am oberen Bildschirmrand, daher effektiv unendlich hoch und sehr einfach zu treffen mit Maus/Trackpad. Ist ein großes Ziel, obwohl es relativ wenig Platz benötigt, durch Nutzung des Bildschirmrandes.
  MacOS Fenster schließen: nicht mehr direkt am rand, da rund.

Auto: Bremspedal nah und groß. Gaspedal klein und weiter weg.
Maschine: Not-Aus leicht zu erreichen, groß und rot

<!-- Zeigt, wie wichtig Interdisziplinatität im Design ist.
Zeigt, wie wichtig es ist, den Menschen zu kennen, der das Interface nutzen wird. -->

^[[An Error Model for Pointing Based on Fitts’ Law](https://www.microsoft.com/en-us/research/publication/an-error-model-for-pointing-based-on-fitts-law/) - Wobbrock et al., 2008]

^[[An Interactive Visualisation of Fitts's Law with JavaScript and D3](http://simonwallner.at/ext/fitts/)]

https://lawsofux.com/

<figure class="content-thin">
    <img data-src="/images/triggers/XXXX.jpg">
    <figcaption>[woobrock08] Wenn Versuchspersonen zur Eile getrieben werden, wird deren Genauigkeit schlechter
    <sup><a href="">Bildquelle</a></sup>
    </figcaption>
</figure>

### Hick's Law

XXXX


<!-- <center class="md-container-standout">

Bedürfnis:
_Nutzer will nachts etwas sehen können_
↓
Trigger:
_(ausgeschalteter) Lichtschalter_
↓
Interaktion:
_Nutzer schaltet Licht ein_

</center> -->

<!-- <figure class="content-thin">
    <img data-src="/images/triggers/zones-of-engagement.jpg">
    <figcaption>TODO "Three Zones of Engagement"
    <sup><a href="http://fyi.oreilly.com/2009/02/communicating-interactive-gest.html">Bildquelle</a></sup>
    </figcaption>
</figure> -->
