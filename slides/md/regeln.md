## Regeln 

VVV

<ul>
    <li class="fragment">Reaktion auf Trigger</li>
    <li class="fragment">Daten, Parameter, Algorithmen</li>
    <li class="fragment">Schleifen</li>
    <li class="fragment">Modi</li>
    <li class="fragment">logische Abfolge</li>
    <li class="fragment">was passiert danach?</li>
    <li class="fragment">...</li>
</ul>

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

<div class="grid-halves">
    <div class="fragment fade-left white bg-color7" data-fragment-index="2">
    einfaches Regelwerk: für Nutzer wichtig
    </div>
    <div class="fragment fade-right white bg-color10" data-fragment-index="1">
    komplettes Regelwerk: für Produkt wichtig
    </div>
</div>

note:
- komplett: 
    - 5 Sek. 
    - 10 Zyklen
    - was passiert wenn Zyklen -> Technische
- einfach: "Ich muss mich nicht darum kümmern, es wieder aus zu machen"

VVV

#### _KISS_

<p class="fragment"> keep it simple stupid </p>

VVV

#### _Bring the data forward_

VVV

### Schleifen

VVV

### Modi




