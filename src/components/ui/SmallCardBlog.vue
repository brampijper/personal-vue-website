<template>
  <a
    class="card"
    :href="state.link"
    target="_blank"
    title="View my blog"
  >
    <SmallCardLinkIcon />    
    <article class="card-content">
      <h4>Check out my latest blogpost</h4>
      <p>
        <i>{{ `"${state.title}"` }}</i>
      </p>
      <small>
        <i>Written on {{ state.pubDate }}</i>
      </small>
    </article>
  </a>      
</template>

<script async setup>
  import { ref, onMounted } from 'vue';
  import fetchAndCacheData from "../../utils/useFetchAndCacheData"; 
  import SmallCardLinkIcon from './SmallCardLinkIcon.vue';

  const state = ref({})

  try {
    const { pubDate, title, link } = await fetchAndCacheData('/blog/posts')
    state.value = {
      pubDate: formatDate(pubDate),
      title,
      link
    }
  }
  catch (err) {
    console.log('error while trying to fetch data: ', err)
  }

  function formatDate(date) { // convert to a re-usable hook ?
    const dateArr = date.split(" ");
    const removeLastTwoWords = dateArr.slice(0, -2); // removes the GMT + Time.
    const formattedDate = removeLastTwoWords.join(" ");
    return formattedDate;
  }

</script>
<style lang="scss" scoped>
  .card-content {
    display: flex;
    flex-direction: column;
    gap: .8rem;
    text-align: left;
  }
</style>
