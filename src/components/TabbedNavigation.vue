<template>
    <q-tabs
        :value="tab"
        @input="onTabChange"
        v-model="tab"
        dense
        active-color="secondary"
        class="fixed-nav bg-white shadow-2 panel-icons"
    >
        <q-route-tab exact class="q-px-xs" name="home" icon="home" to="/home" replace/>
        <q-route-tab exact class="q-px-xs" name="chat" icon="people" to="/chat" replace/>
        <q-route-tab exact class="q-px-xs" name="transportation" icon="room" to="/transportation" replace/>
        <q-route-tab exact class="q-px-xs" name="cirriculum" icon="assignment" to="/cirriculum" replace/>
        <q-tab class="q-px-xs" name="menu" icon="menu" @click="$emit('menu-click')"/>
    </q-tabs>
</template>

<script>
    export default {
        data: () => ({
            tab: 'home',
        }),
        methods: {
            onTabChange(val) {
                this.tab = val;
                if (val !== 'menu') {
                    this.$emit('tab-click');
                }
            },
        },
    };
</script>

<style scoped lang="scss">
    .panel-icons {
        color: $primary-dark;
    }
</style>
