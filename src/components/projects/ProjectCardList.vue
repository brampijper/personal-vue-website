<template>
    <ul class="technologies">
        <li 
            v-for="technology in technologies" 
            :key="technology" 
            :style="borderStyle"
        >
            {{technology}}
        </li>
    </ul>
</template>

<script>
import PrimaryButton from "../ui/AppButton.vue";

export default {
  components: {
    PrimaryButton
  },
  props: {
    technologies: {
      required: true,
      type: Object,
    },
    borderStyle: {
        required: true,
        type: Object,
    }
  }
};
</script>

<style scoped lang="scss">
@import "~rfs/scss";

 .technologies {
    // background-color:black;
    border-radius: 0px 0px 15px 15px;
    text-align:left;

    li {
        display: inline-block;
        margin: 0 .8rem .8rem 0;
        border: 1px solid;
        border-radius: 5px;
        padding: 0.5rem;
        font-size:.75rem;
        // color:white;
      }
  }

</style>
