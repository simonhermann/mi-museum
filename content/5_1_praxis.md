# Microinteractions in der Praxis



XXX Bild BVG Automat

Das Beispiel des Fahrkartenautomaten zeigt, dass es je Anwendungsfall sinnvoll sein kann, nur eine einzige Interaktion pro Screen bereitzustellen. In diesem Fall dient der gesamte Touchscreens als Interaktionsfläche für den [Auslöser](/trigger) auf Nutzerseite.


Bei der Definition von Regeln für Mikro-Interaktionen sollte möglichst auf dem Nutzer bereits bekannte Regeln zurückgegriffen werden.

Nur weil sich eine MI durchsetzt, heißt das nicht, dass sie perfekt ist. Beispielsweise wird von vielen Nutzern nicht verstanden wann ein Doppel- und wann ein einfacher Klick benötigt wird. Designentscheidungen XXXX

Sicht des designers auf app: klar, perfekt. Sicht eines users: verschwommen, da geringere Aufmerksamkeit --> tipp: blurry eye test

Wenn nicht genug budget zur Verfügung steht um alles zumindest "gut" zu machen, sollte auf die hauptinteraktion des Produktes fokusiert werden und diese perfektioniert werden. zB Datepicker bei Flugsuchmaschine

empfundene Simplizität != technische/operative Simplizität

Verschiedne Geräte und Situationen erfordern unterschiedliche Herangehenweisen. 10-foot-UI^[[asd](https://en.wikipedia.org/wiki/10-foot_user_interface)]

<figure class="content-thin">
  <img data-src="/images/practical/what-users-see.jpg">
  <figcaption>
    XXXX
    <sup><a href="https://youtu.be/Qpz5jpRnEho">Bildquelle</a></sup>
  </figcaption>
</figure>

> Don’t design to prove you're clever. Design to make the user think _she_ is.
> <cite>Jeffrey Zeldman^[[Jeffrey Zeldman: The Year in Design](https://medium.com/let-me-repost-that-for-you-zeldman/the-year-in-design-9c06acf55b88)]</cite>

## Fitt's Law

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

Zeigt, wie wichtig Interdisziplinatität im Design ist.
Zeigt, wie wichtig es ist, den Menschen zu kennen, der das Interface nutzen wird.

[https://youtu.be/RBV01YDPnOA]



> Any darn fool can make something complex; it takes a genius to make something simple.
> <cite>Pete Seeger^[goodreads.com](https://www.goodreads.com/quotes/295217-any-darn-fool-can-make-something-complex-it-takes-a)</cite>

> You have more skin to skin contact with you smartphone than anything in your life
> Peter Smart https://youtu.be/m1zk4r6NWBc


> Obious always wins.
> --<cite>Luke W.</cite>

> Think of everything as a Microinteraction.
> <cite>Dan Saffer</cite>

https://www.smashingmagazine.com/2017/03/improve-billing-form-ux/
SmashingMag: Designging the perfect XXXX


::: md-container-more

### Nützliche Links zum Thema Microinteractions in der Praxis:
- Artikel: [Designing for Fingers, Touch and People](https://www.uxmatters.com/mt/archives/2017/03/design-for-fingers-touch-and-people-part-1.php) von Steven Hoober
- https://www.interaction-design.org/literature/article/user-interface-design-guidelines-10-rules-of-thumb

:::