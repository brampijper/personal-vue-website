<template>
  <button :class="'Button ' + buttonSize" @click="onClick">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  props: {
    buttonSize: String,
    onClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.big {
  width: 190px;
  height: 80px;
}

.small {
  width: 130px;
  height: 43px;
}

.Button {
  border-radius: 5px;
  // margin-top:24px;
  font-size: 24px;
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
</style>
