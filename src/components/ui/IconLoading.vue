<template>
  <div v-if="isLoading" :class=" `icon-container size-${size}` ">
    <font-awesome-icon
      :class="isLoading ? '' : 'paused'"
      :size="size === 'big' ? '6x' : '2x'"
      icon="spinner"
    />
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true,
      default: false,
    },
    size: {
      type: String,
      required: false,
      default: 'small'
    }
  },
};
</script>

<style scoped>

.icon-container {
  position: absolute;
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-container.size-big {
  margin-top: 8rem;
}

svg {
  z-index: 2;
  animation: rotation 2s linear infinite;
  color: var(--text-color);
  /* Optionally, you could use var(--link-color) for a more accent color */
}

.paused {
  animation-play-state: paused !important;
  display: none;
}

@keyframes rotation {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}

</style>
