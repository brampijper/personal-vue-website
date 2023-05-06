<template>
  <a class="card" href="https://github.com/brampijper" target="_blank">
    <AppIconLoading :isLoading="state.isLoading" /> 
    <h4 v-if="!state.isLoading">
        Github Contributions: {{ state.totalContributions }}
    </h4>
  </a> 
</template>

<script>
import { ref, onMounted } from 'vue';
import AppIconLoading from "./IconLoading.vue";
import fetchAndCacheData from "../../hooks/useFetchAndCacheData";

export default {
  components: {
    AppIconLoading,
  },
  setup() {
    const state = ref({ isLoading: true })

    onMounted( async () => {
      try {
        const data = await fetchAndCacheData("/api/stats", "?username=brampijper")
        state.value = {
          totalContributions: data,
          isLoading: false
        }

      } catch (error) {
        console.error(error)
      }
    })

    return {
      state,
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
