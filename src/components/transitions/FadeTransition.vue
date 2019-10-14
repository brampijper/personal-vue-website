<template>
  <transition name="fade">
      <slot></slot>
  </transition>
</template>

<style lang="scss">
.fade-transition-wrapper {
  opacity: 1;
  will-change: opacity;
  position: relative;
  transition: all 2s;
}

.fade-enter-active {
  transition: all 2.3s ease-in;
}

.fade-leave-active {
  transition: all 1s ease-out;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.fade-leave-to, .fade-enter {
  opacity: 0;
}
</style>
