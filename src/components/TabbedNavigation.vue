<template>
    <q-tabs
        v-model="tab"
        inline-label
        class="fixed-nav bg-primary text-white shadow-2"
    >
        <q-route-tab exact name="mails" icon="home" to="/" replace />
        <q-route-tab exact name="contacts" icon="contacts" to="/contacts" replace />
        <q-route-tab exact name="location" icon="where_to_vote" to="/location" replace />
        <q-route-tab exact name="assignment" icon="assignment" to="/assignment" replace />
        <q-route-tab exact name="menu" icon="reorder" to="/menu" replace />
    </q-tabs>
</template>

<script>
    export default {
        data: () => ({
            tab: 'mails',
        }),
    };
</script>
