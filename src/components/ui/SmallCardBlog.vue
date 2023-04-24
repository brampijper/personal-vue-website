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
import useFetchData from "../../hooks/useFetchData";

export default {
  components: {
    AppIconLoading,
  },
  setup() {
    const state = ref({ isLoading: true })

    onMounted( async () => {
      const { pubDate, title, link } =  await useFetchData('/blog/posts');
      state.value = {
        pubDate: formatDate(pubDate),
        title,
        link,
        isLoading: false,
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
