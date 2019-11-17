<template>
    <q-page-container class="bg-page">
        <q-page class="q-px-md">
            <q-list class="q-gutter-lg">
                <help-service-card
                    title="I need directions"
                    description="I'm lost or don't know how to get somewhere."
                    to="/"></help-service-card>
                <help-service-card
                    title="I need a ride"
                    description="I don't have a way to get somewhere I need to go."
                    to="/"></help-service-card>
                <help-service-card
                    title="I need to leave"
                    description="I need someone to pick me up from a bad situation."
                    to="/"></help-service-card>
                <help-service-card
                    class="emergency-card"
                    title="I have an emergency"
                    description="I'm in danger or in an extreme situation."
                    to="/i-need-help/emergency"></help-service-card>
            </q-list>
        </q-page>

        <q-dialog @hide="removeUrlQuery" :value="showPopup">
            <q-card>
                <q-card-section>
                <div class="text-h6 dialouge-title">Help Requested</div>
                </q-card-section>

                <q-card-section>
                    <p class="text-body1">
                        Your life coach has been notified of your request, including your current location.
                    </p>
                </q-card-section>

                <q-card-actions align="right">
                <q-btn flat label="OK" color="secondary" v-close-popup/>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </q-page-container>
</template>

<script>
    import HelpServiceCard from '../../components/HelpServiceCard';

    export default {
        data: () => ({
            showPopup: false,
        }),
        components: {
            HelpServiceCard,
        },
        created() {
            if (this.$route.query.messageSent === 'true') {
                this.showPopup = true;
            }
        },
        methods: {
            removeUrlQuery() {
                this.$router.go(-1);
            },
        },
    };
</script>

<style lang="scss">
    .bg-page {
        background-color: $off-white;
    }

    .emergency-card {
        .card-hoverable {
            h6 {
                color: $negative;
            }
        }
    }

    .dialouge-title {
        color: $primary-dark;
    }
</style>
