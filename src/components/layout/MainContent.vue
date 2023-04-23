<template>
  <div class="cards__container">
    <LargeCard />
    <SmallCards />
  </div>
</template>

<script>
import LargeCard from "../ui/LargeCard.vue"
import SmallCards from "../ui/SmallCards.vue"

export default {
  components: {
    LargeCard,
    SmallCards
  }
}
</script>
<style lang="scss" scoped>
@import "~rfs/scss";

.cards__container {
  box-sizing: border-box;
  width: 100%;
  display:flex;
  flex-direction: column;
  row-gap: 2rem;
}

@media (min-width: 990px) {
  .cards__container {
    flex-direction: row;
    column-gap: 2rem;
    justify-content:center;
  }
}

</style>