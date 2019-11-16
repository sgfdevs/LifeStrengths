<template>
    <q-layout view="lHh Lpr lFf">
        <q-header>
            <q-toolbar :class="toolbarClass">
                <q-btn
                    flat
                    rounded
                    dense
                    v-if="$route.meta.backButton"
                    @click="$router.go(-1)"
                    icon="arrow_back"></q-btn>
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
            toolbarClass() {
                if (this.$route.meta.toolbarColor === 'warning') {
                    return 'bg-negative';
                }
                return 'bg-primary';
            },
        },
    };
</script>

<style scoped lang="scss">

</style>
