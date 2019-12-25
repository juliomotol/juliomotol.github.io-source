<template>
    <OverlayScrollbars class="jm-content-wrapper" :options="{ overflowBehavior: { x: 'hidden' } }" ref="overlayScrollbar">
        <transition mode="out-in" name="fade-out-slide-in">
            <router-view class="page"/>
        </transition>
    </OverlayScrollbars>
</template>

<script>
    import { OverlayScrollbarsComponent as OverlayScrollbars} from 'overlayscrollbars-vue';
    
    export default {
        components:{
            OverlayScrollbars,
        },
    }
</script>

<style lang="scss">
    @import "../scss/bulma-customizations/utilities/all";
    @import '~overlayscrollbars/css/OverlayScrollbars.css';

    .jm-content-wrapper{
        background: linear-gradient($white, $white-ter);

        @include touch(){
            .page{
                padding: 32px;
            }
        }
		@include from($tablet){
            height: calc(100vh - 54px - 40px);
            min-height: calc(100vh - 54px - 40px);

            .page{
                padding: 32px 64px;
            }
            &:before, &:after{
                content: '';
                position: absolute;
                width: 100%;
                height: 32px;
                z-index: 2;
            }
            &:before{
                top: 0;
                background: linear-gradient($white, transparent);
            }
            &:after{
                bottom:0;
                background: linear-gradient(transparent, $white-ter);
            }
            .os-scrollbar{
                z-index: 3;
            }
        }
        .fade-out-slide-in{
            &-enter{
                opacity: 0;
                transform: translateX(-50%) !important;

                &-active{
                    transition: all .75s ease-out;
                }
            }
            &-leave{
                &-to{
                    opacity: 0;
                }
                &-active{
                    transition: all .25s ease-in;
                }
            }
        }
    }

</style>