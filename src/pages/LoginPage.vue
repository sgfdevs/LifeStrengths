<template>
    <q-layout>
        <q-page-container>
            <q-page class="bg-gradient column content-center justify-between">
                <img src="../assets/life-strengths-logo.png" alt="text" class="logo-img">
                <q-btn
                    class="bg-btn"
                    label="Log in"
                    to="/home"/>
                <div class="text-center">
                    <img src="../assets/i-pour-life-logo.png" alt="text">
                    <p>Questions? Problems? (417) 581-3607</p>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<style scoped lang="scss">
    .bg-gradient {
        background-image: $main-gradient;
    }
    .logo-img {
        padding-top: 15px;
        @media (min-height: 600px) {
            padding: 0;
            position: relative;
            top: 75px;
        }
    }
    .bg-btn {
        background-color: #FFB100;
        color: white;
    }
</style>
