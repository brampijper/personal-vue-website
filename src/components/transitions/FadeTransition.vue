<template>
  <component
    :is="type"
    move-class="fade-move"
    :tag="tag"
    name="fade"
    v-bind="$attrs"
    v-on="hooks"
  >
    <div v-show="extended" key="8" class="fade-transition-wrapper">
      <slot></slot>
    </div>
  </component>
</template>

<script>
export default {
  props: {
    extended: {
      type: Boolean,
      default: false
    },
    group: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    type() {
      return this.group ? "transition-group" : "transition";
    },
    hooks() {
      return {
        leave: this.setAbsolutePosition,
        ...this.$listeners
      };
    }
  },

  methods: {
    setAbsolutePosition(el) {
      console.log(this.group);
      if (this.group) {
        console.log(el);
        // el.style.position = "absolute";
      }
    }
  }
};
</script>

<style lang="scss">
.fade-transition-wrapper {
  opacity: 1;
  will-change: opacity;
  position: relative;
  transition: all 2s;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.55s;
}

.fade-enter-active {
  transition-delay: 0.55s;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.fade-leave-to,
.fade-enter {
  opacity: 0;
}

.fade-move {
  transition: opacity;
}
</style>
