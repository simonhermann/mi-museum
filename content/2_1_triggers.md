# Auslöser (Trigger)

Der erste Teil jeder (Mikro-)Interaktion ist ein Auslöser (engl. Trigger). Dieser kann entweder durch eine unmittelbare _Aktion des Nutzers_ oder _von Seiten des Gerätes_ initiiert werden.
In Beiden fällen

### Nutzerseitige Auslöser

Nutzerseitige Trigger entstehen aus Bedürfnissen:

::: standout
Bedürfnis/Trigger:
_Nutzer will nachts etwas sehen können_
--> Interkation: _schaltet Licht ein_
:::

::: standout
Bedürfnis/Trigger:
_Nutzer will jemanden anrufen_
--> Interkation: _tippt auf Namen in Adressbuch_
:::

### Geräteseitige Auslöser

::: standout
Trigger bei eingehender Nachricht auf Handy:

* _Ton_
* _Vibration_
* _LED Blinkt_
* _Benchrichtigung wird angezeigt_

--> Interkation: _Nutzer öffnet Nachricht per Tipp auf Benachrichtigung_
:::

Wie auch bei nutzerseitigen Auslösern, können unterschiedliche Trigger natürlich zur selben Interaktion führen.

<figure class="content-skinny">
    <img src="/images/triggers/incoming-call.gif">
    <figcaption>Diese Animation für einen eingehenden Anruf ist dem klassischen klingeln eines analogen Telefons nachempfunden
    <sup><a href="https://material.io/">Bildquelle</a></sup>
    </figcaption>
</figure>

XXX

Welche Art von Auslöser für eine Interaktion geeignet ist, hängt direkt von den Bedürfnissen des Nutzers in ebendiesem Moment ab, daher sollte diesen in der Konzeptionsphase besondere Aufmerksamkeit zukommen. Was will der Nutzer erreichen? Wie und wie häufig will er dies tun?
Trigger könnte die Ankuft einer neuen Nachricht, eine festgelegte Uhrzeit oder ein bestimmter Ort sein. Eine Integration mit dem Kalender des Nutzers könnte nun dessen Gerät automatisch stumm schalten, wenn dieser sich in einem Meeting oder in der Oper befindet. Dieser Trend zur Automatisierung hat in den letzen Jahren zugenommen und von _Künstlicher Intelligenz_ gesteuerte _persönliche Assistenten_ übernehmen immer mehr Entscheidungen, die vorher der Nutzer selbst getroffen hat.

### Unsichtbare Auslöser

### Dark Patterns

Sogenannte Dark Patterns sind Methoden und Muster von im Interactiondesign, die Nutzer dazu verführen, etwas zu tun, das nicht deren (bewusste) Absicht ist.^[vgl. [https://darkpatterns.org](https://darkpatterns.org/)]
Dark Patterns können sich nicht nur Teil des Triggers einer Microinteraction sein, sondern sich auch auf Rückmeldung, Regeln, Schleifen und Modi auswirken und Sie können nicht nur beeinflussen _etwas_ zu tun, sondern auch _davon abhalten_.

<figure class="content-skinny">
    <img src="/images/triggers/darkpattern-dirt.jpg">
    <figcaption>Ein Fleck auf dem Werbebanner verleitet Nutzer, diesen wegzuwischen und versehentlich auf die Anzeige zu klicken.
    <sup><a href="https://www.reddit.com/r/mildlyinfuriating/comments/7tzwz8/this_mobile_ad_designed_to_make_it_look_like_you/">Bildquelle</a></sup>
    </figcaption>
</figure>
