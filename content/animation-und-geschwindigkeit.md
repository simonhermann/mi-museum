# Animation und Geschwindigkeit von Microinteractions

Animation im Kontext von Microinteractions ist meist eine Form von [Feedback](/feedback) oder [Trigger](/triggers).
Neue Nutzer eines digitalen Produktes benötigen Hinweise, die zeigen, wie eine Microinteraction zu benutzen ist. Dies gilt insbesondere für Interfaces, die unbekannte oder einzigartige Interaktionen enthalten. Eine Reihe von visuellen Hinweisen sollte zeigen, welche Interaktionen möglich sind. Diese Art der funktionalen Animation lenkt die Aufmerksamkeit des Benutzers auf die möglichen Interaktionen und dient so als Auslöser für diese.

Nachdem eine Microinteraction vom Nutzer ausgelöst wurde, kann Animation als visuelle Bestätigung der Nutzereingabe dienen. Dies bedeutet, dass Benutzer anhand dieser verstehen müssen, wie ihre Aktion mit den Reaktionen des Produktes verknüpft ist. Wie bereits [beschrieben](/feedback#unmittelbarkeit), sollte hier zwischen der Rückmeldung auf eine Eingabe und der Ausführung eines Befehls unterschieden werden.

> Think of motion design like a movie. Seamless transitions keep you focused on the story, and bring experiences to life. We can invite that feeling into our designs, leading people from one task to the next with cinematic&nbsp;ease.
> <cite>'Motion' im Microsoft Fluent Design System^[[Fluent is Microsoft’s next generation design principle](https://developer.microsoft.com/en-us/windows/projects/campaigns/windows-dev-essentials-design-principles)]</cite>

Evolutionär bedingt zieht Bewegung ganz natürlich die menschliche Aufmerksamkeit auf sich. Animation kann also genutzt werden, um den Fokus des Nutzers auf die entscheidenden Elemente eines Interfaces zu lenken. <!-- XXXX Beispiel/Nachweis? -->

Die ersten Versionen von iOS liefen auf sehr schwacher Hardware, trotzdem wirkte es sehr performant, da das UI-Set alle Übergänge während den ladezeiten animiert wurden.<!-- XXXX Quelle? -->

<!-- Wenn ein Teil des Interfaces entweder autonom arbeitet oder nicht standardkonforme Aktionen ausführt, kann es seine Benutzer verwirren oder sogar irritieren. Da die Bewegung der Objekte im wirklichen Leben bekannt ist, erwartet der Nutzer von einem Smartphone dies. -->

<!-- <figure class="content-tiny">
  <video muted autoplay loop preload="none" poster="images/animation-and-pace/shuttle-music.jpg" src="images/animation-and-pace/shuttle-music.mp4" controls controlsList="nodownload" playsinline>
  </video>
  <figcaption>Animierte Übergänge zeigen die Relation zwischen einzelnen UI-Elementen und ermöglichen so die räumliche und zeitliche Orientierung. Vor allem auf kleineren Bildschirmen ist dies von Vorteil, da hier weniger Fixpunkte vorhanden sind.
  </figcaption>
</figure> -->

<figure class="content-thin">
  <img data-src="/images/animation-and-pace/screen-transitions.gif">
  <figcaption>
    Animierte Übergänge zeigen die Relation zwischen einzelnen UI-Elementen und ermöglichen so die räumliche und zeitliche Orientierung. Vor allem auf kleineren Bildschirmen ist dies von Vorteil, da hier weniger Fixpunkte vorhanden sind.
    <sup><a href="https://plat4m.com/blog/3-types-of-animations-that-improve-user-experience">Bildquelle</a></sup>
  </figcaption>
</figure>

#### Natürliche Bewegung

In der physischen Welt gibt es kaum gerade Bewegungen, abrupte Statusänderungen oder
XXXX zb exponentiell statt linear, Kurven statt Geraden
--> Bezug auf Regeln der Physischen Welt
Balance zwischen natürlich und funktional

^[[Making CSS Animations Feel More Natural](https://css-tricks.com/making-css-animations-feel-natural/) von Brandon Gregory]

<figure class="content-thin">
  <img data-src="/images/animation-and-pace/curve.gif">
  <figcaption>
    Curve XXXX
    <sup><a href="https://medium.com/mobify-design-team/designing-for-the-appearance-of-speed-aaabc7f568c2">Bildquelle</a></sup>
  </figcaption>
</figure>

<figure class="content-normal">
  <img data-src="/images/animation-and-pace/ios-open-folder-distance.gif">
  <figcaption>
    Veranschaulichung der Distanz, die ein physisches Objekt zurücklegen würde, dessen wahrgenommenes Größenwachstum dem Öffnen einer App in iOS 7 entspricht. (24.62 ft ≈ 7,5 m)
    <sup><a href="https://www.buzzfeed.com/jwherrman/the-weird-terrifying-physics-of-ios-7">Bildquelle</a></sup>
  </figcaption>
</figure>

#### Branding durch Animationen

XXXX Markenbindung durch Verspieltheit: bekannte/standard Interaktionen (die eher seltener genutzt werden) aufwerten durch verspielte Animation --> Nutzererfahrung verbessern ohne Usability zu beeinträchtigen, Nutzer überraschen und erheitern --> [Signature Moments](/signature-moments)

Auch rein dekorative Animationen sollten Sinn, Ort und Funktion haben, die sich am Gesamtkonzept orientieren. Animation, die für bloße Aufmerksamkeit genutzt wird, läuft Gefahr, Nutzer zu überfrachten und die Erfahrung negativ zu beeinflussen.
Bei Animationen für (Mikro-)Interaktionen sollte Effizienz immer einen höheren Stellenwert einnehmen als Dekoration.


<!-- ^[[https://dribbble.com/shots/2440217-Fluid-Switch](/images/animation-and-pace/switch-fluidswitch.gif)] -->

#### Gefühlte Geschwindigkeit

Das Gefühl eines Menschen für Zeit ist nicht absolut, sondern abhängig von unzähligen Faktoren wie Stimmung, Erwartungshaltung, Persönlichkeit oder Kontext. Wenn sich etwas _gut_ anfühlt, vergeht es meist viel zu schnell, während ungeliebte Aufgaben kaum zu enden scheinen. Die selben Prinzipien treffen auch auf Benutzerschnittstellen zu, und Designer sollten sie sich zu Nutze machen.

> Wenn man zwei Stunden lang mit einem Mädchen zusammensitzt, meint man, es wäre eine Minute. Sitzt man jedoch eine Minute auf einem heißen Ofen, meint man, es wären zwei Stunden. Das ist Relativität. 
> <cite> Albert Einstein^[[zitate-online.de](http://www.zitate-online.de/sprueche/wissenschaftler/689/wenn-man-zwei-stunden-lang-mit-einem-maedchen.html)]</cite>

<!-- When users accomplish what they set out to do on a site, they perceive that site to be fast. -->

Einer Studie des MIT zufolge werden _passive_ Wartezeiten durchschnittlich 36% länger eingeschätzt, als sie tatsächlich sind^[[Perspectives on Queues: Social Justice and psychology of Queueing](http://www.jstor.org/stable/171439?seq=1#page_scan_tab_contents) von Richard Larson, MIT]. Wartezeiten werden sich nie komplett vermeiden lassen, aber diese können _gefühlt kürzer_ werden, in dem der _passive_ Teil verkürzt und in _aktive_ Phasen umgewandelt wird. In Aufzügen sind Spiegel, in Wartezimmern Magazine und auf Youtube können – schon während ein Video hochgeladen wird – Titel und Beschreibung eingegeben werden.

Angeblich haben etwa 90% der Knöpfe an Fußgängerüberwegen in Manhattan keinerlei Funktion^[[The Illusion of Time](https://medium.com/swlh/the-illusion-of-time-8f321fa2f191) von Adrian Zumbrunnen] – aber sie sorgen dafür, dass Menschen interagieren können und ein Gefühl von Einflussnahme auf die Ampelphasen haben. Wenn man es eilig hat, fühlt es sich viel besser an, einen Knopf zu drücken, als untätig zu warten. Die Knöpfe funktionieren – nur eben nicht auf technische, sondern rein auf psychologische Weise. Hier findet eine direkte Manipulation des Nutzerverhaltens durch eine Mikro-Interaktion statt und es stellt sich die Frage, ob ein 'Hintergehen' des Nutzers auf dese Weise moralisch vertretbar ist. In diesem Fall hilft es, Leben zu retten, da Fußgänger seltener über rote Ampeln gehen. Letztendlich muss diese Frage aber jeder für sich beantworten.

Der sogenannte Zeigarnik-Effekt bewirkt, dass wir unfertige Vorgänge besser im Gedächtnis behalten als abgeschlossene. Eine Fortschrittsanzeige kann so die Wahrscheinlichkeit erhöhen, dass Nutzer einen angefangenen Prozess abschließen.^[vgl. [Lawsofux.com: Zeigarnik Effect](https://lawsofux.com/zeigarnik-effect)] Vor allem bei Registrierungs- oder Bestellvorgängen hat sich das Prinzip bewährt. Hier wird eine große, aufwändige Aufgabe in angenehmere Teilschritte aufgeteilt ohne Nutzer im Unklaren über die ungefähr zu erwartende Länge des Prozesses zu lassen. 

> Progress indicators by definition call attention to the fact that someone needs to wait. It’s like watching the clock tick down — when you do, time seems to go&nbsp;slower.
> <cite>Luke Wroblewski^[[Mobile Design Details: Avoid The Spinner](https://www.lukew.com/ff/entry.asp?1797) von Luke Wroblewski]</cite>

Auch wenn rein passive Ladeanimationen den Nachteil haben, die Aufmerksamkeit des Nutzers auf die unangenehme Wartezeit zu lenken, haben sie doch eine Berechtigung. Sie sollten jedoch niemals die gesamte Applikation blocken und den Nutzer zur Untätigkeit verdammen. Es sollte versucht werden, diese möglichst in vorhanden UI-Elemente zu integrieren und damit eher unaufdringlich und informell zu gestalten.^[vgl. [The Illusion of Time](https://medium.com/swlh/the-illusion-of-time-8f321fa2f191) von Adrian Zumbrunnen]
Sogenannte _Skeleton Screens_ bieten oft eine bessere Alternative zu großflächigen Ladeanimationen. Da ein 'Skelett' der UI sehr schnell angezeigt werden kann, haben Nutzer früher Zeit, sich zu orientieren und deren Fokus wird eher auf den nach und nach auftauchenden Inhalt gelenkt, als auf den Fakt, dass etwas noch geladen werden muss.^[vgl. [Mobile Design Details: Avoid The Spinner](https://www.lukew.com/ff/entry.asp?1797) von Luke Wroblewski] Inzwischen wird das Konzept von zahlreichen Webseiten und Apps wie Facebook, Slack oder Medium.com eingesetzt. 

<figure class="content-tiny">
  <img data-src="/images/animation-and-pace/skeleton-facebook.gif">
  <figcaption>
    Skeleton Screen und Ladevorgang der Facebook-App
    <sup><a href="https://www.viget.com/articles/a-bone-to-pick-with-skeleton-screens/">Bildquelle</a></sup>
  </figcaption>
</figure>

Unser Gehirn lebt in der Vergangenheit, unser Bewusstsein liegt 80 Millisekunden hinter den tatsächlichen Ereignissen zurück. Zu dem Zeitpunkt, in dem man denkt, ein Ereignis passiere, liegt es bereits in der Vergangenheit. Wie bereits im Kapitel zu [Feedback](/feedback) angesprochen, kann eine positive der Rückmeldung bevor ein Prozess tatsächlich abgeschossen ist, die gefühlte Geschwindigkeit stark erhöhen. 

::: md-container-standout

Die Reaktionszeit einer Schnittstelle hat großen Einfluss darauf, wie sie sich anfühlt: ^[[Response Times: The 3 Important Limits](https://www.nngroup.com/articles/response-times-3-important-limits/) von Jakob Nielsen]

<center>

< 100 Millisekunden: 
_fühlt sich sofortig an_

< 1 Sekunde: 
_fühlt sich übergangslos an_

< 8-10 Sekunden:
_maximale Aufmerksamkeitsspanne_

</center>

:::

Die tatsächliche Zeit, die eine Animation andauern sollte, ist stark situationsabhängig, eine Dauer zwischen 200 und 500ms scheint jedoch in vielen Fällen ein guter Richtwert zu sein.^[[How fast should your UI animations be?](http://valhead.com/2016/05/05/how-fast-should-your-ui-animations-be/) von Val Head]
Bei responsiven Webseiten sollte in Erwägung gezogen werden, die Animationsdauer von großflächigen Übergängen an die Größe des Ausgabemediums anzupassen. Es ist wichtiger, dass sich UI-Animationen richtig anfühlen, als die genauen Zahlen dahinter.


<figure class="content-normal">
  <video muted autoplay loop preload="none" poster="" src="/images/animation-and-pace/loading-stripes.mp4" controls controlsList="nodownload" playsinline>
  </video>
  <figcaption> Der Fortschrittsbalken mit beschleunigenden, rückwärts wandernden Streifen fühlt sich deutlich schneller&nbsp;an.
    <sup><a href="http://www.chrisharrison.net/index.php/Research/ProgressBars2">Quelle</a><sup>
  </figcaption>
</figure>
<!-- ^[[Faster Progress Bars: Manipulating Perceived Duration with Visual Augmentations](http://www.chrisharrison.net/projects/progressbars2/ProgressBarsHarrison.pdf) von Chris Harrison, Zhiquan Yeo & Scott E. Hudson, Carnegie Mellon University] -->

XXXX https://www.ted.com/talks/daniel_engber_how_the_progress_bar_keeps_you_sane


_Schneller_ ist jedoch nicht immer gleichzusetzen mit _besser_. Wenn uns jemand oder etwas ohne merkliche Verzögerung die Antwort auf eine komplexe Frage gibt, werden wir misstrauisch. Hier wird erneut die Relation zur echten Welt klar; Wer im Restaurant nach einer Minute sein Essen bekommt, denkt sich "das kann ja nicht frisch sein" und ein Schlüsselnotdienst bekommt kein Trinkgeld, wenn er seine Arbeit in der tatsächlich benötigten Arbeit erledigt, da diese sehr kurz ist und daher nicht besonders wertvoll wirkt. Hier funktioniert unser Denken nach dem Grundsatz: _Wenn etwas schnell geht, muss es wohl einfach sein und etwas das einfach ist, sollte es billig sein._ Tatsächlich finden eine artifizielle Wartezeiten in zahlreichen Benutzerschnittstellen Anwendung, beispielsweise in Geldzählmaschinen.^[vgl. [The Illusion of Speed](https://www.awwwards.com/paul-bakaus-from-google-the-illusion-of-speed-improving-the-perceived-speed-of-websites.html) von Paul Bakaus]
In Ausnahmefällen kann Wartezeit sogar genutzt werden, um Spannung und Antizipation aufzubauen, meist sollte jedoch versucht werden, _passive_ Wartephasen möglichst kurz zu halten.

<figure class="content-thin">
  <img data-src="/images/animation-and-pace/calculating-savings.jpg">
  <figcaption>
    Manchmal sind künstliche Verzögerungen hilfreich, wenn ein sofortiges Ergebnis unglaubwürdig erscheint.
    <sup><a href="http://uxmas.com/2013/wait-for-it">Bildquelle</a></sup>
  </figcaption>
</figure>

### Bewegung sinn- und verantwortungsvoll einsetzen

Animationen sollten immer eine Aufgabe erfüllen. Wenn eine Animation keinen funktionalen Zweck hat, kann sie sich unangenehm oder lästig anfühlen, besonders wenn sie einen Prozess verlangsamt, der ohne Animation schneller sein könnte.
Bei der Planung und Gestaltung von Animationen in Microinteractions und generell in Interfaces sollte man sich die Frage stellen: _Wie hilft die Anmation ein Problem zu lösen, wie bereichert sie die Positive Erfahrung oder hilft dem Nutzer anderweitig?_ Wenn die Frage nicht zufriedenstellend beantwortet werden kann, sollte von der betrachteten Animation vermutlich abgesehen werden.
Die Animationen einer Benutzerschnittstelle sollten wie eine Geschichte angegangen werden: Nutzer werden nach und nach und in einer bestimmten Reihenfolge an einzelne Elemente herangeführt. Mehrere Handlungsstränge gleichzeitig zu erzählen, erfordert sehr viel Aufmerksamkeit von Nutzern, daher sollte eindeutig sein, was im Mittelpunkt steht.

<figure class="content-thin">
  <img data-src="/images/animation-and-pace/paypal-reciept.gif">
  <figcaption>
    Diese Animation mag auf den ersten Blick ansprechend wirken, jedoch dauert sie viel zu lange und geht weit über ihren Zweck hinaus.
    <sup><a href="https://vimeo.com/197761851">Bildquelle</a></sup>
  </figcaption>
</figure>


<!-- ![Beispiel für eine misslungene UI-Animation^[https://medium.com/@sophie_paxtonUX/stop-gratuitous-ui-animation-9ece9aa9eb97] ](/images/animation-and-pace/poormotiondesign.gif ""){.content-thin}  -->

Leider ist es teilweise sehr aufwändig und teuer gute Animationen zu implementieren, hier sollte Qualität vor Quanitiät stehen, da sonst womöglich die Nutzererfahrung gar verschlechtert wird. Doch auch für hervorragende Animationen besteht die Gefahr, dass diese auf Dauer hinderlich werden. Was beim ersten Mal als nette Überraschung empfunden wird, kann beim zehnten Mal langweilig oder sogar lästig erscheinen. In einigen Fällen sollte die Option angeboten werden, Animation zu auszuschalten oder reduzieren und so Nutzern die Möglichkeit gegeben werden, das Interface ihren Präferenzen anzupassen.^[Bei Webseiten sollte die Browsereinstellung _prefers-reduced-motion_ beachtet werden. Mehr Informationen dazu: [Implementing a reduced-motion mode](https://hugogiraudel.com/2018/03/19/implementing-a-reduced-motion-mode/) von Hugo Giraudel]
Für manche Nutzer bedeutet jede Animation, dass sich die Augen neu fokussieren müssen, Bei einigen können sogar gesundheitliche Beschwerden wie Schwindel auftreten (vestibuläre Störungen). Besonders Effekte, bei denen sich mehrere Elemente in gegensätzliche Richtungen bewegen, wie Parallax-Scrolling können desorientierende Wirkung haben.^[Mehr Informationen zu möglichen gesundheitlichen Auswirkungen von Animation im Artikel [Designing Safer Web Animation For Motion Sensitivity](http://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity) von Val Head]

::: md-container-standout
Als Faustregel gilt: Je größer die animierte Fläche, je ausschweifender und auffälliger die Animation und je öfter die Nutzung, diesto höher ist die Gefahr, dass diese als negativ empfunden werden könnte.
:::

Gerade bei Animationen besteht schnell die Gefahr, ins reine _Styling_^[Styling bedeutet die formalästhetische Überarbeitung eines Produkts im Sinne einer Verschönerung mit dem Ziel besserer Verkäuflichkeit. Funktionale Verbesserungen werden dabei nicht angestrebt. [...] Der Funktionalismus kritisierte das Styling als oberflächlich und nicht von einer funktionalen Notwendigkeit getragen. [...] - Quelle: [Designlexikon.net](http://www.designlexikon.net/Fachbegriffe/S/styling.html) ] abzurutschen. Der eigentliche Inhalt eines Produktes sollte immer im Vordergrund stehen und Animationen sind geradezu dafür gemacht, von diesem abzulenken. Wie bereits im Kapitel zu [Feedback](/feedback) angesprochen, sollte versucht werden, bereits vorhandene UI-Elemente umzuformen und zu integrieren, anstatt neue hinzuzufügen. Außerdem sollten sie von Anfang an und sorgfältig eingeplant werden und regelmäßig mit Nutzern getestet werden.

### Die Möglichkeiten von Animation in Microinteractions zusammengefasst:

* Interaktionen fühlen sich flüssig und angenehm an
* schaffen von Persönlichkeit
* verbesserte Benutzbarkeit
* Erhöhung der Nutzungsgeschwindigkeit (besonders für neue Nutzer)
* Erhöhung der gefühlten Geschwindigkeit
* die richtige Erwartungshaltung schaffen und Hinweise geben, was passieren wird
* klares Feedback auf Eingaben geben
* Orientierung über die momentane 'Position' im Interface geben
* Verdeutlichen von Hierarchie
* den Fokus des Nutzers lenken

::: md-container-more

### Sehens-, hörens- und lesenswert zum Thema Animation und Geschwindigkeit

* Buch: [Designing Interface Animation](https://rosenfeldmedia.com/books/designing-interface-animation/) von Val Head
* Video: [The Illusion of Speed](https://www.awwwards.com/paul-bakaus-from-google-the-illusion-of-speed-improving-the-perceived-speed-of-websites.html) von Paul Bakaus
* Abschnitt [_Motion_ in den Material Design Guidlines](https://material.io/guidelines/motion/material-motion.html) von Google
* Artikel: [Stop Gratuitous UI Animation](https://medium.com/@sophie_paxtonUX/stop-gratuitous-ui-animation-9ece9aa9eb97) von Sophie Paxton
* Vortrag: [Designing Motion: Smart Transitions in UI Design](https://youtu.be/NaqKjp14Xbg) von Adrian Zumbrunnen


<!-- * Artikel: [Animation Principles in UI](https://www.invisionapp.com/blog/animation-and-pace-principles-in-ui/) von Brittany Layton -->
<!-- * Podcast: [Motion and Meaning](http://www.motionandmeaning.io/) mit Val Head & Cennydd Bowles -->
<!-- * Artikel: [The Weird, Terrifying Physics Of iOS 7](https://www.buzzfeed.com/jwherrman/the-weird-terrifying-physics-of-ios-7) von John Herrman & Jake Levy -->

<!-- * Artikel: [How Functional Animation Helps Improve User Experience](https://www.smashingmagazine.com/2017/01/how-functional-animation-helps-improve-user-experience/) von Nick Babich -->

<!-- - Artikel: [The Force of Motion](https://medium.com/@tubikstudio/interface-animation-the-force-of-motion-598b84734e69#.1kwmtqwqm) von Tubik Studio (mit einigen exzessiven Beispielen) -->

:::
