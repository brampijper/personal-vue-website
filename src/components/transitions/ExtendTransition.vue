<template>
  <transition v-bind="$attrs" name="extend">
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
  height: calc(20px + 1vw);
}

.extend-enter {
  height: calc(40px + 3vw);
}
</style>
