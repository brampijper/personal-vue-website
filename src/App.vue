<template>
  <div>
    <TheNavbar />
    <TheHeader />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheNavbar,
    TheHeader
  }
};
</script>
