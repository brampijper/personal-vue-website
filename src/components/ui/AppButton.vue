<template>
  <button :class="'Button ' + buttonSize" @click="onClick">
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
  data() {
    return {};
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
  // margin-top:24px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  border: 0px;
  padding: 0px;
  color: white;
  background: black;
  transition: all 0.5s ease-out;
}

.Button:hover {
  color: black;
  background: white;
  // transform: scale(1.08);
  cursor: pointer;
  will-change: auto;
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
