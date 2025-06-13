<template>
  <button 
    class="Button" 
    :class="buttonSize"
    @click="onClick">
    <slot>Button</slot>
  </button>
</template>

<script>

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

<style scoped>

.big {
  width: 190px;
  height: 80px;
  font-size: 24px;
}

.tiny {
  width: 130px;
  height: 43px;
  font-size: 1rem;
}

.Button {
  border-radius: 5px;
  font-family: var(--heading-font-family);
  border: var(--button-border);
  padding: 0;
  color: var(--button-color);
  background-color: var(--button-bg);
  transition: all 0.5s ease-out;
  cursor: pointer;
}

.Button:hover {
  color: var(--link-color);
  background: var(--hover-bg);
}

/* Responsive adjustments for small and tall screens */
@media (max-width: 668px) and (max-height: 750px) {
  .Button {
    height: 45px;
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
}

</style>
