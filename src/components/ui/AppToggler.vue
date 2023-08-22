<template>
  <div :class="darkModeClass">
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
            :icon="['fa-solid', iconType]"
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
  const darkModeClass = computed(() => store.isDarkMode ? 'dark' : '')
    
</script>

<style scoped lang="scss">

.toggler {
    display: flex;
    align-items: center;
}

.toggler__slider {
    width: 44px;
    height: 22px;
    background-color: #d7d7d7;
    border-radius: 2rem;
    margin-inline: 7px;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #919191;
    box-sizing: content-box;
    transition: border-color .55s,background-color .55s;
}

.toggler__slider:hover {
  border-color: #777777;
}


.toggler__slider--circle {
    height: 22px;
    width: 22px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items:center;
    justify-content:center;
}

div.dark .toggler__slider {
    justify-content: flex-end;
    border-color: #bcbcbc;
    background-color: #383838;
}

div.dark .toggler__slider:hover {
  border-color: #FFFFFF;
}

div.dark .toggler__slider--circle {
    background-color: black;
}

.toggler__slider--icon {
    color: #2B283A;
    height: 14px;
}

div.dark .toggler__slider--icon {
    color: #DCDCDC;
}

</style>