<template>
  <a class="card" href="https://github.com/brampijper" target="_blank">
    <AppIconLoading v-if="state.isLoading" :loading="state.isLoading" /> 
    <h4 v-if="!isLoading">
        Github Contributions: {{ state.totalContributions }}
    </h4>
  </a> 
</template>

<script>
import { ref, onMounted } from 'vue';
import AppIconLoading from "./IconLoading.vue";
import loadData from "../../hooks/useFetchData";

export default {
  components: {
    AppIconLoading,
  },
  setup() {
    const state = ref({ isLoading: true })

    onMounted( async () => {
      try {
        const { value: { value } } = await loadData("/api/stats", "?username=brampijper")
        state.value = {
          totalContributions: value,
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
