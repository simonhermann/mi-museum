<template>
  <div class="page">
    <div class="content-normal">   
      <h1> Button / Knopf</h1>

      <laddaButton></laddaButton>

      <v-btn large>Klick me</v-btn>
      
      <ul>
        <li>_TR: nutzerseitig</li>
        <li>_RU: auf Button beschriebene Aktion wird ausgelöst. Digital: Meist erst bei loslassen, um Korrektur zu ermöglichen.</li>
        <li>_FB: Digital: Animation wird "gedrückt" unter "Druck" des Auslösers, meist dargestellt durch Schattenwurf, Nachahmung eines physischen Knopfes. Teilweise auch andere grafische Effekte (Farbänderung, Änderung des Textes, "ripple"-Effekt, kommt Finger entgegen, ..).</li>
        <li>_LM: kontextabhängig</li>
      </ul>
    </div>

  </div>
</template>

<script>
import laddaButton from '~/components/mi/buttons/laddaButton.vue';
export default {
  components: {
    laddaButton
  }
}
</script>

<style lang="scss">
</style>