const AssetRoute =[
    {
        path: '/acc/asset/currentAsset',
        name: 'currentAsset',
        component: () => import('@/views/account/asset/CurrentAssetPage.vue'),
        meta: {
            pageTitle: '고정자산 관리',
            breadcrumb: [
                {
                    text: '고정자산 관리',
                },
                {
                    text: '고정자산 조회',
                    active: true,
                },
            ],
        },
    },

]

export default AssetRoute
