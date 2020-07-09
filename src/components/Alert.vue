<template>
    <transition name="alert-popup">
        <div class="jm-alert modal is-active" v-if="isActive">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <div class="jm-alert__icon-wrapper has-text-centered">
                        <span class="icon has-text-success" v-if="theme === 'success'">
                            <i class="fas fa-6x fa-check-circle"></i>
                        </span>
                        <span class="icon has-text-danger" v-else-if="theme === 'danger'">
                            <i class="fas fa-6x fa-times"></i>
                        </span>
                        <span class="icon has-text-info" v-else>
                            <i class="fas fa-6x fa-info-circle"></i>
                        </span>
                    </div>
                    <h2 class="title is-2 has-text-centered">{{ title }}</h2>
                    <p class="subtitle is-5 has-text-centered is-family-primary" v-html="message"></p>
                    <div class="buttons is-centered">
                        <button class="button is-primary" @click="close(true)">
                            {{ buttonText || 'OK' }}
                        </button>
                    </div>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="close"></button>
        </div>
    </transition>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: mapState({
        theme: (state) => state.alert.theme,
        title: (state) => state.alert.title,
        message: (state) => state.alert.message,
        buttonText: (state) => state.alert.buttonText,
        isActive: (state) => state.alert.isActive,
    }),
    methods: mapActions('alert', ['close']),
};
</script>

<style lang="scss">
@import '../scss/utilities/all';

.jm-alert {
    .modal-content {
        max-width: 420px !important;

        @include mobile() {
            width: calc(100% - 48px) !important;
        }
    }
    &__icon-wrapper {
        margin-bottom: 24px;

        .icon {
            height: 6em !important;
            width: 6em !important;
        }
    }
}
.alert-popup {
    &-enter {
        opacity: 0;

        .modal-content {
            transform: scale(0);
        }
        &-active {
            .modal-content {
                transition: all 0.25s cubic-bezier(0.5, 0, 0.5, 1.25) 0.25s;
            }
            transition: all 0.5s ease-out;
        }
    }
    &-leave {
        &-to {
            opacity: 0;
            .modal-content {
                transform: scale(0);
            }
        }
        &-active {
            .modal-content {
                transition: all 0.25s cubic-bezier(0.5, -0.25, 0.5, 1) 0.25s;
            }
            transition: all 0.5s ease-in;
        }
    }
}
</style>
