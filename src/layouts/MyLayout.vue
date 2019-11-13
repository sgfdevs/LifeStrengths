<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-toolbar-title>
                    Quasar App
                </q-toolbar-title>
            </q-toolbar>
        </q-header>
        <q-page-container>
            <router-view />
            <navigation />
        </q-page-container>
    </q-layout>
</template>

<script>
    import Navigation from 'components/Navigation';

    export default {
        name: 'MyLayout',

        components: {
            Navigation,
        },
    };
</script>
