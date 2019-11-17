<template>
    <div class="message-groups">
        <div class="scroll" :style="scrollAreaStyle">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            navigationOffset: {
                type: Number,
                default: () => 0,
            },
        },
        computed: {
            scrollAreaStyle() {
                // TODO: Add FAB height to total offset
                const totalOffset = this.navigationOffset;

                return {
                    height: `calc(100vh - ${totalOffset}px)`,
                };
            },
        },
    };
</script>

<style scoped>

</style>
