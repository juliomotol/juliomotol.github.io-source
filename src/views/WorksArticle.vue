<template>
    <main class="work-article">
        <h1 class="title is-1">{{ workArticle.title }}</h1>
        <h3 class="subtitle is-6">
            <time :datetime="workArticle.createdAt.toDate().toISOString()">
                {{ workArticle.createdAt.toDate().toDateString() }}
            </time>
        </h3>
        <VueMarkdown
            class="content"
            :source="workArticle.content"
            :anchorAttributes="{
                target: '_blank',
                rel: 'noreferrer noopenner',
            }"
        />
    </main>
</template>

<script>
import Page from '../components/Page';
import VueMarkdown from 'vue-markdown';

import Firestore from '../utilities/Firestore';

export default {
    extends: Page,
    components: {
        VueMarkdown,
    },
    data() {
        return {
            workArticle: [],
        };
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => vm.$bind('workArticle', Firestore.collection('work_articles').doc(vm.$route.params.slug)));
    },
};
</script>
