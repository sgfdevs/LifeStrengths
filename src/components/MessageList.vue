<template>
    <div v-chat-scroll="{ smooth: true }" class="q-pa-sm">
        <q-chat-message
            v-for="(message, index) in group.messages"
            :key="index"
            :avatar="message.author.img"
            :text="[message.body]"
            :name="message.author.name"
            :sent="message.author.id === userId"
            :stamp="date(message.createdAt)"
        />
    </div>
</template>

<script>
    import * as timeago from 'timeago.js';

    export default {
        props: {
            group: Object,
        },
        data: () => ({
            userId: 0,
        }),
        computed: {
            date() {
                return dateTime => timeago.format(dateTime);
            },
        },
    };
</script>

<style scoped>

</style>
