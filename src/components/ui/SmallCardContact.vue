<template>
  <a class="card" 
    :class="{ active: isActive }" 
    href="mailto:brampijper@proton.me"
    target="_blank"
    @mouseenter="isActive = true"
    @mouseleave="isActive = false"
    title="Send an email"
  >
    <SmallCardLinkIcon />
    <!-- <div class="text-box">
      <span class="left">send love</span>
    </div> -->
    <font-awesome-icon size="4x" :icon="['fass', 'fa-envelope']"/>
  </a>
</template>

<script>
import { ref } from 'vue'
import SmallCardLinkIcon from './SmallCardLinkIcon.vue'

export default {
  components: {
    SmallCardLinkIcon
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
