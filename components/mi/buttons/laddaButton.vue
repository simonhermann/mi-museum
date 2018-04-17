<template>
  <div>
		<!-- partly taken from https://codepen.io/hakimel/pen/gkeha/ -->
    <button class="ladda-button ladda-contract" v-on:click="toggleLoading">
			<span class="ladda-label">Submit</span> 
			<span class="ladda-spinner">
				<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling">
					<circle cx="50" cy="50" fill="none" stroke="#fff" stroke-width="10" r="32" stroke-dasharray="150.796 52.265" transform="rotate(210 50 50)">
						<animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
					</circle>
				</svg>
			</span>
		</button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleLoading() {
      const button = document.querySelector('.ladda-button')
      if (typeof button.getAttribute('data-loading') === 'string') {
        button.removeAttribute('data-loading')
      } else {
        button.setAttribute('data-loading', '')
        setTimeout(function() {
          button.removeAttribute('data-loading')
        }, 2000)
      }
    },
  },
}
</script>

<style scoped lang="scss">
/************************************* * BUTTON BASE */
.ladda-button {
  position: relative;
  background: none;
  border: 0;
  padding: 0.5em 1em 0.6em 1em;
  font-size: 1.3em;
  cursor: pointer;
  outline: 0;

  background: #ea8557;
  color: #fff;
  border-radius: 0.1em;
  border: 1px solid transparent;

  -webkit-appearance: none;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:hover {
    border-color: rgba(0, 0, 0, 0.07);
    background-color: #ffa96c;
  }
}
.ladda-button[data-loading] {
  cursor: default;
  pointer-events: none;
  border-color: rgba(0, 0, 0, 0.07);
  background-color: #999;
}

/* ladda-Spinner animation */
.ladda-button .ladda-spinner {
  position: absolute;
  display: inline-block;
  width: 2em;
  height: 2em;
  top: 50%;
  margin-top: -1em;
  opacity: 0;
}

/*************************************
 * EASING
 */

.ladda-button,
.ladda-button .ladda-spinner,
.ladda-button .ladda-label {
  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all;
}

/*************************************
 * ladda-CONTRACt
 */

.ladda-button.ladda-contract {
  overflow: hidden;
  height: 3em;
  /* width: 100px; */
}
.ladda-button.ladda-contract .ladda-spinner {
  left: 50%;
  margin-left: -1em;
}

.ladda-button.ladda-contract[data-loading] {
  border-radius: 50%;
  width: 3em;
  height: 3em;
}
.ladda-button.ladda-contract[data-loading] .ladda-label {
  opacity: 0;
}
.ladda-button.ladda-contract[data-loading] .ladda-spinner {
  opacity: 1;
}
</style>
