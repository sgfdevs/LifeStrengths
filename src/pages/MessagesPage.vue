<template>
    <q-page ref="chat-area">
        <div class="q-pa-md row justify-center">
            <div class="full-width">
                <q-chat-message
                    v-for="(message, index) in groups[0].messages"
                    :key="index"
                    :avatar="message.author.img"
                    :text="[message.body]"
                    :name="message.author.name"
                    :sent="message.author.id === userId"
                    :stamp="date(message.createdAt)"
                />
            </div>
        </div>
    </q-page>
</template>

<script>
    import * as timeago from 'timeago.js';

    function generateMessages(number) {
        return [...Array(number)].map(() => {
            const isMe = Math.random() >= 0.5;
            return {
                author: {
                    name: isMe ? 'Me' : 'Jane',
                    img: 'https://i.pravatar.cc/50',
                    id: isMe ? 0 : 1,
                },
                body: 'Good Morning!',
                createdAt: new Date(),
            };
        });
    }

    export default {
        interval: null,
        data: () => ({
            userId: 0,
            groups: [
                {
                    title: 'The Family',
                    messages: [],
                },
            ],
        }),
        computed: {
            date() {
                return dateTime => timeago.format(dateTime);
            },
        },
        methods: {
            addMessage() {
                this.groups[0].messages.push(...generateMessages(1));
                this.$nextTick(() => {
                    this.scrollToBottom();
                });
            },
            scrollToBottom() {
                window.scrollTo(0, document.body.scrollHeight);
            },
        },
        mounted() {
            this.groups[0].messages = generateMessages(50);

            this.$nextTick(() => {
                this.scrollToBottom();
            });

            this.$options.interval = window.setInterval(this.addMessage.bind(this), 5000);
        },
        beforeDestroy() {
            window.clearInterval(this.$options.interval);
        },
    };
</script>
