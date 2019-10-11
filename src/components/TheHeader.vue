<template>
  <div>
    <TheHeaderTopBar
      v-show="!extended"
      @click.native="onClick(); pickTagLines();">
    </TheHeaderTopBar>

    <ExtendTransition class="extended-wrapper" :extended="extended" mode="out-in" appear>

          <AppIconClosed @click.native="onClick(); resetTagLines();"/>

          <p class="intro-text">
              This will be the place to view the projects I'm currently working on and
              recent achievements.
              As my development skillset will continue to grow I dare to agree my
              projects will become more exciting. ;-)
          </p>

          <AppCard :cards="tagLines" cardSize="small"/>
        
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
      data: [
        "I'm an outdoor kind of guy'",
        "I like technology",
        "I like sailing",
        "I like coffee",
        "I want to become the best version of myself",
        "Traveling == adventures",
        "Would love to do more collaboration",
        "Norway is the coolest country",
        "Running for motivation",
        "I lived in Amsterdam for 2 years",
        "Learning front-end development",
        "Experience in display advertising",
        "making animations with Greensock.js",
        "Often found hiking",
        "Flat white > cappuccino",
        "Also a tea lover",
        "Public transport > cars",
        "I never stop learning"
      ],
      tagLines: []
    };
  },
  methods: {
    onClick() {
      this.extended = !this.extended;
      this.$emit("clicked", this.extended);
    },
    pickTagLines: function() {
      for (let i = 0; i < 9; i++) {
        let randomIndex = Math.floor(Math.random() * this.data.length);
        let itemInArr = this.tagLines.includes(this.data[randomIndex]);

        itemInArr ? i-- : this.tagLines.push(this.data[randomIndex]);
      }
    },
    resetTagLines: function() {
      this.tagLines = [];
    }
  }
};
</script>
<style scoped lang="scss">
.intro-text {
  line-height: 1.3;
  font-size: 35px;
  font-size: 3.5vmin;
  text-align: center;
}

</style>