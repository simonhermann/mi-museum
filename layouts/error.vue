<template>
  <div>
    <div v-if="error.statusCode === 404">
      <h4>Seite nicht gefunden, bitte kehre <br>
        <nuxt-link to="/">zurück zur Startseite</nuxt-link>
      </h4>
    </div>
    <div v-else>
      <h4>Etwas ist schiefgelaufen, vermutlich weil ein Update eingespielt wurde (Yay!).
        Bitte versuche, die Seite neu zu laden. oder kehre <br>
        <nuxt-link to="/">zurück zur Startseite</nuxt-link>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style scoped>
h4 {
  text-decoration: none;
  text-align: center;
}
</style>
