<template>
  <transition name="fade" appear>
    <slot></slot>
  </transition>
</template>

<style lang="scss">
.fade-transition-wrapper {
  opacity: 1;
  will-change: opacity;
  position: relative;
  transition: all 1s;
}

.fade-enter-active {
  transition: all 1s ease-in;
}

.fade-leave-active {
  transition: all 0.7s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
