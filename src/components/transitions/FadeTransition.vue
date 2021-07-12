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
  transition: opacity 0.7s;
}

.fade-enter-active {
  transition: opacity 0.7s ease-in;
}

.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
