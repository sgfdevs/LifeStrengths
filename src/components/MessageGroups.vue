<template>
    <div class="message-groups column items-center">
        <div class="scroll full-width" :style="scrollAreaStyle">
            <div
                v-for="(group, index) in groups"
                :key="index"
                class="box-active row justify-center q-py-sm full-width"
                :class="{ 'bg-white': index == selectedGroup }"
            >
                <q-btn
                    round
                    @click="selectedGroup = group.id"
                >
                    <q-avatar size="42px">
                        <img :src="group.imgpath">
                    </q-avatar>
                </q-btn>
            </div>

            <div class="row justify-center q-py-sm">
                <q-btn
                    round
                    icon="add"
                    class="btn-add"
                />
            </div>

        </div>
        <q-btn
            round
            icon="sms_failed"
            text-color="negative"
            color="white"
            class="q-my-sm"
        />
    </div>
</template>

<script>
    export default {
        data: () => ({
            selectedGroup: 0,
            height: 58,
            groups: [
                {
                    id: 0,
                    name: 'Jane',
                    imgpath: 'https://cdn.quasar.dev/img/avatar2.jpg',

                },
                {
                    id: 1,
                    name: 'Jane',
                    imgpath: 'https://cdn.quasar.dev/img/avatar2.jpg',

                },
                {
                    id: 2,
                    name: 'Jane',
                    imgpath: 'https://cdn.quasar.dev/img/avatar2.jpg',

                },
                {
                    id: 3,
                    name: 'Jane',
                    imgpath: 'https://cdn.quasar.dev/img/avatar2.jpg',

                },
                {
                    id: 4,
                    name: 'Jane',
                    imgpath: 'https://cdn.quasar.dev/img/avatar2.jpg',

                },
                {
                    id: 5,
                    name: 'Jane',
                    imgpath: 'https://cdn.quasar.dev/img/avatar2.jpg',

                },
                {
                    id: 6,
                    name: 'Jane',
                    imgpath: 'https://cdn.quasar.dev/img/avatar2.jpg',

                },
                {
                    id: 7,
                    name: 'Jane',
                    imgpath: 'https://cdn.quasar.dev/img/avatar2.jpg',

                },
                {
                    id: 8,
                    name: 'Jane',
                    imgpath: 'https://cdn.quasar.dev/img/avatar2.jpg',

                },
            ],
        }),
        props: {
            navigationOffset: {
                type: Number,
                default: () => 0,
            },
        },
        computed: {
            scrollAreaStyle() {
                const totalOffset = this.navigationOffset + this.height;

                return {
                    height: `calc(100vh - ${totalOffset}px)`,
                };
            },
        },
    };
</script>

<style scoped lang="scss">
    .btn-add {
        background-color: $primary-dark;
        color: white;
    }
    .scroll::-webkit-scrollbar {
        display: none;
    }
</style>
