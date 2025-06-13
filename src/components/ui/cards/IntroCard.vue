<template>
  <div class="container card">
    <div class="container__wrap">
      <IntroTitle />
      <IntroText />
    </div>
  </div>
</template>

<script setup>
  import IntroText from "../../intro/IntroText.vue";
  import IntroTitle from "../../intro/IntroTitle.vue";
</script>
<style scoped>

.container {
  box-sizing: border-box;
  margin: 0;
  flex-direction: row;
  max-width: 680px;
  background-color: var(--card-bg);
  color: var(--text-color);
  border: var(--card-border);
  border-radius: 8px;
}

.container__wrap {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 0px) {
  .container {
    width: 100%;
    padding: 1rem;
  }
}

@media (min-width: 660px) {
  .container {
    padding: 2rem;
  }
}

@media (min-width: 990px) {
  .container {
    width: calc(100% - 300px);
    margin-right: 32px;
  }
}


</style>
