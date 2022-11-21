<template>
  <div class="container card">
    <div class="container__wrap">
        <h2>Highlights</h2>
        <ul>
            <li>project</li>
            <li>project</li>
            <li>Latest blog post</li>
        </ul>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  setup(props) {

    return {
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~rfs/scss";

.container {
    border-radius: 16px;
    padding: 2rem;
    box-sizing: border-box;
    margin: 0px;
    flex-direction: row;
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
