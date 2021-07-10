<template>
  <div>
    <FadeTransition>
      <AppHeader v-if="!displayAboutMe" :on-click="startTransition" />
    </FadeTransition>

    <ExtendTransition>
      <div v-if="displayAboutMe" class="header__content">
        <FadeTransition>
          <div class="content__wrap">
            <div class="content__heading">
              <article class="heading__title">
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
            </div>

            <!-- TURN INTO A SEPARATE COMPONENT ????  -->
            <article class="content__intro">
              <p class="intro__first">
                Currently building my idea's online, while keeping up with my
                interests: <br />
                <i> being outdoors, cooking, reading and mindfulness. </i>
              </p>
              <p class="intro__second">
                I worked as a junior developer at
                <a href="https://www.schuttelaar-partners.com/" target="_blank"
                  >Schuttelaar &amp; Partners.</a
                >
                Before that I was part of the
                <a href="https://www.dasbanner.com" target="_blank"
                  >Das Banner</a
                >
                team. A creative advertising agency.
              </p>
            </article>
            <!--END  -->

            <!-- TURN INTO A SEPARATE COMPONENT -->
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
            <!-- END -->
          </div>
        </FadeTransition>
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

.header__content {
  height: 100vh;
  display: flex;
  background-color: aquamarine;
  will-change: height;
  overflow: hidden;
}

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

.content__heading {
  display: flex;
  flex-direction: row;
  align-self: end;
  gap: 5rem;

  .heading__title h1 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    @include font-size(4rem);
    font-weight: 900;
    line-height: 1;
    margin: 0 0 10px 0;
  }

  .heading__title h2 {
    @include font-size(2rem);
    grid-column-start: 1;
    grid-row-start: 2;
  }
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
    max-width: 45ch;
  }

  a {
    text-decoration: underline;
  }
}

.content__social {
  justify-self: center;
  display: flex;
  align-items: flex-start;
  gap: 8rem;

  a {
    text-align: center;
    text-decoration: none;
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

@media (max-width: 1150px) {
  .content__wrap {
    grid-template-rows: 1fr;
  }

  .content__heading {
    gap: 0rem;
    flex-direction: column;
  }

  .content__intro {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .content__social {
    gap: 0rem;
    width: 100%;
    justify-self: unset;
    align-items: unset;
    justify-content: space-between;
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

  .content__intro {
    p {
      font-size: 1.1rem;
    }
  }

  .content__social {
    margin: 1rem 0 1rem 0;
    a {
      font-size: 2vw;
    }
  }

  .content__button {
    height: 45px;
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
}
</style>
