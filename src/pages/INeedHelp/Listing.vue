<template>
    <q-page-container class=" bg-page">
        <q-page class="q-px-md">
            <q-list class="q-gutter-lg">
                <help-service-card
                    title="I need directions"
                    description="I'm lost or don't know how to get somewhere."
                    to="emergency"></help-service-card>
                <help-service-card
                    title="I need a ride"
                    description="I don't have a way to get somewhere I need to go."
                    to="emergency"></help-service-card>
                <help-service-card
                    title="I need to leave"
                    description="I need someone to pick me up from a bad situation."
                    to="emergency"></help-service-card>
                <help-service-card
                    class="emergency-card"
                    title="I have an emergency"
                    description="I'm in danger or in an extreme situation."
                    to="emergency"></help-service-card>
            </q-list>
        </q-page>
    </q-page-container>
</template>

<script>
    import HelpServiceCard from '../../components/HelpServiceCard';

    export default {
        components: {
            HelpServiceCard,
        },
        created() {
            console.log('WTF');
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
</style>
