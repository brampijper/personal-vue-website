<template>
  <transition name="extend">
    <div v-if="displayAboutMe" class="extend-transition-wrapper">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    displayAboutMe: {
      type: Boolean,
      default: true,
    },
  },
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
  transition: 0.9s ease-in-out;
}

.extend-enter-to,
.extend-leave {
  height: 100vh;
}

.extend-leave-to {
  height: 0;
}

.extend-enter {
  height: calc(40px + 4vh);
}
</style>
