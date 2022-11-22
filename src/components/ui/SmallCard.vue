<template>
  <div class="container card">
    <ul class="container__wrap">
      <li>-- stats Ghub commits --</li>
      <li>-- project highlight --</li>
      <li>-- latest blog post --</li>
    </ul>
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
