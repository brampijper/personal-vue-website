<template>
  <div>
    <TheHeaderTopBar
      v-show="!extended"
      @click.native="onClick()">
    </TheHeaderTopBar>

    <ExtendTransition class="overlay-wrapper" :extended="extended" mode="out-in" appear>

      <div class="content-wrapper">
          <AppIconClosed @click.native="onClick()" />

          <div class="title-wrapper">
            <h1>Hello, I'm Bram</h1>
            <h2> Creative being & web developer. </h2>

            <div class="paragraph-wrapper">
              <p> Currenty looking for a developer position at a company that is working on having a positive impact on the world. </p>
              <p> Previously worked at Das Banner, a creative advertising agency for creating smoothly animated advertisements.</p>
            </div>
          </div>

            <div class="social-wrapper">
              <a href="mailto:brampijper@gmail.com" target="_blank">
                <font-awesome-icon size="4x" icon="at" />
                <span class="icon-name"> Email </span> 
              </a>
              <a href="https://www.linkedin.com/in/bram-pijper-6a9306129/" target="_blank">
                <font-awesome-icon size="4x" :icon="[ 'fab', 'linkedin' ]" />
                <span class="icon-name"> LinkedIn </span> 
              </a>
              <a href="https://github.com/brampijper" target="_blank">
                <font-awesome-icon size="4x" :icon="[ 'fab', 'github']" />
                <span class="icon-name"> Github </span>
              </a>
            </div>
        </div>
  
    </ExtendTransition>
  </div>
</template>

<script>
import TheHeaderTopBar from "./TheHeaderTopBar.vue";
import ExtendTransition from "./transitions/ExtendTransition.vue";
import AppIconClosed from "./interface/AppIconClosed.vue";
import AppCard from "./interface/AppCard.vue";

export default {
  components: {
    TheHeaderTopBar,
    ExtendTransition,
    AppIconClosed,
    AppCard
  },
  data() {
    return {
      extended: false,
    };
  },
  methods: {
    onClick() {
      this.extended = !this.extended;
      this.$emit("clicked", this.extended);
    },
  }
};
</script>
<style scoped lang="scss">

.content-wrapper {
  margin: 12vw 5vw 5vw 5vw;
  display:grid;
  height: 80vh;
    
  h1 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 4rem;
    font-weight: 900;
    line-height:1;
    margin: 0 0 10px 0;
  }

  h2 {
    font-size: 2rem;
  }

  .paragraph-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 6vw 0 0 0;
    gap: 10vw;

    p {
      font-family: "Roboto Mono", monospace;
      font-weight: 300;
      -webkit-font-smoothing: antialiased;
      line-height: 1.4;
      font-size: 1.7rem;
    }
  }
}

.social-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  width: 50%;
  margin: 0 auto;

  .icon-name {
    display:block;
    font-size: 1.2rem;
    text-align:center;
    margin-top:15px;
    font-family: "Roboto Mono", monospace;
    text-decoration: none;
  }

  a {
    text-align:center;
    text-decoration: none;
  }

  svg {
    transition: transform .2s ease-out;
    color:black;
  }

  a:hover > svg {
    transform: translate(0, -15px);
  }

  a:hover > span {
    color:white;
  }
}

@media (max-width: 720px) {
  .content-wrapper {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size:1.5rem;
      word-break:words;
    }

    .title-wrapper {
      width: 90vw;

      .paragraph-wrapper {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;

        p {
          font-size: 1.1rem;
        }
      }
    }

    .social-wrapper {
      width:100%;
      margin-top:4vw;

      svg {
        width: 0.7em;
      }

      span {
        font-size: 1rem;
        margin-top: 5px;
      }
    }
  }
}

</style>