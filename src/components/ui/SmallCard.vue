<template>
  <div class="container">
    <ul class="container__wrap">
      <a 
        class="card"
        :href="state.link"
        target="_blank"
      >
          <h4>Check out my latest blogpost</h4>
          <p><i>{{ `"${state.title}"` }}</i></p>
          <small><i>Written on {{ state.formattedDate }}</i></small>
      </a>
      <a 
        class="card"
        :href="state.link"
        target="_blank" 
      >
        -- stats Ghub commits --
      </a>
      <a 
        class="card"
        :href="state.link"
        target="_blank" 
      >
        -- contact me :) --
      </a>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import useBlogPosts from '../../hooks/useBlogPosts';

export default {
  components: {
  },
  setup() {
    const state = ref({})

    onMounted( async () => {
      const {title, pubDate, content, link} =  await useBlogPosts();
      const formattedDate = formatDate(pubDate)
      state.value = {
        title,
        formattedDate,
        content,
        link
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
  justify-content: space-between;
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
}

@media (min-width: 0px) {
  .container {
      -webkit-box-pack: justify;
      justify-content: space-between;
      width: 100%;
  }

  .container__wrap {
    gap: 2.3rem;
  }

}

@media (min-width: 990px) {
  .container {
    width: 416px;
  }

  .container__wrap {
    gap: unset;
  }
}

</style>
