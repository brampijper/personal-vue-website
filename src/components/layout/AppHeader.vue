<template>
  <div class="small-container" @click="onClick">
    <h4>
      <a href="#">ABOUT BRAM</a>
    </h4>
  </div>
</template>

<script>
export default {
  props: {
    onClick: {
      required: true,
      type: Function,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "~rfs/scss";
.small-container {
  top: 0;
  position: absolute;
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(15px + 4vh);
  transition: 1s;
  cursor: pointer;
  z-index: 4;
  h4 {
    transition: 1s;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    @include font-size(1.5rem);
    font-weight: 900;
    line-height: 1;
    color: black;
  }
}
.small-container:hover {
  height: calc(40px + 4vh);
  transition: 0.7s;
  transition-timing-function: ease-out;
}
</style>
