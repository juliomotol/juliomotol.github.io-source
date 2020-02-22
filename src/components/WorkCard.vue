<template>
	<div class="card">
		<div class="card-image">
			<figure class="image is-4by3">
				<img src="https://bulma.io/images/placeholders/1280x960.png"
					:alt="title + 'thumbnail'"/>
			</figure>
		</div>
		<div class="card-content">
			<p class="title is-2">{{ title }}</p>
			<p class="subtitle is-6">
				<time :datetime="date.toISOString()">
					{{ date.toDateString() }}
				</time>
			</p>
			<div class="tags">
				<span v-for="(tag, index) in tags"
					:key="index"
					class="tag is-primary">
					{{ tag.name }}
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			thumbnail: String,
			title: {
				type: String,
				required: true
			},
			tags: Array,
			date: Date
		}
	};
</script>
