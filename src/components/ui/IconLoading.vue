<template>
  <div v-if="loading" class="icon-container">
    <font-awesome-icon
      :class="loading ? '' : 'paused'"
      size="6x"
      icon="spinner"
    />
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.icon-container {
  /* position: absolute;
  height: 40vh; */
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

svg {
  z-index: 2;
  animation: rotation 2s linear infinite;
}

.paused {
  animation-play-state: paused !important;
  display: none;
}

@keyframes rotation {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
  }
}
</style>
