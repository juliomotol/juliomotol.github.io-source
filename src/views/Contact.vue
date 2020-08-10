<template>
    <main class="contact content">
        <h1 class="title is-1">
            Get in touch
        </h1>
        <h2 class="title is-2">
            Social Accounts
        </h2>
        <p>
            You can find me in most social media sites (though I may not be active in posting). Hit me up if you ever
            like it or follow me to keep in the touch with the following social media site.
        </p>
        <div class="buttons">
            <a
                class="button is-primary is-fb"
                href="https://www.facebook.com/juliomotol89"
                target="_blank"
                rel="noreferrer noopenner"
            >
                <span class="icon"><i class="fab fa-facebook-square"></i></span>
                <span>Facebook</span>
            </a>
            <a
                class="button is-primary is-instragram"
                href="https://www.instagram.com/julio.motol/"
                target="_blank"
                rel="noreferrer noopenner"
            >
                <span class="icon"><i class="fab fa-instagram"></i></span>
                <span>Instagram</span>
            </a>
            <a
                class="button is-primary is-github"
                href="https://github.com/juliomotol"
                target="_blank"
                rel="noreferrer noopenner"
            >
                <span class="icon"><i class="fab fa-github-square"></i></span>
                <span>GitHub</span>
            </a>
            <a
                class="button is-primary"
                href="https://stackoverflow.com/users/4672917/julio-motol"
                target="_blank"
                rel="noreferrer noopenner"
            >
                <span class="icon"><i class="fab fa-stack-overflow"></i></span>
                <span>Stack Overflow</span>
            </a>
        </div>
        <h2 class="title is-2">
            Send a Message
        </h2>
        <p>
            Got a question, project needed to made or a lovely message that you want to send? Send me an email at
            <a href="mailto:julio.motol89@gmail.com">julio.motol89@gmail.com</a>.
        </p>
        <!-- <h2 class="title is-2">
            Resume 
        </h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore etdolore magna aliquyam erat, sed diam</p>
        <div class="buttons">
            <router-link :to="{name: 'resume'}" class="button is-primary">View Resume</router-link>
        </div> -->
    </main>
</template>

<script>
import Page from '../components/Page';

export default {
    extends: Page,
};
</script>

<style lang="scss">
@import '../scss/utilities/all';

$button-fb-background-color: #3b5998;
$button-instagram-background-color: #feda77, #f58529, #dd2a7b, #8134af, #515bd4;
$button-instagram-background-color-hover: null;
$button-github-background-color: #24292e;

@each $color in $button-instagram-background-color {
    $button-instagram-background-color-hover: #{$button-instagram-background-color-hover}, darken($color, 2.5%);
}

.contact {
    .is-fb {
        background-color: $button-fb-background-color !important;

        &:hover {
            background-color: darken($button-fb-background-color, 2.5%) !important;
        }
    }
    .is-instragram {
        background-image: radial-gradient(circle at bottom left, $button-instagram-background-color) !important;
        border: none !important;

        &:hover {
            background-image: radial-gradient(
                circle at bottom left,
                $button-instagram-background-color-hover
            ) !important;
        }
    }
    .is-github {
        background-color: $button-github-background-color !important;

        @include darkTheme {
            border-color: $border-dark;
        }
        &:hover {
            background-color: darken($button-github-background-color, 2.5%) !important;
        }
    }
}
</style>
