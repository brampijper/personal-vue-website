<template>
  <a class="card" 
    href="https://www.linkedin.com/in/bram-pijper-5389b0276/"
    target="_blank"
    title="Connect on LinkedIn"
  >
    <ExternalLinkIcon />

    <font-awesome-icon size="4x" :icon="['fa-brands', 'fa-linkedin']"/>
  </a>
</template>

<script setup>
import ExternalLinkIcon from '../ExternalLinkIcon.vue'

</script>

<style scoped>

.button {
  position:relative;
}
  
</style>
