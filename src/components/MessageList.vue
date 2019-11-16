<template>
    <div v-chat-scroll="{ smooth: smoothScrollEnabled }" class="q-pa-sm">
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
            smoothScrollEnabled: false,
        }),
        computed: {
            date() {
                return dateTime => timeago.format(dateTime);
            },
        },
        mounted() {
            this.$nextTick(() => {
                this.smoothScrollEnabled = true;
            });
        },
    };
</script>

<style scoped>

</style>
