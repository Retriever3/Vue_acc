const AccountRoute = [

  {
    path: '/acc/account/slimForm',
    name: 'slimForm',
    component: () => import('@/views/account/account/SlipFormPage.vue'),
    meta:{
      pageTitle: '전표 조회',
      breadcrumb:[
        {
          text:'전표 관리',
        },
        {
          text: '전표 조회',
          active: true,
        },
      ],
    },
  },
  {
    path: '/acc/account/addSlipForm',
    name: 'addSlipForm',
    component: () => import('@/views/account/account/SlipAddFormPage.vue'),
    meta:{
      pageTitle: '전표 추가',
      breadcrumb:[
        {
          text:'전표 관리',
        },
        {
          text: '전표 추가',
          active: true,
        },
      ],
    },
  },
  {
    path: '/acc/account/journalForm',
    name: 'journalForm',
    props: true, // true로 설정하면 데이터를 props로도 받습니다.
    component: () => import('@/views/account/account/JournalFormPage.vue'),
    meta:{
      pageTitle: '전표 승인',
      breadcrumb:[
        {
          text:'전표 관리',
        },
        {
          text: '전표 승인',
        },
        {
          text: '해당 전표 상세 보기',
          active: true,
        },
      ],
    },
  },
  {
    path: '/acc/account/approvalManagerForm',
    name: 'approvalManagerForm',
    props: true, // true로 설정하면 데이터를 props로도 받습니다.
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/account/account/ApprovalManagerPage.vue'),
    meta:{
      pageTitle: '전표 조회',
      breadcrumb:[
        {
          text:'전표 관리',
        },
        {
          text: '전표 조회',
          active: true,
        },
      ],
    },
  },
  {
    path: '/acc/account/journal',
    name: 'journal',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/account/account/JournalPage.vue'),
    meta:{
      pageTitle: '분개장',
      breadcrumb:[
        {
          text:'전표 관리',
        },
        {
          text: '분개장',
          active: true,
        },
      ],
    },
  }, {
    path: '/acc/account/journalDetailForm2',
    name: 'journalForm222',
    props: true, // true로 설정하면 데이터를 props로도 받습니다.
    component: () => import('@/views/account/account/JournalFormPage.vue'),
  },
  {
    path: '/acc/account/journalDetailForm2',
    name: 'journalForm222',
    props: true, // true로 설정하면 데이터를 props로도 받습니다.
    component: () => import('@/views/account/account/JournalFormPage.vue'),
  },

]

export default AccountRoute
