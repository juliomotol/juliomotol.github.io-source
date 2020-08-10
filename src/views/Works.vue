<template>
    <main class="works content">
        <h1 class="title is-1">
            Works &amp; Creations
        </h1>
        <div class="columns is-multiline" v-if="workArticles.length">
            <div
                class="column is-one-third-tablet is-one-quarter-widescreen"
                v-for="(workArticle, index) in workArticles"
                :key="index"
            >
                <router-link
                    :to="{
                        name: 'works-article',
                        params: { slug: workArticle.slug },
                    }"
                >
                    <WorkCard
                        :thumbnail="workArticle.thumbnail"
                        :title="workArticle.title"
                        :tags="workArticle.tags"
                        :date="workArticle.publishDate"
                    />
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
        <h2 class="title is-2">
            Need a project done?
        </h2>
        <p>
            I'm up any for freelance work. If you think I'm the right person for your new project, feel free to hit me up!
        </p>
        <div class="buttons">
            <router-link :to="{ name: 'contact' }" class="button is-primary">Get in touch</router-link>
        </div>
    </main>
</template>

<script>
import Page from '../components/Page';
import WorkCard from '../components/WorkCard';

export default {
    extends: Page,
    components: {
        WorkCard,
    },
    data() {
        return {
            isFullPage: true,
            workArticles: [],
        };
    },
    created() {
        const config = require.context(/* webpackChunkName: "works" */ '../articles', true, /config\.json$/i);
        config.keys().map((key) => {
            const slug = [...key.matchAll(/^\.\/(.*)\/config\.json$/g)][0][1];

            let initialOptions = { ...config(key) };

            let options = {
                ...initialOptions,
                publishDate: new Date(initialOptions.publishDate),
                slug,
            };

            this.workArticles.push(options);
        });

        this.workArticles = this.workArticles.sort((previous, current) => {
            return new Date(current.publishDate) - new Date(previous.publishDate);
        });
    },
};
</script>
