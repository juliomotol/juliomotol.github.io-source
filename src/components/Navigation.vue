<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
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
                    <span class="icon">
                        <i class="fas fa-moon"></i>
                    </span>
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
    @import "../scss/bulma-customizations/utilities/all";

    $navbar-background-color            : $white;
    // $navbar-box-shadow-size: 0 2px 0 0;
    // $navbar-box-shadow-color: $background;
    $navbar-height                      : 56px;
    $navbar-padding-vertical            : 12px;
    $navbar-padding-horizontal          : 12px;
    // $navbar-z: 30;
    // $navbar-fixed-z: 30;

    // $navbar-item-color: $text;
    $navbar-item-hover-color            : $black;
    $navbar-item-hover-background-color : transparent;
    $navbar-item-active-color           : $primary;
    // $navbar-item-active-background-color: transparent;
    // $navbar-item-img-max-height: 1.75rem;

    // $navbar-burger-color: $navbar-item-color;

    // $navbar-tab-hover-background-color: transparent;
    // $navbar-tab-hover-border-bottom-color: $link;
    // $navbar-tab-active-color: $link;
    // $navbar-tab-active-background-color: transparent;
    // $navbar-tab-active-border-bottom-color: $link;
    // $navbar-tab-active-border-bottom-style: solid;
    // $navbar-tab-active-border-bottom-width: 3px;

    // $navbar-dropdown-background-color: $scheme-main;
    // $navbar-dropdown-border-top: 2px solid $border;
    // $navbar-dropdown-offset: -4px;
    // $navbar-dropdown-arrow: $link;
    // $navbar-dropdown-radius: $radius-large;
    // $navbar-dropdown-z: 20;

    // $navbar-dropdown-boxed-radius: $radius-large;
    // $navbar-dropdown-boxed-shadow: 0 8px 8px rgba($scheme-invert, 0.1), 0 0 0 1px rgba($scheme-invert, 0.1);

    $navbar-dropdown-item-hover-color               : $black;
    $navbar-dropdown-item-hover-background-color    : transparent;
    $navbar-dropdown-item-active-color              : $primary;
    $navbar-dropdown-item-active-background-color   : transparent;

    // $navbar-divider-background-color: $background;
    // $navbar-divider-height: 2px;

    // $navbar-bottom-box-shadow-size: 0 -2px 0 0;

    $navbar-breakpoint: 0;

    @import "bulma/sass/components/navbar.sass";
    
    .navbar{
        font-family: $family-secondary
    }
</style>