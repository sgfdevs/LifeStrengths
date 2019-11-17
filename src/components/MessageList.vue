<template>
    <div>
        <div class="q-pa-sm" ref="chat-title">
            <h2 class="text-h6 q-ma-none">{{ title }}</h2>
        </div>
        <div class="scroll q-pa-sm" ref="scroll-area" :style="scrollAreaStyle">
            <q-chat-message
                v-for="(message, index) in messages"
                :key="index"
                :avatar="message.author.img"
                :text="[message.body]"
                :name="message.author.name"
                :sent="message.author.id === userId"
                :stamp="date(message.createdAt)"
            />
        </div>
        <div class="message-area q-pa-sm" ref="message-container">
            <q-input
                ref="message-box"
                class="message full-width"
                type="textarea"
                v-model="message"
                label="Your Message"
                color="secondary"
            />
        </div>
    </div>
</template>

<script>
    import * as timeago from 'timeago.js';
    import autosize from 'autosize';
    import { scroll, dom } from 'quasar';

    const groupTitleHeight = 48;

    export default {
        props: {
            messages: Array,
            title: String,
            navigationOffset: {
                type: Number,
                default: () => 0,
            },
        },
        data: () => ({
            userId: 0,
            message: '',
            messageBoxHeight: 0,
            titleHeight: 0,
        }),
        computed: {
            date() {
                return dateTime => timeago.format(dateTime);
            },
            scrollAreaStyle() {
                const totalOffset = this.navigationOffset + this.messageBoxHeight + this.titleHeight;

                return {
                    height: `calc(100vh - ${totalOffset}px)`,
                };
            },
        },
        mounted() {
            this.setupTextArea();
            this.getMessageBoxHeight();
            this.getTitleHeight();
            this.$nextTick(() => {
                this.scrollToBottom();
            });
        },
        methods: {
            scrollToBottom({ animate = false } = {}) {
                const el = this.$refs['scroll-area'];
                scroll.setScrollPosition(el, el.scrollHeight, animate ? 300 : 0);
            },
            setupTextArea() {
                const textArea = this.$refs['message-box'].$el.querySelector('textarea');
                textArea.addEventListener('autosize:resized', this.getMessageBoxHeight);
                textArea.rows = 1;

                autosize(textArea);
            },
            getMessageBoxHeight() {
                this.messageBoxHeight = dom.height(this.$refs['message-container']);
            },
            getTitleHeight() {
                this.titleHeight = dom.height(this.$refs['chat-title']);
            },
        },
        watch: {
            messages() {
                this.scrollToBottom({ animate: true });
            },
            title() {
                this.getTitleHeight();
            },
        },
    };
</script>

<style scoped lang="scss">
    .group-title {
        height: 48px;
    }

    .message {
        & /deep/ textarea {
            max-height: 60px;
        }
    }
</style>
