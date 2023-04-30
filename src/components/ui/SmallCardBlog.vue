<template>
  <a  class="card"
      :href="state.link"
      target="_blank">
      
    <AppIconLoading v-if="state.isLoading" :loading="state.isLoading" />
    
    <article class="card-content" v-else>
        <h4>Check out my latest blogpost</h4>
        <p><i>{{ `"${state.title}"` }}</i></p>
        <small><i>Written on {{ state.pubDate }}</i></small>
    </article>
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
        const data = await fetchAndCacheData('/blog/posts')
        const { pubDate, title, link } = data;
        state.value = {
          pubDate: formatDate(pubDate),
          title,
          link
        }
      }
      catch (error) {
        console.log(error)
      }
    })

    function formatDate(date) {
      const dateArr = date.split(" ");
      const removeLastTwoWords = dateArr.slice(0, -2); // removes the GMT + Time.
      const formattedDate = removeLastTwoWords.join(" ");
      return formattedDate;
    }

    return {
      state
    }
  }
};
</script>
<style lang="scss" scoped>
  .card-content {
    display: flex;
    flex-direction: column;
    gap: .8rem;
    text-align: left;
  }
</style>
