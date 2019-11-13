const routes = [
    {
        path: '/',
        component: () => import('../layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('../pages/Index.vue'),
                meta: {
                    title: 'Home',
                },
            },
            {
                path: 'contacts',
                component: () => import('../pages/ContactsPage.vue'),
                meta: {
                    title: 'Context',
                },
            },
            {
                path: 'location',
                component: () => import('../pages/LocationPage.vue'),
                meta: {
                    title: 'Location',
                },
            },
            {
                path: 'assignment',
                component: () => import('../pages/AssignmentPage.vue'),
                meta: {
                    title: 'Assignment',
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
