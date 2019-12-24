<template>
    <OverlayScrollbars class="">
        <div class="jm-content-wrapper">
            <router-view/>
        </div>
    </OverlayScrollbars>
</template>

<script>
    import { OverlayScrollbarsComponent as OverlayScrollbars} from 'overlayscrollbars-vue';
    
    export default {
        components:{
            OverlayScrollbars,
        }
    }
</script>

<style lang="scss">
    @import '~overlayscrollbars/css/OverlayScrollbars.css';

    .jm-content-wrapper{
        position: relative;
        min-height: calc(100vh - 54px - 40px);
        padding: 32px 72px;
    }
</style>