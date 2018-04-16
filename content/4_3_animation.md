# Animation

XXXX

Erstbenutzer benötigen meist Hinweise, die zeigen, wie eine Microinteraction zu benutzen ist. Dies gilt insbesondere für Interfaces, die unbekannte oder einzigartige Interaktionen enthalten (z.B. gestengesteuerte Interfaces).
Wenn es darum geht, den Benutzern die Verwendung einer Benutzungsoberfläche beizubringen, sollten eine Reihe von visuellen Hinweisen zeigen, welche Interaktionen möglich sind. Diese Art der funktionalen Animation lenkt die Aufmerksamkeit des Benutzers auf die möglichen Interaktionen.

Mehr Platz auf kleinen Screens

Animation ist oft eine visuelle Bestätigung einer Nutzereingabe. Dies bedeutet, dass Benutzer verstehen müssen, wie ihre Aktion mit den Reaktionen des Produktes verknüpft ist. Zum Beispiel das Erscheinen einer Liste bei Betätigung eines Buttons.

<!-- Wenn ein Teil des Interfaces entweder autonom arbeitet oder nicht standardkonforme Aktionen ausführt, kann es seine Benutzer verwirren oder sogar irritieren. Da die Bewegung der Objekte im wirklichen Leben bekannt ist, erwartet der Nutzer von einem Smartphone dies. -->

<figure class="content-skinny">
  <img src="">
  <figcaption>
  Animierte Übergänge zeigen die Relation zwischen einzelnen Elementen und helfen so bei der Orientierung XXXX
  </figcaption>
</figure>

#### Nutzungsgeschwindigkeit und gefühlte Geschwindikeit

XXXX
(skeleton UI, ..)

#### Natürliche aussehende Bewegung

zb exponentiell statt linear
--> Bezug auf Regeln der Physischen Welt

### Animation kann auch schaden

<figure class="content-skinny">
  <img src="/images/animation/paypal-reciept.gif">
  <figcaption>
    Diese Animation mag auf den ersten Blick ansprechend wirken, jedoch dauert sie viel zu lange und geht weit über ihren Zweck hinaus. 
    <sup><a href="https://vimeo.com/197761851">Bildquelle</a></sup>
  </figcaption>
</figure>

Animationen sollten immer eine Aufgabe erfüllen. Wenn eine Animation keinen funktionalen Zweck hat, kann sie sich unangenehm oder lästig anfühlen, besonders wenn sie einen Prozess verlangsamt, der ohne Animation schneller sein könnte.
Bei der Planung und Gestaltung von Animationen in Microinteractions und generell in Interfaces sollte man sich die Frage stellen: _Wie hilft die Anmation ein Problem zu lösen, wie bereichert sie die Positive Erfahrung oder hilft dem Nutzer anderweitig?_ Wenn die Frage nicht zufriedenstellend beantwortet werden kann, sollte von der betrachteten Animation vermutlich abgesehen werden.

![XXXX^[https://dribbble.com/shots/2440217-Fluid-Switch] ](/images/animation/switch-fluidswitch.gif){.content-skinny}

<!-- ![Beispiel für eine misslungene UI-Animation^[https://medium.com/@sophie_paxtonUX/stop-gratuitous-ui-animation-9ece9aa9eb97] ](/images/animation/poormotiondesign.gif ""){.content-skinny}  -->

Doch auch für hervorragende Animationen besteht die Gefahr, dass diese auf Dauer hinderlich werden. Was beim ersten Mal als nette Überraschung empfunden wird, kann beim zehnten Mal langweilig oder sogar lästig erscheinen. In einigen Fällen sollte die Option angeboten werden, Animation zu reduzieren und so Nutzern die Möglichkeit gegeben werden, das Interface ihren Präferenzen anzupassen.^[Bei Webseiten sollte die Browsereinstellung _prefers-reduced-motion_ beachtet werden. Mehr Informationen dazu im [Artikel von CSS Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)]
Für Manche Nutzer bedeutet jede Animation, dass sich die Augen neu fokussieren müssen, Bei einigen können sogar gesundheitliche beschwerden wie Schwindel auftreten (vestibuläre Störungen). Besonders Effekte, bei denen sich mehrere Elemente in gegensätzliche Richtungen bewegen, wie Parallax-Scrolling können desorientierende Wirkung haben.^[Mehr Informationen zu möglichen gesundheitlichen Auswirkungen von Animation im Artikel [Designing Safer Web Animation For Motion Sensitivity](http://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity) von Val Head]

::: md-container-standout
Als Faustregel gilt: Je größer die animierte Fläche, je ausschweifender und auffälliger die Animation und je öfter die Nutzung, diesto höher ist die Gefahr, dass diese als negativ empfunden werden könnte.
:::

Gerade bei Animationen besteht schnell die Gefahr, ins reine _Styling_^[Styling bedeutet die formalästhetische Überarbeitung eines Produkts im Sinne einer Verschönerung mit dem Ziel besserer Verkäuflichkeit. Funktionale Verbesserungen werden dabei nicht angestrebt. [...] Der Funktionalismus kritisierte das Styling als oberflächlich und nicht von einer funktionalen Notwendigkeit getragen. [...] - Quelle: [Designlexikon.net](http://www.designlexikon.net/Fachbegriffe/S/styling.html) ] abzurutschen. Der eigentliche Inhalt eines Produktes sollte immer im Vordergrund stehen.

--> XXXX Prototypen & Testen

## Die Möglichkeiten von Animationen in Microinteractions zusammengefasst:

* Interaktionen fühlen sich flüssig und angenehm an
* schaffen von Personlichkeit
* verbesserte Benutzbarkeit
* Erhöhung der Geschwindikeit (besonders für neue Nutzer)
* Erhöhung der gefühlten Geschwindikeit
* die richtige Erwartungshaltung schaffen und Hinweise geben, was passieren wird
* klares Feedback auf Eingaben geben
* Orientierung über die momentane "Position" im Interface geben
* Aufmerksamkeit auf den zu diesem Zeitpunkt wichtigsten Teil des Interfaces lenken
* mehrere Funktionen gleichzeitig erfüllen (XXXX)

::: md-container-more

### Mehr zum Thema Animation

* Buch: [Designing Interface Animation](https://rosenfeldmedia.com/books/designing-interface-animation/) von Val Head
* Podcast: [Motion and Meaning](http://www.motionandmeaning.io/) mit Val Head & Cennydd Bowles
* Video: [The Illusion of Speed](https://www.awwwards.com/paul-bakaus-from-google-the-illusion-of-speed-improving-the-perceived-speed-of-websites.html) von Paul Bakaus
* Abschnitt [_Motion_ in den Material Design Guidlines](https://material.io/guidelines/motion/material-motion.html) von Google
* Artikel: [Stop Gratuitous UI Animation](https://medium.com/@sophie_paxtonUX/stop-gratuitous-ui-animation-9ece9aa9eb97) von Sophie Paxton
* Artikel: [How Functional Animation Helps Improve User Experience](https://www.smashingmagazine.com/2017/01/how-functional-animation-helps-improve-user-experience/) von Nick Babich
    <!-- - Artikel: [The Force of Motion](https://medium.com/@tubikstudio/interface-animation-the-force-of-motion-598b84734e69#.1kwmtqwqm) von Tubik Studio (mit einigen exzessiven Beispielen) -->

:::
