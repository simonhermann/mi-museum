# Auslöser (Trigger) von Microinteractions

Bevor ein Dialog zwischen einer Benutzerschnittstelle und einem Nutzer aufgebaut werden kann, stellt sich die Frage: _Wer spricht wen an?_ Der 'Trigger' oder 'Auslöser' einer Microinteraction kann entweder durch eine unmittelbare _Aktion des Nutzers_ oder _von Seiten des Gerätes_ initiiert werden. In beiden Fällen bildet dieser die erste Phase jeder Microinteraction. 
Wenn Nutzer mit einem neuen Produkt in Berührung kommen, tun sie das oft über eine Mikro-Interaktion; sie schalten es 'ein', drücken 'Start' oder 'öffnen' ein Programm. 
Diese nutzerseitigen Trigger entstehen aus Bedürfnissen des Nutzers:

<center class="md-container-standout">

Bedürfnis:
_Nutzer will nachts etwas sehen können_
↓
Trigger:
_(ausgeschalteter) Lichtschalter_
↓
Interaktion: 
_Nutzer schaltet Licht ein_

</center>

Die wichtigste Eigenschaft eines Triggers sollte dessen gute Auffindbarkeit sein. Nutzer sollten nicht erst suchen müssen, um ein Vorhaben ausführen zu können. Aus diesem Grund sollte etwa das sogenannte 'Hamburger-Icon' und das damit einhergehende versteckte Off-Screen-Menü nur als sekundäre Art der Navigation genutzt werden.^[Mehr zu den Nachteilen des 'Hamburger-Menüs': [Obvious Always Wins](https://www.lukew.com/ff/entry.asp?1945) von Luke Wroblewski]
Bei der Gestaltung eines Auslösers sollte darauf geachtet werden, dass dieser vom Nutzer als ebendieser erkannt werden kann. Hier hängt viel vo Vorwissen des Nutzers ab – wer mit dem Internet vertraut ist, wird einen unterstrichenen Text schnell als Link erkennen, für alle Anderen ist es eben nur genau das: unterstrichener Text. Die jeweilige Situation spielt eine mindestens ebenso wichtige Rolle: zwischen den Gestaltungsanforderungen von Triggern für Chat-Apps, Fahrkartenautomaten, Alarmknöpfe oder Fahrzeuginnenräume bestehen erhebliche Unterschiede.
Durch Nutzerrecherche sollten die individuelle Erfordernisse, der späteren Nutzergruppen ergründet und in den Gestaltungsprozess einbezogen werden. Ebenso sollten die [Barrierefreiheit bzw. Inklusivität](/practical) des Produktes hinsichtlich der Trigger sichergestellt werden, von einer Rot-Grün-Sehwchwäche sind beispielsweise etwa 9% aller Männer betroffen^[[Wikipedia.de: Rot-Grün-Sehschwäche](https://de.wikipedia.org/wiki/Rot-Grün-Sehschwäche)].

<figure class="content-thin">
    <img data-src="/images/triggers/touch-start.jpg">
    <figcaption>Bevor Touchscreens alltäglich waren, mussten Nutzer sehr direkt auf deren Funktionsweise hingewiesen werden, wie hier auf dem Startbildschirm eines Fahrkartenautomaten der New Yorker U-Bahn. Tatsächlich war es egal, _wo_ der Bildschirm berührt wurde, die gesamte Fläche startete den Kaufvorgang.
    <sup><a href="http://fyi.oreilly.com/2009/02/communicating-interactive-gest.html">Bildquelle</a></sup>
    </figcaption>
</figure>



> Obvious Always Wins
> <cite>Luke Wroblewski^[[Obvious Always Wins](https://www.lukew.com/ff/entry.asp?1945) von Luke Wroblewski]</cite>


Geräteseitige Auslöser entstehen durch ein Systemereignis:

::: md-container-standout
Trigger bei eingehender Nachricht auf Handy:

* _Ton_
* _Vibration_
* _LED Blinkt_
* _Benchrichtigung wird angezeigt_

--> Interaktion: _Nutzer öffnet Nachricht per Tipp auf Benachrichtigung_
:::

Würde man es ganz genau nehmen, wäre ein App-Icon bereits ein visueller Trigger, der das Bedürfnis eines Nutzers auslöst, diese zu öffnen. Es empfiehlt sich jedoch, abzugrenzen zwischen einem unveränderlichen Element (z. B. Icon) und einem durch gewisse Ereignisse _veränderten Status_ und damit einhergehende _Adaption des Interfaces_ (z. B. Indikator für neue Nachricht).

Wie auch bei nutzerseitigen Auslösern, können unterschiedliche Trigger natürlich zur selben Interaktion führen.

<figure class="content-thin">
    <img data-src="/images/triggers/incoming-call.gif">
    <figcaption>Diese Animation für einen eingehenden Anruf ist dem Klingeln eines klassischen analogen Telefons nachempfunden
    <sup><a href="https://material.io/">Bildquelle</a></sup>
    </figcaption>
</figure>

XXXX

Bring the data forward

Welche Art von Auslöser für eine Interaktion geeignet ist, hängt direkt von den Bedürfnissen des Nutzers in ebendiesem Moment ab, daher sollte diesen in der Konzeptionsphase besondere Aufmerksamkeit zukommen. Was will der Nutzer erreichen? Wie und wie häufig will er dies tun?
Trigger könnte die Ankuft einer neuen Nachricht, eine festgelegte Uhrzeit oder ein bestimmter Ort sein. Eine Integration mit dem Kalender des Nutzers könnte nun dessen Gerät automatisch stumm schalten, wenn dieser sich in einem Meeting oder in der Oper befindet. Dieser Trend zur Automatisierung hat in den letzen Jahren zugenommen und von _Künstlicher Intelligenz_ gesteuerte _persönliche Assistenten_ übernehmen immer mehr Entscheidungen, die vorher der Nutzer selbst getroffen hat.

### Unsichtbare Trigger

<figure class="content-thin">
    <img data-src="/images/triggers/pocket-copied-url.jpg">
    <figcaption>Wenn Pocket geöffnet wird, während sich ein Link in der Zwischenablage befindet, fragt die App, ob man den Link zur Leseliste hinzufügen möchte
    </figcaption>
</figure>

Speichern unter" ab OSX 10.8 nur über Tastenkürzel

### Dark Patterns

Sogenannte Dark Patterns sind Methoden und Muster von im Interactiondesign, die Nutzer dazu verführen, etwas zu tun, das nicht deren (bewusste) Absicht ist.^[vgl. [https://darkpatterns.org](https://darkpatterns.org/)]
Dark Patterns können sich nicht nur Teil des Triggers einer Microinteraction sein, sondern sich auch auf Rückmeldung, Regeln, Schleifen und Modi auswirken und Sie können nicht nur beeinflussen _etwas_ zu tun, sondern auch _davon abhalten_.

<figure class="content-thin">
    <img data-src="/images/triggers/darkpattern-dirt.jpg">
    <figcaption>Ein Fleck auf dem Werbebanner verleitet Nutzer, diesen wegzuwischen und versehentlich auf die Anzeige zu klicken.
    <sup><a href="https://www.reddit.com/r/mildlyinfuriating/comments/7tzwz8/this_mobile_ad_designed_to_make_it_look_like_you/">Bildquelle</a></sup>
    </figcaption>
</figure>

### Fitt's Law

Ist ein mathematisches Modell, das beschreibt, wie gut ein Mensch auf etwas Zeigen kann. Basis wurde entwickelt vom Psychologen Paul Fitts mitte des 20. Jahrhunderts.

Benötigte Zeit = f(Zieldistanz, Größe des Ziels, Art des Zeigegerätes)
Die Beziehungen zwischen Geschwindigkeit einer Bewegung, der Dintanz des Zieles und der Genauigkeit, mit der das Ziel getroffen wird, sind durch Fitts' Gesetz beschrieben.
Je schneller, desto ungenauer.
Zu schnell -> mehr fehler -> weniger Genauigkeit

Formel auch Teil von Algorithmen zur Gestenerkennung.
Zeigt, dass höhere Geschwindigkeit gegen niedrigere Genauigkeit getauscht werden kann.

> screenshot: [woobrock08]
Wenn Versuchspersonen zur Eile getrieben werden, wird deren Genauigkeit schlechter

Eine der wenigen quantitativen Methoden, interaktonen zu untersuchen.
Sehr einflussreich in Designprozess und Forschung seit Jahrzehnten. Fitts' Law half Xerox Parc, das Potential der Maus zu erkennen, da mathematisch gezeigt werden konnte, dass diese sehr effektiv ist (besser als zB Joystick).
Test auf [http://simonwallner.at/ext/fitts/] zeigt, dass Maus und Trackpad bei einfachen Aufgaben etwa gleichauf sind, je schwieriger die Aufgabe jedoch wird, desto deutlicher Zeigt sich die Überlgenheit der Maus.

Zeigegeräte: Maus, Trackpad, Touchscreen. Zeigen ist grundbestanteil jeder grafischen Benutzeroberfläche, daher sollten Designer verstehen, wie schnell und genau ein Mensch unter bestimmten Bedingungen zeigen kann.

Je größer das Ziel, desto geringer die benötigte Zeit.
Je kleiner die Entfernung, desto desto geringer die benötigte Zeit.

Geschwindigkeit einer Bewegung ist niedriger, je schwieriger die Aufgabe wird.
Je höher die Geschwindigkeit einer Bewegung, desto mehr Variation tritt auf und desto ungenauer wird sie.
Niedrigere Genauigkeit, je höher die Distanz oder je kürzer die Bewegungsdauer. Übung kann aber Genauigkeit erhöhen.

Einfluss auf UI-Design:
- Mache Dinge größer, die oft benötigt werden. zB Ribbon in MS Word
- bsp: Menü-Bar in MacOS: am oberen Bildschirmrand, daher effektiv unendlich hoch und sehr einfach zu treffen mit Maus/Trackpad. Ist ein großes Ziel, obwohl es relativ wenig Platz benötigt, durch Nutzung des Bildschirmrandes.
MacOS Fenster schließen: nicht mehr direkt am rand, da rund.

Auto: Bremspedal nah und groß. Gaspedal klein und weiter weg.
Maschine: Not-Aus leicht zu erreichen, groß und rot

Bildschirmränder ermöglichen unendlich große Schaltflächen bei Nutzung von Cursor.

Zeigt, wie wichtig Interdisziplinatität im Design ist.
Zeigt, wie wichtig es ist, den Menschen zu kennen, der das Interface nutzen wird.



::: md-container-more

### Links zum Thema:

:::





<!-- <figure class="content-thin">
    <img data-src="/images/triggers/zones-of-engagement.jpg">
    <figcaption>TODO "Three Zones of Engagement"
    <sup><a href="http://fyi.oreilly.com/2009/02/communicating-interactive-gest.html">Bildquelle</a></sup>
    </figcaption>
</figure> -->