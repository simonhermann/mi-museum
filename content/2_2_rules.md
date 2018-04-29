# Regeln von Microinteractions

Sobald eine Microinteraction initiiert wurde, definieren Regeln wie sie ablaufen wird und welche Funktion sie hat. Während in einem (hypothetischen) System ohne Regeln alles und zu jeder Zeit möglich ist, bedeuten Regeln, dass Aktionen eingeschränkt sind – das heißt entweder gar nicht möglich oder nur unter bestimmten Umständen. Die Regeln eine Microinteraction schränken also möglichen Aktionen eines Interfaces ein oder ermöglichen sie nur unter Voraussetzungen. Hierbei erweitern sie die Regeln der physischen Welt und der genutzten Mensch-Maschine-Schnittstelle.
Nutzer sollten Regeln nicht kennen oder mühevoll lernen müssen um interagieren zu können. Viele Regeln die uns alltäglich umgeben, wie Schwerkraft oder gesellschaftliche Konventionen nehmen wir kaum bewusst wahr. Regeln für Microinteractions sollten sich ebenfalls natürlich anfühlen und nicht den Eindruck auf Nutzer erwecken, sie schränkten deren Möglichkeiten ein. Im besten Fall kanalisieren sie die 'Konversation' zwischen Mensch und Maschine, geben ihr eine Richtung und führen so zum Ziel ohne überhapt wahrgenommen zu werden.

