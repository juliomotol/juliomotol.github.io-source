<template>
    <div class="jm-background">
        <img
            class="jm-background__image"
            :src="oldUrl"
            alt="background image"
            :style="{ right: backgroundOffset + 'px' }"
        />
        <img
            :class="['jm-background__image is-preview', isLoaded ? 'is-active' : '']"
            :src="currentUrl"
            alt="background image"
            :style="{ right: backgroundOffset + 'px' }"
            ref="image"
        />
    </div>
</template>

<script>
export default {
    props: {
        backgroundImage: String,
    },
    data() {
        return {
            isLoaded: false,
            backgroundIncrements: 0,
            oldUrl: '',
            backgroundOffset: 0,
        };
    },
    computed: {
        currentUrl() {
            const images = require.context(
                /* webpackChunkName: "dynamic-backgrounds" */ '../assets/backgrounds',
                true,
                /\.jpg$/i
            );
            const imagesKeys = images.keys();
            const randomImageKey = imagesKeys[Math.floor(Math.random() * imagesKeys.length)];

            return this.backgroundImage || images(randomImageKey) + '?load=' + this.backgroundIncrements;
        },
    },
    watch: {
        currentUrl(newVal, oldVal) {
            this.isLoaded = false;
            this.oldUrl = oldVal;
        },
        $route() {
            this.backgroundIncrements++;
        },
    },
    mounted() {
        this.$refs.image.addEventListener('load', () => {
            this.isLoaded = true;
            this.backgroundOffset = (this.$refs.image.width - this.$refs.image.height) / -2;
        });
    },
};
</script>

<style lang="scss">
@import '../scss/utilities/all';

.jm-background {
    &__image {
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        position: absolute;
        display: block;
        object-fit: cover;

        @include mobile() {
            height: calc(100vw + 2px) !important;
            top: 0;
            left: 0;
            right: 0 !important;
        }
        @include tablet {
            height: 100vh !important;
            // right: -12vh;
            top: 0;
            bottom: 0;
        }
        &.is-preview {
            opacity: 0;
            transition: opacity 0.25s ease-out;

            &.is-active {
                opacity: 1;
            }
        }
    }
}
</style>
