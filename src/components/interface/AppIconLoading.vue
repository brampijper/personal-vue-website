<template>
    <font-awesome-icon
        :class="loading ? '' : 'paused'"
        size="6x"
        icon="spinner" />
</template>

<script>
export default {
    props: {
        loading: { 
            required: true,
            type: Boolean
        }
    }
}
</script>

<style scoped lang="scss">
svg {
    z-index:2;
    position: fixed;
    top: 30%;
    left: 50%;
    animation: rotation 2s linear infinite;

}

.paused {
    animation-play-state: paused !important;
    display:none;
}

@keyframes rotation {
    0% { -webkit-transform: rotate(0deg)}
    100% {-webkit-transform: rotate(359deg); }
}
</style>