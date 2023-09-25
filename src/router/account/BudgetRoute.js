const BudgetRoute = [
    {
        path: '/acc/budget/budgetRequest',
        name: 'budgetRequest',
        component: () => import('@/views/account/budget/BudgetRequestPage.vue'),
        meta: {
            pageTitle: '예산 신청',
            breadcrumb: [
                {
                    text: '예산 관리',
                },
                {
                    text: '예산 신청',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/acc/budget/budgetFormulation',
        name: 'budgetFormulation',
        component: () => import('@/views/account/budget/BudgetFormulationPage.vue'),
        meta: {
            pageTitle: '예산 편성',
            breadcrumb: [
                {
                    text: '예산 관리',
                },
                {
                    text: '예산 편성',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/acc/budget/budgetStatus',
        name: 'budgetStatus',
        component: () => import('@/views/account/budget/BudgetStatusPage.vue'),
        meta: {
            pageTitle: '예산 실적 현황',
            breadcrumb: [
                {
                    text: '예산 관리',
                },
                {
                    text: '예산 실적 현황',
                    active: true,
                },
            ],
        },
    },
]

export default BudgetRoute
