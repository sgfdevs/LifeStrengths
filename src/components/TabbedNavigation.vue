<template>
    <q-tabs
        :value="tab"
        @input="onTabChange"
        dense
        active-color="secondary"
        class="fixed-nav bg-white shadow-2 panel-icons"
    >
        <q-route-tab exact class="q-px-xs" name="home" icon="home" to="/home" replace/>
        <q-route-tab exact class="q-px-xs" name="chat" icon="people" to="/chat" replace/>
        <q-route-tab exact class="q-px-xs" name="transportation" icon="room" to="/transportation" replace/>
        <q-route-tab exact class="q-px-xs" name="curriculum" icon="assignment" to="/curriculum" replace/>
        <q-tab class="q-px-xs" name="menu" icon="menu" @click="onMenuClick"/>
    </q-tabs>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        data: () => ({
            tab: 'home',
            previousTab: 'home',
        }),
        mounted() {
            console.log(this.drawerOpen);
        },
        computed: {
            ...mapState('app', ['drawerOpen']),
        },
        methods: {
            ...mapMutations('app', ['updateDrawerOpen']),
            onTabChange(val) {
                this.previousTab = this.tab;
                this.tab = val;

                if (val !== 'menu') {
                    this.updateDrawerOpen(false);
                }
            },
            onMenuClick() {
                if (this.drawerOpen) {
                    this.tab = this.previousTab;
                }

                this.updateDrawerOpen(!this.drawerOpen);
            },
        },
    };
</script>

<style scoped lang="scss">
    .panel-icons {
        color: $primary-dark;
    }
</style>
