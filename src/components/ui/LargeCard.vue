<template>
  <div class="container card">
    <div class="container__wrap">
      <IntroTitle />
      <IntroText />
    </div>
  </div>
</template>

<script>
import IntroText from "../intro/IntroText.vue";
import IntroTitle from "../intro/IntroTitle.vue";
import PrimaryButton from "./AppButton.vue";

export default {
  components: {
    IntroTitle,
    IntroText,
    PrimaryButton,
  },
  setup(props) {
    const scrollTo = () => {
      document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
      });
    }

    return {
      scrollTo //make method available to template
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
  max-width: 680px;
}

.container__wrap {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 0px) {
  .container {
    width: 100%;
    padding: 1rem;
  }
}

@media (min-width: 660px) {
  .container {
    padding: 2rem;
  }
}

@media (min-width: 990px) {
  .container {
    width: calc(100% - 300px);
    margin-right: 32px;
  }
}

</style>
