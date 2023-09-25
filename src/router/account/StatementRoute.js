const StatementRoute = [
  /**
     * 일계표
     */
  {
    path: '/acc/account/statement/detailTrialBalance',
    name: 'detailTrialBalance',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/account/statement/DetailTrialBalancePage.vue'),
    meta: {
      pageTitle: '일(월)계표',
      breadcrumb: [
        {
          text: '장부 관리',
        },
        {
          text: '일(월)계표',
          active: true,
        },
      ],
    },
  },
  /**
     * 현금 출납장
     */
  {
    path: '/acc/account/statement/cashJournal',
    name: 'cashJournal',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/account/statement/CashJournalPage.vue'),
    meta: {
      pageTitle: '현금출납장',
      breadcrumb: [
        {
          text: '장부 관리',
        },
        {
          text: '현금출납장',
          active: true,
        },
      ],
    },
  },
  /**
     * 합계잔액시산표.
     */
  {
    path: '/acc/account/statement/totalTrialBalance',
    name: 'totalTrialBalance',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/account/statement/TotalTrialBalancePage.vue'),
    meta: {
      pageTitle: '합계잔액시산표',
      breadcrumb: [
        {
          text: '결산/재무제표 관리',
        },
        {
          text: '합계잔액시산표',
          active: true,
        },
      ],
    },
  },
  /**
     * 손익계산서
     */
  {
    path: '/acc/account/statement/incomeStatement',
    name: 'incomeStatement',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/account/statement/IncomeStatementPage.vue'),
    meta: {
      pageTitle: '손익계산서',
      breadcrumb: [
        {
          text: '결산/재무제표 관리',
        },
        {
          text: '손익계산서',
          active: true,
        },
      ],
    },
  },
  /**
     * 재무상태표
     */
  {
    path: '/acc/account/statement/financialPosition',
    name: 'financialPosition',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/account/statement/FinancialPositionPage.vue'),
    meta: {
      pageTitle: '재무상태표',
      breadcrumb: [
        {
          text: '결산/재무제표 관리',
        },
        {
          text: '재무상태표',
          active: true,
        },
      ],
    },
  },
  /**
     * 월별손익계산서
     */
  {
    path: '/acc/account/statement/monthIncomeStatement',
    name: 'monthIncomeStatement',
    component: () => import('@/views/account/statement/MonthIncomeStatementPage.vue'),
    meta: {
      pageTitle: '월별손익계산서',
      breadcrumb: [
        {
          text: '결산/재무제표 관리',
        },
        {
          text: '월별손익계산서',
          active: true,
        },
      ],
    },
  },
  /**
     * 현금흐름표
     */
  {
    path: '/acc/account/statement/cashFlowStatement',
    name: 'cashFlowStatement',
    component: () => import('@/views/account/statement/CashFlowStatementPage.vue'),
    meta: {
      pageTitle: '현금흐름표',
      breadcrumb: [
        {
          text: '결산/재무제표 관리',
        },
        {
          text: '현금흐름표',
          active: true,
        },
      ],
    },
  },
  /**
     * 원가명세서
     */
  {
    path: '/acc/account/statement/costStatement',
    name: 'costStatement',
    component: () => import('@/views/account/statement/CostStatementPage.vue'),
    meta: {
      pageTitle: '원가명세서',
      breadcrumb: [
        {
          text: '결산/재무제표 관리',
        },
        {
          text: '원가명세서',
          active: true,
        },
      ],
    },
  },

]

export default StatementRoute
