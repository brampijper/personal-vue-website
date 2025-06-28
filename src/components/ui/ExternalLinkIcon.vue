<template>
  <font-awesome-icon 
    size="1x" 
    :icon="['fa-solid', 'fa-external-link-square-alt']"
    :style="{ '--icon-position': position }"
  />
</template>

<script setup>
  const props = defineProps({
    position: {
      type: String,
      default: "absolute"
    }
  })

</script>

<style scoped>

svg {
  top: 9px;
  right: 11px;
  opacity: 0.8;
  width: 12px;
  color: var(--link-color);
  position: var(--icon-position, absolute);
  transition: color 0.2s;
  z-index: 5;
}

</style>