<template>
  <font-awesome-icon 
    size="1x" 
    :icon="['fa-solid', 'fa-external-link-square-alt']"
    :style="styleObject"
  />
</template>

<script setup>
import { reactive } from "vue"

  const props = defineProps({
    position: {
      type: String,
      default: "absolute"
    }
  })

  const styleObject = reactive({
    position: props.position
  })

</script>

<style lang="scss" scoped>

svg {
  top: 9px;
  right: 11px;
  opacity: .8;
  width:12px;
}
</style>