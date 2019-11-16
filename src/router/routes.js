const routes = [
    {
        path: '/',
        component: () => import('../pages/LoginPage.vue'),
    },
    {
        path: '',
        component: () => import('../layouts/MainLayout.vue'),
        children: [
            {
                path: '/home',
                component: () => import('../pages/Index.vue'),
                meta: {
                    title: 'Home',
                },
            },
            {
                path: 'i-need-help',
                component: () => import('../pages/INeedHelp/Listing.vue'),
                meta: {
                    title: 'I Need Help',
                    backButton: true,
                },
            },
            {
                path: 'i-need-help/emergency',
                component: () => import('../pages/INeedHelp/EmergencyForm.vue'),
                meta: {
                    title: 'I Have an Emergency',
                    toolbarColor: 'warning',
                    backButton: true,
                },
            },
            {
                path: 'i-need-help/need-to-leave',
                component: () => import('../pages/INeedHelp/LeaveForm.vue'),
                meta: {
                    title: 'I Need to Leave',
                    backButton: true,
                },
            },
            {
                path: 'i-need-help/need-a-ride',
                component: () => import('../pages/INeedHelp/RideForm.vue'),
                meta: {
                    title: 'I Need a Ride',
                    backButton: true,
                },
            },
            {
                path: 'i-need-help/directions',
                component: () => import('../pages/INeedHelp/DirectionsForm.vue'),
                meta: {
                    title: 'I Need Directions',
                    backButton: true,
                },
            },
            {
                path: 'menu',
                component: () => import('../pages/MenuPage.vue'),
                meta: {
                    title: 'Menu',
                },
            },
        ],
    },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () => import('../pages/Error404.vue'),
    });
}

export default routes;
