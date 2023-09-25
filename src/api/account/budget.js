import {accountApi} from '@/api'

//회계기수 조회
function periodList(){
    return accountApi.get('budget/periodNoList')
}

//사업장 조회
function workplaceList(){
    return accountApi.get('operate/deptList')
}

//부서 조회
function deptList(payload) {
    return accountApi.get('/operate/detailDeptList',
        {params: {workplaceCode: payload.workplaceCode}}
        // params: { workplaceCode: payload.params.workplaceCode }
    )
}
//예산 신청 등록
function insertBudget(data){
        console.log('누구게',data.deptCode)
        return accountApi.post('/budget/registerBudget',
            data
        )
}

//예산 신청 조회
function searchBudgetList(action){
    console.log('예산신청조회 API, data',action);
    return accountApi.get('/budget/findBudget',  { params: {
            deptCode: action.deptCode,
            workplaceCode: action.workplaceCode,
            budgetingCode: action.budgetingCode,
            accountPeriodNo: action.accountPeriodNo,
            accountInnerCode: action.accountInnerCode
        }}
    )

}

export {
    periodList, workplaceList,deptList,insertBudget,searchBudgetList,
}
