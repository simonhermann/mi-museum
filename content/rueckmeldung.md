# Rückmeldung (Feedback) von Microinteractions

Die Hauptaufgabe der Rückmeldung (engl. Feedback) das eine Benutzerschnittstelle an den Nutzer gibt, ist diesem zu helfen, die [Regeln](/rules) einer (Mikro-)Interaktion zu verstehen. Wenn ein Nutzer beispielsweise einen Button antippt, sollte gezeigt werden, _dass_ dieser gedrückt wurde und _was das Ergebnis_ der Eingabe ist. Allein dadurch können Nutzer wissen, ob eine Eingabe erfolgreich war. Wäre keinerlei Feedback vorhanden, bestünde für Nutzer kaum eine Möglichkeit zu wissen, was passiert und wie eine Benutzerschnittstelle funktioniert.

Für Nutzer sollten die [Regeln](/rules) einer Microinteraction keinerlei oder nur wenig Aufmerksamkeit einfordern. Am Beispiel des Lichtes mit Bewegungsmelder: allein wichtig ist, dass das Licht angeht, sobald Nutzer es benötigen, und sie sich nicht darum kümmern müssen, es wieder auszuschalten. Die einzige Rückmeldung des Produktes an den Nutzer ist hier das gewünschte Ergebnis selbst: Licht. Die meisten Microinteractions benötigen jedoch mehr Feedback.
<!-- XXXX -->

<!-- Kontinuierlich + Authentisch => direkte Manipulation -->

##### Feedback sollte üblicherweise vorhanden sein, wenn:

* eine Eingabe von Seiten des Nutzers stattfindet.
* ein systembasierter Trigger den Status der Benutzerschnittstelle oder des Programms signifikant verändert (z. B. Eintreffen neuer Nachrichten).
* ein Kommando des Nutzers auch nicht ausgeführt werden kann (z. B. E-Mail kann auch nach mehrmaligem Versuchen nicht gesendet werden, da offline).
* ein nutzerrelevanter Fehler auftritt, der nicht von seiten des Systems korrigiert werden kann (z.B. Eingabe eines falschen Passwortes).
* ein nutzerrelevanter lange andauernder Prozess stattfindet (z. B. Anzeige der Restzeit bei Systemupdate)
* ein nutzerrelevanter Prozess beginnt
* ein nutzerrelevanter Prozess endet (z. B. Download abgeschlossen)
* wenn sich der [Modus](/loops-and-modes) einer Microinteraction ändert

In einigen fällen kann es dagegen besser sein, dem Nutzer keinerlei Feedback zu geben. Wenn zum Beispiel im Hintergrund (durch einen versteckten, systembasierten [Trigger](/triggers)) überprüft wird, ob neue E-Mails eingetroffen sind, sollte nur Rückmeldung stattfinden, _wenn tatsächlich ein relevantes Ereignis stattfindet_, in diesem Fall das Vorhandensein neuer Nachrichten. In allen anderen Fällen, wenn es also keine neuen E-Mails gibt, ist es nicht nötig, dies dem Nutzer jedes mal explizit mitzuteilen.

### Unmittelbarkeit und Flow

