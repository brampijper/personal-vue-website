<template>
  <a
    class="card"
    :href="state.link"
    target="_blank"
    title="Read recent blogpost"
  >
    <ExternalLinkIcon />    
    <article class="card-content">
      <p>Read recent blogpost:</p>
      
      <section>
        <h4>
          {{ state.title }}
        </h4>
        <small className="card-content-date">
          Written on {{ state.pubDate }}
        </small>
      </section>
    </article>
  </a>      
</template>

<script async setup>
  import { ref, onMounted } from 'vue';
  import fetchAndCacheData from "../../../utils/useFetchAndCacheData"; 
  import ExternalLinkIcon from '../ExternalLinkIcon.vue';

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

    .card-content-date {
      font-size: .7rem;
      font-weight:500;
    }
  }
</style>
