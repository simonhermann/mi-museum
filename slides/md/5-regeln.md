<span class="slide-metadata" data-chapter="› Regeln"></span>

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
    Ist Nacht (8:00 - 18:00 Uhr)?
      überprüfe alle 5 Sekunden, ob Bewegung erkannt
      Bewegung erkannt -> LICHT--AN

  LICHT--AN
      überprüfe alle 5 Sekunden, ob Bewegung erkannt
      10x in Folge keine Bewegung erkannt -> LICHT--AUS
```

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
    - 5 Sek., 10 Zyklen
    - was passiert wenn Zyklen zwischen Tag/Nacht fallen? --> Technische Umsetzung
- einfaches R:
    - was für Nutzer relevant ist: 
    - "Ich muss mich nicht darum kümmern, es wieder aus zu machen"


VVV

#### Regeln beinhalten

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

note:
- Eingabemöglichkeiten: zB Pinch-Geste als Zoom
- Begrenzungen: was kann ich tun? zB im Feld für PLZ nur Zahlen eingeben

VVV

Vorher definieren: 
#### Was ist das Ziel der Microinteraction?

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

_Balance zwischen Komplexität und Kontrolle_

VVV

_KISS_

<p class="fragment"> (keep it simple stupid) </p>

VVV

_Smart defaults_

note:
- "intelligente Standartwerte"
- Formular Land basierend auf Sprache/IP/Standort

VVV

_Bring the data forward_

note:
- was Kann Nutzern mitgeteilt werden, bevor sie danach fragen?
- Google Suche
- Wikipedia quick preview
- ungelesene Nachrichten auf Lockscreen







