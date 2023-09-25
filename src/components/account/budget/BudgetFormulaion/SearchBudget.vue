<template>
  <div>
    <b-card
      header="예산 조회"
      header-tag="header"
      style="max-width: 100%;"
      :setCode1="periodNo"
      :setCode2="workplaceCode"
      :setCode3="deptCode"
      :setCode4="accountCode"
    >
      <template #header>
        <h5>예산신청조회</h5>
        <b-button variant="secondary" class="float-right" @click="searchClick" >조회</b-button>
      </template>
      <b-card-body>
        <b-row class="mb-1">
          <b-col  md="4">
            <b-form-input v-model.number="month1" placeholder="1월" disabled/>
          </b-col>
          <b-col  md="4">
            <b-form-input v-model.number="month2" placeholder="2월" disabled/>
          </b-col>
          <b-col  md="4">
            <b-form-input v-model.number="month3" placeholder="3월" disabled/>
          </b-col>
        </b-row>
        <b-row class="mb-1">
          <b-col  md="4">
            <b-form-input v-model.number="month4" placeholder="4월" disabled/>
          </b-col>
          <b-col  md="4">
            <b-form-input v-model.number="month5" placeholder="5월" disabled/>
          </b-col>
          <b-col  md="4">
            <b-form-input v-model.number="month6" placeholder="6월" disabled/>
          </b-col>
        </b-row>
        <b-row class="mb-1">
          <b-col  md="4">
            <b-form-input v-model.number="month7" placeholder="7월" disabled/>
          </b-col>
          <b-col  md="4">
            <b-form-input v-model.number="month8" placeholder="8월" disabled/>
          </b-col>
          <b-col  md="4">
            <b-form-input v-model.number="month9" placeholder="9월" disabled/>
          </b-col>
        </b-row>
        <b-row class="mb-1">
          <b-col  md="4">
            <b-form-input v-model.number="month10" placeholder="10월" disabled/>
          </b-col>
          <b-col  md="4">
            <b-form-input v-model.number="month11"placeholder="11월" disabled/>
          </b-col>
          <b-col  md="4">
            <b-form-input v-model.number="month12" placeholder="12월" disabled/>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Swal from "sweetalert2";

export default {
  name: "SearchBudget",
  props:["periodNo","workplaceCode","deptCode","accountCode"],
  data(){
    return{
      month1:'',month2:'',month3:'',month4:'',month5:'',month6:'',month7:'',month8:'',month9:'',month10:'',month11:'',month12:'',
    }
  },
  computed:{
    ...mapState('account/budget',['searchBudgetList'])
  },
  methods:{
    ...mapActions('account/budget',['SEARCH_BUDGET_LIST']),
    searchClick(){
      let data={
        deptCode: this.deptCode,
        workplaceCode: this.workplaceCode,
        accountPeriodNo: this.periodNo,
        accountInnerCode: this.accountCode,
        budgetingCode: '1',
      }

      if(this.accountInnerCode==''){
        return Swal.fire({
          icon: 'warning',
          title: '상단 정보를 기입해 주십시오',
          showConfirmButton: '확인'
        });
      }else{
        this.SEARCH_BUDGET_LIST(data).then(()=>
              {console.log('ddddd',this.searchBudgetList);
                this.month1= this.searchBudgetList.m1Budget
                this.month2= this.searchBudgetList.m2Budget
                this.month3= this.searchBudgetList.m3Budget
                this.month4= this.searchBudgetList.m4Budget
                this.month5= this.searchBudgetList.m5Budget
                this.month6= this.searchBudgetList.m6Budget
                this.month7= this.searchBudgetList.m7Budget
                this.month8= this.searchBudgetList.m8Budget
                this.month9= this.searchBudgetList.m9Budget
                this.month10= this.searchBudgetList.m10Budget
                this.month11= this.searchBudgetList.m11Budget
                this.month12= this.searchBudgetList.m12Budget}
          )
      }
      // const budgetList=this.$store.commit('account/budget/SEARCH_BUDGET_LIST');
      // console.log('나오나여...',budgetList);
      // this.month2.value = budgetList.m2Budget;
      // this.month3.value = budgetList.m3Budget;
      // this.month4.value = budgetList.m4Budget;
      // this.month5.value = budgetList.m5Budget;
      // this.month6.value = budgetList.m6Budget;
      // this.month7.value = budgetList.m7Budget;
      // this.month8.value = budgetList.m8Budget;
      // this. month9.value = budgetList.m9Budget;
      // this.month10.value = budgetList.m10Budget;
      // this. month11.value = budgetList.m11Budget;
      // this. month12.value = budgetList.m12Budget;

    }
  },
}
</script>

<style scoped>

</style>
