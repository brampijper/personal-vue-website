<template>
  <div class="cards__container">
    <LargeCard />
    <SmallCard />
  </div>
</template>

<script>

import LargeCard from "../ui/LargeCard.vue"
import SmallCard from "../ui/SmallCard.vue"

export default {
  components: {
    LargeCard,
    SmallCard
  },
  setup(props) {
    return {
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~rfs/scss";

.cards__container {
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
}

@media (min-width: 0px) {
    .cards__container {
        -webkit-box-pack: justify;
        justify-content: space-between;
        height: 100%;
        row-gap: 2rem;
    }
}

@media (min-width: 1440px) {
    .cards__container {
        justify-content: space-evenly;
        height: 516px;
    }
}

</style>
