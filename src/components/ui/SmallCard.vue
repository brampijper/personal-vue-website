<template>
  <div class="container card">
    <ul class="container__wrap">
      <li>-- stats Ghub commits --</li>
      <li>-- project highlight --</li>
      <li>
          {{ `Latest blogpost: ${state.title}` }}

      </li>
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
      state.value = {
        title,
        pubDate,
        content,
        link
      }
    })
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
    overflow:hidden;
}

.container__wrap {
  list-style: none;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  li {
    flex-basis: 33%;
    display:flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px dashed goldenrod;
    cursor: pointer;
    font-weight: 700;
    font-family: $title-font-family;
    min-height: 100px;
  }

  li:last-child {
    border: none;
  }
}

@media (min-width: 0px) {
  .container {
      -webkit-box-pack: justify;
      justify-content: space-between;
      width: 100%;
  }
}

@media (min-width: 990px) {
  .container {
    width: 416px;
  }
}

</style>
