<template>
  <div :class="`container ${showIntro}`" v-on="addClickHandler">
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
      <FadeTransition>
        <h2 v-if="!showIntro">About Bram</h2>
      </FadeTransition>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import IntroSocialIcons from "./IntroSocialIcons.vue";
import IntroText from "./IntroText.vue";
import IntroTitle from "./IntroTitle.vue";
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

    // only returns a click handler when needed
    const addClickHandler = computed(() => {
      return !props.showIntro ? { click: startTransition } : {};
    });

    return {
      startTransition, // makes to method available to the template
      addClickHandler,
    };
  },
};
</script>
<style lang="scss" scoped>
.container.show {
  transition: max-height 1s ease-in-out;
  max-height: 100vh;
  background-color: aquamarine;
  cursor: unset;
}

.container {
  transition: max-height 1s ease-in-out;
  max-height: 5vh;
  background-color: aquamarine;
  display: flex;
  align-items: center;
  cursor: pointer;

  h2 {
    position: absolute;
    width: 100%;
    text-align: center;
    align-self: center;
  }
}

.header__content {
  height: 100vh;
  display: flex;
  will-change: height;
  overflow: hidden;
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
