<template>
	<div class="works">
		<div class="content">
			<h1 class="title is-1">
				Works &amp; Creations
			</h1>
			<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore etdolore magna aliquyam erat, sed diam</p>
		</div>
		<div class="columns is-multiline" v-if="workArticles.length">
			<div class="column is-one-third-tablet is-one-quarter-widescreen"
				v-for="(workArticle, index) in workArticles" 
				:key="index">
				<router-link :to="{name: 'works-article', params: {slug: workArticle.id}}">
					<WorkCard :thumbnail="workArticle.thumbnail"
							:title="workArticle.title"
							:tags="workArticle.tags"
							:date="workArticle.createdAt.toDate()"/>
				</router-link>
			</div>
		</div>
		<div class="columns is-centered " v-else>
			<div class="column is-one-third-tablet is-one-quarter-widescreen">
				<div class="box">
					<div class="media">
						<div class="media-left">
							<span class="icon is-large">
								<i class="fas fa-search fa-2x"></i>
							</span>
						</div>
						<div class="media-content">
							<p>No projects found, come back soon!</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Page from '../components/Page';
	import WorkCard from '../components/WorkCard';

    import Firestore from '../utilities/Firestore';

	export default {
        extends: Page,
		components:{
			WorkCard,
		},
		data() {
			return {
				isFullPage: true,
				workArticles:[],
			}
		},
		firestore: {
			workArticles: Firestore.collection('work_articles').where('isPublished', '==', true),
		}
	}
</script>