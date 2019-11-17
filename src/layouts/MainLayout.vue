<template>
    <q-layout view="lHr LpR fFf">
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

        <menu-drawer
            v-model="drawer"
        ></menu-drawer>

        <q-page-container>
            <router-view/>
        </q-page-container>

        <q-footer elevated >
            <tabbed-navigation
                @menuClick="drawer = !drawer"
            />
        </q-footer>
    </q-layout>
</template>

<script>
    import TabbedNavigation from '../components/TabbedNavigation';
    import MenuDrawer from '../components/MenuDrawer';

    export default {
        data: () => ({
            drawer: false,
        }),
        components: {
            TabbedNavigation,
            MenuDrawer,
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
