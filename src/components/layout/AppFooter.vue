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

<style scoped>

footer {
  background-color: var(--card-bg);
  color: var(--text-color);
  position: relative;
  width: 100%;
  box-shadow: 0 0 24px 0 rgb(0 0 0 / 14%);
  border-top: 1px solid rgba(22, 22, 22, 0.2);
  min-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
