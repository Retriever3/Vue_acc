

export default {
    SEARCH_PERIOD_LIST(state, periodList){
        state.periodList=periodList
    },
   SEARCH_WORKPLACE_LIST(state, deptList){
        state.workplaceList=deptList
   },
    SEARCH_DEPT_LIST(state, detailDeptList){
    state.deptList=detailDeptList
    },
    SEARCH_ACCOUNT_SUBJECT_LIST(state, accountSubjectList){
        state.accountSubjectList=accountSubjectList
    },
    SEARCH_ACCOUNT_DETAIL_LIST(state, accountDetailList){
        state.accountDetailList=accountDetailList
    },
    CLEAR_ACCOUNT_LISTS(state) {
        state.accountSubjectList =[]
        state.accountDetailList = []
    },
    SEARCH_BUDGET_LIST(state, searchBudgetList){
        state.searchBudgetList=searchBudgetList
    }
}
