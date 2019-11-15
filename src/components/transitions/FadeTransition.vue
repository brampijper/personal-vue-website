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
<<<<<<< HEAD
  transition: all 0.3s ease-out;
=======
  transition: all 1s ease-out;
>>>>>>> 4b19e8c487257169981a97e194e21422c6d90e8d
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.fade-leave-to, .fade-enter {
  opacity: 0;
}
</style>
