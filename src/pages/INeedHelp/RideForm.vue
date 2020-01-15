<template>
    <q-page class="column justify-between">
        <q-list class="q-pt-md full-width">
            <q-item>
                <q-input
                    class="full-width q-px-md"
                    autogrow
                    v-model="info"
                    label="Date"
                    color="secondary"
                ></q-input>
            </q-item>
            <q-item>
                <q-input
                    class="full-width q-px-md"
                    autogrow
                    v-model="info"
                    label="Time"
                    color="secondary"
                ></q-input>
            </q-item>
            <q-item>
                <q-input
                    class="full-width q-px-md q-mb-xl"
                    autogrow
                    v-model="info"
                    label="Location"
                    color="secondary"
                ></q-input>
            </q-item>
            <q-item>
                <q-input
                    class="full-width q-px-md"
                    autogrow
                    v-model="info"
                    label="More information"
                    color="secondary"
                ></q-input>
            </q-item>
        </q-list>
        <div class="full-width row justify-center content-end q-my-lg">
            <q-btn
                label="Send"
                @click="onButtonTap"
                class="full-width text-white bg-btn"
            ></q-btn>
        </div>
    </q-page>
</template>


<script>
    export default {
        name: 'RideForm',
    };
</script>

<style scoped>
    .bg-btn {
        max-width: 225px;
        background-color: #FFB100
    }
</style>
