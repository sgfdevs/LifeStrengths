<template>
    <q-item clickable class="q-pa-none">
        <q-card square class="card-hoverable" @click="navigateToHelpService">
            <q-card-section>
                <h6 class="q-ma-sm">{{ title }}</h6>
                <p class="q-ma-sm">{{ description }}</p>
            </q-card-section>
        </q-card>
    </q-item>
</template>

<script>
    export default {
        name: 'HelpServiceCard',
        props: {
            title: String,
            description: String,
            to: String,
        },
        methods: {
            navigateToHelpService() {
                this.$router.push(this.to);
                console.log('Card Clicked!');
            },
        },
    };
</script>

<style scoped lang="scss">
    .card-hoverable {
        width: 100%;
        font-size: .9em;
        &:hover > div {
            background-color:rgba(0, 0, 0, 0.075);
        }
        h6 {
            color: $tool-bar;
        }
    }
</style>
