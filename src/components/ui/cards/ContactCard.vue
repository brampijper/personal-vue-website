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
import ExternalLinkIcon from '../ExternalLinkIcon.vue'

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
<style scoped>

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--card-bg);
  color: var(--text-color);
  border: var(--card-border);
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
  padding: 1.5rem 2rem;
  font-size: 1.2rem;
}

.card.active,
.card:hover {
  background-color: var(--card-hover-bg);
  color: var(--link-color);
  cursor: pointer;
}

.card .fa-envelope,
.card svg {
  color: var(--text-color);
  transition: color 0.2s;
}

.card.active .fa-envelope,
.card.active svg,
.card:hover .fa-envelope,
.card:hover svg {
  color: var(--link-color);
}

  
</style>
