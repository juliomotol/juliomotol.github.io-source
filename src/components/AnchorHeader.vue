<template>
    <h2 class="anchor-header" :id="anchor">
		<router-link :to="{name: locationName, hash: '#'+anchor}">#</router-link>
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
            locationName:{
                type: String,
                required: true,
            }
        }
    }
</script>