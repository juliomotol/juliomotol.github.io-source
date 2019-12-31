<template>
    <h2 class="anchor-header title is-3" :id="anchor">
		<router-link :to="{name: this.$route.name, hash: '#'+anchor}">#</router-link>
        <slot></slot>
	</h2>
</template>

<script>
    export default {
        props:{
            anchor: {
                type: String,
                required: true,
            },
        }
    }
</script>