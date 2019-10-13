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
@import "~rfs/scss";

.content-wrapper {
  margin: 18vw 5vw 5vw 5vw;
  display:grid;
  height: 80vh;
    
  h1 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    @include font-size(4rem);
    font-weight: 900;
    line-height:1;
    margin: 0 0 10px 0;
  }

  h2 {
    @include font-size(2rem);
  }
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
    @include font-size(1.5rem);
  }
}

.social-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
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
    margin: 25px;
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

  /* custom css for "touch targets" */
@media (hover:none), (hover:on-demand) { 
  .paragraph-wrapper {
    grid-template-columns: 1fr;
  }

  .content-wrapper {
    margin-top: 6vw;
    
    h1 {
      margin-right: 60px;
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

@media (min-width: 950px) {
  .content-wrapper {
    margin: 10vw 15vw 10vw 15vw;
  }
}

</style>