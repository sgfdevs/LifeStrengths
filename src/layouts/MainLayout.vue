<template>
    <q-layout view="lHh Lpr lFf">
        <q-header>
            <q-toolbar class="bg-toolbar">
                <q-toolbar-title>
                    {{ title }}
                </q-toolbar-title>
            </q-toolbar>
        </q-header>
        <q-page-container>
            <router-view/>
        </q-page-container>
        <q-footer>
            <tabbed-navigation/>
        </q-footer>
    </q-layout>
</template>

<script>
    import TabbedNavigation from '../components/TabbedNavigation';

    export default {
        components: {
            TabbedNavigation,
        },

        computed: {
            title() {
                return this.$route.meta.title;
            },
        },
    };
</script>

<style lang="scss">
    .bg-toolbar {
        background-color: $tool-bar;
    }
</style>
