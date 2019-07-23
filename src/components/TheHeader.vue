<template>
  <div>
    <TheHeaderTopBar
      v-show="!extended"
      @click.native="
        onClick();
        pickTagLines();
      "
    >
    </TheHeaderTopBar>

    <ExtendTransition :extended="extended" mode="out-in" appear>
      <TheHeaderExtended />

      <FadeTransition
        :extended="extended"
        :style="{
          zIndex: '2',
          height: '100vh'
        }"
        appear
      >
        <div class="extended-header-wrapper">
          <TheHeaderExtendedButton
            @click.native="
              onClick();
              resetTagLines();
            "
          />
          <TheHeaderExtendedIntro class="item" />
          <TheHeaderExtendedCards :tag-lines="tagLines" class="item" />
        </div>
      </FadeTransition>
    </ExtendTransition>
  </div>
</template>

<script>
import TheHeaderExtended from "./TheHeaderExtended.vue";
import TheHeaderTopBar from "./TheHeaderTopBar.vue";
import ExtendTransition from "./transitions/ExtendTransition.vue";
import FadeTransition from "./transitions/FadeTransition.vue";
import TheHeaderExtendedCards from "./TheHeaderExtendedCards.vue";
import TheHeaderExtendedButton from "./TheHeaderExtendedButton.vue";
import TheHeaderExtendedIntro from "./TheHeaderExtendedIntro.vue";

export default {
  components: {
    TheHeaderTopBar,
    TheHeaderExtended,
    ExtendTransition,
    FadeTransition,
    TheHeaderExtendedCards,
    TheHeaderExtendedButton,
    TheHeaderExtendedIntro
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

<style lang="scss">
.extended-header-wrapper {
  display: grid;
  grid-template-rows: 45% 55%;

  .item {
    height: 50vh;
  }
}
</style>
