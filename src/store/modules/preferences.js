export default {
    namespaced: true,
    state: {
        isDarkMode: null,
    },
    mutations: {
        setDarkMode: (state, value) => (state.isDarkMode = value),
    },
    actions: {
        initTheme(context) {
            let root = document.getElementsByTagName('html')[0];

            if (context.state.isDarkMode === null) {
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    context.commit('setDarkMode', true);
                } else {
                    context.commit('setDarkMode', false);
                }
            }

            if (context.state.isDarkMode) {
                root.className = 'dark-theme';
            } else {
                root.className = 'light-theme';
            }
        },
        toggleDarkMode(context) {
            let root = document.getElementsByTagName('html')[0];

            context.commit('setDarkMode', !context.state.isDarkMode);

            if (context.state.isDarkMode) {
                root.className = 'dark-theme';
            } else {
                root.className = 'light-theme';
            }
        },
    },
};
