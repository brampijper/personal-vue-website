<template>
  <div>
    <div class="toggler">
      <button 
        class="toggler__slider" 
        @click="store.toggleDarkMode"
        aria-label="Toggle dark mode"
        role="switch"
        type="button"
        :aria-checked="store.isDarkMode"
      >
        <div class="toggler__slider--circle">
          <font-awesome-icon 
            class="toggler__slider--icon" 
            size="1x" 
            :icon="['fa-solid', store.isDarkMode ? 'fa-moon' : 'fa-sun']"
          />
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
  import { store } from '../../store.js';
  import { computed } from 'vue'
  
  const iconType = computed(() => store.isDarkMode ? 'fa-moon' : 'fa-sun')
    
</script>

<style scoped>

.toggler {
  display: flex;
  align-items: center;
}

.toggler__slider {
  width: 44px;
  height: 22px;
  background-color: var(--button-bg, #d7d7d7);
  border-radius: 2rem;
  margin-inline: 7px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: var(--button-border, 1px solid #919191);
  box-sizing: content-box;
  transition: border-color 0.55s, background-color 0.55s;
}

.toggler__slider:hover {
  border-color: var(--link-color, #777777);
}

.dark .toggler__slider {
  justify-content: flex-end;
}

.toggler__slider--circle {
  height: 22px;
  width: 22px;
  background-color: var(--card-bg, white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.dark .toggler__slider--circle {
  background-color: var(--card-hover-bg, black);
}

.toggler__slider--icon {
  color: var(--text-color, #2B283A);
  height: 14px;
  transition: color 0.2s;
}

.dark .toggler__slider--icon {
  color: var(--link-color, #DCDCDC);
}

</style>