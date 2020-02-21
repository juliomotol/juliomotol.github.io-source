<template>
	<body class="columns is-gapless jm" ref="app">
		<Alert ref="alert" />
		<DynamicBackground :backgroundImage="backgroundImage" />
		<div :class="['column', isFullPage ? 'is-full' : 'is-half', 'jm__main']">
			<div class="jm__container">
				<Navigation />
				<GithubCorner
					repo="juliomotol/juliomotol.github.io-source"
					target="_blank"
					rel="noreferrer noopenner"
				/>
				<div class="is-hidden-tablet jm__mobile-spacer"></div>
				<OverlayScrollbars
					class="jm__content-wrapper"
					:options="{
						className: isDarkMode
							? 'os-theme-light'
							: 'os-theme-dark',
						overflowBehavior: { x: 'hidden' }
					}"
					ref="overlayScrollbar"
				>
					<transition mode="out-in" name="fade-out-slide-in">
						<router-view
							class="page"
							@toggleFullPage="value => (isFullPage = value)"
							@setBackground="value => (backgroundImage = value)"
						/>
					</transition>
				</OverlayScrollbars>
			</div>
			<Footer />
		</div>
	</body>
</template>

<script>
	import { mapState, mapActions } from 'vuex';
	import { OverlayScrollbarsComponent as OverlayScrollbars } from 'overlayscrollbars-vue';

	import Alert from './components/Alert';
	import DynamicBackground from './components/DynamicBackground';
	import Footer from './components/Footer';
	import GithubCorner from './components/GithubCorner';
	import Navigation from './components/Navigation';

	export default {
		components: {
			Alert,
			DynamicBackground,
			Footer,
			GithubCorner,
			Navigation,
			OverlayScrollbars
		},
		data() {
			return {
				isFullPage: false,
				backgroundImage: null
			};
		},
		computed: {
			...mapState({
				isDarkMode: state => state.preferences.isDarkMode
			})
		},
		mounted() {
			this.initTheme();
		},
		methods: {
			...mapActions('preferences', ['initTheme'])
		}
	};
</script>

<style lang="scss">
	$fa-font-path: '../node_modules/@fortawesome/fontawesome-free/webfonts';

	@import '@fortawesome/fontawesome-free';
	@import '@fortawesome/fontawesome-free/scss/brands.scss';
	@import '@fortawesome/fontawesome-free/scss/regular.scss';
	@import '@fortawesome/fontawesome-free/scss/solid.scss';
	@import '~overlayscrollbars/css/OverlayScrollbars.css';

	@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Slab&display=swap');

	@import 'bulma/sass/base/minireset.sass';
	@import './scss/bulma-customizations/all';
	@import './scss/utilities/mixins';

	@media (prefers-color-scheme: dark) {
		@import './scss/bulma-customizations-dark/all';
	}
	html.dark-theme {
		@import './scss/bulma-customizations-dark/all';

		background-color: $body-background-dark;
	}
	html.light-theme {
		@import './scss/bulma-customizations/all';

		background-color: $body-background-color;
	}
	.jm {
		margin: 0 !important;

		&__mobile-spacer {
			height: calc(100vw - 56px);
		}
		&__main {
			z-index: 1;
			transition: width 0.5s ease;
			background: linear-gradient(to right, $primary, $primary-light);
			display: flex;
			flex-direction: column;
		}
		&__container {
			border-radius: 0 0 32px 0;
			overflow: hidden;

			@include mobile {
				min-height: calc(100vh - 100vw - 40px);
			}

			.github-corner__graphic {
				@include mobile {
					top: 56px;
				}
			}

			@include tablet {
				height: calc(100vh - 40px);
			}
		}
		&__content-wrapper {
			background: linear-gradient($scheme-main, $scheme-main-ter);

			@include colorScheme using($theme) {
				@if $theme == light {
					background: linear-gradient($scheme-main, $scheme-main-ter);
				} @else if $theme == dark {
					background: linear-gradient(
						$scheme-invert,
						$scheme-invert-ter
					);
				}
			}
			@include mobile {
				min-height: calc(100vh - 100vw - 40px);
			}
			@include tablet {
				height: calc(100vh - 56px - 40px);

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

					@include colorScheme using($theme) {
						@if $theme == light {
							background: linear-gradient(
								$scheme-main,
								transparent
							);
						} @else if $theme == dark {
							background: linear-gradient(
								$scheme-invert,
								transparent
							);
						}
					}
				}
				&:after {
					bottom: 0;

					@include colorScheme using($theme) {
						@if $theme == light {
							background: linear-gradient(
								transparent,
								$scheme-main-ter
							);
						} @else if $theme == dark {
							background: linear-gradient(
								transparent,
								$scheme-invert-ter
							);
						}
					}
				}
				.os-scrollbar {
					z-index: 3;
				}
			}
			.page {
				@include mobile {
					padding: 32px;
				}
				@include tablet {
					padding: 32px 64px;
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
