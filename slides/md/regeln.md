## Regeln 

VVV

```
Schreibtischlampe
  LICHT--AUS
    Schalter nach Unten -> LICHT--AN
  LICHT--AN
    Schalter nach Oben -> LICHT--AUS
```

VVV

```
Flurbeleuchtung mit Bewegungsmelder
  LICHT--AUS
    Zwischen 8:00 und 18:00 Uhr
      überprüfe alle 5 Sekunden, ob Bewegung erkannt
      Bewegung erkannt -> LICHT--AN
  LICHT--AN
    Zwischen 18:00 und 08:00 Uhr
      überprüfe alle 5 Sekunden, ob Bewegung erkannt
      10x in Folge keine Bewegung erkannt -> LICHT--AUS
```

VVV

<ul>
    <li class="fragment">Reaktion auf Nutzerseitige Trigger</li>
    <li class="fragment">Bedingungen für Systemseitige Trigger</li>
    <li class="fragment">Daten, Parameter, Algorithmen</li>
    <li class="fragment">Schleifen</li>
    <li class="fragment">Modi</li>
    <li class="fragment">Eingabemöglichkeiten und deren Interpretation</li>
    <li class="fragment">Begrenzungen</li>
    <li class="fragment">Auslöseschwellen</li>
    <li class="fragment">logische Abfolge</li>
    <li class="fragment">was passiert danach?</li>
    <li class="fragment">...</li>
</ul>

VVV

Vorher: 

##### Was ist das Ziel der Microinteraction?

<ul>
    <li class="fragment">für Nutzer erreichbar</li>
    <li class="fragment">für Nutzer nachvollziehbar</li>
</ul>

note:
- Aus sicht des N immer
    - erreichbar »Ich weiß, dass ich es tun kann«
    - nachvollziehbar »Ich weiß, warum ich das tue«
- Ziel von Login-Formular ist nicht: Eingabe von User+PW
    - --> Slack magic link

VVV

<div class="grid-halves">
    <div class="fragment fade-left white bg-color7" data-fragment-index="2">
    einfaches Regelwerk: für Nutzer wichtig
    </div>
    <div class="fragment fade-right white bg-color10" data-fragment-index="1">
    komplettes Regelwerk: für Produkt wichtig
    </div>
</div>

note:
- komplettes R: 
    - 5 Sek. 
    - 10 Zyklen
    - was passiert wenn Zyklen zwischen Tag/Nacht fallen? --> Technische Umsetzung
- einfaches R: "Ich muss mich nicht darum kümmern, es wieder aus zu machen"

VVV

#### _KISS_

<p class="fragment"> keep it simple stupid </p>

VVV

#### _Balance zwischen Komplexität und Kontrolle_

VVV

#### _Bring the data forward_

note:
- Google Suche
- Wikipedia quick preview
- ungelesene Nachrichten auf Lockscreen

VVV

#### _Smart defaults_

note:
- Formular Land basierend auf Sprache/IP/Standort






