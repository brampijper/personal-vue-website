<template>
    <div class="card-container">
        <div class="card" v-for="card in cards" :key="card.id">
            <span class="card-topbar"> </span>
            <a class="card-link" :href="card.url" target="_blank">
                <span class="link-spanner"> </span>
                <div :class="cardSize + ' card-content'"> 
                    <p class="card-title">
                        {{ card.name }}
                    </p>
                    <p>
                        {{ card.description }}
                    </p>
                </div>
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
}

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

.card-content {
    display: grid;
    grid-template-rows: 10% 80% 10% auto;
    align-items:center;
    margin: 0px 10px 25px 10px;
    padding: 0 15px 15px 15px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    color: black;
    background-color: rgba($color: #ffffff, $alpha: 0.4);
    border-radius: 2px;

    > p {
        z-index:2;
    }
    
    .card-title {
        font-weight: 600;
        padding: 5px;
        z-index:2;
        margin-top:25px;
    }
}

.card > span {
    z-index:1;
}

.card > a {
    z-index: 15;
    text-decoration: none;
}

.card {
    position:relative;
}

.link-spanner{
    position: absolute;
    width: 94%;
    margin: 0 auto;
    height: 92%;
    top: 0;
    left: 10px;
    z-index: 1;
}


.card-topbar {
    width: 280px;
    display:block;
    background-color:aquamarine;
    height: 5px;
    margin-left:10px;
    transition: all 1.1s;
    position:absolute;
}

.card:hover > .card-content {
    box-shadow: 0 14px 28px rgba(148, 106, 106, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
    cursor:pointer;
}

.card:hover > .card-topbar {
    height: 265px;
    opacity: 0.75;
}
</style>