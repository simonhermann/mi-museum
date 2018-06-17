# Skeuo&shy;morphismus <br>in Micro&shy;interactions

Skeuomorphismus ist eine Stilrichtung im Design, bei der Objekte in ihrer Gestaltung ein anderes Material oder die Form eines anderen Gegenstandes nachahmen, ohne dass diese durch ihre (praktische) Funktion begründet ist^[vgl. [Wikipedia: Skeuomorphismus](https://de.wikipedia.org/wiki/Skeuomorphismus)].
Seit Anbeginn der grafischen Benutzeroberflächen verwenden wir Buttons. Die Form eines digitalen Knopfes ist nach wie vor an Werkzeuge und Mechanismen angelehnt, die wir im 19. Jahrhundert entwickelt haben. Obwohl sich Interfaces im Einklang mit aktuellen Trends und Technologien entwickelt haben, ist ihr Ursprung inspiriert durch reale Objekte der Vergangenheit. Die ursprüngliche Benutzeroberfläche von Xerox PARC ist 44 Jahre alt, aber unsere Benutzeroberflächen sehen trotzdem noch verblüffend ähnlich aus. Warum halten wir daran fest, Interaktionsformen zu entwickeln, die auf den bekannten Objekten basieren, die uns umgeben? 

Lange verließen sich Designer bei der Gestaltung von Interaktionen gerne auf skeuomorphistische Darstellungsweisen und Muster, teilweise mit sehr naturgetreuen Nachbildungen aus dem wirklichen Leben. Ein Problem des visuellen Skeuomorphismus ist seine hohe Geschmacks- und Kulturabhängigkeit. Zudem werden zu exakte Kopien sehr schnell langweilig. Wohl aus diesen Gründen hat die Nutzung von visuell skeuomorphistischen UI-Elementen in den letzten Jahren stark abgenommen, spätestens mit Einführung von iOS 7 Mitte 2013 durch Apple^[[Jony Ive Explains Why He Decided To Gut Skeuomorphism From iOS 7](https://www.cultofmac.com/246312/jony-ive-explains-why-he-decided-to-gut-skeuomorphism-out-of-ios/)] gelten visuelle Metaphern oft als unzeitgemäß.

<figure class="content-thin">
    <img data-src="images/skeuomorphismus/recyclebin.jpg">
    <figcaption>Der Papierkorb besteht seit den Anfängen von Windows ohne Änderung der Regeln. Gefüllter Zustand aus Windows 95 (links) und Entleerter Zustand aus Windows 10 (rechts) </figcaption>
</figure>

<!-- 
Apple
- Multitouch (kapazitiv) - erstmals direkte manipulation, ohne abstraktion
- Skeuomorphismus um Nutzern es beizubringen (bsp Taschenrechner nach Rams) 
- The future of user interface design is the history of print design https://vimeo.com/22575738
    - What's a UI that is all about information? = print design
- Inhalt VOR Nachahmung! zB ebook
-->


Doch während der visuelle Bezug heute oft nur noch zu erahnen ist, bleiben doch die [Regeln](/rules) digitaler Interaktionen meist nahe an den Regeln ihrer gegenständlichen Equivalente. Es wird versucht, Gewohnheiten aus der physischen Welt aufzugreifen und auf digitale Produkte anzuwenden.
Die Gesetze der uns Menschen seit Jahrtausenden umgebenden Welt haben sich so in unser Unterbewusstsein eingeprägt, dass diese unmöglich zu ignorieren sind. Aus diesem Grund könnte man sich als Designer die Frage stellen: _Wie würde diese Interaktion funktionieren, fände sie nicht in der digitalen Welt statt?_
Wenn unter diesem Gesichtspunkt Regeln und Rückmeldung einer Microinteraction sinnvoll erscheinen, kann davon ausgegangen werden, dass sie unserem intuitiven Verständnis von Konzepten wie Gewicht, Material, Bewegung, Trägheit, Reibung, usw. nicht widerspricht. Besondere Bedeutung finden diese "Naturgesetze" bei der Gestaltung von [Animation](/animation-and-pace). User interface design bedeutet, Dinge zu verwenden, die Nutzer bereits kennen, um ihnen zu helfen, neue Dinge zu verstehen.

<figure class="content-thin">
    <img data-src="/images/skeuomorphismus/reorder-drag-drop-1.gif">
    <figcaption>Die UI-Elemente hier verhalten sich in gewisser Weise physikalischen Gesetzen entsprechend – die Interaktion fühlt sich dadurch natürlich an und ist intuitiv zu verstehen.
    <!-- <sup><a href="http://clauderic.github.io/react-sortable-hoc/">Bildquelle</a></sup> -->
    </figcaption>
</figure>

<figure class="content-thin">
    <img data-src="/images/skeuomorphismus/reorder-drag-drop-2.gif">
    <figcaption> Im Vergleich dazu fehlt hier der Bezug zwischen dem aufgenommenen und dem ursprünglichen Element. Diese Version ermöglicht vermutlich eine höhere Nutzungsgeschwindigkeit, ist aber weniger intuitiv.
    <sup><a href="https://dribbble.com/shots/1234963-Animation-Drag-drop-reorder">Bildquelle</a></sup>
    </figcaption>
</figure>

Mikrointeraktionen, insbesondere in Kombination mit kleinen Animationen, können den Eindruck vermitteln, dass sich ein digitales Interface sehr ähnlich wie ein analoges Produkt verhält. Dies kann durch unmittelbares Feedback erfolgen, wie z.B. das visuell 'Füllen' eines Einkaufswagens in einem Onlineshop.
Bei der Entwicklung von neuartigen Interaktionsmedien ist zu beobachten, dass vermehrt auf skeuomorphistische Prinzipien zurückgegriffen wird. Aktuelles Beispiel sind sind 'Smart Watches' oder sprachgesteuerte digitale Assistenten wie 'Google Assistant', 'Amazon Echo' und Co. Hier wird angestrebt, die 'Unterhaltung' einer Unterhaltung von Mensch zu Mensch wirklichkeitsgetreu nachzuempfinden, während eine visuelle Benutzeroberfläche (wenn überhaupt) nur unterstützende Funktion hat. Die Geräte sollen mit Namen angesprochen werden ("Hey Siri"), haben scheinbar Persönlichkeit, Gefühle und Humor – ein nie dagewesenes Level von Audioskeuomorphismus. 
Zusätzliche Hürden bei der konzeptionellen und technischen Entwicklung sind aber nicht nur Wahrnehmung, Verständnis und Einhaltung von Gepflogenheiten menschlicher Umgebungen durch das System, sondern die Nachbildung des menschlichen Verstandes selbst. Während sich einzelne Sätze dieser KI-Systeme im Jahre 2018 kaum noch als künstlich erkennen lassen, macht der oft mangelnde Kontext eine natürliche Unterhaltung jedoch unmöglich^[vgl. [The Voice Assistant Battle! (2017) - Marques Brownlee / YouTube](https://youtu.be/BkpAro4zIwU)]. Sprachinterfaces wie hier haben den Nachteil, sich auf [versteckte Trigger](/triggers) verlassen zu müssen, das bedeutet, dass Nutzer nicht wissen, welche Interaktionen möglich sind, bevor sie diese ausprobieren.^[Lösungsansätze für das Problem der versteckten Trigger in Sprachinterfaces: 1. Onboarding-Gespräche mit dem Interface, wobei in einer oder mehreren Sessions ein Frage-Antwort Spiel abläuft, das wie in einem Gespräch Funktionen vorstellt. 2. Passives Vorstellen von Funktionen, z. B. Das Sprachinterface im Auto weist nach Ansage des Zieles, darauf hin, dass alternativ auch "Bring mich nach Hause" gesagt werden könne. 3. Proaktives Verhalten: Der Voice Assistent weißt beim Nachhausekommen darauf hin, dass es neue Nachrichten gibt, weißt auf den Termin am Abend hin und bietet an ein Taxi zu bestellen.] Sie werden erst dann wirklich nützlich und effektiv sein, wenn sie _jede_ Eingabe verstehen. Hier stellt sich jedoch die Frage, inwieweit das Phänomen des 'Uncanny Valley'^[[Wikipedia.de: Uncanny Valley](https://de.wikipedia.org/wiki/Uncanny_Valley)] eine Rolle bei der Akzeptanz durch Nutzer spielen wird.

<figure class="content-thin">
    <img data-src="/images/skeuomorphismus/switchanimation.gif">
    <figcaption>Skeuomorphistische Darstellung eines Kippschalters
    <sup>
        <a href="https://dribbble.com/shots/787974-Switch-Animation">Bildquelle</a>
    </sup>
    </figcaption>
</figure>

Während visuelle Interfaces Parallelen zu Maschinen herstellen, versuchen Sprachinterfaces also einen körperlosen Menschen nachzuahmen. Heute, nachdem der Großteil der Nutzer mit Smartphones und co. vertraut sind, ist es nicht mehr so wichtig, visuelle Elemente zu entwerfen, die einen direkten Bezug zur analogen Welt herstellen. Schließlich verbringen die meisten Nutzer mehr Zeit mit der Bedienung von digitalen Interfaces als mit analogen Knöpfen und Hebeln. Ob digitale Sprachassistenten ebenfalls den Übergang zu einer minimalistischeren Version ihrer selbst machen und damit funktionaler und produktiver werden, bleibt abzuwarten.


::: md-container-more

### Weiterführende Links zum Thema Skeuomorphismus:

* Artikel: [The New Skeuomorphism is in Your Voice Assistant](https://uxdesign.cc/the-new-skeuomorphism-is-in-your-voice-assistant-3b14a6553a0e) von Bert Brautigam
* Podcast-Episode: [The Sound of the Artificial World](https://99percentinvisible.org/episode/episode-15-the-sound-of-the-artificial-world/) von _99% Invisible_

:::


<!-- Audioskeuomorphism: https://www.20k.org/episodes/the-bleeps-the-sweeps-and-the-creeps 21min -->