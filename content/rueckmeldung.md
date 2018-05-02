# Rückmeldung (Feedback) von Microinteractions

Die Hauptaufgabe der Rückmeldung (engl. Feedback) das eine Benutzerschnittstelle an den Nutzer gibt, ist diesem zu helfen, die [Regeln](/rules) einer (Mikro-)Interaktion zu verstehen. Wenn ein Nutzer beispielsweise einen Button antippt, sollte gezeigt werden, _dass_ dieser gedrückt wurde und _was das Ergebnis_ der Eingabe ist. Allein dadurch können Nutzer wissen, ob eine Eingabe erfolgreich war. Wäre keinerlei Feedback vorhanden, bestünde für Nutzer kaum eine Möglichkeit zu wissen, was passiert und wie eine Benutzerschnittstelle funktioniert.

Für Nutzer sollten die [Regeln](/rules) einer Microinteraction keinerlei oder nur wenig Aufmerksamkeit einfordern. Am Beispiel des Lichtes mit Bewegungsmelder: allein wichtig ist, dass das Licht angeht, sobald Nutzer es benötigen, und sie sich nicht darum kümmern müssen, es wieder auszuschalten. Die einzige Rückmeldung des Produktes an den Nutzer ist hier das gewünschte Ergebnis selbst: Licht. Die meisten Microinteractions benötigen jedoch mehr Feedback.
XXXX

<!-- Kontinuierlich + Authentisch => direkte Manipulation -->

#### Feedback sollte üblicherweise vorhanden sein, wenn:

* eine Eingabe von Seiten des Nutzers stattfindet.
* ein systembasierter Trigger den Status der Benutzerschnittstelle oder des Programms signifikant verändert (z. B. Eintreffen neuer Nachrichten).
* ein Kommando des Nutzers auch nicht ausgeführt werden kann (z. B. E-Mail kann auch nach mehrmaligem Versuchen nicht gesendet werden, da offline).
* ein nutzerrelevanter Fehler auftritt, der nicht von seiten des Systems korrigiert werden kann (z.B. Eingabe eines falschen Passwortes).
* ein nutzerrelevanter lange andauernder Prozess stattfindet (z. B. Anzeige der Restzeit bei Systemupdate)
* ein nutzerrelevanter Prozess beginnt
* ein nutzerrelevanter Prozess endet (z. B. Download abgeschlossen)
* wenn sich der [Modus](/loops-and-modes) einer Microinteraction ändert

In einigen fällen kann es dagegen besser sein, dem Nutzer keinerlei Feedback zu geben. Wenn zum Beispiel im Hintergrund (durch einen versteckten, systembasierten [Trigger](/triggers)) überprüft wird, ob neue E-Mails eingetroffen sind, sollte nur Rückmeldung stattfinden, _wenn tatsächlich ein relevantes Ereignis stattfindet_, in diesem Fall das Vorhandensein neuer Nachrichten. In allen anderen Fällen, wenn es also keine neuen E-Mails gibt, ist es nicht nötig, dies dem Nutzer jedes mal explizit mitzuteilen.

### Unmittelbarkeit

Rückmeldung sollte ohne merkliche Verzögerung auf Nutzereingaben sein.
Wenn der Befehl aus technischen Gründen nicht unmittelbar ausgeführt werden kann, sollte stattdessen eine Form von Fortschrittsanzeige o. Ä. diesen Umstand verdeutlichen.
Wenn ein Nutzer den Schließen-Buttons eines Fensters betätigt, sollte ebendieser Button sein Erscheinungsbild verändern. Das mag unnötig erscheinen, da das Fenster und damit der Button im Moment des Ausführens nicht mehr zu sehen sind – normalerweise. Auf veralteter Hardware, durch laufende Hintergrundprozesse oder aus zahlreichen anderen Gründen kann es vorkommen, dass ein Vorgang, der auf den Testgeräten der Gestalter und Programmierer sofort geschieht, hier etwas Zeit braucht. Aus diesem Grund sollte Rückmeldung ausnahmslos unmittelbar geschehen und technisch losgelöst von der Befehlausführung sein. Ein Nutzer, der auch nur eine Sekunde der kein Feedback bekommt, wird versuchen, den Button erneut zu drücken und damit vermutlich das System noch mehr überlasten oder Fehler auslösen.

::: md-container-standout

Als Gestalter sollte man zwischen zwei Arten von Rückmeldung auf Aktionen des Nutzers unterscheiden:

1.  Eine **Eingabe** ist erfolgt
2.  Ein **Befehl** wurde ausgeführt

:::

### Flow

XXXX
Fake Data/Behelfslösungen,

<figure class="content-thin">
  <img data-src="/images/feedback/windows3.1-drag.jpg">
  <figcaption>
  In Windows 3.1 war es technisch noch nicht möglich, die Verschiebung eines Fensters mit dem Cursor flüssig darzustellen, daher wurde in Echtzeit nur ein leerer Rahmen als als Platzhalter verschoben und das eigentliche Fenster beim Loslassen der Maustaste.
  <sup><a href="http://toastytech.com/guis/win31.html">Bildquelle</a></sup>
  </figcaption>
