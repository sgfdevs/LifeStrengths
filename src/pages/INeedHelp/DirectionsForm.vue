<template>
    <q-page class="column justify-between">
        <q-list class="q-pt-md full-width">
            <q-item>
                <q-radio
                    v-model="selected"
                    val="first"
                    label="I'm lost and don't know where I am"
                    color="secondary"
                ></q-radio>
            </q-item>
            <q-item>
                <q-radio
                    v-model="selected"
                    val="second"
                    label="I can't find a location"
                    color="secondary"
                ></q-radio>
            </q-item>
            <q-item>
                <q-radio
                    v-model="selected"
                    val="third"
                    label="I'm trying to find the nearest bus stop"
                    color="secondary"
                ></q-radio>
            </q-item>
            <q-item>
                <q-radio
                    class="q-mb-xl"
                    v-model="selected"
                    val="fifth"
                    label="Other"
                    color="secondary"
                ></q-radio>
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
        name: 'DirectionsForm',
    };
</script>

<style scoped>
    .bg-btn {
        max-width: 225px;
        background-color: #FFB100
    }
</style>
