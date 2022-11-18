<template>
    <header class="header__content">
        <div class="content__wrap card">
          <div class="wrap__intro">
            <IntroTitle />
            <PrimaryButton
              class="content__button"
              button-size="big"
              :on-click="scrollTo"
            >
              View Projects
            </PrimaryButton>
          </div>
          <IntroText />
          <IntroSocialIcons />
        </div>
    </header>
</template>

<script>
import IntroSocialIcons from "./IntroSocialIcons.vue";
import IntroText from "./IntroText.vue";
import IntroTitle from "./IntroTitle.vue";
import PrimaryButton from "../ui/AppButton.vue";

export default {
  components: {
    IntroSocialIcons,
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

.header__content {
  height: 100vh;
  display: flex;
  .content__wrap {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    align-items: center;
    justify-items: start;
    height: 100%;
    margin: 0 auto;
    width: max-content;
    height: max-content;
    align-self: center;
    row-gap: 3.5rem;
    border-radius: 16px;
    padding: 2rem;

    .wrap__intro {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-self: start;
      gap: 2rem;
    }
  }

  .content__button {
    margin-top:.4rem;
  }

}

@media (max-width: 1150px) {
  .content__wrap {
    grid-template-rows: 1fr;
  }
}

@media (max-width: 668px) {
  .header__content {
    .content__wrap {
      margin: 1rem;

      .wrap__intro {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
      }
    }
  }
}

//specific edge cases for small and tall screens
@media (max-width: 668px) and (max-height: 750px) {
  .header__content {
    .content__wrap {
      height: 100vh;
      gap: 0rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}
</style>
