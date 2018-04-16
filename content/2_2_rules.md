# Regeln von Microinteractions



Sobald eine Microinteraction initiiert wurde, wird eine Sequenz von Verhaltensmustern eingeleitet. Diese Regeln definieren, wie die Interaktion ablaufen wird und welche Funktion sie hat.

##### Regeln eines simplen Lichtschalters: 

::: md-container-standout
- Schalter auf *ein* --> Licht *an*
- Schalter auf *aus* --> Licht *aus*
:::

Die Regeln eines Lichtschalters bilden die wohl grundlegendendste Microinteraction ab. Sie lassen sich jedoch durch weitere Regeln ergänzen, ein Dimmer könnte die Helligkeit ändern, eine Zeitschaltuhr oder ein Bewegungssensor könnte das Licht automatisch an und aus schalten.

#### Beispiel für Regeln eines Lichtschalters mit Dimmer:

::: md-container-standout
- Drehregler auf Stufe 0 --> Licht *aus*
- Drehregler auf Stufe 1-9 --> Licht *an*
- Wenn *an*: Helligkeit entspricht Stufe, wobei Stufe 1 am wenigsten hell und Stufe 9 am hellsten ist
:::

#### Beispiel für Regeln einer von Bewegungssensor gesteuerten Beleuchtung:

::: md-container-standout
Tag = Zwischen 8:00 und 18:00 Uhr
Nacht = Zwischen 18:00 und 08:00 Uhr

##### Zustand A
  - Licht ist aus
  - Nachts: überprüfe alle 5 Sekunden ob Bewegung erkannt
  - Wenn Bewegung erkannt: wechsle zu Zustand B

##### Zustand B
  - Licht ist an
  - Alle 5 Sekunden: überprüfe ob Bewegung erkannt
  - Wenn keine Bewegung erkannt für 10 Zyklen: wechsle zu Zustand A
:::

Schon diese einfachen Regeln erfordern einige Konzentration in der Konzipierung. Beispielsweise darf die Einschränkung der Uhrzeit nicht in Zusand B Anwendung finden, hier könnte sie dazu führen, dass das Licht dauerhaft eingeschaltet bleibt, wenn die 10 Zyklen auf den Übergang zwischen Tag und Nacht fallen. Wenn man nun noch manuelle Schalter, Helligkeitssensoren oder mehrere Beleuchtungszonen einbezieht, werden die Regeln weitaus komplexer.

## Skeuomorphismus in Regeln

Die Darstellung digitaler Interfaces mit Hilfe von skeuomorphistischen^[https://de.wikipedia.org/wiki/Skeuomorphismus] Elementen hat in den letzen Jahren stark abgenommen, spätestens mit Einführung von iOS 7 durch Apple^[https://www.cultofmac.com/246312/jony-ive-explains-why-he-decided-to-gut-skeuomorphism-out-of-ios/] gelten visuelle Metaphern als verpönt XXXX.
Ganz anders jedoch hinsichtlich der Regeln von Microinteractions: hier wird versucht, Gewohnheiten aus der physischen Welt aufzugreifen und auf digitale Produkte anzuwenden. Diese werden dadurch greifbarer und XXXX
