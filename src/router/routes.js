
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/home/Index.vue') },
      { path: 'recharges', component: () => import('pages/home/Recharges.vue') },
    ]
  },
  {
    path: '/recharges',
    component: () => import('layouts/ActionLayout.vue'),
    children: [
      { path: ':idrecharge/prices', component: () => import('pages/home/Prices.vue') },
      { path: ':idrecharge/payment', component: () => import('pages/home/Payment.vue') },
      { path: 'end', component: () => import('pages/home/EndRecharge.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
