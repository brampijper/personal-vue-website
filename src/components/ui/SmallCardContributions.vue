<template>
  <a class="card" :href="state.link" target="_blank">
    <AppIconLoading v-if="state.isLoading" :loading="state.isLoading" /> 
    <h4 v-if="!state.isLoading">
        Github Contributions: {{ state.totalContributions }}
    </h4>
  </a> 
</template>

<script>
import { ref, onMounted } from 'vue';
import AppIconLoading from "./IconLoading.vue";
import useFetchData from "../../hooks/useFetchData";

export default {
  components: {
    AppIconLoading,
  },
  setup() {
    const state = ref({ isLoading: true })

    onMounted( async () => {
      const totalContributions = await useFetchData("/api/stats", "?username=brampijper")
      state.value = {
        totalContributions,
        isLoading: false,
      }
    })

    return {
      state
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
