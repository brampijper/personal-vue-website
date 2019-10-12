<template>
    <div class="card-container">
        <div :class="cardSize + ' card'" v-for="card in cards" :key="card.id">
            <p class="card-title">
                {{ card.name }}
            </p>
            <p>
                {{ card.description }}
            </p>
            <a class="card-link" :href="card.url" target="_blank">
                View Website
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cards: {
            required: false,
            type: Array
        },
        cardSize: {
            required: true,
            type: String
        }
    }
}
</script>

<style scoped lang="scss">
.card-container {
  text-align: center;
  width: 100vw;
  display: flex;
  flex-wrap:wrap;
  justify-content:center;

    .medium {
        width: 250px;
        min-width: 200px;
        max-height: 300px;
        min-height: 250px;
    }

    .small {
        height: 15vh;
        width: 25vmin;
        display: inline-grid;
        place-items: center;
        justify-self: center;
    }

    .card {
        display: grid;
        grid-template-rows: 10% 80% 10% auto;
        align-items:center;
        margin: 0px 10px 25px 10px;
        padding: 15px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        color: black;
        background-color: rgba($color: #ffffff, $alpha: 0.4);
        border-radius: 2px;
        border-top: 5px solid aquamarine;
        
        .card-title {
            font-weight: 600;
            padding: 5px;
        }

        .card-link {
            align-self: end;
        }
    }
}

.card:hover {
    box-shadow: 0 14px 28px rgba(148, 106, 106, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
    // cursor:pointer;
}
</style>