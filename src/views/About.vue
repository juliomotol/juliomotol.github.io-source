<template>
	<div class="about content">
		<h1 class="title is-1">
			Some things about me
		</h1>
		<Anchorheader anchor="intro">
			A Short Bio
		</Anchorheader>
		<p>I'm Julio, an aspiring full-stack developer from the Philippines. Had a rough childhood but is now making the best out of what life can offer. I studied at the Far Eastern University - Makati where I finished BS Information Technology. I have passion for creating things. I'm constantly thinking of ways to do things better and faster. I enjoy working in teams specially the exchange of toughts and ideas.</p>
		<Anchorheader anchor="skills">
			Technical Skills
		</Anchorheader>
		<p>
			Exploring new programming languages and frameworks can be intimidating but I always enjoy the challenge of it. If it catches my interest, I'll definitely look it up. As of this momment, below are what I have in my armory.
		</p>
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
		<p>
			I'm not just a software developer. I always find time and myself in other particular activities. I try to be active in my personal and leisure activites despite my workloads. Below are what drives me to work harder everyday.
		</p>
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
