<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link :to="{name: 'home'}" class="navbar-item">
                <img src="../assets/logo_light.svg" alt="logo" width="32" height="32" v-if="isDarkMode">
                <img src="../assets/logo.svg" alt="logo" width="32" height="32" v-else>
            </router-link>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                <router-link :to="{name: 'about'}" class="navbar-item">
                    about
                </router-link>
                <router-link :to="{name: 'works'}" class="navbar-item">
                    works
                </router-link>
                <router-link :to="{name: 'contact'}" class="navbar-item">
                    contact
                </router-link>
                <a href="#" class="navbar-item" @click="toggleDarkMode">
                    <span class="icon">
                        <i :class="[(isDarkMode ? 'far' : 'fas'), 'fa-moon']"></i>
                    </span>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    
    export default {
        computed: {
            ...mapState({
                isDarkMode: state => state.preferences.isDarkMode,
            })
        },
        methods: {
            ...mapActions('preferences', ['toggleDarkMode'])
        }
    }
</script>

<style lang="scss">
    @import "../scss/bulma-customizations/utilities/all";
    
    .navbar{
        font-family: $family-secondary
    }
</style>