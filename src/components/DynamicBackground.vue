<template>
    <div class="jm-background">
		<img class="jm-background__image" :src="oldUrl" alt="" v-show="isLoading">
        <img :class="['jm-background__image is-temp', (isLoaded ? 'is-active' : '')]" :src="currentUrl" alt="" ref="imageOverlay">
	</div>
</template>

<script>
    export default {
		data(){
			return {
                isLoading: false,
                isLoaded: false,
                backgroundIncrements: 0,
                oldUrl: '',
			};
        },
        computed: {
            currentUrl() {
                return 'https://source.unsplash.com/user/juliomotol?load='+this.backgroundIncrements;
            }
        },
		watch: {
            currentUrl(newVal, oldVal) {
                this.isLoading = true;
                this.isLoaded = false;
                this.oldUrl = oldVal;
            },
			$route() {
                this.backgroundIncrements++;
			}
        },
        mounted(){
            this.$refs.imageOverlay.addEventListener('load', () => {
                this.isLoaded = true;

                setTimeout(() => this.isLoading = false, 1000);
            });
        }
    }
</script>

<style lang="scss">
	@import '../scss/utilities/all';

    .jm-background{
        &__image{
            position: absolute;
            display: block;
            object-fit: cover;
            
            @include mobile(){
                height: calc(100vw + 2px);
                top: 0;
                left: 0; 
                right: 0;
            }
            @include tablet{
                height: 100vh;
                right: -12vh;
                top: 0;
                bottom: 0;
            }
            &.is-temp{
                opacity: 0;
                transition: opacity 0.25s ease-out;
                    
                &.is-active{
                    opacity: 1;
                }
            }
            @include lightTheme {
                position: absolute;
                display: block;
                object-fit: cover;
                
                @include mobile(){
                    height: calc(100vw + 2px);
                    top: 0;
                    left: 0; 
                    right: 0;
                }
                @include tablet{
                    height: 100vh;
                    right: -12vh;
                    top: 0;
                    bottom: 0;
                }
                &.is-temp{
                    opacity: 0;
                    transition: opacity 0.25s ease-out;
                        
                    &.is-active{
                        opacity: 1;
                    }
                }
            }
        }
    }
</style>