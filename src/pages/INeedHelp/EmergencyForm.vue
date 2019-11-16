<template>
    <q-page class="column justify-between">
        <q-list class="q-pt-md full-width">
            <q-item>
                <q-radio v-model="selected" val="first" label="Seriously ill or hurt" color="secondary"></q-radio>
            </q-item>
            <q-item>
                <q-radio v-model="selected" val="second" label="Sexually Assaulted" color="secondary"></q-radio>
            </q-item>
            <q-item>
                <q-radio v-model="selected" val="third" label="Witnessed a crime" color="secondary"></q-radio>
            </q-item>
            <q-item>
                <q-radio v-model="selected" val="fourth" label="Suicidal thoughts" color="secondary"></q-radio>
            </q-item>
            <q-item>
                <q-radio v-model="selected" val="fifth" label="Other" color="secondary"></q-radio>
            </q-item>
            <q-item>
                <q-input
                class="full-width"
                autogrow
                v-model="info"
                label="More information"
                color="secondary"></q-input>
            </q-item>
        </q-list>
        <div class="full-width row justify-center content-end q-my-lg">
            <q-btn
                label="Send as emergency"
                @click="onButtonTap"
                class="full-width bg-negative text-white btn-emergency"></q-btn>
        </div>
    </q-page>
</template>

<script>
    export default {
        data: () => ({
            selected: '',
            info: '',
        }),
        methods: {
            onButtonTap() {
                this.$router.replace({
                    path: '/i-need-help',
                    query: {
                        messageSent: 'true',
                    },
                });
            },
        },
    };
</script>

<style scoped lang="scss">
    .btn-emergency {
        max-width: 225px;
    }
</style>
