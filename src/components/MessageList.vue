<template>
    <div>
        <div class="q-pa-sm group-title">
            <h2 class="text-h6 q-ma-none">{{ group.title }}</h2>
        </div>
        <div class="scroll" ref="scroll-area" :style="scrollAreaStyle">
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
        <div class="message-area">
        </div>
    </div>
</template>

<script>
    import * as timeago from 'timeago.js';
    import { scroll } from 'quasar';

    const { setScrollPosition } = scroll;
    const groupTitleHeight = 48;

    export default {
        props: {
            group: Object,
            navigationOffset: {
                type: Number,
                default: () => 0,
            },
        },
        data: () => ({
            userId: 0,
        }),
        computed: {
            date() {
                return dateTime => timeago.format(dateTime);
            },
            scrollAreaStyle() {
                const totalOffset = this.navigationOffset + groupTitleHeight;

                return {
                    height: `calc(100vh - ${totalOffset}px)`,
                };
            },
        },
        mounted() {
            this.$nextTick(() => {
                this.scrollToBottom();
            });
        },
        methods: {
            scrollToBottom({ animate = false } = {}) {
                const el = this.$refs['scroll-area'];
                setScrollPosition(el, el.scrollHeight, animate ? 300 : 0);
            },
        },
        watch: {
            group: {
                handler(val, oldVal) {
                    this.scrollToBottom({ animate: true });
                },
                deep: true,
            },
        },
    };
</script>

<style scoped>
    .group-title {
        height: 48px;
    }
</style>