> What you're trying to create with rules is a simplified, nontechnical model of how the microinteraction operates.
> <cite>Dan Saffer^[Saffer, Dan: Microinteractions - Designing with Details (S. 52), O'Riley Media, Sebastopol CA, 2013, [microinteractions.com](http://microinteractions.com/)]</cite>

Bevor Regeln erarbeitet werden, sollte das _Ziel_ der Microinteraction klar definiert werden. Das Ziel eines Login-Formulars ist nicht die Eingabe von Benutzername und Passwort, sondern die Anmeldung des Nutzers. Ein Ziel sollte für Nutzer immer _nachvollziehbar_ ("Ich weiß warum ich das tue") und erreichbar ("Ich weiß, das ich es tun kann") sein.^[vgl. Saffer, Dan: Microinteractions - Designing with Details, O'Riley Media, Sebastopol CA, 2013, [microinteractions.com](http://microinteractions.com/)]

Es empfiehlt sich, zwischen zwei Arten von Regelnwerken zu unterscheiden: Das _komplette Regelwerk_ besteht sämtlichen zur Implementierung nötige Details. Während das _einfache Regelwerk_ ein simplifiziertes Modell der direkt nutzerrelevanten Regeln beinhaltet. Ersteres deckt zusätzlich Sonderfälle ab, wie Einhaltung von Konventionen verschiedener Betriebssysteme oder Adaptionen an verschiedene Bildschirmgrößen und kann technische Details beinhalten, wie z. B. "Auslöseschwelle bei 50% der Bildschirmbreite, jedoch maximal 150dp".
Generell sollten Regeln möglichst leicht verständlich sein, dies ermöglicht nicht nur eine bessere Nutzererfahrung, sondern auch die reibungslose Zusammenarbeit bei der Entwicklung.

Da Microinteractions sehr unterschiedlich sein können, werden sich auch deren Bestandteile von Regeln deutlich unterscheiden, meist beinhalten sie jedoch^[aus: Saffer, Dan: Microinteractions - Designing with Details (S. 53f) O'Riley Media, Sebastopol CA, 2013, [microinteractions.com](http://microinteractions.com/)]:

* wie die Microinteraction auf den aktivierten [Trigger](/triggers) reagiert
* welche Kontrolle ein Nutzer über eine andauernde Microinteraction hat
* die logische und zeitliche Abfolge der stattfindenden Aktionen
* welche Daten genutzt werden, und woher diese kommen
* die Einstellungen und Parameter von Algorithmen
* den momentanen [Modus](/loops-and-modes) der Microinteraction
* ob und wie oft sich die Microinteraction [wiederholt](/loops-and-modes)
* was passiert, nachdem die Microinteraction beendet wurde

Regeln sind unsichtbar, ein Nutzer kann diese ausschlließlich durch die gegebene [Rückmeldung](/feedback) erlernen. Nicht immer sind Regeln in ihrer Gänze für Nutzer erschließbar, häufig unterscheidet sich wie ein Nutzer _glaubt_ funktioniere etwas deutlich von dem wie es tatsächlich funktioniert. Bei der Konzipierung sollte daher möglichst auf dem Nutzer bereits bekannte Regeln aufgebaut werden.

Wie beeinflussen 'statische' Informationen wie die eingestellte Sprache oder genutzter Browser können die Regeln?



Die Regeln eines Lichtschalters bilden die wohl grundlegendendste Microinteraction ab. Sie lassen sich jedoch durch weitere Regeln ergänzen, ein Dimmer könnte die Helligkeit ändern, eine Zeitschaltuhr oder ein Bewegungssensor könnte das Licht automatisch an und aus schalten.

##### Regeln eines simplen Lichtschalters:

* Schalter auf _ein_ --> Licht _an_
* Schalter auf _aus_ --> Licht _aus_

##### Beispiel für Regeln eines Lichtschalters mit Dimmer:

* Drehregler auf Stufe 0 --> Licht _aus_
* Drehregler auf Stufe 1-9 --> Licht _an_
* Wenn _an_: Helligkeit entspricht Stufe, wobei Stufe 1 am wenigsten hell und Stufe 9 am hellsten ist

##### Beispiel für Regeln einer von Bewegungssensor gesteuerten Beleuchtung:

Tag = Zwischen 8:00 und 18:00 Uhr
Nacht = Zwischen 18:00 und 08:00 Uhr

* Zustand A:
  * Licht ist aus
  * Nachts: überprüfe alle 5 Sekunden ob Bewegung erkannt
  * Wenn Bewegung erkannt: wechsle zu Zustand B
* Zustand B:
  * Licht ist an
  * Alle 5 Sekunden: überprüfe ob Bewegung erkannt
  * Wenn keine Bewegung erkannt für 10 Zyklen: wechsle zu Zustand A

Schon diese einfachen Regeln erfordern einigen Aufwand in Konzeption und Implementierung. Beispielsweise darf die Einschränkung der Uhrzeit nicht in Zusand B Anwendung finden, hier könnte sie dazu führen, dass das Licht dauerhaft eingeschaltet bleibt, wenn die 10 Zyklen auf den Übergang zwischen Tag und Nacht fallen. Wenn man nun noch manuelle Schalter, Helligkeitssensoren oder mehrere Beleuchtungszonen einbezieht, werden die Regeln weitaus komplexer.

<figure class="content-thin">
  <img data-src="/images/rules/flowchart.jpg">
  <figcaption>
    Mit Hilfe eines Flowcharts können Regeln visualisiert werden, so können Fehler vermieden und Ausnahmefälle früh erkannt werden. <!-- XXXX better example -->
    <sup><a href="https://www.nngroup.com/articles/wireflows/">Bildquelle</a></sup>
  </figcaption>
</figure>


iOS 11 Flugmodus
^[[Apples Flugmodus schaltet WLAN nicht immer ab - Golem.de](https://www.golem.de/news/neues-ios-11-2-apples-flugmodus-schaltet-wlan-nicht-immer-ab-1712-131582.html)]

OSX Save as



### Regeln für Systemseitige trigger

XXXX 46

### Skeuomorphismus in Regeln

Die Darstellung digitaler Interfaces mit Hilfe von skeuomorphistischen^[[Wikipedia: Skeuomorphismus](https://de.wikipedia.org/wiki/Skeuomorphismus)] Elementen hat in den letzen Jahren stark abgenommen, spätestens mit Einführung von iOS 7 durch Apple^[[Jony Ive Explains Why He Decided To Gut Skeuomorphism From iOS 7](https://www.cultofmac.com/246312/jony-ive-explains-why-he-decided-to-gut-skeuomorphism-out-of-ios/])] gelten visuelle Metaphern als verpönt XXXX.
Ganz anders jedoch hinsichtlich der Regeln von Microinteractions: hier wird versucht, Gewohnheiten aus der physischen Welt aufzugreifen und auf digitale Produkte anzuwenden. Diese werden dadurch greifbarer und XXXX

> „Dinge, die anders gemacht werden, um einfach nur anders zu sein, sind selten besser, aber das, was gemacht wird, um besser zu sein, ist fast immer anders.”
> <cite>Dieter Rams, 1993</cite>

