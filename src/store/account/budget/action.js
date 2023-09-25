import {deptList, insertBudget, periodList, searchBudgetList, workplaceList} from "@/api/account/budget"
import {searchAccountDetailList, searchAccountSubjectList} from "@/api/account/base";
export default {

    /*회계기수조회*/
    async SEARCH_PERIOD_LIST({ commit }) {
        try{
            const response = await periodList();
            console.log('periodList 액션실행~',response.data.periodList)
            commit('SEARCH_PERIOD_LIST', response.data.periodList);

            return response.data.periodList;
        } catch(err){
            throw new Error(err)
        }
    },
    /*사업장 조회*/
    async SEARCH_WORKPLACE_LIST({ commit }) {
        try{
            const response = await workplaceList();
            console.log('workplaceList 액션실행~',response.data.deptList)
            commit('SEARCH_WORKPLACE_LIST', response.data.deptList);

            return response.data.deptList;
        } catch(err){
            throw new Error(err)
        }
    },
    /*부서조회*/
    async SEARCH_DEPT_LIST({ commit },payload) {
        console.log('payload',payload);
        try{
            const response = await deptList(payload);
            console.log('deptList 액션실행~',response.data.detailDeptList)
            commit('SEARCH_DEPT_LIST', response.data.detailDeptList);

            return response.data.detailDeptList;
        } catch(err){
            throw new Error(err)
        }
    },
    /*계정과목조회*/
    async SEARCH_ACCOUNT_SUBJECT_LIST({ commit }) {
        try{
            const response = await searchAccountSubjectList();
            console.log('accountList 액션실행~',response.data.accountCodeList)
            commit('SEARCH_ACCOUNT_SUBJECT_LIST', response.data.accountCodeList);

            return response.data.accountCodeList;
        } catch(err){
            throw new Error(err)
        }
    },

    /*계정상세조회*/
    async SEARCH_ACCOUNT_DETAIL_LIST({ commit },payload) {
        console.log("payload 뭐임 ~",payload)
        try{
            const response = await searchAccountDetailList(payload);
            console.log('detailAccountList 액션실행~',response.data.detailAccountList)
            commit('SEARCH_ACCOUNT_DETAIL_LIST', response.data.detailAccountList);

            return response.data.detailAccountList;
        } catch(err){
            throw new Error(err)
        }
    },

    /*예산 신청 등록*/
    async INSERT_BUDGET(_,data) {
        console.log(" 예산신청 payload ~",data)
        console.log("null 이냐?",data.deptCode)
        try{
            await insertBudget(data);
            console.log('detailAccountList 액션실행~',data)

        } catch(err){
            throw new Error(err)
        }
    },

    /*예산 신청 조회*/
    async SEARCH_BUDGET_LIST({ commit },data) {
        console.log("예산신청 data ~",data)
        // console.log("deptCode 또 값없다하네 ㅡㅡ ~",data.deptCode)
        try{
            const response = await searchBudgetList(data);
            console.log('searchBudgetList 액션실행~',response.data.findBudgetList[0])
            commit('SEARCH_BUDGET_LIST', response.data.findBudgetList[0]);

            return response.data.findBudgetList;
        } catch(err){
            throw new Error(err)
        }
    },

}
