export default {
	namespaced: true,
	state: {
		isDarkMode: false,
	},
	mutations: {
		setDarkMode: (state, value) => state.isDarkMode = value
	},
	actions: {
        initTheme(context){
            let root = document.getElementsByTagName( 'html' )[0];

            if(context.state.isDarkMode){
                root.className = 'dark-theme';
            }else{
                root.className = 'light-theme';
            }
        },
        toggleDarkMode(context){
            let root = document.getElementsByTagName( 'html' )[0];

            if(context.state.isDarkMode){
                root.className = 'light-theme';
            }else{
                root.className = 'dark-theme';
            }

            context.commit('setDarkMode', !context.state.isDarkMode);
        },
    },
};
