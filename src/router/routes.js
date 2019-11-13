const routes = [
    {
        path: '/',
        component: () => import('../layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('../pages/Index.vue'),
            },
            {
                path: 'contacts',
                component: () => import('../pages/ContactsPage.vue'),
            },
            {
                path: 'location',
                component: () => import('../pages/LocationPage.vue'),
            },
            {
                path: 'assignment',
                component: () => import('../pages/AssignmentPage.vue'),
            },
            {
                path: 'menu',
                component: () => import('../pages/MenuPage.vue'),
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
