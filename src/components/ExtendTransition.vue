<template>
  <transition name="extend" mode="out-in">
    <slot></slot>
  </transition>
</template>

<style lang="scss">
.extend-enter-active,
.extend-leave-active {
  transition: 0.9s;
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
