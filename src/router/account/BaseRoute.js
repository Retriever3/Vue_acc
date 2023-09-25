import AccountRoute from './AccountRoute'
import StatementRoute from './StatementRoute'
import BudgetRoute from "@/router/account/BudgetRoute";

const ERP = '/account'
const accountRouter = [

  {
    path: `${ERP}/home`,
    name: 'accountHome',
    component: () => import('@/views/account/Home.vue'),
    meta: {
      pageTitle: 'ACCOUNT',
      breadcrumb: [
        {
          text: 'ACC Home',
          active: true,
        },
      ],
    },
  },
  {
    path: '/account-page',
    name: 'account-page',
    component: () => import('@/views/SecondPage.vue'),
    meta: {
      pageTitle: 'Second Page',
      breadcrumb: [
        {
          text: 'Second Page',
          active: true,
        },
      ],
    },
  },
  // 계정별 원장
  {
    path: '/acc/base/accountLedger',
    name: 'accountLedger',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/account/base/AccountLedgerPage.vue'),
    meta:{
      pageTitle: '계정별 원장',
      breadcrumb:[
        {
          text:'장부 관리',
        },
        {
          text: '계정별 원장',
          active: true,
        },
      ],
    },
  },
  // 총계정원장
  {
    path: '/acc/base/generalAccountLedger',
    name: 'generalAccountLedger',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/account/base/GeneralAccountLedgerPage.vue'),
    meta:{
      pageTitle: '총계정 원장',
      breadcrumb:[
        {
          text:'장부 관리',
        },
        {
          text: '총계정 원장',
          active: true,
        },
      ],
    },
  },
  // 계정과목관리
  {
    path: '/acc/base/accountCodeManager',
    name: 'accountCodeManager',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/account/base/AccountCodeManagerPage.vue'),
    meta:{
      pageTitle: '계정과목관리',
      breadcrumb:[
        {
          text:'기초정보관리',
        },
        {
          text: '계정과목관리',
          active: true,
        },
      ],
    },
  },
  {
    path: '/acc/base/customerManager',
    name: 'customerManager',
    component: () => import('@/views/account/base/CustomerManagerPage.vue'),
    meta:{
      pageTitle: '거래처관리',
      breadcrumb:[
        {
          text:'기초정보관리',
        },
        {
          text: '거래처 관리',
          active: true,
        },
      ],
    },
  },
  ...AccountRoute,
  ...StatementRoute,
  ...BudgetRoute,
]
export default accountRouter
