<template>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link :to="{name: 'home'}" class="navbar-item">
                <img src="../assets/logo.svg" alt="logo" width="32" height="32">
            </router-link>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                <router-link :to="{name: 'about'}" class="navbar-item" active-class="is-active">
                    about
                </router-link>
                <div class="navbar-item has-dropdown is-hoverable">
                    <router-link :to="{name: 'works'}" class="navbar-item" active-class="is-active">
                        works
                    </router-link>
                    <div class="navbar-dropdown is-boxed">
                        <router-link :to="{name: 'works-category', params: {category: 'projects'}}" class="navbar-item" active-class="is-active">
                            projects
                        </router-link>
                        <router-link :to="{name: 'works-category', params: {category: 'designs'}}" class="navbar-item" active-class="is-active">
                            designs
                        </router-link>
                    </div>
                </div>
                <router-link :to="{name: 'contact'}" class="navbar-item" active-class="is-active">
                    contact
                </router-link>
                <div class="navbar-item">
                    <i class="fas fa-moon"></i>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
    @import "../scss/bulma-customizations/variables";
    
    $navbar-background-color            : transparent;
    $navbar-height                      : 56px;
    $navbar-padding-vertical            : 12px;
    $navbar-padding-horizontal          : 12px;
    $navbar-item-hover-color            : $black;
    $navbar-item-active-color           : $primary;
    $navbar-dropdown-item-hover-color   : $black;
    $navbar-dropdown-item-active-color  : $primary;
    $navbar-breakpoint: 0;

	@import "bulma/sass/components/navbar.sass";
</style>