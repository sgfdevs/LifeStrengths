<template>
    <q-page :style-fn="setPageHeight" class="q-pa-none">
        <div class="row justify-center">
            <q-scroll-area class="col-shrink groups bg-grey" :style="scrollAreaStyle">
                <message-groups/>
            </q-scroll-area>
            <message-list
                class="col-grow scroll overflow-hidden"
                :style="scrollAreaStyle"
                :group="selectedGroup"/>
        </div>
    </q-page>
</template>

<script>
    import MessageGroups from '../components/MessageGroups';
    import MessageList from '../components/MessageList';

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
        components: {
            MessageGroups,
            MessageList,
        },
        data: () => ({
            navigationOffset: null,
            userId: 0,
            selectedGroup: null,
            groups: [
                {
                    title: 'The Family',
                    messages: [],
                },
            ],
        }),
        computed: {
            scrollAreaStyle() {
                return {
                    height: this.offset ? `calc(100vh - ${this.offset}px)` : '100vh',
                };
            },
        },
        created() {
            this.groups[0].messages = generateMessages(50);
            [this.selectedGroup] = this.groups;
        },
        methods: {
            setPageHeight(offset) {
                this.navigationOffset = offset;
                return { minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh' };
            },
            addMessage() {
                this.groups[0].messages.push(...generateMessages(1));
                this.scrollToBottom();
            },
            scrollToBottom() {
                // this.$nextTick(() => {
                //     window.scrollTo(0, document.body.scrollHeight);
                // });
            },
        },
        mounted() {
            this.scrollToBottom();

            this.$options.interval = window.setInterval(this.addMessage.bind(this), 5000);
        },
        beforeDestroy() {
            window.clearInterval(this.$options.interval);
        },
    };
</script>

<style scoped lang="scss">
    .groups {
        min-width: 60px;
        max-width: 60px;
    }
</style>
