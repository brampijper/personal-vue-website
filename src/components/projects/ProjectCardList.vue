<template>
  <ul>
    <li 
      v-for="topic in topics" 
      :key="topic" 
    >
      {{topic}}
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
    topics: {
      required: true,
      type: Object,
    }
  }
};
</script>

<style scoped lang="scss">
@import "~rfs/scss";

 ul {
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
    font-weight: bold;
    // color:white;
    }
  }

</style>
