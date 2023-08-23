<template>
  <ul :class="{'dark': store.isDarkMode}">
    <li 
      v-for="topic in topics" 
      :key="topic" 
    >
      {{topic}}
    </li>
  </ul>
</template>

<script setup>
import PrimaryButton from "../ui/AppButton.vue";
import { store } from "../../store";

  defineProps({
    topics: {
      required: true,
      type: Object,
    }
  })
</script>

<style scoped lang="scss">
@import "~rfs/scss";

ul {
// background-color:black;
// border-radius: 0px 0px 15px 15px;
border-radius: 5px;
padding: 1rem 1rem 1rem 2rem;
text-align:center;
display:flex;
flex-wrap:wrap;
width: 100%;
align-items:center;
justify-content:flex-start;
background-color:rgb(244, 244, 244);

li {
  display: inline-block;
  margin: 0 .3rem .3rem 0;
  border: 1px solid #727272;
  border-radius: 2px;
  padding: 0.5rem;
  font-size:.65rem;
  font-weight:500;
  // color:white;
  background-color:white;
  }
}

ul.dark {
  background-color:rgb(28,28,28);
  li {
    background-color:rgb(24,24,24);
  }
}

</style>
