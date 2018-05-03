# Animation und Geschwindigkeit von Microinteractions

Animation im Kontext von Microinteractions ist meist eine Form von [Feedback](/feedback) oder [Trigger](/triggers).
Neue Nutzer eines digitalen Produktes benötigen Hinweise, die zeigen, wie eine Microinteraction zu benutzen ist. Dies gilt insbesondere für Interfaces, die unbekannte oder einzigartige Interaktionen enthalten. Eine Reihe von visuellen Hinweisen sollte zeigen, welche Interaktionen möglich sind. Diese Art der funktionalen Animation lenkt die Aufmerksamkeit des Benutzers auf die möglichen Interaktionen und dient so als Auslöser für diese.

Nachdem eine Microinteraction vom Nutzer ausgelöst wurde, kann Animation als visuelle Bestätigung der Nutzereingabe dienen. Dies bedeutet, dass Benutzer anhand dieser verstehen müssen, wie ihre Aktion mit den Reaktionen des Produktes verknüpft ist. Wie bereits [beschrieben](/feedback#unmittelbarkeit), sollte hier zwischen der Rückmeldung auf eine Eingabe und der Ausführung eines Befehls unterschieden werden.

<figure class="content-thin">
  <img data-src="/images/animation-and-pace/screen-transitions.gif">
  <figcaption>
    Animierte Übergänge zeigen die Relation zwischen einzelnen UI-Elementen und ermöglichen so die räumliche und zeitliche Orientierung. Vor allem auf kleineren Bildschirmen ist dies von Vorteil, da hier weniger Fixpunkte vorhanden sind.
    <sup><a href="https://plat4m.com/blog/3-types-of-animations-that-improve-user-experience">Bildquelle</a></sup>
  </figcaption>
</figure>

Im Gespräch von Mensch zu Mensch nutzen wir subtile Gesten, um unsere Stimmung auszudrücken, bestimmte Worte zu unterstreichen, oder gar gänzlich nonverbal zu kommunizieren. Bevor die Antwort auf eine Frage durch Worte gegeben wird, können wir oft schon an Mimik und Gestik ablesen, wie diese ausfallen wird.
Diese Verbindung zwischen Eingabe durch Nutzer ("Frage") und Feedback des Interfaces ("Antwort") lässt sich auf ähnliche Weise auch in grafischen Benutzeroberflächen herstellen, Animation ermöglicht hier ein unmittelbare [Rückmeldung](/feedback) auf eine Eingabe. Besonders in Gestenbasierten Interfaces, sollte Rückmeldung immer _kontinuierlich_ erfolgen. Die direkte Manipulation von Inhalten fühlt sich dann authentisch und unwillkürlich richtig an, da sie sich ähnlich einem Objekt der physischen Welt verhält. Beispielsweise fühlt sich eine 'Swipe'-Geste dann natürlich an, wenn der Inhalt direkt dem Finger folgt.
Evolutionär bedingt zieht Bewegung ganz natürlich die menschliche Aufmerksamkeit auf sich. Animation kann also genutzt werden, um den Fokus des Nutzers auf bestimmte Elemente eines Interfaces zu lenken.^[vgl. Head, Val: [Designing Interface Animation](https://rosenfeldmedia.com/books/designing-interface-animation/) (S. 79 - 93), Rosenfeld Media, 2016] <!-- XXXX Beispiel --> Ein Ziel der Rückmeldung einer Microinteraction ist, vom Nutzer gesehen zu werden, daher eignet sich Animation oft perfekt dafür. Feedback bringt immer eine Veränderung der Benutzerschnittstelle mit sich, doch natürlich muss nicht ausnahmslos jede Rückmeldung animiert werden. Vor allem für Situationen, in denen der Fokus des Nutzers auf ein bestimmtes Element gelenkt werden muss, um das Ziel des Nutzers zu erfüllen, kann Animation äußerst nützlich sein. Ein digitales Formular, welches nur Teilweise ausgefüllt wurde, könnte beispielsweise automatisch zum noch leeren Feld scrollen.

<!-- XXXX TODO head: ch7: cause & effect -->
<!-- XXXX TODO head: ch7: feedback -->

> Think of motion design like a movie. Seamless transitions keep you focused on the story, and bring experiences to life. We can invite that feeling into our designs, leading people from one task to the next with cinematic&nbsp;ease.
> <cite>'Motion' im Microsoft Fluent Design System^[[Fluent is Microsoft’s next generation design principle](https://developer.microsoft.com/en-us/windows/projects/campaigns/windows-dev-essentials-design-principles)]</cite>

In der physischen Welt gibt es kaum gerade Bewegungen oder abrupte Statusänderungen. Damit sich eine Animation 'echt' anfühlt, sollten diese Eigenschaften übernommen werden. Animationen sollten eher in leichten Bögen als in perfekten Geraden verlaufen und der Zeitliche Verlauf zum Beispiel exponentiell statt linear verlaufen. Viele der in den 1930ern von Disney formulierten 12 Grundprinzipien der Animation^[[The illusion of life](https://vimeo.com/93206523) - Cento Lodigiani / Vimeo] finden auch im UI-Design Anwendung. Es gilt jedoch die Balance zu halten zwischen verspielter Animation und Funktionalität, das jeweilige Maß ist abhängig von Produkt und Nutzergruppe.

<figure class="content-normal">
  <video muted autoplay loop preload="none" poster="" src="/images/animation-and-pace/natural-01-easing-v1.mp4
" controls controlsList="nodownload" playsinline>
  </video>
  <figcaption> Veranschaulichung der Bewegungen, die durch verschiedene Bézierkurven definiert wird. Das 'Easing' des blauen Objektes kommt einer Bewegung in der physischen Welt näher und wirkt damit natürlicher.
    <sup><a href="https://material.io/guidelines/motion/duration-easing.html">Quelle</a><sup>
  </figcaption>
</figure>
<!-- <figure class="content-thin">
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
</figure> -->


### Gefühlte Geschwindigkeit

Das Gefühl eines Menschen für Zeit ist nicht absolut, sondern abhängig von unzähligen Faktoren wie Stimmung, Erwartungshaltung, Persönlichkeit oder Kontext. Wenn sich etwas _gut_ anfühlt, vergeht es meist viel zu schnell, während ungeliebte Aufgaben kaum zu enden scheinen. Die selben Prinzipien treffen auch auf Benutzerschnittstellen zu, und Designer sollten sie sich zu Nutze machen. Die ersten Versionen von iOS liefen beispielsweise auf sehr schwacher Hardware, trotzdem wirkte es flüssig und performant, da Ladezeiten durch animierte Übergänge verschleiert wurden.^[[Steve Jobs - iPhone Introduction in 2007 (Complete)](https://youtu.be/9hUIxyE2Ns8?t=15m31s) - N2TechGeeks / YouTube]

> Wenn man zwei Stunden lang mit einem Mädchen zusammensitzt, meint man, es wäre eine Minute. Sitzt man jedoch eine Minute auf einem heißen Ofen, meint man, es wären zwei Stunden. Das ist Relativität. 
> <cite> Albert Einstein^[[zitate-online.de](http://www.zitate-online.de/sprueche/wissenschaftler/689/wenn-man-zwei-stunden-lang-mit-einem-maedchen.html)]</cite>

<!-- When users accomplish what they set out to do on a site, they perceive that site to be fast. -Zumbrunnen -->

Einer Studie des MIT zufolge werden _passive_ Wartezeiten durchschnittlich 36% länger eingeschätzt, als sie tatsächlich sind^[[Perspectives on Queues: Social Justice and psychology of Queueing](http://www.jstor.org/stable/171439?seq=1#page_scan_tab_contents) von Richard Larson, MIT]. Wartezeiten werden sich nie komplett vermeiden lassen, aber diese können _gefühlt kürzer_ werden, in dem der _passive_ Teil verkürzt und in _aktive_ Phasen umgewandelt wird. In Aufzügen sind Spiegel, in Wartezimmern Magazine und auf Youtube können – schon während ein Video hochgeladen wird – Titel und Beschreibung eingegeben werden. Kurze Ladezeiten können überdeckt werden von animierten Übergängen von UI-Elementen, so wird immerhin das Auge des Nutzers für einige hundert Millisekunden 'aktiv'. Wichtig ist, die Aufmerksamkeit des Nutzers immer auf den _Fortschritt_ und nicht auf die Wartezeit zu lenken.^[[4 Ways Animation Can Actually Improve User Experience](https://conversionxl.com/blog/animation-improve-user-experience/), Matt Eller/conversionxl.com]

Angeblich haben etwa 90% der Knöpfe an Fußgängerüberwegen in Manhattan keinerlei Funktion^[[The Illusion of Time](https://medium.com/swlh/the-illusion-of-time-8f321fa2f191) von Adrian Zumbrunnen] – aber sie sorgen dafür, dass Menschen interagieren können und ein Gefühl von Einflussnahme auf die Ampelphasen haben. Wenn man es eilig hat, fühlt es sich viel besser an, einen Knopf zu drücken, als untätig zu warten. Die Knöpfe funktionieren – nur eben nicht auf technische, sondern rein auf psychologische Weise. Hier findet eine direkte Manipulation des Nutzerverhaltens durch eine Mikro-Interaktion statt und es stellt sich die Frage, ob ein 'Hintergehen' des Nutzers auf diese Weise moralisch vertretbar ist. In diesem Fall hilft es, Leben zu retten, da Fußgänger seltener über rote Ampeln gehen. Letztendlich muss diese Frage aber jeder für sich beantworten.

Der sogenannte Zeigarnik-Effekt bewirkt, dass wir unfertige Vorgänge besser im Gedächtnis behalten als abgeschlossene. Eine Fortschrittsanzeige kann so die Wahrscheinlichkeit erhöhen, dass Nutzer einen angefangenen Prozess abschließen.^[vgl. [Lawsofux.com: Zeigarnik Effect](https://lawsofux.com/zeigarnik-effect)] Vor allem bei Registrierungs- oder Bestellvorgängen hat sich das Prinzip bewährt. Hier wird eine große, aufwändige Aufgabe in angenehmere Teilschritte aufgeteilt ohne Nutzer im Unklaren über die ungefähr zu erwartende Länge des Prozesses zu lassen. 

> Progress indicators by definition call attention to the fact that someone needs to wait. It’s like watching the clock tick down — when you do, time seems to go&nbsp;slower.
> <cite>Luke Wroblewski^[[Mobile Design Details: Avoid The Spinner](https://www.lukew.com/ff/entry.asp?1797) von Luke Wroblewski]</cite>

Auch wenn rein passive Ladeanimationen den Nachteil haben, die Aufmerksamkeit des Nutzers auf die unangenehme Wartezeit zu lenken, haben sie doch eine Berechtigung. Sie sollten jedoch niemals die gesamte Applikation blocken und den Nutzer zur Untätigkeit verdammen. Es sollte versucht werden, diese möglichst in vorhanden UI-Elemente zu integrieren und damit eher unaufdringlich und informell zu gestalten.^[vgl. [The Illusion of Time](https://medium.com/swlh/the-illusion-of-time-8f321fa2f191) von Adrian Zumbrunnen]
Sogenannte _Skeleton Screens_ bieten oft eine bessere Alternative zu großflächigen Ladeanimationen. Da ein 'Skelett' der UI sehr schnell angezeigt werden kann, haben Nutzer früher Zeit, sich zu orientieren und deren Fokus wird eher auf den nach und nach auftauchenden Inhalt gelenkt, als auf den Fakt, dass etwas noch geladen werden muss.^[vgl. [Mobile Design Details: Avoid The Spinner](https://www.lukew.com/ff/entry.asp?1797) von Luke Wroblewski] Inzwischen wird das Konzept von zahlreichen Webseiten und Apps wie Facebook, Slack oder Medium eingesetzt. 

<figure class="content-tiny">
  <img data-src="/images/animation-and-pace/skeleton-fb.gif">
  <figcaption>
    Skeleton Screen und Ladevorgang der Facebook-App
    <sup><a href="https://www.viget.com/articles/a-bone-to-pick-with-skeleton-screens/">Bildquelle</a></sup>
  </figcaption>
</figure>

Unser Gehirn lebt in der Vergangenheit, unser Bewusstsein liegt 80 Millisekunden hinter den tatsächlichen Ereignissen zurück. Zu dem Zeitpunkt, in dem man denkt, ein Ereignis passiere, liegt es bereits in der Vergangenheit. Wie bereits im Kapitel zu [Feedback](/feedback) angesprochen, kann eine positive der Rückmeldung bevor ein Prozess tatsächlich abgeschossen ist, die gefühlte Geschwindigkeit stark erhöhen. 
Die Zeit, die eine Animation andauern sollte, ist stark situationsabhängig, eine Dauer zwischen 200 und 500 Millisekunden scheint jedoch in vielen Fällen ein guter Richtwert zu sein.^[[How fast should your UI animations be?](http://valhead.com/2016/05/05/how-fast-should-your-ui-animations-be/) von Val Head] Es ist wichtiger, dass sich UI-Animationen richtig anfühlen, als die genauen Zahlen dahinter. Bei responsiven Webseiten sollte in Erwägung gezogen werden, die Animationsdauer von großflächigen Übergängen an die Größe des Ausgabemediums anzupassen.

<figure class="content-normal">
  <video muted autoplay loop preload="none" poster="" src="/images/animation-and-pace/loading-stripes.mp4" controls controlsList="nodownload" playsinline>
  </video>
  <figcaption> Der Fortschrittsbalken mit beschleunigenden, rückwärts wandernden Streifen fühlt sich deutlich schneller&nbsp;an.
    <sup><a href="http://www.chrisharrison.net/index.php/Research/ProgressBars2">Quelle</a><sup>
  </figcaption>
</figure>
<!-- ^[[Faster Progress Bars: Manipulating Perceived Duration with Visual Augmentations](http://www.chrisharrison.net/projects/progressbars2/ProgressBarsHarrison.pdf) von Chris Harrison, Zhiquan Yeo & Scott E. Hudson, Carnegie Mellon University] -->

<!-- XXXX https://www.ted.com/talks/daniel_engber_how_the_progress_bar_keeps_you_sane -->

_Schneller_ ist jedoch nicht immer gleichzusetzen mit _besser_. Wenn uns jemand oder etwas ohne merkliche Verzögerung die Antwort auf eine komplexe Frage gibt, werden wir misstrauisch. Hier wird erneut die Relation zur echten Welt klar; Wer im Restaurant nach einer Minute sein Essen bekommt, denkt sich "das kann ja nicht frisch sein" und ein Schlüsselnotdienst bekommt kein Trinkgeld, wenn er seine Arbeit in der tatsächlich benötigten Arbeit erledigt, da diese sehr kurz ist und daher nicht besonders wertvoll wirkt. Hier funktioniert unser Denken nach dem Grundsatz: _Wenn etwas schnell geht, muss es wohl einfach sein und etwas das einfach ist, sollte es billig sein._ Tatsächlich finden artifizielle Wartezeiten in zahlreichen Benutzerschnittstellen Anwendung, beispielsweise in Geldzählmaschinen.^[vgl. [The Illusion of Speed](https://www.awwwards.com/paul-bakaus-from-google-the-illusion-of-speed-improving-the-perceived-speed-of-websites.html) von Paul Bakaus]
In Ausnahmefällen kann Wartezeit sogar genutzt werden, um Spannung und Antizipation aufzubauen, meist sollte jedoch versucht werden, _passive_ Wartephasen möglichst kurz zu halten.

<figure class="content-thin">
  <img data-src="/images/animation-and-pace/calculating-savings.jpg">
  <figcaption>
    Manchmal sind künstliche Verzögerungen hilfreich, wenn ein sofortiges Ergebnis unglaubwürdig erscheint.
    <sup><a href="http://uxmas.com/2013/wait-for-it">Bildquelle</a></sup>
  </figcaption>
</figure>

### Bewegung sinn- und verantwortungsvoll einsetzen

<!-- TODO XXXX
^[[Designing Motion: Smart Transitions in UI Design](https://youtu.be/NaqKjp14Xbg) von Adrian Zumbrunnen / UX Salon / YouTube]
^[[Smart Transitions In User Experience Design](https://www.smashingmagazine.com/2013/10/smart-transitions-in-user-experience-design) von Adrian Zumbrunnen / Smashingmagazine] 

gutes design ist unsichtbar (fällt nicht auf), besonders bei MIs
-->

Animationen sollten immer eine Aufgabe erfüllen. Wenn eine Animation keinen funktionalen Zweck hat, kann sie sich unangenehm oder lästig anfühlen, besonders wenn sie einen Prozess verlangsamt, der ohne Animation schneller sein könnte.
Bei der Planung und Gestaltung von Animationen in Microinteractions und generell in Interfaces sollte man sich die Frage stellen: _Wie hilft die Animation ein Problem zu lösen, wie bereichert sie die Positive Erfahrung oder hilft dem Nutzer anderweitig?_ Wenn die Frage nicht zufriedenstellend beantwortet werden kann, sollte von der betrachteten Animation vermutlich abgesehen werden.
Die Animationen einer Benutzerschnittstelle sollten wie eine Geschichte angegangen werden: Nutzer werden nach und nach und in einer bestimmten Reihenfolge an einzelne Elemente herangeführt. Mehrere Handlungsstränge gleichzeitig zu erzählen, erfordert sehr viel Aufmerksamkeit von Nutzern, daher sollte eindeutig sein, was im Mittelpunkt steht.

<figure class="content-thin">
  <img data-src="/images/animation-and-pace/paypal-reciept.gif">
  <figcaption>
    Diese Animation mag auf den ersten Blick ansprechend wirken, jedoch dauert sie viel zu lange und geht weit über ihren Zweck hinaus.
    <sup><a href="https://vimeo.com/197761851">Bildquelle</a></sup>
  </figcaption>
</figure>

Leider ist es teilweise sehr aufwändig und teuer gute Animationen zu implementieren, hier sollte Qualität vor Quantität stehen, da sonst womöglich die Nutzererfahrung gar verschlechtert wird. Doch auch für hervorragende Animationen besteht die Gefahr, dass diese auf Dauer hinderlich werden. Was beim ersten Mal als nette Überraschung empfunden wird, kann beim zehnten Mal langweilig oder sogar lästig erscheinen. In einigen Fällen sollte die Option angeboten werden, Animation zu auszuschalten oder reduzieren und so Nutzern die Möglichkeit gegeben werden, das Interface ihren Präferenzen anzupassen.^[Bei Webseiten sollte die Browsereinstellung _prefers-reduced-motion_ beachtet werden. Mehr Informationen dazu: [Implementing a reduced-motion mode](https://hugogiraudel.com/2018/03/19/implementing-a-reduced-motion-mode/) von Hugo Giraudel]
Für manche Nutzer bedeutet jede Animation, dass sich die Augen neu fokussieren müssen, Bei einigen können sogar gesundheitliche Beschwerden wie Schwindel auftreten (vestibuläre Störungen). Besonders Effekte, bei denen sich mehrere Elemente in gegensätzliche Richtungen bewegen, wie Parallax-Scrolling können desorientierende Wirkung haben.^[Mehr Informationen zu möglichen gesundheitlichen Auswirkungen von Animation im Artikel [Designing Safer Web Animation For Motion Sensitivity](http://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity) von Val Head]
Als Faustregel gilt: _Je größer die animierte Fläche, je ausschweifender und auffälliger die Animation und je öfter die Nutzung, desto höher ist die Gefahr, dass diese als negativ empfunden werden könnte._

Gerade bei Animationen besteht schnell die Gefahr, ins reine _Styling_^[Styling bedeutet die formalästhetische Überarbeitung eines Produkts im Sinne einer Verschönerung mit dem Ziel besserer Verkäuflichkeit. Funktionale Verbesserungen werden dabei nicht angestrebt. [...] Der Funktionalismus kritisierte das Styling als oberflächlich und nicht von einer funktionalen Notwendigkeit getragen. [...] - Quelle: [Designlexikon.net](http://www.designlexikon.net/Fachbegriffe/S/styling.html) ] abzurutschen. Der eigentliche Inhalt eines Produktes sollte immer im Vordergrund stehen und Animationen sind geradezu dafür gemacht, von diesem abzulenken. Wie bereits im Kapitel zu [Feedback](/feedback) angesprochen, sollte versucht werden, bereits vorhandene UI-Elemente umzuformen und zu integrieren, anstatt neue hinzuzufügen. Außerdem sollten sie von Anfang an und sorgfältig eingeplant werden und regelmäßig mit Nutzern getestet werden.^[vgl. [Making Motion Meaningful](https://design.google/library/making-motion-meaningful/) von Sharon Correa & John Schlemmer / Google Design]

<figure class="content-thin">
  <img data-src="/images/animation-and-pace/whatsapp-voicemail.gif">
  <figcaption>
    Die Voicemail-Funktion von WhatsApp ist nahtlos integriert in das Chat-Interface. Bei laufender Aufnahme bietet es die Möglichkeit, diese durch Wischen nach links abzubrechen – wird dies getan, antwortet die App mit verspieltem, aber trotzdem Funktionalem Feedback.
    <sup><a href="https://www.androidpolice.com/2016/08/20/exclusive-google-allos-voice-messaging-interface-looks-awesome-eery-resemblance-whatsapps/">Bildquelle</a></sup>
  </figcaption>
</figure>

### Die Möglichkeiten von Animation in Microinteractions in Kürze:

* Orientierung über 'räumliche' Verhältnisse im Interface geben
* den Fokus des Nutzers lenken
* Interaktionen flüssig und angenehm anfühlen lassen
* eine Verbindung zwischen Eingabe und Feedback schaffen
* die richtige Erwartungshaltung schaffen und Hinweise geben, was passieren wird
* klares Feedback auf Eingaben geben
* Nutzungsgeschwindigkeit erhöhen (besonders für neue Nutzer)
* die gefühlte Geschwindigkeit erhöhen
* ein Produkt ausgefeilt und 'High-End' wirken lassen
* Persönlichkeit und Marke des Produktes verstärken
* ...

::: md-container-more

### Empfehlungen zum Thema Animation und Geschwindigkeit

* Abschnitt [_Motion_ in den Material Design Guidlines](https://material.io/guidelines/motion/material-motion.html) von Google
* Buch: [Designing Interface Animation](https://rosenfeldmedia.com/books/designing-interface-animation/) von Val Head
* Vortrag: [The Illusion of Speed](https://www.awwwards.com/paul-bakaus-from-google-the-illusion-of-speed-improving-the-perceived-speed-of-websites.html) von Paul Bakaus
* Podcast: [Motion and Meaning](http://www.motionandmeaning.io/) mit Val Head & Cennydd Bowles
* Vortrag: [Designing Motion: Smart Transitions in UI Design](https://youtu.be/NaqKjp14Xbg) von Adrian Zumbrunnen

<!-- * Artikel: [Stop Gratuitous UI Animation](https://medium.com/@sophie_paxtonUX/stop-gratuitous-ui-animation-9ece9aa9eb97) von Sophie Paxton -->
<!-- * Artikel: [Animation Principles in UI](https://www.invisionapp.com/blog/animation-and-pace-principles-in-ui/) von Brittany Layton -->
<!-- * Artikel: [The Weird, Terrifying Physics Of iOS 7](https://www.buzzfeed.com/jwherrman/the-weird-terrifying-physics-of-ios-7) von John Herrman & Jake Levy -->
<!-- * Artikel: [How Functional Animation Helps Improve User Experience](https://www.smashingmagazine.com/2017/01/how-functional-animation-helps-improve-user-experience/) von Nick Babich -->
<!-- - Artikel: [The Force of Motion](https://medium.com/@tubikstudio/interface-animation-the-force-of-motion-598b84734e69#.1kwmtqwqm) von Tubik Studio (mit einigen exzessiven Beispielen) -->

:::
