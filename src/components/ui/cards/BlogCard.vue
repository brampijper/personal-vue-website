<template>
  <a
    class="card"
    :href="state.link"
    target="_blank"
    title="Read recent blogpost"
    :style="backgroundStyle"
  >
    <ExternalLinkIcon />    
    <article class="card-content">
      <h3>Read about: {{ state.title }} </h3>
      
      <section>
        <small className="card-content-date">
          Written on {{ state.pubDate }}
        </small>
      </section>
    </article>
  </a>      
</template>

<script async setup>
  import { ref, computed } from 'vue';
  import fetchAndCacheData from "../../../utils/useFetchAndCacheData"; 
  import ExternalLinkIcon from '../ExternalLinkIcon.vue';

  const state = ref({})

  try {
    const { pubDate, title, link, enclosure } = await fetchAndCacheData('/blog/posts')
    state.value = {
      pubDate: formatDate(pubDate),
      title,
      link,
      imgUrl: enclosure.url
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

  const backgroundStyle = computed(() => {
    if (state.value.imgUrl) {
      return {
        backgroundImage: `url('${state.value.imgUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: '95% 75%',
      };
    }
    return {};
  })

</script>
<style scoped>
.card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--card-bg);
  color: var(--text-color);
  border: var(--card-border);
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
  position: relative;
  overflow:hidden;
}

.card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(250, 250, 250, 0.2); /* adjust opacity as needed */
  z-index: 1;
  background: var(--image-overlay);
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-align: left;
  position: relative;
  z-index: 1;
  margin-right: 1rem;
}

.card-content h3 {
  margin:0;
  font-size: clamp(1rem, 2.5vw, 1.15rem);
}

.card-content-date {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-color);
}


</style>
