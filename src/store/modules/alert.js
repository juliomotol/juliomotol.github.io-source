export default {
    namespaced: true,
	state: {
        theme: '',
        title: '',
        message: '',
        buttonText: '',
        isActive: false,
        alertPromiseResolve: null
	},
	mutations: {
        setTheme:               (state, value) => state.theme               = value,
        setTitle:               (state, value) => state.title               = value,
        setMessage:             (state, value) => state.message             = value,
        setButtonText:          (state, value) => state.buttonText          = value,
        setIsActive:            (state, value) => state.isActive            = value,
        setAlertPromiseResolve: (state, value) => state.alertPromiseResolve = value,
	},
	actions: {
        show(context, {theme = 'info', title = '', message = '', buttonText = ''}){
            context.commit('setTheme', theme)
            context.commit('setTitle', title)
            context.commit('setMessage', message)
            context.commit('setButtonText', buttonText)
            context.commit('setIsActive', true)

            return new Promise((resolve) => {
                context.commit('setAlertPromiseResolve', resolve);
            })
        },
        close(context, result = false){
            context.state.alertPromiseResolve(result);
            context.commit('setIsActive', false);
        },
    },
}