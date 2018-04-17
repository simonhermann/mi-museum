# Rückmeldung (Feedback)

Die Hauptaufgabe der Rückmeldung (engl. Feedback) das eine Benutzerschnittstelle an den Nutzer gibt, ist diesem zu helfen, die [Regeln](/rules) einer (Mikro-)Interkation zu verstehen. Wenn ein Nutzer beispielsweise einen Button antippt, sollte gezeigt werden, _dass_ dieser gedrückt wurde und _was das Ergebnis_ der Eingabe ist. Allein dadurch können Nutzer wissen, ob eine eine Eingabe erfolgreich war. Wäre keinerlei Feedback vorhanden, bestünde für Nutzer kaum eine Möglichkeit zu wissen, was passiert und wie eine Benutzerschnittstelle funktioniert.

Für Nutzer sollten die [Regeln](/rules) einer Microinteraction keinerlei oder nur wenig Aufmerksamkeit einfordern. Am Beispiel des Lichtes mit Bewegungsmelder: allein wichtig ist, dass das Licht an geht sobald Nutzer es benötigen und sie sich nicht darum kümmern müssen, es wieder auszuschalten. Die einzige Rückmeldung des Produktes an den Nutzer ist hier das gewünschte Ergebnis selbst: Licht. Die meisten Microinteractions benötigen jedoch mehr Feedback. 
XXXX

#### Unmittelbarkeit

Rückmeldung sollte ohne merkliche Verzögerung auf Nutzereingaben sein.
Wenn der Befehl aus technischen Gründen nicht unmittalbar ausgeführt werden kann, sollte stattdessen eine Fortschrittsanzeige o. Ä. diesen Umstand verdeutlichen.

#### Feedback sollte üblicherweise vorhanden sein, wenn:

* eine Eingabe von Seiten des Nutzers stattfindet.
* ein systembasierter Trigger den Status der Benutzerschnittstelle oder des Programmes signifikant verändert (z. B. Eintreffen neuer Nachrichten).
* ein Kommando des Nutzers auch nicht ausgeführt werden kann (z. B. E-Mail kann auch nach mehrmaligem Versuchen nicht gesendet werden, da offline).
* ein nutzerrelevanter Fehler auftritt, der nicht von seiten des Systems korrigiert werden kann (z.B. Eingabe eines falschen Passwortes).
* ein nutzerrelevanter lange andauernder Prozess stattfindet (z. B. Anzeige der Restzeit bei Systemupdate)
* ein nutzerrelevanter Prozess beginnt
* ein nutzerrelevanter Prozess endet (z. B. Download abgeschlossen)
* wenn sich der [Modus](/loops-and-modes) einer Microinteraction ändert

In einigen fällen kann es dagegen besser sein, dem Nutzer keinerlei Feedback zu geben. Wenn zum Beispiel im Hintergrund (durch einen unsichtbaren, systembasierten [Trigger](/triggers)) überprüft wird, ob neue E-Mails eingetroffen sind, sollte nur Rückmeldung stattfinden, **wenn tatsächlich ein relevantes Ereignis stattfindet**, in diesem Fall das Vorhandensein neuer Nachrichten. In allen anderen Fällen, wenn es also keine neuen E-Mails gibt, ist es nicht nötig, dies dem Nutzer jedes mal explizit mitzuteilen.

## Arten von Feedback

Da die Rückmeldung, um die es hier geht, von Maschinen an Menschen ist, überträgt sie sich über die menschlichen Sinne an Nutzer. Sie ist bei heutigen digitalen Geräten meist visuell oder akustisch, manchmal haptisch und nur selten über Geschmak oder Geruch. Doch ein wichtiges das wichtigste Ziel ist immer, die "Black Box" der Technik zugänglich machen.
Bei Verbreiteten Interaktionsmustern sollte meist aauf deren konvetnionelle Art der Rückmeldung zurückgegriffen werden, um nötige Lernzeit für Nutzer kurz zu halten. 
Wenn möglich, sollte ein direkter Bezug zwischen Eingabe und Rückmeldung hergestellt werden, zB XXXX
Ist es nicht möglich, eine Verbindung herzustellen, sollte trotzdem in jedem Fall eine Veränderung des Zustandes des Objektes stattfinden, zum Beispiel durch Änderung der Farbe.

### Visuell

XXXX

<figure class="content-skinny">
  <img src="/images/feedback/1password-shake.gif">
  <figcaption>
  Rückmeldung von 1password bei Eingabe eines falschen Master-Passwortes 
  </figcaption>
</figure>

--> [Animation](/animation)

### Auditiv

^[[Twenty Thousand Hertz Podcast #30: The bleeps, the sweeps, and the creeps!](https://www.20k.org/episodes/the-bleeps-the-sweeps-and-the-creeps)]

Car sound enhancement

### Feedback ist direkte Beeinflussung von Nutzern

Die Art von Rückmeldung, die an einen Nutzer gegeben wird, kann diesen stark beeinflussen und sogar manipulieren. So ist das Feedback eines Spielautomaten darauf ausgelegt, den Spieler zu überzeugen, immer mehr zu spielen. Auf jede Eingabe reagiert das Gerät mit übermäßigem Feedback und sorgt dafür, dass sich der Nutzer in seiner Aktion bestätigt fühlt. Selbst kleine Gewinne werden durch zahlreiche blinkende Lichter und Fanfaren untermalt und dem Nutzer suggeriert, er hätte einen Jackpot gewonnen. Als Designer sollte man sich der Macht über Nutzer stets bewusst sein und [Dark Patterns](/triggers#dark-patterns) vermeiden.

## Diese Fragen sollten sich Designer bei der Gestaltung von Feedback stellen:

1.  _Was ist das geringstmögliche Feedback, das trotzdem klar macht, was geschieht?_
    --> Überlade Nutzer nicht mit unnötigen Feedback
2.  _Was ist die Verbindung zwischen der Aktion des Nutzers, den Regeln und des daraus resultierenden Ergebnisses?_
    --> Feedback ist niemals willkürlich
3.  _Wie lässt sich nutzen, was vorhanden ist, aber normalerweise übersehen wird?_
    --> Use what's there
4.  _Werden nutzer dazu gebracht, etwas zu tun, das diese nicht wirklich wollen?_
    --> Gestalter sollten für Nutzer arbeiten, nicht für Geld.

::: md-container-more

### Sehens-, hörens- und lesenswert zum Thema Feedback

* Kapitel _Feedback_ im Buch: Saffer, Dan: Microinteractions - Designing with Details, O'Riley Media, Sebastopol CA, 2013, [www.microinteractions.com](http://microinteractions.com/)
* Vortrag: [Feedback first](https://youtu.be/zZ6XgD8xe1s) von
  Ilya Birman

:::
