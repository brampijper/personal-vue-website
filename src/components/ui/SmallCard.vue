<template>
  <div class="container">
    <ul class="container__wrap">
      <!-- Make a re-usable component -->
      <a 
        class="card"
        :href="state.link"
        target="_blank"
      >
      <AppIconLoading v-if="state.isLoading" :loading="state.isLoading" />
      <article class="card-content" v-else>
          <h4>Check out my latest blogpost</h4>
          <p><i>{{ `"${state.title}"` }}</i></p>
          <small><i>Written on {{ state.pubDate }}</i></small>
      </article>
      </a>
      <!-- End -->
      <a 
        class="card"
        :href="state.link"
        target="_blank" 
      >
        <h4>
          Github Contributions: {{ state.totalContributions }}
        </h4>
      </a>
      <a 
        class="card"
        href="mailto:brampijper@proton.me"
        target="_blank" 
      >
        <article class="card-content">
          <h4>Opportunities | Feedback | Random ? </h4>
          <p> Happy to connect & chat, drop a line at </p>
        </article>
        <span class="card__content-email">
          brampijper@proton.me
        </span>
      </a>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import useBlogPosts from '../../hooks/useBlogPosts';
import useGetContributions from '../../hooks/useGetContributions';
import AppIconLoading from "../ui/IconLoading.vue";

export default {
  components: {
    AppIconLoading,
  },
  setup() {
    const state = ref({ isLoading: true })

    onMounted( async () => {
      const { firstPost, isLoading } =  await useBlogPosts();
      const { pubDate, title, link, } = firstPost;
      const totalContributions = await useGetContributions('brampijper', `${process.env.GITHUB_API_KEY}`)
      state.value = {
        isLoading,
        pubDate: formatDate(pubDate),
        title,
        link,
        totalContributions
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
@import "~rfs/scss";

.container {
    box-sizing: border-box;
    margin: 0px;
    flex-direction: row;
}

.container__wrap {
  list-style: none;
  height: 100%;
  display: flex;
  flex-direction: column;

  a {
    flex-basis: 29%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.8rem;
    cursor: pointer;
    font-weight: 700;
    font-family: $title-font-family;
    min-height: 100px;
  }

  a:hover {
    background-color:white;
    color:black;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: .8rem;
    text-align: left;
  }
  
  .card__content-email {
    display: flex;
    align-items:center;
    font-weight: 700;
  }
}

@media (min-width: 0px) {
  .container {
      -webkit-box-pack: justify;
      justify-content: space-between;
      width: 100%;
  }

  .container__wrap {
    gap: 2.3rem;

    .card {
      padding: 2rem;
      align-items:center;
    }
  }

}

@media (min-width: 660px) {
  .container__wrap {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}

@media (min-width: 990px) {
  .container {
    width: 416px;
  }

  .container__wrap {
    gap: unset;
    justify-content: space-between;
  }
}

</style>
