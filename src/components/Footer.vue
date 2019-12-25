<template>
    <footer class="footer">
        <p>&copy; 2020 Julio Motol. All rights reserved</p>
    </footer>
</template>

<style lang="scss">
    @import "../scss/bulma-customizations/utilities/all";

    $footer-background-color:   $white-ter;
    // $footer-color:              false !default
    $footer-padding         :   8px 12px;

    @import "bulma/sass/layout/footer.sass";
    
    .footer{
        font-family: $family-secondary;
        
        p{
            color: $text-strong;
        }
    }
</style>