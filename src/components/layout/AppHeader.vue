<template>
  <header>
    <div className="header-wrap">
      <h2>
        <a href="#">B</a>
      </h2>
      <AppToggler />
    </div>
  </header>
</template>

<script>
import AppToggler from "../ui/AppToggler.vue";

export default {
  components: {
    AppToggler
  },
  data() {
    return {}
  },
};
</script>

<style lang="scss" scoped>
@import "~rfs/scss";
header {
  background-color: $card-bg;
  color: $font-colors;
  display: flex;
  align-items:center;
  box-sizing:border-box;
  min-height: 60px;
  top: 0;
  position: sticky;
  width: 100%;
  height: calc(15px + 3vh);
  z-index: 4;
  box-shadow: rgb(0 0 0 / 38%) 0px 0px 24px 0px;
  h4 {
    @include font-size(1.5rem);
  }

  .header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding:1rem;
  }
}

.dark {
  background-color: $card-bg-dark;
  color: $font-colors-dark;
  
}

</style>
