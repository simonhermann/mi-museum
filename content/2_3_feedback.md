# Rückmeldung (Feedback)

Die Hauptaufgabe der Rückmeldung (engl. Feedback) das eine Benutzerschnittstelle an den Nutzer gibt, ist diesem zu helfen, die [Regeln](/rules) einer (Mikro-)Interkation zu verstehen. Wenn ein Nutzer beispielsweise einen Button antippt, sollte gezeigt werden, _dass_ dieser gedrückt wurde und _was das Ergebnis_ der Eingabe ist.

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

XXXX

--> [Animation](/animation)

Die Art von Rückmeldung, die an einen Nutzer gegeben wird, kann diesen stark beeinflussen und sogar manipulieren. So ist das Feedback eines Spielautomaten darauf ausgelegt, den Spieler zu überzeugen, immer mehr zu spielen. Auf jede Eingabe reagiert das Gerät mit übermäßigem Feedback und sorgt dafür, dass sich der Nutzer in seiner Aktion bestätigt fühlt. Selbst kleine Gewinne werden durch zahlreiche blinkende Lichter und Fanfaren untermalt und dem Nutzer suggeriert, er hätte einen Jackpot gewonnen. Als Designer sollte man sich der Macht über Nutzer stets bewusst sein und [Dark Patterns](/triggers) vermeiden.

## Diese Fragen sollten sich Designer bei der Gestaltung von Feedback stellen:

1.  _Was ist das geringstmögliche Feedback, das trotzdem klar macht, was geschieht?_
    --> Überlade Nutzer nicht mit unnötigen Feedback
2.  _Was ist die Verbindung zwischen der Aktion des Nutzers, den Regeln und des daraus resultierenden Ergebnisses?_
    --> Feedback ist niemals willkürlich
3.  _Wie lässt sich nutzen, was vorhanden ist, aber normalerweise übersehen wird?_
    --> Use what's there
4.  _Werden nutzer dazu gebracht, etwas zu tun, das diese nicht wirklich wollen?_
    --> Gestalter sollten für Nutzer arbeiten, nicht für Geld.

---

TODO:

Für Nutzer sollten diese Regeln jedoch keinerlei Aufmerksamkeit erfordern; allein wichtig ist, dass das Licht an geht sobald sie es benötigen und sie sich nicht darum kümmern müssen, es wieder auszuschalten.
Die einzige Rückmeldung des Produktes an den Nutzer ist das gewünschte Ergebnis selbst: Licht. Meist benötigt eine Microinteraction jedoch mehr Feedback: XXXX
