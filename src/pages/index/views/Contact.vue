<template>
	<main class="contact content">
		<h1 class="title is-1">
			Get in touch
		</h1>
		<Anchorheader anchor="socail_accounts">
			Social Accounts
		</Anchorheader>
		<p>
			You can find me in most social media sites (though I may not be
			active in posting). Hit me up if you ever like it or follow me to
			keep in the touch with the following social media site.
		</p>
		<div class="buttons">
			<a class="button is-primary is-fb"
				href="https://www.facebook.com/juliomotol89"
				target="_blank"
				rel="noreferrer noopenner">
				<span class="icon"><i class="fab fa-facebook-square"></i></span>
				<span>Facebook</span>
			</a>
			<a class="button is-primary is-instragram"
				href="https://www.instagram.com/julio.motol/"
				target="_blank"
				rel="noreferrer noopenner">
				<span class="icon"><i class="fab fa-instagram"></i></span>
				<span>Instagram</span>
			</a>
			<a class="button is-primary is-github"
				href="https://github.com/juliomotol"
				target="_blank"
				rel="noreferrer noopenner">
				<span class="icon"><i class="fab fa-github-square"></i></span>
				<span>GitHub</span>
			</a>
			<a class="button is-primary"
				href="https://stackoverflow.com/users/4672917/julio-motol"
				target="_blank"
				rel="noreferrer noopenner">
				<span class="icon"><i class="fab fa-stack-overflow"></i></span>
				<span>Stack Overflow</span>
			</a>
		</div>
		<Anchorheader anchor="send_a_message">
			Send a Message
		</Anchorheader>
		<p>
			Got a question, project needed to made or a lovely message that you
			want to send? Fill up the form below and I'll respond as soon as I
			can.
		</p>
		<ValidationObserver tag="form"
			class="columns is-multiline is-variable is-2"
			@submit.prevent="sendMessage"
			ref="inquiryForm">
			<div class="column is-half">
				<div class="field">
					<label class="label" for="name">Name</label>
					<ValidationProvider v-slot="{ errors, failed }"
						name="Name"
						rules="required"
						tag="div"
						class="control">
						<input :class="['input', failed ? 'is-danger' : '']"
							v-model="inquiryForm.name"
							id="name"
							type="text"
							placeholder="John Doe"
							:disabled="inquiryForm.isLoading"/>
						<p :class="['help', failed ? 'is-danger' : '']">
							{{ errors[0] || '' }}
						</p>
					</ValidationProvider>
				</div>
			</div>
			<div class="column is-half">
				<div class="field">
					<label class="label" for="email">Email</label>
					<ValidationProvider v-slot="{ errors, failed }"
						name="Email"
						rules="required|email"
						tag="div"
						class="control">
						<input :class="['input', failed ? 'is-danger' : '']"
							v-model="inquiryForm.email"
							id="email"
							type="email"
							placeholder="johndoe@mail.com"
							:disabled="inquiryForm.isLoading"/>
						<p :class="['help', failed ? 'is-danger' : '']">
							{{ errors[0] || '' }}
						</p>
					</ValidationProvider>
				</div>
			</div>
			<div class="column is-full">
				<div class="field">
					<label class="label" for="subject">Subject</label>
					<ValidationProvider v-slot="{ errors, failed }"
						name="Subject"
						rules="required"
						tag="div"
						class="control">
						<input :class="['input', failed ? 'is-danger' : '']"
							v-model="inquiryForm.subject"
							id="subject"
							type="text"
							:disabled="inquiryForm.isLoading"/>
						<p :class="['help', failed ? 'is-danger' : '']">
							{{ errors[0] || '' }}
						</p>
					</ValidationProvider>
				</div>
				<div class="field">
					<label class="label" for="message">Message</label>
					<ValidationProvider v-slot="{ errors, failed }"
						name="Message"
						rules="required"
						tag="div"
						class="control">
						<textarea :class="['textarea', failed ? 'is-danger' : '']"
							v-model="inquiryForm.message"
							id="message"
							:disabled="inquiryForm.isLoading">
						</textarea>
						<p :class="['help', failed ? 'is-danger' : '']">
							{{ errors[0] || '' }}
						</p>
					</ValidationProvider>
				</div>
				<div class="field">
					<div class="control">
						<button :class="[
								'button',
								'is-primary',
								inquiryForm.isLoading ? 'is-loading' : ''
							]"
							:disabled="inquiryForm.isLoading">
							Send Message
						</button>
					</div>
				</div>
				<p>
					For further inquiries, email them to
					<a href="mailto:julio.motol89@gmail.com"
						target="_blank"
						rel="noreferrer noopenner"
						>julio.motol89@gmail.com</a>.
				</p>
			</div>
		</ValidationObserver>
		<!-- <Anchorheader anchor="resume">
			Resume 
		</Anchorheader>
		<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore etdolore magna aliquyam erat, sed diam</p>
		<div class="buttons">
			<router-link :to="{name: 'resume'}" class="button is-primary">View Resume</router-link>
		</div> -->
	</main>
</template>

<script>
	import Anchorheader from '../../../components/AnchorHeader';
	import Page from '../../../components/Page';

	import { ValidationObserver, ValidationProvider } from 'vee-validate';
	import { mapActions } from 'vuex';
	import Firestore from '../../../utilities/Firestore';
	import firebase from 'firebase/app';

	export default {
		extends: Page,
		components: {
			Anchorheader,
			ValidationObserver,
			ValidationProvider
		},
		data() {
			return {
				inquiryForm: {
					name: '',
					email: '',
					subject: '',
					message: '',
					isLoading: false
				}
			};
		},
		methods: {
			sendMessage() {
				this.$refs.inquiryForm.validate().then(valid => {
					if (valid) {
						this.inquiryForm.isLoading = true;

						Firestore.collection('inquiries')
							.add({
								name:       this.inquiryForm.name,
								email:      this.inquiryForm.email,
								subject:    this.inquiryForm.subject,
								message:    this.inquiryForm.message,
								isRead:     false,
								createdAt:  firebase.firestore.FieldValue.serverTimestamp()
							})
							.catch(() => {
								this.showAlert({
									theme: 'danger',
									title: 'Opps...',
									message: 'This wasn\'t supposed to happen. Try again or if the error persists, <a href="https://github.com/juliomotol/juliomotol.github.io-source/issues" target="_blank" rel="noreferrer noopenner">submit an issue</a>.'
								});
							})
							.then(() => {
								this.inquiryForm.name = '';
								this.inquiryForm.email = '';
								this.inquiryForm.subject = '';
								this.inquiryForm.message = '';
								this.inquiryForm.isLoading = false;
								this.$refs.inquiryForm.reset();

								this.showAlert({
									theme: 'success',
									title: 'Message Sent!',
									message: 'I\'ll get back to you as soon as I can.'
								});
							});
					}
				});
			},
			...mapActions('alert', { showAlert: 'show' })
		}
	};
</script>

<style lang="scss">
	@import '../../../scss/utilities/all';

	$button-fb-background-color: #3b5998;
	$button-instagram-background-color: #feda77, #f58529, #dd2a7b, #8134af,
		#515bd4;
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
				background-image: radial-gradient(circle at bottom left, $button-instagram-background-color-hover) !important;
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
