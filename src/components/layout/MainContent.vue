<template>
  <div class="cards__container">
    <IntroCard />
    <SmallCardGroup />
  </div>
</template>

<script>
import IntroCard from "../ui/cards/IntroCard.vue"
import SmallCardGroup from "../ui/SmallCardGroup.vue"

export default {
  components: {
    IntroCard,
    SmallCardGroup
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