<template>
    <main class="work-article">
        <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
            <ul>
                <li>
                    <router-link :to="{ name: 'works' }">
                        Works
                    </router-link>
                </li>
                <li class="is-active">
                    <a href="#" aria-current="page">
                        {{ config.title }}
                    </a>
                </li>
            </ul>
        </nav>
        <h1 class="title is-1">
            {{ config.title }}
        </h1>
        <h3 class="subtitle is-4">
            {{ config.description }}
        </h3>
        <section class="content" v-html="content"></section>
    </main>
</template>

<script>
import Page from '../components/Page';

export default {
    extends: Page,
    data() {
        return {
            content: '',
            config: {},
        };
    },
    created() {
        import(/* webpackChunkName: "works-articles" */ '../articles/' + this.$route.params.slug + '/index.md').then(
            (module) => (this.content = module.default)
        );
        import(/* webpackChunkName: "works-articles" */ '../articles/' + this.$route.params.slug + '/config.json').then(
            (module) => {
                let initialConfig = { ...module.default };

                const thumbnail = require('../articles/' + initialConfig.slug + '/' + initialConfig.thumbnail);
                const preview = require('../articles/' + initialConfig.slug + '/' + initialConfig.preview);

                this.config = {
                    ...initialConfig,
                    publishDate: new Date(initialConfig.publishDate),
                    thumbnail,
                    preview,
                };

                this.backgroundImage = this.config?.preview;
            }
        );
    },
};
</script>
