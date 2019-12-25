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
	import Page from '../components/Page';

	export default {
        extends: Page,
	}
</script>

<style lang="scss">
	.home{
        min-height: calc(100vh - 54px - 40px);
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
</style>