<template>
	<Container>
		<Navigation/>
		<ContentWrapper/>
		<Footer/>
	</Container>
</template>

<script>
	import Container from './components/Container';
	import ContentWrapper from './components/ContentWrapper';
	import Footer from './components/Footer';
	import Navigation from './components/Navigation';

	export default {
		components: {
			Container,
			ContentWrapper,
			Footer,
			Navigation,
		},
	}
</script>

<style lang="scss">
	@import "@fortawesome/fontawesome-free";

	$fa-font-path: "../node_modules/@fortawesome/fontawesome-free/webfonts";

	@import "@fortawesome/fontawesome-free/scss/brands.scss";
	@import "@fortawesome/fontawesome-free/scss/regular.scss";
	@import "@fortawesome/fontawesome-free/scss/solid.scss";

	@import "./scss/bulma-customizations/utilities/all";
	@import "bulma/sass/base/_all.sass";
	
	@import "./scss/bulma-customizations/elements/button";
	@import "./scss/bulma-customizations/elements/content";
	@import "./scss/bulma-customizations/elements/title";
	
	@import "./scss/bulma-customizations/form/shared";
	@import "./scss/bulma-customizations/form/input-textarea";
	@import "./scss/bulma-customizations/form/tools";

	@import "./scss/bulma-customizations/grid/columns";

	// Components
	// @import "bulma/sass/components/breadcrumb.sass";
	// @import "bulma/sass/components/card.sass";
	// @import "bulma/sass/components/dropdown.sass";
	// @import "bulma/sass/components/level.sass";
	// @import "bulma/sass/components/list.sass";
	// @import "bulma/sass/components/media.sass";
	// @import "bulma/sass/components/menu.sass";
	// @import "bulma/sass/components/message.sass";
	// @import "bulma/sass/components/modal.sass";
	// @import "bulma/sass/components/navbar.sass";
	// @import "bulma/sass/components/pagination.sass";
	// @import "bulma/sass/components/panel.sass";
	// @import "bulma/sass/components/tabs.sass";

	// Elements
	// @import "bulma/sass/elements/box.sass";
	// @import "bulma/sass/elements/container.sass";
	@import "bulma/sass/elements/icon.sass";
	// @import "bulma/sass/elements/image.sass";
	// @import "bulma/sass/elements/notification.sass";
	// @import "bulma/sass/elements/progress.sass";
	// @import "bulma/sass/elements/table.sass";
	@import "bulma/sass/elements/tag.sass";
	// @import "bulma/sass/elements/other.sass";

	// Form
	// @import "bulma/sass/form/checkbox-radio.sass";
	// @import "bulma/sass/form/select.sass";
	// @import "bulma/sass/form/file.sass";

	// Grid
	// @import "bulma/sass/grid/tiles.sass";
</style>
