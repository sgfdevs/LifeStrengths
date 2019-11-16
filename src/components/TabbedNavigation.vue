<template>
    <q-tabs
        v-model="tab"
        dense
        active-color="secondary"
        class="fixed-nav bg-white shadow-2 panel-icons"
    >
<<<<<<< HEAD
        <q-route-tab exact class="q-px-xs" name="home" icon="home" to="/home" replace />
        <q-route-tab exact class="q-px-xs" name="messages" icon="people" to="/messages" replace />
        <q-route-tab exact class="q-px-xs" name="transportation" icon="room" to="/transportation" replace />
        <q-route-tab exact class="q-px-xs" name="cirriculum" icon="assignment" to="/cirriculum" replace />
        <q-tab class="q-px-xs" name="menu" icon="menu" @click="$emit('menuClick')" />
=======
        <q-route-tab exact name="home" icon="home" to="/home" replace />
        <q-route-tab exact name="contacts" icon="contacts" to="/chat" replace />
        <q-route-tab exact name="location" icon="where_to_vote" to="/location" replace />
        <q-route-tab exact name="assignment" icon="assignment" to="/assignment" replace />
        <q-route-tab exact name="menu" icon="reorder" to="/menu" replace />
>>>>>>> Update messages route url
    </q-tabs>
</template>

<script>
    export default {
        data: () => ({
            tab: 'home',
        }),
    };
</script>

<style scoped lang="scss">
    .panel-icons {
        color: $primary-dark;
    }
</style>
