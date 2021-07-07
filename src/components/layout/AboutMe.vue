<template>
  <div>
    <FadeTransition>
      <AppHeader v-if="!displayAboutMe" :on-click="startTransition" />
    </FadeTransition>

    <ExtendTransition
      class="overlay-wrapper"
      :display-about-me="displayAboutMe"
      mode="out-in"
    >
      <div v-if="displayAboutMe" class="header__content">
        <article class="content__title">
          <h1>Hello, I'm Bram</h1>
          <h2>Creative being &amp; web developer.</h2>
        </article>

        <PrimaryButton
          class="content__button"
          button-size="big"
          :on-click="startTransition"
        >
          View Projects
        </PrimaryButton>

        <article class="content__intro">
          <p class="intro__first">
            Currenty building my idea's online, while keeping up with my
            interests: <br />
            <i>
              sports, digital currencies, traveling, cooking, reading and
              mindfulness.
            </i>
          </p>
          <p class="intro__second">
            I worked as a junior developer at
            <a href="https://www.schuttelaar-partners.com/" target="_blank"
              >Schuttelaar &amp; Partners.</a
            >
            Before that I was part of the
            <a href="https://www.dasbanner.com" target="_blank">Das Banner</a>
            team. A creative advertising agency.
          </p>
        </article>

        <div class="content__social">
          <a href="mailto:brampijper@gmail.com" target="_blank">
            <font-awesome-icon size="4x" icon="at" />
            <span class="social__name"> Email </span>
          </a>
          <a
            href="https://www.linkedin.com/in/bram-pijper-6a9306129/"
            target="_blank"
          >
            <font-awesome-icon size="4x" :icon="['fab', 'linkedin']" />
            <span class="social__name"> LinkedIn </span>
          </a>
          <a href="https://github.com/brampijper" target="_blank">
            <font-awesome-icon size="4x" :icon="['fab', 'github']" />
            <span class="social__name"> Github </span>
          </a>
        </div>
      </div>
    </ExtendTransition>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import ExtendTransition from "../transitions/ExtendTransition.vue";
import PrimaryButton from "../ui/AppButton.vue";
import FadeTransition from "../transitions/FadeTransition.vue";

export default {
  components: {
    AppHeader,
    ExtendTransition,
    PrimaryButton,
    FadeTransition,
  },
  props: {
    displayAboutMe: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["toggleDisplayAboutMe"],
  setup(props, { emit }) {
    const startTransition = () => {
      emit("toggleDisplayAboutMe");
    };

    return {
      startTransition, // makes to method available to the template
    };
  },
};
</script>
<style scoped lang="scss">
@import "~rfs/scss";

.overlay-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.header__content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  margin: 0vw 10vw 0vw 10vw;
}

.content__title {
  margin-bottom: 50px;
}

.content__title h1 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  @include font-size(4rem);
  font-weight: 900;
  line-height: 1;
  margin: 0 0 10px 0;
}

.content__title h2 {
  @include font-size(2rem);
  grid-column-start: 1;
  grid-row-start: 2;
}

.content__intro {
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 25px;

  p {
    @include font-size(1.4rem);
    font-family: "Roboto Mono", monospace;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    line-height: 1.4;
  }

  a {
    text-decoration: underline;
  }
}

.content__social {
  justify-self: center;
  align-self: center;
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;

  a {
    text-align: center;
    text-decoration: none;
    margin: 35px;
    color: black;
  }

  svg {
    transition: transform 0.2s ease-out;
    color: black;
  }

  a:hover > svg {
    transform: translate(0, -15px);
  }

  a:hover > span {
    color: white;
    transition: color 0.3s;
  }
}

.content__button {
  width: 190px;
  margin-top: 15px;
}

.social__name {
  display: block;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 15px;
  font-family: "Roboto Mono", monospace;
  text-decoration: none;
}

/* custom css for "touch targets" */
@media (hover: none), (hover: on-demand) {
  .header__content {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    width: 90vw;
    height: 100vh;
    margin: 0 auto;
  }

  .content__title {
    margin-bottom: 0;
    margin-top: 5vw;
  }

  .content__intro {
    display: block;

    p {
      @include font-size(1.15rem);
    }
  }
  .content__intro,
  .content__social {
    grid-column-start: auto;
    grid-column-end: auto;
  }

  .intro__second {
    margin-top: 20px;
  }

  .content__social {
    align-self: flex-start;
    a {
      margin: 4vw;
      max-height: 70px;
      max-width: 70px;

      svg {
        max-height: 50px;
        max-width: 50px;
      }
    }

    span {
      @include font-size(1rem);
    }
  }

  .content__button {
    width: 90vw;
    height: 43px;
    font-size: 15px;
    margin-top: 0px;
    align-self: flex-start;
  }
}

@media (any-hover: hover) {
  @media (max-width: 500px) {
    .content__intro {
      display: block;
    }
  }

  @media (max-width: 800px) {
    .header__content {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }

    .content__button {
      width: 80vw;
    }

    .content__intro,
    .content__social {
      grid-column-start: auto;
      grid-column-end: auto;
    }

    .content__social a {
      margin: 5vw 5vw 5vw 5vw;
    }
  }
}

@media (min-width: 1050px) {
  .header__content {
    max-width: 1000px;
    margin: 0vw 10vw 0vw 10vw;
    // outline: 24px solid black;
    // outline-offset: 41px;
  }

  .content__social {
    margin-top: 50px;
  }
}
</style>