</figure>

Optimistic UI (keep the flow!)

Flow/Tunnel
People who experience flow:

* sense of clarity, extasy and feels highly rewarding
* --> thats how a designer wants people to feel

<--x-xx-xx-xxx-> lots of short activities: remembered as long
<--xxxxxxxxxxx-> one long continuus activity: remembered as short, memory conpresses, dont remember most of what happened

Feedback sollte jedoch trotzdem ehrlich sein und kommunizieren was wichtig ist für Nutzer. Ein Fortschittsbalken, der anfangs extrem schnell bewegt und dann kurz vor dem Ende immer langsamer wird repräsentiert wohl kaum was tatsächlich vorgeht und ist nicht von Nutzen. Wer im Ungewissen auf auf das letzte Prozent warten muss, wird den Schwindel schnell durchschauen und dies als negative Erfahrung in Erinnerung behalten.

XXXX^[[Smart Transitions In User Experience Design](https://www.smashingmagazine.com/2013/10/smart-transitions-in-user-experience-design) von Adrian Zumbrunnen]

### Microcopy und Tonalität

Die Art und Weise, wie textliche Inhalte einer grafischen Benutzerschnittstelle geschrieben sind, hat enorme Auswirkung auf dessen Wirkung. Zwischen Nutzer und Produkt findet eine "Unterhaltung" statt, diese kann förmlich oder locker, ausführlich oder sachlich kurz, neutral oder heiter sein. Microcopy beschreibt die Beschriftungen, Aufforderungen und Meldungen, die ein Interface an den Nutzer kommuniziert. Sie führt einen Nutzer durch die Erfahrung des Produktes. Lesen ist eine Art stilles Sprechen und die Art und Weise, wie wir sprechen hat Einfluss auf unsere Stimmung.<!-- XXXX Beispiel/Nachweis? -->

<figure class="content-thin">
  <img data-src="/images/feedback/mailchimp-login-error.jpg">
  <figcaption>
  Der Ärger, eine Benutzername/Passwort Kombination zu vergessen, wird bei MailChimp entschärft; Wenn der eingegebene Nutzername nicht existiert, wird dies bereits vor Eingabe des Passwortes mitgeteilt. Dem Nutzer wird proaktiv mitgeteilt, wie das Interface ihn unterstützen kann.
  <sup><a href="https://freshsparks.com/user-experience-tips-best-error-messages/">Bildquelle</a></sup>
  </figcaption>
</figure>

Da dieses Thema den Rahmen der Arbeit sprengen würde, hier nur eine kurze Übersicht über einige _Best Practices_: Texte sollten dem Anlass angemessen und dem Produkt und der Marke entsprechend formuliert sein. Oft sollten sie so kurz wie möglich gehalten werden. Bei Fehlermeldungen kann auch eine etwas längere humorvolle Nachricht die negative Erfahrung deutlich abmildern. Die Schuld an einem Fehler sollte niemals dem Nutzer gegeben werden, sondern auf die Unzulänglichkeit des Systems zurückgeführt werden.

### Arten von Feedback

Da die Rückmeldung, um die es hier geht, von Maschinen an Menschen ist, überträgt sie sich über die menschlichen Sinne an Nutzer. Sie ist bei heutigen digitalen Geräten meist visuell oder akustisch, manchmal haptisch und nur selten über Geschmack oder Geruch. Doch ein wichtiges das wichtigste Ziel ist immer, die "Black Box" der Technik zugänglich machen.
Bei verbreiteten Interaktionsmustern sollte meist auf deren konventionelle Art der Rückmeldung zurückgegriffen werden, um nötige Lernzeit für Nutzer kurz zu halten.
Wenn möglich, sollte ein direkter Bezug zwischen Eingabe und Rückmeldung hergestellt werden, z. B. ein Mauscursor, welcher den Bewegungen der Maus folgt.
Ist es nicht möglich, eine unmittelbare Verbindung herzustellen, sollte trotzdem in jedem Fall eine Veränderung des Zustandes des Objektes stattfinden, zum Beispiel durch Änderung der Farbe.

Visuell
XXXX

<figure class="content-thin">
  <img data-src="/images/feedback/1password-shake.gif">
  <figcaption>
  "Shake"-Feedback von 1password bei Eingabe eines falschen Master-Passwortes.
  Die Darstellung von Punkten für eingegebene Zeichen ist eine Form von Rückmeldung, die in der Kommandozeile üblicherweise nicht vorhanden&nbsp;ist.
  </figcaption>
</figure>

--> [Animation](/animation-and-pace)

Auditiv^[[Twenty Thousand Hertz Podcast #30: The bleeps, the sweeps, and the creeps!](https://www.20k.org/episodes/the-bleeps-the-sweeps-and-the-creeps)]

Car sound enhancement

Rückmeldung immer über mehrere Kanäle, zB Form und Farbe

Durch den gezielten Einsatz von visueller, auditiver oder anderweitiger Rückmeldung werden Fehler vermieden und der Nutzer wird in seinen Handlungen bestätigt oder gar ["belohnt"](/signature-moments).

### Abstraktion und Relevanz

XXXX
Mit Erfindung des Buttons + Elektrik ist Feedback das erste mal nicht mehr direkt von Eingabe abhängig.
Das Ergebnis der menschlichen Bewegung kann vollkommen anders als die Art der Eingabe. [DeRouchy, Bill: [History of the Button](https://youtu.be/zdwUbhm-8Mw) UXLx/Youtube]
Diese Abstraktion des digitalen war besonders ausgeprägt bei Interfaces mit Kommandozeile. XXXX bsp

In späteren grafischen Benutzeroberflächen wird meist versucht, die Art der Eingabe intuitiv zu gestalten, also wo möglich an die entsprechende Auswirkung auf die Analoge Welt anzupassen. Dies bedeutet keineswegs, dass die vom Computer ausgeführten Aktionen weniger komplex sind, tatsächlich ist das Gegenteil der Fall: Eine Handschrifterkennung auf einem Gerät mit Touchscreen funktioniert mit Hilfe vielschichtiger Algorithmen und imitiert doch nur das, was ein XXXX
Diese Komplexität wird jedoch vor dem Endnutzer versteckt, da sie meist irrelevant für das Ergebnis ist.
Mit Entwicklung der Technik und des Einzuges von Heimcomputern, Smartphones und zahlreicher weiterer digitaler Geräte entstand jedoch die Notwendigkeit, weitaus abstraktere Konzepte durch Microinteractions zu kontrollieren.

Die Art von Rückmeldung, die an einen Nutzer gegeben wird, kann diesen stark beeinflussen und sogar manipulieren. So ist das Feedback eines Spielautomaten darauf ausgelegt, den Spieler zu überzeugen, immer mehr zu spielen. Auf jede Eingabe reagiert das Gerät mit übermäßigem Feedback und sorgt dafür, dass sich der Nutzer in seiner Aktion bestätigt fühlt. Selbst kleine Gewinne werden durch zahlreiche blinkende Lichter und Fanfaren untermalt und dem Nutzer suggeriert, er hätte einen Jackpot gewonnen. Als Designer sollte man sich der Macht über Nutzer stets bewusst sein und [Dark Patterns](/triggers#dark-patterns) vermeiden.

Eine Herausforderung für Designer wird sein, Interfaces mit der [Automatisierung](/rules) von Entscheidungen durch Künstliche Intelligenzen und andere technische Systeme in Einklang zu bringen und Nutzern die richtigen Informationen zu geben, um diese zu verstehen. Zu wenig Information, und der Nutzer wird sein eigenes Gerät verdammen, weil es unerwartete Dinge tut. Zu viel Information, und Nutzer werden sich schnell überladen und genervt fühlen. Beide Fälle führen letztendlich zu Frustration und vermutlich zum Abschalten der Automatisierungsfunktionen.

### Diese Fragen sollten sich Designer bei der Gestaltung von Feedback stellen:

1.  _Was ist das geringstmögliche Feedback, das trotzdem klar macht, was geschieht?_
    --> Überlade Nutzer nicht mit unnötigen Feedback
2.  _Was ist die Verbindung zwischen der Aktion des Nutzers, den Regeln und des daraus resultierenden Ergebnisses?_
    --> Feedback ist niemals willkürlich
3.  _Wie lässt sich nutzen, was vorhanden ist, aber normalerweise übersehen wird?_
    --> Use what's there
4.  _Werden Nutzer dazu gebracht, etwas zu tun, das diese nicht wirklich wollen?_
    --> Gestalter sollten für Nutzer arbeiten, nicht für Geld.
5.  _Ist die Nachricht an den Nutzer definitiv korrekt?_
    --> Wenn Nutzern eine systemgenerierte Information mitgeteilt wird, sollte in Erwägung gezogen werden, die Zuversicht bezüglich der Wahrheit dieser ebenfalls mitzuteilen. <!-- XXXX besser formulieren -->

::: md-container-more

### Sehens-, hörens- und lesenswert zum Thema Feedback

* Kapitel _Feedback_ im Buch: Saffer, Dan: Microinteractions - Designing with Details (S. 83 - 107), O'Riley Media, Sebastopol CA, 2013, [www.microinteractions.com](http://microinteractions.com/)
* Artikel: [Getting Practical With Microcopy](https://www.smashingmagazine.com/2016/07/getting-practical-with-microcopy/) von Rade Brujić
* Artikel: [Systems smart enough to know when they're not smart enough](https://bigmedium.com/ideas/systems-smart-enough-to-know-theyre-not-smart-enough.html) von Josh Clark
* Vortrag: [Feedback first](https://youtu.be/zZ6XgD8xe1s) von Ilya Birman

:::
