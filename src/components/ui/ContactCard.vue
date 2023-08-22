<template>
  <a class="card" 
    :class="{ active: isActive }" 
    href="mailto:brampijper@proton.me"
    target="_blank"
    @mouseenter="isActive = true"
    @mouseleave="isActive = false"
    title="Send an email"
  >
    <ExternalLinkIcon />
    <!-- <div class="text-box">
      <span class="left">send love</span>
    </div> -->
    <font-awesome-icon size="4x" :icon="['fass', 'fa-envelope']"/>
  </a>
</template>

<script>
import { ref } from 'vue'
import ExternalLinkIcon from './ExternalLinkIcon.vue'

export default {
  components: {
    ExternalLinkIcon
  },
  setup() {
    const isActive = ref(false)

    return {
      isActive
    }
  }
}
</script>
<style lang="scss" scoped>

.button {
  position:relative;
}
  
</style>
