<template>
    <q-drawer
            :value="value"
            @input="val => $emit('input', val)"
            :breakpoint="1"
            :width="width"
            bordered
            overlay
            side="left"
        >
            <div class="banner">
                <q-avatar
                    class="avatar">
                    <img
                        src="https://i.pravatar.cc/150"
                        style="border: 2px solid white"
                    >
                </q-avatar>
                <span style="color:white">Yolanda Thorton</span>
            </div>

            <q-list class="menu-list">
                <q-item v-for="(icon, i) in icons" clickable v-ripple :to="icon.to" :key="i">
                    <q-item-section avatar>
                        <q-icon :color="icon.color" :name="icon.name"/>
                    </q-item-section>
                    <q-item-section>
                        <span>{{ icon.title }}</span>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-drawer>
</template>

<script>
    export default {
        props: {
            value: Boolean,
        },
        data: () => ({
            width: 0,
            icons: [
                {
                    color: 'negative',
                    name: 'announcement',
                    title: 'INeedHelp',
                    to: '/i-need-help',
                },
                {
                    color: 'grey-8',
                    name: 'assignment_ind',
                    title: 'Profile',
                    to: '/home',
                },
                {
                    color: 'grey-8',
                    name: 'list_alt',
                    title: 'Wish List',
                    to: '/home',
                },
                {
                    color: 'grey-8',
                    name: 'input',
                    title: 'Log Out',
                    to: '/home',
                },
            ],
        }),
        mounted() {
            this.updateWidth();
            window.addEventListener('resize', this.updateWidth);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.updateWidth);
        },
        methods: {
            updateWidth() {
                this.width = window.innerWidth;
            },
        },
    };
</script>

<style>
    .banner {
        width: 100%;
        height: 150px;
        background-image: linear-gradient(-180deg, rgb(244, 180, 34) 15%, rgb(8, 188, 206) 75%);
    }

    .banner span {
        display: block;
        padding: 35px 18px;
    }

    .avatar {
        padding: 15px;
        width: 72px;
        height: 72px;
    }

    .menu-list {
        padding: 10px;
    }
</style>
