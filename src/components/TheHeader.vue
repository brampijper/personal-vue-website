<template>
  <div>
    <TheHeaderTopBar v-show="!extended" @click.native="onClick">
    </TheHeaderTopBar>

    <ExtendTransition :extended="extended" mode="out-in" appear>
      <TheHeaderExtended />

      <FadeTransition :extended="extended" :style="{ zIndex: '2' }" appear>
        <TheHeaderExtendedButton @click.native="onClick" />
        <TheHeaderExtendedCards />
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

export default {
  components: {
    TheHeaderTopBar,
    TheHeaderExtended,
    ExtendTransition,
    FadeTransition,
    TheHeaderExtendedCards,
    TheHeaderExtendedButton
  },
  data() {
    return {
      extended: false
    };
  },
  methods: {
    onClick() {
      this.extended = !this.extended;
      this.$emit("clicked", this.extended);
    }
  }
};
</script>

<style lang="scss"></style>