Rückmeldung sollte ohne merkliche Verzögerung auf Nutzereingaben sein.
Wenn der Befehl aus technischen Gründen nicht unmittelbar ausgeführt werden kann, sollte stattdessen eine Form von Fortschrittsanzeige o. Ä. diesen Umstand verdeutlichen. Die Reaktionszeit einer Schnittstelle hat großen Einfluss darauf, wie sie sich anfühlt: ^[[Response Times: The 3 Important Limits](https://www.nngroup.com/articles/response-times-3-important-limits/) von Jakob Nielsen]

- bis zu 100 Millisekunden: _fühlt sich sofortig an_
- bis zu 1 Sekunde: _fühlt sich übergangslos an_
- 8-10 Sekunden: _maximale Aufmerksamkeitsspanne_

Die Dauer eines Blinzelns liegt zwischen 100 und 150ms, diese Dauer wird normalerweise als Verzögerungsfrei wahrgenommen.^[[True Lies Of Optimistic User Interfaces](https://www.smashingmagazine.com/2016/11/true-lies-of-optimistic-user-interfaces/) von Denys Mishunov / Smashingmagazine, 2016]
Wenn ein Nutzer den Schließen-Buttons eines Fensters betätigt, sollte ebendieser Button sein Erscheinungsbild verändern. Das mag unnötig erscheinen, da das Fenster und damit der Button im Moment des Ausführens nicht mehr zu sehen sind – normalerweise. Auf veralteter Hardware, durch laufende Hintergrundprozesse oder aus zahlreichen anderen Gründen kann es vorkommen, dass ein Vorgang, der auf den Testgeräten der Gestalter und Programmierer sofort geschieht, hier etwas Zeit braucht. Aus diesem Grund sollte Rückmeldung ausnahmslos unmittelbar geschehen und technisch losgelöst von der Befehlausführung sein. Ein Nutzer, der auch nur eine Sekunde der kein Feedback bekommt, wird versuchen, den Button erneut zu drücken und damit vermutlich das System noch mehr überlasten oder Fehler auslösen. Als Gestalter sollte man also zwischen zwei Arten von Rückmeldung auf Aktionen des Nutzers unterscheiden:

* Rückmeldung, dass eine _Eingabe des Nutzers_ erfolgt ist
* Rückmeldung, dass ein Befehl vom System _ausgeführt_ wurde

Ein Nutzer sollte sich in das 'Erlebnis' eines Produktes vertiefen können ohne herausgerissen zu werden. Dieser mentale Zustand der völligen Vertiefung wird _Flow_ genannt und bewirkt, dass eine Aufgabe wie von selbst von der Hand geht,^[vgl. [Wikipedia.de: Flow (Psychologie)](https://de.wikipedia.org/wiki/Flow_(Psychologie))] was letztendlich die Freude am Produkt erhöhen wird.
<!-- Wer sich im Flow befindet hat ein gefühl von Klarheit. -->

<figure class="content-tiny">
  <video muted autoplay loop preload="none" poster="" src="/images/feedback/goodtransition-cleardo-v3.mp4
" controls controlsList="nodownload" playsinline>
  </video>
  <figcaption> 
    Das Beispiel aus Googles Material Design zeigt, wie durch nahtlose, aber nicht ablenkende animierte Übergänge der Eindruck einer flüssigen grafischen Benutzeroberfläche geschaffen werden kann.
    <sup><a href="https://material.io/guidelines/motion/material-motion.html#material-motion-what-makes-a-good-transition">Quelle</a><sup>
  </figcaption>
</figure>

Um eine Nutzererfahrung zu gestalten, die sich nahtlos und flüssig anfühlt, ist es wichtig, [_passive_ Wartezeiten](/animation-and-pace) auf eine Minimum zu reduzieren. Unter Umständen kann es daher von nutzen sein, positive Rückmeldung auf eine Eingabe zu geben, bevor das System die eigentliche technische Information hat, ob ein Ereignis erfolgreich war. Dieses Konzept nennt sich _optimistic user interface_ und wird etwa von Twitter oder Facebook eingesetzt. Wird beispielsweise ein Tweet abgeschickt, wird dem Nutzer _unmittelbar_ visuell mitgeteilt, dass dieser erfolgreich versandt wurde. In den (seltenen) Fällen, dass tatsächlich ein Fehler auftritt, kann dieser nachträglich angezeigt werden. Der Flow eines Nutzers sollte nicht unterbrochen werden, wenn dies nicht unbedingt notwendig ist.

> As long as there is no error happening in the user interface, there's no reason to interrupt the user.
> <cite>Adrian Zumbrunnen^[[Designing Motion: Smart Transitions in UI Design](https://youtu.be/NaqKjp14Xbg) von Adrian Zumbrunnen / UX Salon / YouTube]</cite>

Die Anzeige 'falscher' Daten ist eine weitere Möglichkeit, technische Erfordernisse und Unzulänglichkeiten auf intelligente Weise zu verschleiern. In Photoshop wird bei rechenintensiven Transformationen oder Filtern beispielsweise nur eine niedriger aufgelöste Vorschau angezeigt, bis die Eingabe bestätigt wurde. Feedback sollte wann immer möglich kontinuierlich und unmittelbar Erfolgen, wenn nötig durch temporäre Platzhalter des eigentlichen Inhaltes der Rückmeldung.

<figure class="content-thin">
  <img data-src="/images/feedback/windows3.1-drag.jpg">
  <figcaption>
  In Windows 3.1 war es technisch noch nicht möglich, die Verschiebung eines Fensters mit dem Cursor flüssig darzustellen, daher wurde in Echtzeit nur ein leerer Rahmen als verschoben und das eigentliche Fenster erst beim Loslassen der Maustaste an der neuen Position angezeigt.
  <sup><a href="http://toastytech.com/guis/win31.html">Bildquelle</a></sup>
  </figcaption>
</figure>

In den meisten Fällen sollte Feedback jedoch 'ehrlich' sein und kommunizieren was wichtig ist für Nutzer. Ein Fortschrittsbalken, der anfangs extrem schnell bewegt und dann kurz vor dem Ende immer langsamer wird, repräsentiert wohl kaum was tatsächlich vorgeht und ist nicht von Nutzen. Wer im Ungewissen auf auf das letzte Prozent warten muss, wird den Schwindel schnell durchschauen und dies als negative [Erfahrung in Erinnerung](/signature-moments) behalten. Die Grenze zu [Dark Patterns](/triggers#dark-patterns) ist fließend und die Befragung und Beobachtung von Nutzern sind der einzige Weg, deren Akzeptanz zu ergründen. 

### Microcopy und Tonalität

Die Art und Weise, wie textliche Inhalte einer grafischen Benutzerschnittstelle geschrieben sind, hat enorme Auswirkung auf dessen Wirkung. Zwischen Nutzer und Produkt findet eine 'Unterhaltung' statt, diese kann förmlich oder locker, ausführlich oder sachlich kurz, neutral oder heiter sein. Microcopy beschreibt die Beschriftungen, Aufforderungen und Meldungen, die ein Interface an den Nutzer kommuniziert. Sie führt einen Nutzer durch die Erfahrung des Produktes. Lesen ist eine Art stilles Sprechen und die Art und Weise, wie wir sprechen hat Einfluss auf unsere Stimmung.<!-- XXXX Beispiel/Nachweis? -->

<figure class="content-thin">
  <img data-src="/images/feedback/mailchimp-login-error.jpg">
  <figcaption>
  Der Ärger, eine Benutzername/Passwort Kombination zu vergessen, wird bei MailChimp entschärft; Wenn der eingegebene Nutzername nicht existiert, wird dies bereits vor Eingabe des Passwortes mitgeteilt. Dem Nutzer wird proaktiv mitgeteilt, wie das Interface ihn unterstützen kann.
  <sup><a href="https://freshsparks.com/user-experience-tips-best-error-messages/">Bildquelle</a></sup>
  </figcaption>
</figure>

Da dieses Thema den Rahmen der Arbeit sprengen würde, hier nur eine kurze Übersicht über einige _Best Practices_: Texte sollten dem Anlass angemessen und dem Produkt und der Marke entsprechend formuliert sein. Oft sollten sie so kurz wie möglich gehalten werden. Bei Fehlermeldungen kann auch eine etwas längere humorvolle Nachricht die negative Erfahrung deutlich abmildern. Die Schuld an einem Fehler sollte niemals dem Nutzer gegeben werden, sondern auf die Unzulänglichkeit des Systems zurückgeführt werden.

### Arten von Feedback

Da die Rückmeldung, um die es hier geht, von Maschinen an Menschen ist, überträgt sie sich über die menschlichen Sinne an Nutzer. Sie ist bei heutigen digitalen Geräten meist visuell oder akustisch, manchmal haptisch und nur selten über Geschmack oder Geruch. Doch ein wichtiges das wichtigste Ziel ist immer, die 'Black Box' der Technik zugänglich machen.
Bei verbreiteten Interaktionsmustern sollte meist auf deren konventionelle Art der Rückmeldung zurückgegriffen werden, um nötige Lernzeit für Nutzer kurz zu halten.
Wenn möglich, sollte ein direkter Bezug zwischen Eingabe und Rückmeldung hergestellt werden, z. B. ein Mauscursor, welcher den Bewegungen der Maus folgt.
Ist es nicht möglich, eine unmittelbare Verbindung herzustellen, sollte trotzdem in jedem Fall eine Veränderung des Zustandes des Objektes stattfinden, zum Beispiel durch Änderung der Farbe.

Visuell
XXXX

<figure class="content-thin">
  <img data-src="/images/feedback/1password-shake.gif">
  <figcaption>
  'Shake'-Feedback von 1password bei Eingabe eines falschen Master-Passwortes.
  Die Darstellung von Punkten für eingegebene Zeichen ist eine Form von Rückmeldung, die in der Kommandozeile üblicherweise nicht vorhanden&nbsp;ist.
  </figcaption>
</figure>

--> [Animation](/animation-and-pace)

Auditiv^[[Twenty Thousand Hertz Podcast #30: The bleeps, the sweeps, and the creeps!](https://www.20k.org/episodes/the-bleeps-the-sweeps-and-the-creeps)]

Car sound enhancement

Rückmeldung immer über mehrere Kanäle, zB Form und Farbe

* BMW Vision Next100 https://youtu.be/ztfVoGqW5VU

Durch den gezielten Einsatz von visueller, auditiver oder anderweitiger Rückmeldung werden Fehler vermieden und der Nutzer wird in seinen Handlungen bestätigt oder gar ["belohnt"](/signature-moments). 

### Abstraktion und Relevanz

Die Erfindung des elektrischen Knopfes sorgt zum ersten mal in der Geschichte dafür, dass Eingabe, Ergebnis und Feedback nicht mehr direkt verbunden sind. Die Art der Rückmeldung kann also frei gewählt werden und ist nicht mehr abhängig von der Art der Eingabe. Mehr dazu im Kapitel zur [Historie von Microinteractions](/history).

Diese Abstraktion hat mit der Technisierung und Digitalisierung immer weiter zugenommen. Digitale Geräte bestehen aus unzähligen Schichten aufeinander aufbauender Teilsysteme und selbst die Funktionsweise einfacherer Geräte wie Taschenrechnern werden von den wenigsten Nutzern durchschaut. Komplexe Systeme wie Smartphones, Flugzeuge oder das Internet sind praktisch unmöglich in ihrer Gänze zu erfassen.
Doch um ein Gerät Nutzen zu können ist es keineswegs nötig diese 'Black Boxen' zu verstehen. Aufgabe von Designern ist, diese Nutzbar zu machen, ohne interne Abläufe verstehen zu müssen.
Interfaces mit Kommandozeile erfordern eine besonders abstrakte Denkweise vom Nutzer, während in späteren grafischen oder ['natürlichen'](/history) Benutzeroberflächen meist versucht wird, die Art der Eingabe intuitiv zu gestalten – diese also möglichst an ihre Auswirkung auf die Analoge Welt anzupassen. Was keineswegs bedeutet, dass die vom Computer ausgeführten Aktionen weniger komplex sind, tatsächlich ist oft das Gegenteil der Fall: Eine Handschrifterkennung auf einem Gerät mit Touchscreen funktioniert mit Hilfe vielschichtiger Algorithmen und erfordert weitaus mehr Rechenleistung als eine Kommandozeile. Diese Komplexität wird jedoch vor dem Endnutzer versteckt, sie ist nicht Teil der Rückmeldung, da sie meist irrelevant für das Ergebnis ist.
<!-- Mit Entwicklung der Technik und des Einzuges von Heimcomputern, Smartphones und zahlreicher weiterer digitaler Geräte entstand jedoch die Notwendigkeit, weitaus abstraktere Konzepte durch Microinteractions zu kontrollieren. -->

Die Rückmeldung, welche an einen Nutzer gegeben wird, kann diesen stark beeinflussen und sogar manipulieren. So ist das Feedback eines Spielautomaten darauf ausgelegt, den Spieler zu überzeugen, immer mehr zu spielen. Auf jede Eingabe reagiert das Gerät mit übermäßigem Feedback und sorgt dafür, dass sich der Nutzer in seiner Aktion bestätigt fühlt. Selbst kleine Gewinne werden durch zahlreiche blinkende Lichter und Fanfaren untermalt und dem Nutzer suggeriert, er hätte einen Jackpot gewonnen. Als Designer sollte man sich der Macht über Nutzer stets bewusst sein und [Dark Patterns](/triggers#dark-patterns) vermeiden.

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
* Artikel: [Getting Practical With Microcopy](https://www.smashingmagazine.com/2016/07/getting-practical-with-microcopy/) von Rade Brujić / Smashingmagazine
* Artikel: [Systems smart enough to know when they're not smart enough](https://bigmedium.com/ideas/systems-smart-enough-to-know-theyre-not-smart-enough.html) von Josh Clark
* Vortrag: [Feedback first](https://youtu.be/zZ6XgD8xe1s) von Ilya Birman
* Artikel: [True Lies Of Optimistic User Interfaces](https://www.smashingmagazine.com/2016/11/true-lies-of-optimistic-user-interfaces/) von Denys Mishunov / Smashingmagazine

:::
