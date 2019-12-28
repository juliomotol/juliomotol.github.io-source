<template>
	<div class="contact content">
		<h1 class="title is-1">
			Get in touch
		</h1>
		<Anchorheader anchor="socail_accounts">
			Social Accounts
		</Anchorheader>
		<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore etdolore magna aliquyam erat, sed diam</p>
		<div class="buttons">
			<a class="button is-primary is-fb">
                <span class="icon"><i class="fab fa-facebook-square"></i></span>
                <span>Facebook</span>
            </a>
			<a class="button is-primary is-instragram">
                <span class="icon"><i class="fab fa-instagram"></i></span>
                <span>Instagram</span>
            </a>
			<a class="button is-primary is-github">
                <span class="icon"><i class="fab fa-github-square"></i></span>
                <span>GitHub</span>
            </a>
			<a class="button is-primary">
                <span class="icon"><i class="fas fa-envelope"></i></span>
                <span>Mail</span>
            </a>
		</div>
		<Anchorheader anchor="send_a_message">
			Send a Message
		</Anchorheader>
		<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore etdolore magna aliquyam erat, sed diam</p>
        <section class="columns is-multiline is-variable is-2">
            <section class="column is-half">
                <div class="field">
                    <label class="label" for="name">Name</label>
                    <div class="control">
                        <input class="input" id="name" name="name" type="text" placeholder="John Doe">
                    </div>
                </div>
            </section>
            <section class="column is-half">
                <div class="field">
                    <label class="label" for="email">Email</label>
                    <div class="control">
                        <input class="input" id="email" name="email" type="email" placeholder="johndoe@mail.com">
                    </div>
                </div>
            </section>
            <section class="column is-full">
                <div class="field">
                    <label class="label" for="subject">Subject</label>
                    <div class="control">
                        <input class="input" id="subject" name="subject" type="text">
                    </div>
                </div>
            </section>
            <section class="column is-full">
                <div class="field">
                    <label class="label" for="message">Message</label>
                    <div class="control">
                        <textarea class="textarea" id="message" name="message"></textarea>
                    </div>
                </div>
            </section>
            <section class="column is-full">
                <div class="field">
                    <div class="control">
                        <button class="button is-primary">Send Message</button>
                    </div>
                </div>
            </section>
        </section>
		<Anchorheader anchor="resume">
			Resume 
		</Anchorheader>
		<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore etdolore magna aliquyam erat, sed diam</p>
		<div class="buttons">
			<router-link :to="{name: 'resume'}" class="button is-primary">View Resume</router-link>
		</div>
	</div>
</template>

<script>
	import Anchorheader from '../components/AnchorHeader';
	import Page from '../components/Page';

	export default {
        extends: Page,
		components:{
			Anchorheader
		}
	}
</script>

<style lang="scss">
	@import '../scss/utilities/all';

    $button-fb-background-color: #3B5998;
    $button-instagram-background-color: #FEDA77, #F58529, #DD2A7B, #8134AF, #515BD4;
    $button-instagram-background-color-hover: null;
    $button-github-background-color: #24292E;

    @each $color in $button-instagram-background-color {
        $button-instagram-background-color-hover: #{$button-instagram-background-color-hover}, darken($color,2.5%);
    }

    .contact{
        .is-fb{
            background-color: $button-fb-background-color !important;

            &:hover{
                background-color: darken($button-fb-background-color, 2.5%) !important;
            }
        }
        .is-instragram{
            background-image: radial-gradient(circle at bottom left, $button-instagram-background-color) !important;
            border: none !important;
            
            &:hover{
                background-image: radial-gradient(circle at bottom left, $button-instagram-background-color-hover) !important;
            }
        }
        .is-github{
            background-color: $button-github-background-color !important;
            
            @include darkTheme {
                border-color: $border-dark;
            }
            &:hover{
                background-color: darken($button-github-background-color, 2.5%) !important;
            }
        }
    }

</style>