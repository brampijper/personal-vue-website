<template>
  <div :class="`intro-container ${showIntro}`" v-on="addClickHandler">
    <div class="header__content">
      <FadeTransition>
        <div v-if="showIntro" class="content__wrap">
          <div class="wrap__intro">
            <IntroTitle />
            <PrimaryButton
              class="content__button"
              button-size="big"
              :on-click="startTransition"
            >
              View Projects
            </PrimaryButton>
          </div>
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
@import "~rfs/scss";

.intro-container.show {
  transition: max-height 1s ease-in-out;
  max-height: 100vh;
  cursor: unset;
  background-color: $body-color;
}

.intro-container {
  transition: max-height 1s ease-in-out;
  will-change: height;
  max-height: calc(15px + 4vh);
  background-color: black;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  h2 {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translate(0%, -50%);
    text-transform: uppercase;
    font-family: $h1-font;
    @include font-size(1.3rem);
    font-weight: 900;
    color: white;
  }

  .content__button {
    background-color: $btn-bg;
    border: 1px solid $btn-border;
    color: $btn-color;
    margin-top:.4rem;
  }

  .content__button:hover {
    color: $btn-hover-color;
    background-color:$btn-hover-bg;
    border: 1px solid $btn-hover-border;

  }
}

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
    row-gap: 2.5rem;
    //
    border: 10px solid $secondary-color;
    border-radius: 15px;
    padding: 4rem;
    background: $base-color;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), -4px 10px 7px rgba(0, 0, 0, 0.2);

    .wrap__intro {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-self: start;
      gap: 2rem;
    }
  }
}

@media (max-width: 1150px) {
  .content__wrap {
    grid-template-rows: 1fr;
  }
}

@media (max-width: 668px) {

  .intro-container {
      background-color: $base-color;
  }
  .header__content {
    .content__wrap {
      // margin: 0;
      border: 0;
      border-radius: 0;
      padding: 1rem;
      box-shadow: none;
      .wrap__intro {
        flex-direction: column;
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
      row-gap: 0rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
}
</style>
