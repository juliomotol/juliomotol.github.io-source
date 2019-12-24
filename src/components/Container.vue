<template>
    <section class="columns is-gapless jm-container">
        <section class="column is-half jm-container__content-wrapper">
            <slot></slot>
        </section>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
    @import "../scss/bulma-customizations/variables";

    .jm-container{
        &__content-wrapper{
            height: 100vh;
            background: linear-gradient($white, $white-ter);
            border-radius: 0 0 32px 0;
        }
    }
</style>