# Schleifen und Modi

Wie verändert sich die Microinteraction mit der Zeit? Bleiben die Regeln die Selben oder ändern sie sich bei mehrfacher Nutzung? Was passiert, wenn sich äußere Faktoren ändern? Bleibt eine Funktion angeschaltet, bis sie manuell wieder deaktiviert wurde, oder schaltet sie sich unter umständen automatisch aus?  Schleifen und Modi beeinflussen als 'Meta-Regeln' das Verhalten von Microinteractions.

## Modi

Ein _Modus_ ist ein Status eines Programms, in dem Befehle in dessen Kontext ausgeführt werden. 
Diese 'Verzweigung' der Regeln sollte in Microinteractions nur im Ausnahmefall erschaffen werden. Hauptgrund dafür ist, dass sie häufig Fehler des Nutzers auslösen, besonders wenn neue Regeln in einer bereits bekannten Oberfläche angewendet werden. Die Regeln eines Modus müssen von Nutzern neu erlernt werden, bevor ein Modus genutzt werden kann.^[vgl. Saffer, Dan: Microinteractions - Designing with Details (S. 111 - 114), O'Riley Media, Sebastopol CA, 2013, [microinteractions.com](http://microinteractions.com/)] 
Saffer plädiert, Modi in Microinteractions möglichst zu vermeiden, einzige Ausnahme seien selten genutzte Funktionen, die sonst den Flow des Interfaces unterbrechen würden. Doch Modi können – richtig eingesetzt – die Nutzungsgeschwindigkeit eines Interfaces deutlich erhöhen, ohne Abstriche bei der Nutzbarkeit zu machen. Sie benötigen meist etwas Einarbeitung von Seiten des Nutzers, doch einmal erlernt können sie die Produktivität enorm steigern, nicht umsonst sind sie häufig in professionellen Programmen mit hoher Nutzungsdauer zu finden.^[Beispiele für aktuell sehr erfolgreich eingesetzte Modi finden sich in: den Tasten <kbd>Shift</kbd>, <kbd>cmd</kbd>, <kbd>alt</kbd>, usw jeder Tastatur, den Texteditoren Vim, Visual Studio Code und sogar Microsoft Word, dem Designprogramm Sketch uvm.] 

##### Rückfedernde Modi ('spring loaded modes')

Ein _rückfedernder Modus_ (oder _Quasimodus_ nach Jef Raskin^[Raskin, Jef: The Humane Interface, Addison-Wesley, 2000, [Download bei acm.org](https://dl.acm.org/citation.cfm?id=333103)]) ist so lange aktiv, wie ein Auslöser (typischerweise eine Taste) _gehalten_ wird oder auf andere Weise aktiv ist. Sobald dieser wieder losgelassen wird, kehrt der Auslöser in den Ursprungszustand zurück und der Modus endet.
Prominentes Beispiel ist die <kbd>Shift</kbd>-Taste, die schon bei Schreibmaschinen zum Einsatz kam, und typischerweise den Modus von _Kleinschreibung_ zu _Großschreibung_ wechselt. Diese Variation hat den Vorteil, dass sie vom Nutzer praktisch nicht vergessen werden kann, sie ist jedoch weniger geeignet für langwierige oder komplexe Eingaben.^[vgl. Saffer, Dan: Microinteractions - Designing with Details (S. 111 - 114), O'Riley Media, Sebastopol CA, 2013, [microinteractions.com](http://microinteractions.com/)] <!-- Weiteres Beispiel wäre ein _Tooltip_, also ein Hinweis, der nur erscheint, wenn sich der Mauscursor über einem bestimmten Element befindet.  -->Rückfedernde Modi nutzen zumeist versteckte Auslöser, und haben daher die [bereits beschriebenen Nachteile](/triggers). 

##### Einmalige Modi ('one-off modes')

Ein _einmaliger Modus_ besteht nach seiner Aktivierung _für die Dauer einer einzigen darauffolgenden Aktion_. Er ist also so lange aktiv, bis die nächste Eingabe des Nutzers erfolgt ist.^[vgl. Saffer, Dan: Microinteractions - Designing with Details (S. 111 - 114), O'Riley Media, Sebastopol CA, 2013, [microinteractions.com](http://microinteractions.com/)]
Beispiel hierfür sind die verschiedenen 'einsetzen'-Werkzeuge in Sketch: Wird etwa 'Rechteck', 'Text' oder 'Zeichenfläche' genutzt, bleibt das Werkzeug nur so lange aktiv bis ein entsprechendes Objekt erstellt wurde. Danach kehrt das Programm automatisch in den standardmäßigen Auswahlmodus zurück. Der Modus kann abgebrochen werden, indem <kbd>Esc</kbd> gedrückt oder ein anderer Modus gewählt wird.
Unter Android bringt längeres Gedrückthalten des Fingers auf Text die Textauswahl und ein Kontextmenü zum Vorschein. Dieses Menü bleibt so lange bestehen, bis eine der Optionen (kopieren, alles auswählen, suchen, usw.) genutzt oder der Modus durch Tippen auf einen anderen Bildschirmbereich abgebrochen wurde.

<figure class="content-tiny">
  <img data-src="/images/loops-and-modes/android-smart-text-selection.gif">
  <figcaption>
    Das Kontextmenü der Textauswahl in Android 8 erkennt, ob eine Adresse oder Telefonnummer ausgewählt wurde und bietet entsprechend intelligente Vorschläge an: Die Adresse kann direkt in Google Maps geöffnet und die Telefonnummer direkt angerufen werden.
    <sup><a href="http://www.androidbeat.com/android-8-oreo-features/">Bildquelle</a></sup>
  </figcaption>
</figure>

## Schleifen

Eine _Schleife_ (bzw. englisch _loop_)


^[vgl. Saffer, Dan: Microinteractions - Designing with Details (S. 114 - 120), O'Riley Media, Sebastopol CA, 2013, [microinteractions.com](http://microinteractions.com/)]
