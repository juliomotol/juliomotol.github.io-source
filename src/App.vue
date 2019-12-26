<template>
	<div class="columns is-gapless jm" ref="app">
		<DynamicBackground/>
        <div :class="['column', (isFullPage ? 'is-full' : 'is-half'), 'jm__container']">
			<Navigation/>
			<div class="is-hidden-tablet is-hidden-desktop jm__mobile-spacer"></div>
			<OverlayScrollbars class="jm__content-wrapper" :options="{ 
				className: isDarkMode ? 'os-theme-light' : 'os-theme-dark', 
				overflowBehavior: { x: 'hidden' } 
			}" ref="overlayScrollbar">
				<transition mode="out-in" name="fade-out-slide-in">
					<router-view class="page"/>
				</transition>
			</OverlayScrollbars>
			<Footer/>
        </div>
    </div>
</template>

<script>
	import { mapState, mapActions } from 'vuex';
    import { OverlayScrollbarsComponent as OverlayScrollbars} from 'overlayscrollbars-vue';
	
	import Footer from './components/Footer';
	import Navigation from './components/Navigation';
	import DynamicBackground from './components/DynamicBackground';

	export default {
		components: {
			Footer,
			Navigation,
			OverlayScrollbars,
			DynamicBackground,
		},
        computed:{
            ...mapState({
                isFullPage: state => state.isFullPage,
                isDarkMode: state => state.preferences.isDarkMode,
            })
		},
		mounted() {
			this.initTheme();
		},
		methods: {
            ...mapActions('preferences', ['initTheme']),
		}
	}
</script>

<style lang="scss">
	$fa-font-path: "../node_modules/@fortawesome/fontawesome-free/webfonts";

	@import "@fortawesome/fontawesome-free";
	@import "@fortawesome/fontawesome-free/scss/brands.scss";
	@import "@fortawesome/fontawesome-free/scss/regular.scss";
	@import "@fortawesome/fontawesome-free/scss/solid.scss";
	@import '~overlayscrollbars/css/OverlayScrollbars.css';

	@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Slab&display=swap");

	$family-sans-serif: "Open Sans";
	$family-primary: 'Roboto Slab';
	$family-secondary: 'Open Sans';

    @import 'bulma/sass/base/minireset.sass';
	@import './scss/bulma-customizations/all';
	@import './scss/utilities/mixins';

	@media (prefers-color-scheme: dark) {
		@import './scss/bulma-customizations-dark/all';
	}
	html.light-theme{
		@import './scss/bulma-customizations/all';

		background-color: $body-background-color;
		font-size: $body-size;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		min-width: $body-min-width;
		overflow-x: $body-overflow-x;
		overflow-y: $body-overflow-y;
		text-rendering: $body-rendering;
		text-size-adjust: 100%;
	}
	html.dark-theme{
		@import './scss/bulma-customizations-dark/all';

		background-color: $body-background-dark;
	}
	.jm{
		margin: 0 !important;

		&__mobile-spacer{
			height: calc(100vw - 54px);
		}
        &__container{
			z-index: 1;
            transition: width 0.5s ease;
            border-radius: 0 0 32px 0;
			overflow: hidden;
			
			@include tablet{
				height: 100vh;
			}
		}
		&__content-wrapper {
			background: linear-gradient($scheme-main, $scheme-main-ter);

			@include darkTheme {
				background: linear-gradient($scheme-invert, $scheme-invert-ter);
			}
			@include lightTheme {
				background: linear-gradient($scheme-main, $scheme-main-ter);
			}
			@include touch() {
				.page {
					padding: 32px;
				}
			}
			@include tablet {
				height: calc(100vh - 54px - 40px);
				min-height: calc(100vh - 54px - 40px);

				.page {
					padding: 32px 64px;
				}
				&:before,
				&:after {
					content: '';
					position: absolute;
					width: 100%;
					height: 32px;
					z-index: 2;
				}
				&:before {
					top: 0;
					background: linear-gradient($scheme-main, transparent);

					@include darkTheme {
						background: linear-gradient($scheme-invert, transparent);
					}
					@include lightTheme {
						background: linear-gradient($scheme-main, transparent);
					}
				}
				&:after {
					bottom: 0;
					background: linear-gradient(transparent, $scheme-main-ter);

					@include darkTheme {
						background: linear-gradient(transparent, $scheme-invert-ter);
					}
					@include lightTheme {
						background: linear-gradient(transparent, $scheme-main-ter);
					}
				}
				.os-scrollbar {
					z-index: 3;
				}
			}
		}
	}
	.fade-out-slide-in {
		&-enter {
			opacity: 0;
			transform: translateX(-50%);

			&-active {
				transition: all 0.75s ease-out;
			}
		}
		&-leave {
			&-to {
				opacity: 0;
			}
			&-active {
				transition: all 0.25s ease-in;
			}
		}
	}
</style>
