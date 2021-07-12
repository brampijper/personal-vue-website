<template>
  <div
    :class="`container ${showIntro}`"
    v-on="!showIntro ? { click: startTransition } : {}"
  >
    <div class="header__content">
      <FadeTransition>
        <div v-if="showIntro" class="content__wrap">
          <IntroTitle />
          <PrimaryButton
            class="content__button"
            button-size="big"
            :on-click="startTransition"
          >
            View Projects
          </PrimaryButton>
          <IntroText />
          <IntroSocialIcons />
        </div>
      </FadeTransition>
      <!-- <h2 v-if="!showIntro">About Bram</h2> -->
    </div>
  </div>
</template>

<script>
import IntroSocialIcons from "./IntroSocialIcons.vue";
import IntroText from "./introText.vue";
import IntroTitle from "./introTitle.vue";
import PrimaryButton from "../ui/AppButton.vue";
import FadeTransition from "../transitions/FadeTransition.vue";

export default {
  components: {
    FadeTransition,
    IntroSocialIcons,
    IntroTitle,
    IntroText,
    PrimaryButton,
  },
  props: {
    showIntro: {
      type: String,
      required: true,
      default: "show",
    },
  },
  emits: ["toggleShowIntro"],
  setup(props, { emit }) {
    const startTransition = () => {
      emit("toggleShowIntro");
    };

    return {
      startTransition, // makes to method available to the template
    };
  },
};
</script>
<style scoped lang="scss">
.container.show {
  transition: max-height 1s ease-in-out;
  max-height: 100vh;
  background-color: aquamarine;
}

.container {
  transition: max-height 1s ease-in-out;
  max-height: 5vh;
  background-color: aquamarine;
}

.header__content {
  height: 100vh;
  display: flex;
  will-change: height;
  overflow: hidden;
  max-height: 100vh;
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
    row-gap: 6rem;
  }
}

@media (max-width: 1150px) {
  .content__wrap {
    grid-template-rows: 1fr;
  }
}

@media (max-width: 668px) {
  .content__wrap {
    margin: 1rem;
  }
}

//specific edge cases for small and tall screens
@media (max-width: 668px) and (max-height: 750px) {
  .content__wrap {
    height: 100vh;
    row-gap: 0rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>
