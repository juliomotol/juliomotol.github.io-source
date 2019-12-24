<template>
	<div class="home">
		<div class="home__content">
			<img src="../assets/logo_banner.svg" alt="logo_banner">
			<h1 class="title is-1">
				Full Stack Developer
			</h1>
			<div class="buttons">
				<router-link :to="{name: 'about'}" class="button is-primary">About me</router-link>
				<router-link :to="{name: 'contact'}" class="button is-primary is-outlined">Get in touch</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	};
</script>

<style lang="scss">
	// @import "../scss/bulma-customizations/variables";

	// @import "bulma/sass/layout/hero.sass";
	.home{
		position: relative;
        min-height: calc(100vh - 54px - 40px - 64px);

		&__content{
			width: 100%;
			position: absolute;
			top: 50%;
			transform: translateY(-50%)
		}
		// align-content: center;
		
	}
</style>