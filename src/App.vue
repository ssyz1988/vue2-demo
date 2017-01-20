<template>
    <v-app top-navbar footer>
        <main>
            <v-content>
                <v-container fluid>
                    <transition mode="out-in">
                        <router-view></router-view>
                    </transition>
                </v-container>
            </v-content>
        </main>
    </v-app>
</template>
<script>
    import navbar from './components/navbar.vue'
    export default {
        mounted () {
            this.$vuetify.init();
        }
    };
</script>