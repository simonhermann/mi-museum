# Animation und Geschwindigkeit von Microinteractions

Animation in Kontext von Microinteractions ist meist eine Form von [Feedback](/feedback) oder [Trigger](triggers).
Neue Nutzer eines Digitalen Produktes benötigen Hinweise, die zeigen, wie eine Microinteraction zu benutzen ist. Dies gilt insbesondere für Interfaces, die unbekannte oder einzigartige Interaktionen enthalten. Eine Reihe von visuellen Hinweisen sollte zeigen, welche Interaktionen möglich sind. Diese Art der funktionalen Animation lenkt die Aufmerksamkeit des Benutzers auf die möglichen Interaktionen und dient so als [Auslöser](/triggers) für diese.

Nachdem eine Microinteraction vom Nutzer ausgelöst wurde, kann Animation als visuelle Bestätigung der Nutzereingabe dienen. Dies bedeutet, dass Benutzer anhand dieser verstehen müssen, wie ihre Aktion mit den Reaktionen des Produktes verknüpft ist. Wie bereits [beschrieben](/feedback#unmittelbarkeit), sollte hier zwischen der Rückmeldung auf eine Eingabe und der Ausführung eines Befehls unterschieden werden.

> Think of motion design like a movie. Seamless transitions keep you focused on the story, and bring experiences to life. We can invite that feeling into our designs, leading people from one task to the next with cinematic ease.^[[Fluent is Microsoft’s next generation design principle](https://developer.microsoft.com/en-us/windows/projects/campaigns/windows-dev-essentials-design-principles)]
> <cite>"Motion" im Microsoft Fluent Design System</cite>

<!-- Wenn ein Teil des Interfaces entweder autonom arbeitet oder nicht standardkonforme Aktionen ausführt, kann es seine Benutzer verwirren oder sogar irritieren. Da die Bewegung der Objekte im wirklichen Leben bekannt ist, erwartet der Nutzer von einem Smartphone dies. -->

<figure class="content-skinny" style="max-width:12rem;">
  <video muted loop preload="none" poster="images/animation/shuttle-music.jpg" src="images/animation/shuttle-music.mp4" controls controlsList="nodownload">
  </video>
  <figcaption>Animierte Übergänge zeigen die Relation zwischen einzelnen UI-Elementen und ermöglichen so die räumliche und zeitliche Orientierung. Vor allem auf kleineren Bildschirmen ist dies von Vorteil, da hier weniger Fixpunkte vorhanden sind.
  </figcaption>
</figure>

#### Natürliche Bewegung

In der physischen Welt gibt es kaum gerdade Bewegungen, abrupte Statusänderungen oder
XXXX zb exponentiell statt linear, Kurven statt Geraden
--> Bezug auf Regeln der Physischen Welt

^[[Making CSS Animations Feel More Natural](https://css-tricks.com/making-css-animations-feel-natural/) von Brandon Gregory]

<figure class="content-narrow">
  <img data-src="/images/animation/ios-open-folder-distance.gif">
  <figcaption>
    Veranschaulichung der Distanz, die ein phyisches Objekt zurücklegen würde, dessen wahrgenommenes Größenwachstum dem Öffnen einer App in iOS 7 entspricht. (24.62 ft ≈ 7,5 m)
    <sup><a href="https://www.buzzfeed.com/jwherrman/the-weird-terrifying-physics-of-ios-7">Bildquelle</a></sup>
  </figcaption>
</figure>

#### Branding durch Animationen

XXXX Markenbindung durch Verspieltheit: bekannte/standard Interaktionen (die eher seltener genutzt werden) aufwerten durch verspielte Animation --> Nutzererfahrung verbessern ohne Usability zu beeinträchtigen, Nutzer überraschen und erheitern --> [Signature Moments](/signature-moments)

#### Gefühlte Geschwindikeit

> Wenn man zwei Stunden lang mit einem Mädchen zusammensitzt, meint man, es wäre eine Minute. Sitzt man jedoch eine Minute auf einem heißen Ofen, meint man, es wären zwei Stunden. Das ist Relativität.^[[zitate-online.de](http://www.zitate-online.de/sprueche/wissenschaftler/689/wenn-man-zwei-stunden-lang-mit-einem-maedchen.html)]
> <cite> Albert Einstein</cite>

Das Gefühl für Zeit eines Menschen ist nicht absolut, sondern abhängig von unzähligen Faktoren wie Stimmung, Erwartungshaltung, Persönlichkeit oder Kontext. Wenn sich etwas _gut_ anfühlt, vergeht es meist viel zu schnell, während ungeliebte Aufgaben kaum zu enden scheinen. Die Selben Prinzipien treffen auch auf Benutzerschnittstellen zu, und Designer sollten sie sich zu Nutze machen.

Einer Studie des MIT zufolge werden _passive_ Wartezeiten durchschnittlich 36% länger eingeschätzt, als sie tatsächlich sind^[[Perspectives on Queues: Social Justice and psychology of Queueing](http://www.jstor.org/stable/171439?seq=1#page_scan_tab_contents) von Richard Larson, MIT]. Wartezeiten werden sich nie komplett vermeiden lassen, aber diese können _gefühlt kürzer_ werden, in dem der _passive_ Teil verkurzt und in _aktive_ Phasen umgewandelt wird. In Aufzügen sind Spiegel, in Wartezimmern Magazine und auf Youtube können schon während ein Video hochgeladen wird Titel und Beschreibung eingegeben werden.

Angeblich haben etwa 90% der Knöpfe an Fußgängerüberwegen in Manhattan keinerlei Funktion^[[The Illusion of Time](https://medium.com/swlh/the-illusion-of-time-8f321fa2f191) von Adrian Zumbrunnen] – aber sie sorgen dafür, dass Menschen interagieren können und das Gefühl von Einfluss haben auf die Ampelphasen haben. Wenn man es eilig hat, fühlt es sich viel besser an, einen Knpf zu drücken, als untätig zu warten. Die Knöpfe funktionieren – nur eben nicht auf technische, sondern rein auf psychologische Weise. Hier findet eine direkte Manipulation des Nutzerverhaltens durch eine Mikro-Interaktion statt und es stellt sich die Frage, ob ein "Hintergehen" des Nutzers auf dese Weise moralisch vertretbar ist. In diesem Fall hilft es, Leben zu retten, da Fußgänger seltener über rote Ampeln gehen. Letztendlich muss diese Frage aber jeder für sich beantworten.

skeleton UI

200-500ms^[[How fast should your UI animations be?](http://valhead.com/2016/05/05/how-fast-should-your-ui-animations-be/) von Val Head]

When users accomplish what they set out to do on a site, they perceive that site to be fast.



Bei Responsiven Webseiten sollte in Erwägung gezogen werden, bei großflächigen Übergängen die Dauer der Animation an die Größe des Ausgabemediums anzupassen.
Es ist wichtiger, dass sich UI-Animationen richtig anfühlen, als die genauen Zahlen dahinter.

::: md-container-standout

Die Reaktionszeit einer Schnittstelle hat große Einfluss darauf, wie sie sich anfuhlt: ^[[Response Times: The 3 Important Limits](https://www.nngroup.com/articles/response-times-3-important-limits/) von Jakob Nielsen]

* **100 Millisekunden:** fühlt sich sofortig an
* **1 Sekunde:** fühlt sich überganslos an
* **10 Sekunden:** maximale Aufmerksamkeitsspanne

:::

Flow/Tunnel
People who experience flow:

* sense of clarity, extasy and feels highly rewarding
* --> thats how a designer wants people to feel

<figure class="content-narrow">
  <video muted autoplay loop preload="none" poster="" src="/images/animation/loading-stripes.mp4" controls controlsList="nodownload">
  </video>
  <!-- http://assets.eli.wtf/talks/perceived-perf-talk/#/36 -->
</figure>

Der Fortschrittsbalken mit sich beschleunigenden, rückwärts wandernden Schrägstreifen fühlt sich 12% schneller an^[[Faster Progress Bars: Manipulating Perceived Duration with Visual Augmentations](http://www.chrisharrison.net/projects/progressbars2/ProgressBarsHarrison.pdf) von Chris Harrison, Zhiquan Yeo & Scott E. Hudson, Carnegie Mellon University].

XXXX^[[Smart Transitions In User Experience Design](https://www.smashingmagazine.com/2013/10/smart-transitions-in-user-experience-design) von Adrian Zumbrunnen]




_Schneller_ ist jedoch nicht immer gleichzusetzen mit _besser_.
XXXX^[[The Illusion of Time](https://medium.com/swlh/the-illusion-of-time-8f321fa2f191) von Adrian Zumbrunnen]
Wenn uns eine XXXX ohne merkliche Verzögerung die Antwort auf eine Komplexe Frage gibt, werden wir misstrauisch. Hier wird erneut die Relation zur echten Welt klar.
Bsp

<figure class="content-skinny">
  <img data-src="/images/animation/calculating-savings.jpg">
  <figcaption>
    Manchmal sind künstliche Verzögerungen hilfreich, wenn ein sofortiges Ergebnis unglaubwürdig erscheint.
    <sup><a href="http://uxmas.com/2013/wait-for-it">Bildquelle</a></sup>
  </figcaption>
</figure>



### Bewegung sinn- und verantwortungsvoll einsetzen

Animationen sollten immer eine Aufgabe erfüllen. Wenn eine Animation keinen funktionalen Zweck hat, kann sie sich unangenehm oder lästig anfühlen, besonders wenn sie einen Prozess verlangsamt, der ohne Animation schneller sein könnte.
Bei der Planung und Gestaltung von Animationen in Microinteractions und generell in Interfaces sollte man sich die Frage stellen: _Wie hilft die Anmation ein Problem zu lösen, wie bereichert sie die Positive Erfahrung oder hilft dem Nutzer anderweitig?_ Wenn die Frage nicht zufriedenstellend beantwortet werden kann, sollte von der betrachteten Animation vermutlich abgesehen werden.
Die Animationen einer Benutzerschnittstelle sollten wie eine Geschichte angegangen werden: Nutzer werden nach und nach und in einer bestimmten Reihenfolge an einzelne Elemente herangeführt. Mehrere Handlungsstränge gleichzeitig zu erzählen, erfordert sehr viel Aufmerksamkeit von Nutzern, daher sollte eindeutig sein, was im Mittelpunkt steht.

<figure class="content-skinny">
  <img data-src="/images/animation/paypal-reciept.gif">
  <figcaption>
    Diese Animation mag auf den ersten Blick ansprechend wirken, jedoch dauert sie viel zu lange und geht weit über ihren Zweck hinaus.
    <sup><a href="https://vimeo.com/197761851">Bildquelle</a></sup>
  </figcaption>
</figure>

<!-- ![XXXX^[https://dribbble.com/shots/2440217-Fluid-Switch] ](/images/animation/switch-fluidswitch.gif){.content-skinny} -->

<!-- ![Beispiel für eine misslungene UI-Animation^[https://medium.com/@sophie_paxtonUX/stop-gratuitous-ui-animation-9ece9aa9eb97] ](/images/animation/poormotiondesign.gif ""){.content-skinny}  -->

Doch auch für hervorragende Animationen besteht die Gefahr, dass diese auf Dauer hinderlich werden. Was beim ersten Mal als nette Überraschung empfunden wird, kann beim zehnten Mal langweilig oder sogar lästig erscheinen. In einigen Fällen sollte die Option angeboten werden, Animation zu reduzieren und so Nutzern die Möglichkeit gegeben werden, das Interface ihren Präferenzen anzupassen.^[Bei Webseiten sollte die Browsereinstellung _prefers-reduced-motion_ beachtet werden. Mehr Informationen dazu im [Artikel von CSS Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)]
Für Manche Nutzer bedeutet jede Animation, dass sich die Augen neu fokussieren müssen, Bei einigen können sogar gesundheitliche beschwerden wie Schwindel auftreten (vestibuläre Störungen). Besonders Effekte, bei denen sich mehrere Elemente in gegensätzliche Richtungen bewegen, wie Parallax-Scrolling können desorientierende Wirkung haben.^[Mehr Informationen zu möglichen gesundheitlichen Auswirkungen von Animation im Artikel [Designing Safer Web Animation For Motion Sensitivity](http://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity) von Val Head]

::: md-container-standout
Als Faustregel gilt: Je größer die animierte Fläche, je ausschweifender und auffälliger die Animation und je öfter die Nutzung, diesto höher ist die Gefahr, dass diese als negativ empfunden werden könnte.
:::

Gerade bei Animationen besteht schnell die Gefahr, ins reine _Styling_^[Styling bedeutet die formalästhetische Überarbeitung eines Produkts im Sinne einer Verschönerung mit dem Ziel besserer Verkäuflichkeit. Funktionale Verbesserungen werden dabei nicht angestrebt. [...] Der Funktionalismus kritisierte das Styling als oberflächlich und nicht von einer funktionalen Notwendigkeit getragen. [...] - Quelle: [Designlexikon.net](http://www.designlexikon.net/Fachbegriffe/S/styling.html) ] abzurutschen. Der eigentliche Inhalt eines Produktes sollte immer im Vordergrund stehen. Wie bereits im Kapitel zu [Feedback](/feedback) angesprochen, sollte versucht werden, bereits vorhandene UI-Elemente umzuformen und zu integrieren, anstatt neue hinzuzufügen.

--> XXXX Animation immer durchdacht und zweckmäßig. Prototypen & Testen.

### Die Möglichkeiten von Animation in Microinteractions zusammengefasst:

* Interaktionen fühlen sich flüssig und angenehm an
* schaffen von Personlichkeit
* verbesserte Benutzbarkeit
* Erhöhung der Geschwindikeit (besonders für neue Nutzer)
* Erhöhung der gefühlten Geschwindikeit
* die richtige Erwartungshaltung schaffen und Hinweise geben, was passieren wird
* klares Feedback auf Eingaben geben
* Orientierung über die momentane "Position" im Interface geben
* Verdeutlichen von Hierarchie
* den Fokus auf des Nutzers lenken

::: md-container-more

### Sehens-, hörens- und lesenswert zum Thema Animation

* Buch: [Designing Interface Animation](https://rosenfeldmedia.com/books/designing-interface-animation/) von Val Head
* Podcast: [Motion and Meaning](http://www.motionandmeaning.io/) mit Val Head & Cennydd Bowles
* Video: [The Illusion of Speed](https://www.awwwards.com/paul-bakaus-from-google-the-illusion-of-speed-improving-the-perceived-speed-of-websites.html) von Paul Bakaus
* Abschnitt [_Motion_ in den Material Design Guidlines](https://material.io/guidelines/motion/material-motion.html) von Google
* Artikel: [Stop Gratuitous UI Animation](https://medium.com/@sophie_paxtonUX/stop-gratuitous-ui-animation-9ece9aa9eb97) von Sophie Paxton
* Vortrag: [Designing Motion: Smart Transitions in UI Design](https://youtu.be/NaqKjp14Xbg) von Adrian Zumbrunnen
* Artikel: [Animation Principles in UI](https://www.invisionapp.com/blog/animation-principles-in-ui/) von Brittany Layton

<!-- * Artikel: [The Weird, Terrifying Physics Of iOS 7](https://www.buzzfeed.com/jwherrman/the-weird-terrifying-physics-of-ios-7) von John Herrman & Jake Levy -->

<!-- * Artikel: [How Functional Animation Helps Improve User Experience](https://www.smashingmagazine.com/2017/01/how-functional-animation-helps-improve-user-experience/) von Nick Babich -->

<!-- - Artikel: [The Force of Motion](https://medium.com/@tubikstudio/interface-animation-the-force-of-motion-598b84734e69#.1kwmtqwqm) von Tubik Studio (mit einigen exzessiven Beispielen) -->

:::
