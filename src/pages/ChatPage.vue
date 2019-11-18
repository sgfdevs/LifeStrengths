<template>
    <q-page :style-fn="setPageHeight" class="q-pa-none">
        <div class="row justify-center">

            <message-groups
                class="col-shrink groups"
                :navigation-offset="navigationOffset"
            />

            <message-list
                class="col-grow"
                :navigation-offset="navigationOffset"
                :title="selectedGroup.title"
                :messages="selectedGroup.messages"
            />
        </div>
    </q-page>
</template>

<script>
    import MessageGroups from '../components/MessageGroups';
    import MessageList from '../components/MessageList';

    let messageNum = 0;

    function generateMessages(number) {
        return [...Array(number)].map(() => {
            messageNum += 1;
            const isMe = Math.random() >= 0.5;
            return {
                author: {
                    name: isMe ? 'Me' : 'Jane',
                    img: 'https://i.pravatar.cc/50',
                    id: isMe ? 0 : 1,
                },
                body: `Message number ${messageNum}`,
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
                    messages: generateMessages(50),
                },
            ],
        }),
        computed: {
            scrollAreaStyle() {
                return {
                    height: this.navigationOffset ? `calc(100vh - ${this.navigationOffset}px)` : '100vh',
                };
            },
        },
        created() {
            // this.groups[0].messages = ;
            [this.selectedGroup] = this.groups;
        },
        methods: {
            setPageHeight(offset) {
                this.navigationOffset = offset;
                return { minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh' };
            },
            addMessage() {
                if (!this.selectedGroup) return;

                this.selectedGroup.messages.push(...generateMessages(1));
            },
        },
        mounted() {
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
        background-color: $off-white;
    }
</style>
