<template>
    <q-tabs
        v-model="tab"
        inline-label
        class="fixed-nav bg-primary text-white shadow-2"
    >
        <q-route-tab exact name="mails" icon="home" to="/"/>
        <q-route-tab exact name="contacts" icon="contacts" to="/contacts"/>
        <q-route-tab exact name="location" icon="where_to_vote" to="/location"/>
        <q-route-tab exact name="assignment" icon="assignment" to="/assignment"/>
        <q-route-tab exact name="menu" icon="reorder" to="/menu"/>
    </q-tabs>
</template>

<script>
    export default {};
</script>

<style scoped>
    .fixed-nav {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>
