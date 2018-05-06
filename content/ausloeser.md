# Auslöser (Trigger) von Microinteractions

Bevor ein Dialog zwischen einer Benutzerschnittstelle und einem Nutzer aufgebaut werden kann, stellt sich die Frage: _Wer spricht wen an?_ Der 'Trigger' oder 'Auslöser' einer Microinteraction kann entweder durch eine unmittelbare _Aktion des Nutzers_ oder _von Seiten des Systems_ initiiert werden. In beiden Fällen bildet dieser die erste Phase jeder Microinteraction.

<figure class="content-thin">
    <img data-src="/images/triggers/touch-start.jpg">
    <figcaption>Bevor Touchscreens alltäglich waren, mussten Nutzer sehr direkt auf deren Funktionsweise hingewiesen werden, wie hier auf dem Startbildschirm eines Fahrkartenautomaten der New Yorker U-Bahn. Tatsächlich war es egal, wo der Bildschirm berührt wurde, die gesamte Fläche startete den&nbsp;Kaufvorgang.<sup><a href="http://fyi.oreilly.com/2009/02/communicating-interactive-gest.html">Bildquelle</a></sup>
    </figcaption>
</figure>

Welche Art von Auslöser für eine Interaktion geeignet ist, hängt direkt von den Bedürfnissen des Nutzers im jeweiligen Moment ab, daher sollte diesen in der Konzeptionsphase besondere Aufmerksamkeit zukommen. Was will der Nutzer erreichen? Wie und wie häufig will er dies tun?
Bei der Gestaltung von Triggern sollte darauf geachtet werden, dass dieser vom Nutzer _als Trigger erkannt werden kann_. Hier hängt viel vom Vorwissen des Nutzers ab – wer mit dem Internet vertraut ist, wird einen unterstrichenen Text schnell als Link erkennen, für alle anderen ist es eben nur genau das: unterstrichener Text. Ferner sollte vermieden werden, nicht-interaktive wie interaktive Elemente aussehen zu lassen. Wenn ein Trigger wie ein Button aussieht, sollte er auch wie ein Button funktionieren.^[vgl. Saffer, Dan: Microinteractions - Designing with Details, O'Riley Media, 2013, [microinteractions.com](http://microinteractions.com/)] _Da die Existenz der Interaktion eines Interfaces mit Nutzern hier von deren Gewohnheiten und Erwartungen^[hierzu auch: [Jakob's Law of Internet UX](https://www.nngroup.com/videos/jakobs-law-internet-ux/) von Jakob Nielsen] abhängig ist, sollten Trigger genau auf diesen aufbauen._
Die jeweilige Situation spielt ebenso eine wichtige Rolle: zwischen den Gestaltungs&shy;anforderungen von Triggern für Chat-Apps, Fahrkarten&shy;automaten, Alarmknöpfe oder Fahrzeug&shy;innenräume bestehen erhebliche Unterschiede. Durch Recherche und regelmäßige Nutzertests sollten Erfordernisse der späteren Nutzergruppen ergründet und in den Gestaltungsprozess einbezogen werden. Ebenso sollten die Barrierefreiheit bzw. Inklusivität des Produktes hinsichtlich der Trigger sichergestellt werden, von einer Rot-Grün-Sehschwäche sind beispielsweise etwa 9% aller Männer betroffen^[[Wikipedia.de: Rot-Grün-Sehschwäche](https://de.wikipedia.org/wiki/Rot-Grün-Sehschwäche)].
Ein weiteres wichtiges Kriterium eines Triggers ist dessen gute Auffindbarkeit. Nutzer sollten nicht erst suchen müssen, um ein Vorhaben ausführen zu können. Aus diesem Grund sollte etwa das sogenannte 'Hamburger-Icon' und das damit einhergehende, versteckte Off-Screen-Menü nur als sekundäre Art der Navigation genutzt werden^[Mehr zu den Nachteilen des 'Hamburger-Menüs': [Obvious Always Wins](https://www.lukew.com/ff/entry.asp?1945) von Luke Wroblewski]. Je häufiger eine Microinteraction genutzt wird, desto leichter sollte sie auffindbar sein.
Visuelle Möglichkeiten, um die Aufmerksamkeit auf einen Trigger zu lenken, sind zum Beispiel Beschriftungen (Labels) und Icons, Größe und Farbe des Elements oder [Animationen](/animation-and-pace).

<!-- XXXX img beispiel Aufmerksamkeit lenken -->

> Obvious always wins.
> <cite>Luke Wroblewski^[[Obvious Always Wins](https://www.lukew.com/ff/entry.asp?1945) von Luke Wroblewski]</cite>

### Nutzerseitige Trigger

Nutzerseitige oder manuelle Trigger entstehen aus Bedürfnissen des Nutzers: Das Bedürfnis, nachts etwas sehen zu können, führt einen Nutzer dazu, mit einem Lichtschalter zu interagieren und so das Licht einzuschalten. Das Bedürfnis, keine lauten Unterbrechungen durch Anrufe zu haben, führt dazu, ein Telefon auf 'stumm' zu schalten. Das Bedürfnis, einen Moment als Foto festzuhalten, führt zum Betätigen des Auslösers einer Kamera. Hier besteht natürlich keine eins-zu-eins-Verbindung; ein Bedürfnis kann auf verschiedene Arten gestillt werden und eine einzige Interaktion kann durch verschiedenste Bedürfnisse ausgelöst werden.
Wenn Nutzer mit einem Produkt in Berührung kommen, tun sie das oft zuerst über eine Mikro-Interaktion; sie schalten es 'ein', drücken 'Start' oder 'öffnen' ein Programm. Je nach Zustand bzw. [Modus](/loops-and-modes) eines Produktes, kann der gleiche Trigger zu unterschiedlichen Ergebnissen führen; der Home-Button unter iOS führt entweder auf den Startbildschirm oder öffnet die Suche, wenn sich ein Nutzer bereits dort befindet. Genauso kann die Art der Nutzung einen Unterschied machen, langes Drücken, doppeltes Drücken, 'Force Touch' oder andere Versionen der Eingabe können variabel genutzt werden. Hier ist jedoch zu bedenken, dass diese Mehrfachbelegung eines Bedienelementes sparsam genutzt werden sollte, da sie meist versteckt ist und erlernt werden muss. _In der Regel sollte derselbe Trigger zum selben Ereignis führen_^[vgl. Saffer, Dan: Microinteractions - Designing with Details, O'Riley Media, 2013, [microinteractions.com](http://microinteractions.com/)].
_Versteckte Trigger_ sind häufig Bestandteil von Touchscreens und Gestensteuerung. Diese funktionieren oft am besten, wenn damit direkt Inhalte manipuliert werden, wie zum Beispiel die Zwei-Finger-Zoom-Geste zur Kontrolle des Zoomgrades eines Bildes. Da keine visuellen Hinweise bei der Auffindbarkeit dieser helfen, müssen sie immer erlernt werden, um effektiv genutzt werden zu können. Aus diesem Grund sollte soweit wie möglich auf Konventionen zurückgegriffen werden.
Tastenkürzel sind ebenfalls eine häufige Form versteckter Trigger, einmal erlernt, ermöglichen sie aber ein äußerst zeiteffektives Arbeiten. Die 'Speichern unter'-Microinteraction sorgte bei Veröffentlichung von OSX 10.7 für einiges Aufsehen, da diese geläufige Funktion scheinbar verschwunden war. Mit Version 10.8 wurde sie als versteckter Trigger durch ein neues (Vier-)Tastenkürzel wieder verfügbar gemacht.^[[Get Save As back on Mountain Lion's File menu easily and without hacks](https://www.engadget.com/2012/07/29/get-save-as-back-on-mountain-lions-file-menu-easily-and-without/)] 
Üblicherweise sollten versteckte Trigger bei wichtigen Interaktionen vermieden werden. Ausnahmen können hier Interfaces über Spracheingabe sein, die den direkten Dialog von Mensch zu Mensch imitieren. 'Versteckt' im Zusammenhang mit Triggern bedeutet die Abwesenheit von jeglicher Art von Hinweisen auf mögliche Interaktionen, nicht nur visueller Art.

<figure class="content-thin">
    <img data-src="/images/triggers/pocket-copied-url.jpg">
    <figcaption>Wenn die App Pocket geöffnet wird, während sich ein Link in der Zwischenablage befindet, wird ein versteckter Trigger ausgelöst und sie fragt, ob man den Link zur Leseliste hinzufügen möchte.
    </figcaption>
</figure>

Vor allem bei Eingaben durch Gesten ist es oft erforderlich, für diese eine _Auslöseschwelle_ (engl. 'Threshold') festzulegen, um versehentliche Eingaben zu vermeiden. Ist kein Threshold implementiert, kann es schnell vorkommen, dass zum Beispiel ein Tippen fälschlicherweise als Wischbewegung registriert wird.
Durch kontinuierliches [Feedback](/feedback) zum aktuellen Verlauf einer Geste kann Nutzern verdeutlicht werden, dass diese noch weitergeführt werden muss, um sie erfolgreich durchzuführen. Wird die Schwelle bei der Eingabe nicht überschritten, sollte dies dem Nutzer ebenfalls mitgeteilt werden.

<figure class="content-tiny">
    <img data-src="/images/triggers/threshold.gif">
    <figcaption>Veranschaulichung der Auslöseschwelle einer Microinteraction zum Öffnen der Kamera vom Sperrbildschirm eines Android-Gerätes.
    </figcaption>
</figure>

### Systemseitige Trigger

Systemseitige Auslöser entstehen durch ein Ereignis des Gerätes. Ein Trigger bei eingehender Nachricht auf dem Handy könnte durch Ton, Vibration und eine Benachrichtigung auf dem Bildschirm angezeigt werden – in diesem Fall führen sie zur Interaktion des Öffnens der Nachricht.
Ein Trigger dieser Art könnte auch eine festgelegte Uhrzeit, ein bestimmter Ort oder eine Statusleuchte sein. Der Warnton einer industriellen Maschine könnte auf Überhitzung hinweisen und die Einblendung einer Augmented-Reality-Brille könnte auf Sehenswürdigkeiten aufmerksam machen. Eine Integration mit dem Kalender des Nutzers könnte dessen Mobiltelefon nachts oder wenn dieser sich in einem Meeting befindet automatisch stumm schalten. Häufige Ereignisse für Systemtrigger sind:

- empfangene Daten von anderen Systemen oder Menschen
Beispiel: Chatnachricht, E-Mail
- interne Algorithmen
Beispiel: Wecker, Terminkalender
- Sensordaten 
Beispiel: GPS-, Helligkeitssensor, Akkustand oder Empfangsstärke
- Fehler, die für Nutzer relevant sind und deren Eingabe erfordern
Beispiel: unzulässiger Eintrag im Feld eines digitalen Formulars
- andere Microinteractions

Je nach Betrachtungsweise kann ein App-Icon bereits als visueller Trigger angesehen werden, der das Bedürfnis auslöst, die App zu öffnen. Es empfiehlt sich jedoch, abzugrenzen zwischen einem unveränderlichen Element (z. B. Beschriftung, Logo, Icon) und einem durch gewisse Ereignisse veränderten Status und damit einhergehende Adaption des Interfaces (z. B. Indikator für neue Nachricht).
Wie auch bei nutzerseitigen Auslösern, können unterschiedliche Systemtrigger natürlich zur selben Interaktion führen. Bei wichtigen Ereignissen sollten redundante systemseitige Trigger über verschiedene Kanäle genutzt werden. Ein eingehender Anruf wird beispielsweise meist durch Ton, Vibration und visuelle Hinweise gleichzeitig signalisiert, um sicherzustellen, dass dieser in verschiedensten Situationen wahrgenommen werden kann. Systemseitige Trigger sind nicht unter der Kontrolle des Nutzers und unterbrechen, was dieser gerade tut, daher sollte gegebenenfalls die Möglichkeit gegeben werden, diese anzupassen oder abzuschalten.
Der Trend zur Automatisierung nimmt rapide zu und von _Künstlicher Intelligenz_ gesteuerte _persönliche Assistenten_ übernehmen immer mehr Entscheidungen, die vorher der Nutzer selbst getroffen hat. Es ist also davon auszugehen, dass systemseitige Trigger mehr und mehr Anwendung finden werden.

<figure class="content-thin">
    <img data-src="/images/triggers/incoming-call.gif">
    <figcaption>Diese Animation für einen eingehenden Anruf ist dem Klingeln eines klassischen analogen Telefons nachempfunden. Der pulsierende Kreis nimmt die visuelle Umsetzung der auszulösenden Interaktion vorweg.
    <sup><a href="https://material.io/guidelines/motion/material-motion.html#material-motion-how-does-material-move">Bildquelle</a></sup>
    </figcaption>
</figure>

### Dark Patterns

Sogenannte 'Dark Patterns' sind Methoden und Muster im Interactiondesign, die Nutzer dazu verführen, etwas zu tun, das nicht deren (bewusste) Absicht ist.^[vgl. [https://darkpatterns.org](https://darkpatterns.org/)] Dark Patterns können nicht nur Teil des Triggers einer Microinteraction sein, sondern sich auch auf Rückmeldung, Regeln, Schleifen und Modi auswirken. Sie können Nutzer sowohl dazu beeinflussen, _etwas_ zu tun als auch davon _abbringen_. Die Grenze zwischen einem moralisch fragwürdigen Dark Pattern und tatsächlich gewünschten Eigenschaften ist immer fließend und liegt im Auge des Betrachters.

<figure class="content-thin">
    <img data-src="/images/triggers/darkpattern-dirt.jpg">
    <figcaption>Ein Fleck auf diesem Werbebanner verleitet Nutzer, diesen wegzuwischen und so versehentlich auf die Anzeige zu klicken.
    <sup><a href="https://www.reddit.com/r/mildlyinfuriating/comments/7tzwz8/this_mobile_ad_designed_to_make_it_look_like_you/">Bildquelle</a></sup>
    </figcaption>
</figure>

### Fitts's Law

Das 'Fitts'sche Gesetz' ist ein mathematisches Modell, das beschreibt, wie gut ein Mensch auf etwas zeigen kann. Es wurde Mitte des 20. Jahrhunderts vom Psychologen Paul Fitts entwickelt. Es beschreibt das Verhältnis der Größe und Entfernung einer Fläche zu der benötigten Zeit, diese mit einem bestimmten Eingabegerät (z. B. Maus, Trackpad, Touchscreen) zu erreichen.^[vgl. [What is Fitts’ Law? - interaction-design.org](https://www.interaction-design.org/literature/topics/fitts-law)] Es ist eine der wenigen quantitativen Methoden, Interaktionen zu erforschen. Die in zahlreichen Versuchen erprobte Formel wird beispielsweise auch von Algorithmen zur Gestenerkennung verwendet.^[[Equating User Experience and Fitts’ Law in Gesture Based Input Modalities](https://repository.asu.edu/attachments/158068/content/Burno_asu_0010N_15289.pdf) von Rachael A. Burno, 2015]

<!-- Versuche zeigen, wie die Distanz des und Größe eines Zieles die Geschwindigkeit einer Genauigkeit der Bewegung beeinflussen. Je schneller eine Bewegung, desto ungenauer wird sie in der Regel, da mehr Fehler gemacht werden.
Es zeigt sich also, dass eine höhere Geschwindigkeit gegen niedrigere Genauigkeit getauscht werden kann. Je größer das Ziel oder je geringer die Entfernung, desto geringer ist die benötigte Zeit, dieses zu erreichen.
Die Geschwindigkeit einer Bewegung ist meist niedriger, je schwieriger die gestellte Aufgabe wird, denn je höher die Geschwindigkeit einer Bewegung ist, desto mehr Variation tritt auf und desto ungenauer wird sie. Je höher die Distanz oder je kürzer die Bewegungsdauer desto niedriger ist die durchschnittlich gemessene Genauigkeit. Durch Übung kann die Genauigkeit und Geschwindigkeit aber erhöht werden. -->

Zeigen ist Grundbestandteil jeder grafischen Benutzeroberfläche, daher sollten Designer verstehen, wie schnell und genau ein Mensch unter bestimmten Bedingungen zeigen kann. Fitts' Gesetz ist seit Jahrzehnten sehr einflussreich in Designprozessen und Forschung. Es half beispielsweise Xerox Parc, das Potential der Maus zu erkennen, da mathematisch gezeigt werden konnte, dass diese sehr effektiv ist und zum Beispiel besser als ein Joystick.^[[Accuracy Measures for Evaluating Computer Pointing Devices](http://www.yorku.ca/mack/CHI01.htm) - Scott MacKenzie et al.] In Autos ist das Bremspedal groß und leicht zu erreichen, währen das Gaspedal eher kleiner und weiter weg ist. Notausschalter an Maschinen sind unübersehbar groß und rot.
In visuellen Benutzerschnittstellen sollten also oft benötigte Elemente möglichst großflächig sein. Für cursorbasierte Eingaben kann die Zielfläche elegant vergrößert werden, ohne dass Elemente viel Platz brauchen: Eine Platzierung direkt am Bildschirmrand bzw. in den Ecken macht die virtuell zu treffende Fläche praktisch unendlich groß.^[vgl. [User experience tutorial: Fitts's Law - lynda.com / YouTube](https://youtu.be/95RoKSFyQ_k)] Besonders exzessiv wird dieser Effekt beispielsweise von den 'Aktiven Ecken' in MacOS genutzt: der Trigger besteht aus nur wenigen Pixeln, ist aber dennoch leicht zu erreichen.

<!-- ### Hick's Law
XXXX -->

::: md-container-more

### Weiterführende Links

* Experimente zum Fitts'schen Gesetz selbst ausprobieren: [An Interactive Visualisation of Fitts's Law with JavaScript and D3](http://simonwallner.at/ext/fitts/)
* Mehr "Gesetze" des UX-Design: [lawsofux.com](https://lawsofux.com/)
* [Inclusive Design Toolkit Manual](https://download.microsoft.com/download/B/0/D/B0D4BF87-09CE-4417-8F28-D60703D672ED/INCLUSIVE_TOOLKIT_MANUAL_FINAL.pdf) von Microsoft Design

:::

<!-- ^[[An Error Model for Pointing Based on Fitts’ Law](https://www.microsoft.com/en-us/research/publication/an-error-model-for-pointing-based-on-fitts-law/) - Wobbrock et al., 2008] -->

<!-- <figure class="content-thin">
    <img data-src="/images/triggers/zones-of-engagement.jpg">
    <figcaption> "Three Zones of Engagement"
    <sup><a href="http://fyi.oreilly.com/2009/02/communicating-interactive-gest.html">Bildquelle</a></sup>
    </figcaption>
</figure> -->
