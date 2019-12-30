<template>
	<div class="about content">
		<h1 class="title is-1">
			Some things about me
		</h1>
		<Anchorheader anchor="intro">
			A Short Narration
		</Anchorheader>
		<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore etdolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clitakasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetursadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diamvoluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</p>
		<Anchorheader anchor="skills">
			Technical Skills
		</Anchorheader>
		<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore etdolore magna aliquyam erat, sed diam</p>
		<div class="tags">
			<span class="tag is-primary is-medium">HMTL, CSS &amp; JavaScript</span>
			<span class="tag is-primary is-medium">SASS/SCSS</span>
			<span class="tag is-primary is-medium">jQuery</span>
			<span class="tag is-primary is-medium">Vue.js</span>
			<span class="tag is-primary is-medium">Laravel</span>
			<span class="tag is-primary is-medium">Xamarin.Forms</span>
			<span class="tag is-primary is-medium">Xamarin.Android</span>
			<span class="tag is-primary is-medium">Amazon Web Services</span>
			<span class="tag is-primary is-medium">Google Cloud Platform</span>
			<span class="tag is-primary is-medium">Git</span>
			<span class="tag is-primary is-medium">Jira</span>
			<span class="tag is-primary is-medium">Adobe Photoshop</span>
			<span class="tag is-primary is-medium">Adobe Illstrator</span>
			<span class="tag is-primary is-medium">Adobe XD</span>
		</div>
		<Anchorheader anchor="skills">
			Hobbies &amp; Interests 
		</Anchorheader>
		<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore etdolore magna aliquyam erat, sed diam</p>
		<div class="tags">
			<span class="tag is-primary is-medium">Motorcycles</span>
			<span class="tag is-primary is-medium">Photography</span>
			<span class="tag is-primary is-medium">Graphic Design</span>
			<span class="tag is-primary is-medium">Fitness</span>
			<span class="tag is-primary is-medium">Ultimate Frisbee</span>
			<span class="tag is-primary is-medium">Swimming</span>
			<span class="tag is-primary is-medium">Music</span>
		</div>
		<div class="buttons">
			<router-link :to="{name: 'works'}" class="button is-primary">See what I can do</router-link>
			<!-- <router-link :to="{name: 'resume'}" class="button is-primary is-outlined">View Resume</router-link> -->
		</div>
	</div>
</template>

<script>
	import Anchorheader from '../components/AnchorHeader';
	import Page from '../components/Page';

	export default {
        extends: Page,
		components:{
			Anchorheader
		}
	}
</script>
