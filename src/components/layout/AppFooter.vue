<template>
  <footer>
    <!-- <div className="footer-wrap"> -->
        <!-- <IntroSocialIcons /> -->
    <!-- </div> -->
  </footer>
</template>

<script>
// import IntroSocialIcons from '../intro/IntroSocialIcons.vue'
export default {
  components: {
    // IntroSocialIcons
  },
  data() {
    return {}
  },
};
</script>

<style lang="scss" scoped>
@import "~rfs/scss";

footer {
    background-color: $card-bg;
    color: $font-colors;
    position:relative;
    width: 100%;
    box-shadow: rgb(0 0 0 / 14%) 0px 0px 24px 0px;
    border-top: 1px solid rgba(22, 22, 22, 0.2);    
    min-height: 2rem;
    display: flex;
    align-items:center;
    justify-content: center;
}

.dark {
  background-color: $card-bg-dark;
  color: $font-colors-dark;
}

</style>
