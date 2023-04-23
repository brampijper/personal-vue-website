<template>
    <ul class="small__cards">
        <SmallCardBlog />
        <SmallCardContributions />
        <SmallCardContact />
    </ul>
</template>

<script>
import SmallCardBlog from "../ui/SmallCardBlog.vue"
import SmallCardContributions from "../ui/SmallCardContributions.vue"
import SmallCardContact from "../ui/SmallCardContact.vue"

export default {
  components: {
    SmallCardBlog,
    SmallCardContributions,
    SmallCardContact
  },
  setup() {
    return {}
  }
};
</script>
<style lang="scss" scoped>

.small__cards {
    display: flex;
    flex-direction:column;
    gap: 2.3rem;
    box-sizing: border-box;
    list-style: none;
    height: 100%;

    .card {
      padding: 2rem;
      align-items:center;
    }
    
    a {
        flex-basis: 29%;
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 0.8rem;
        cursor: pointer;
        font-weight: 700;
        font-family: $title-font-family;
        min-height: 100px;
    }
    
    a:hover {
        background-color:white;
        color:black;
  }
}

@media (min-width: 660px) {
  .small__cards {
    gap: unset;
    justify-content: space-between;
    flex-flow:wrap;
  }
}

@media (min-width: 990px) {
  .small__cards {
    flex-flow:column;
  }
}
  
</style>
