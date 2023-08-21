<template>
  <header>
    <div className="header-wrap">
      <h2 className="">
        <font-awesome-icon size="1x" :icon="['fa-solid', 'fa-home']" />
        <a href="#" title="Home">Home 👋</a>
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
  setup() {
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
  min-height: 45px;
  top: 0;
  position: sticky;
  width: 100%;
  height: calc(15px + 3vh);
  z-index: 4;
  box-shadow: rgb(0 0 0 / 38%) 0px 0px 6px 0px;
  h2 {
    @include font-size(1.1rem);
  }
  h2 {
    color: $font-colors;
    display: flex;
    flex-direction:row;
    gap: .5rem;
    align-items:center;
    font-weight: 800;
    padding: .5rem;
    border-radius: 8px;
  }

  h2:hover {
    background-color: rgb(233, 233, 233);
  }

  .header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding:1rem;
  }
}

header.dark {
  background-color: $card-bg-dark;
  color: $font-colors-dark;
  box-shadow: rgba(206, 206, 206, .1) 0px 0px 6px 0px;
  
  h2 {
    color: $font-colors-dark;
  }

  h2:hover {
    background-color: rgb(73, 73, 73);
  }
}

</style>
