<template>
  <transition name="extend" mode="out-in">
    <slot></slot>
  </transition>
</template>

<style lang="scss">
.extend-enter-active,
.extend-leave-active {
  transition: max-height 0.9s ease-in-out;
}

.extend-enter-to,
.extend-leave-from {
  max-height: 100vh;
}

.extend-leave-to {
  max-height: 0;
}

.extend-enter {
  max-height: calc(40px + 4vh);
}
</style>
