import mutations from './mutation'
import actions from './action'

export default {
    namespaced: true,
    state: {

        periodList: [],
        workplaceList: [],
        deptList: [],
        accountSubjectList: [],
        accountDetailList: [],
        searchBudgetList: [],

    },
    getters: {
    },

    mutations,

    actions,

}
