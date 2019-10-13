<template>
  <transition name="extend">
    <div v-show="extended" class="extend-transition-wrapper">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    extended: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.extend-transition-wrapper {
  background-color: aquamarine;
  max-height: 100vh;
  height: 100vh;
  will-change: height;
  position: relative;
  overflow: hidden;
}

.extend-enter-active,
.extend-leave-active {
  transition: 1.5s ease-out;
}

.extend-enter-to,
.extend-leave {
  height: 100vh;
}

.extend-leave-to {
  height: calc(15px + 4vh);
}

.extend-enter {
  height: calc(40px + 4vh);
}
</style>
