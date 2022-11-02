<template>
  <button 
    class="Button" 
    :class="`${buttonSize} ${store.isDarkMode ? 'dark' : '' }`"
    @click="onClick">
    <slot>Button</slot>
  </button>
</template>

<script>
import { store } from '../../store.js';

export default {
  props: {
    buttonSize: {
      type: String,
      default: "big",
    },
    onClick: {
      type: Function,
      required: false,
    },
  },
  setup(props) {
    return {
      store
    }
  },
};
</script>

<style scoped lang="scss">
.big {
  width: 190px;
  height: 80px;
  font-size: 24px;
}

.tiny {
  width: 130px;
  height: 43px;
  font-size: 1rem;
  z-index: 3;
}

.Button {
  border-radius: 5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  border: 1px solid black;
  padding: 0px;
  color: black;
  transition: all 0.5s ease-out;
  background-color: transparent;
  cursor: pointer;
}

.Button:hover {
  color: white;
  background: black;
}

.Button.dark {
  color:white;
  background:transparent;
  border: 1px solid white;
}

.Button.dark:hover {
  color: black;
  background: white;
}

//specific edge cases for small and tall screens
@media (max-width: 668px) and (max-height: 750px) {
  button {
    height: 45px;
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
}
</style>
