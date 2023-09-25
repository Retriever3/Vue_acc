<template>
<div>
  <b-row>
    <b-col md="3">
      <b-form-group
      label="회계연도"
      label-for="period"
      >
        <b-form-input
          id="period"
          ref="inputYear"
          placeholder="회계연도"
          v-model="year"
          class="form-control"
        />
      </b-form-group>
    </b-col>

    <p class="h4 mb-4" >
      <b-icon style="height: 70px;" icon="search" v-b-modal.searchYear />
    </p>

    <b-col md="3">
      <b-form-group
          label="사업장명"
          label-for="workplaceName"
      >
        <b-form-select
          id="workplaceName"
          v-model="workplaceCode"
          @change="updateDeptList"
        >
          <b-form-select-option
            v-for="(item, index) in workplaceList"
            :key="index"
            :value="item.workplaceCode"
          >
            {{item.workplaceName}}
          </b-form-select-option>
        </b-form-select>
      </b-form-group>
    </b-col>

    <b-col md="3">
      <b-form-group
        label="부서명"
        label-for="deptName"
      >
        <b-form-select
          id="deptName"
          v-model="deptCode"
      >
          <b-form-select-option
              v-for="(item, index) in filteredDeptList"
              :key="index"
              :value="item.deptCode"
          >
            {{item.deptName}}
          </b-form-select-option>
       </b-form-select>
      </b-form-group>
    </b-col>
    <p style="margin-top:20px;">
    <b-button @click="searchBudget">예산실적조회</b-button>
    </p>
  </b-row>
  <div>
    <b-modal
        id="searchYear"
        cancel-variant="outline-secondary"
        class="modal"
    >
      <b-card
          class="scrollStyle"
          title="회계년도"
          style="margin:auto; overflow-y: scroll; height: 40vh;"
      >
        <search-year-modal
            ref="searchYearModal"
            modal-status="searchYear"
            :periodList="periodList"
            @selected="onSelected"
        />
      </b-card>
    </b-modal>
  </div>
  <div>
    <table
     :show-footer="true"
    >
      <thead>
        <tr>
          <th colspan="2">계정</th>
          <th colspan="4">누계예산대비실적</th>
          <th colspan="4">당월예산대비실적</th>
        </tr>
        <tr>
          <th>계정과목코드</th>
          <th>계정과목명</th>
          <th>실적</th>
          <th>예산</th>
          <th>잔여예산</th>
          <th>집행율(%)</th>
          <th>실적</th>
          <th>예산</th>
          <th>잔여예산</th>
          <th>집행율(%)</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in searchBudgetStatus"
          :key="index"
          :value="item.accountInnerCode"
          @click="rowSelect(item)"
          :class="{ 'selected': selectedIndex === index, 'hovered': hoveredIndex === index }"
          @mouseover="hoveredIndex = index"
          @mouseleave="hoveredIndex = -1"
      >
        <td class="center" >
          {{ item.accountInnerCode }}
        </td>
        <td class="center">
          {{ item.accountName }}
        </td>
        <td  class="center">
          {{ item.abr }}
        </td>
        <td  class="center">
          {{ item.annualBudget }}
        </td>
        <td  class="center">
          {{ item.remainingBudget }}
        </td>
        <td  class="center">
          {{ item.budgetExecRate }}
        </td>
        <td  class="center">
          {{ item.ambr }}
        </td>
        <td  class="center">
          {{ item.budget }}
        </td>
        <td  class="center">
          {{ item.remainingMonthBudget }}
        </td>
        <td  class="center">
          {{ item.monthBudgetExecRate }}
        </td>
      </tr>
      <tr >
        <td colspan="2" class="center" style="background-color: darkgray;">
         합계
        </td>
        <td class="center">
          {{sum_abr}}
        </td>
        <td class="center">
          {{sum_annualBudget}}
        </td>
        <td class="center">
          {{sum_remainingBudget}}
        </td>
        <td class="center">
          {{budgetExecRate}}
        </td>
        <td class="center">
          {{sum_ambr}}
        </td>
        <td class="center">
          {{sum_budget}}
        </td>
        <td class="center">
          {{sum_remainingMonthBudget}}
        </td>
        <td class="center">
          {{monthBudgetExecRate}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <div>
    <br/>
    <h3>예산 실적 대비</h3>
   <b-table
    hover
    sticky-header="true"
    :items="searchComparisonBudget"
    :fields="columns"
   >
   </b-table>
  </div>
</div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import moment from "moment";
import SearchYearModal from "@/components/account/budget/BudgetRequest/searchYearModal.vue";
import vSelect from 'vue-select'
import {workplaceList} from "@/api/account/budget";
import {VueGoodTable} from "vue-good-table";


export default {
  name: "BudgetStatusPage.vue",
  components:{
    SearchYearModal,
    vSelect,
    VueGoodTable,
  },

  computed:{
    ...mapState('account/budget' ,['periodList','workplaceList','deptList','searchBudgetStatus','searchComparisonBudget']),
    filteredDeptList() {
      // 필터링 로직 구현 (예: 검색어에 따라 필터링하는 경우)
      return this.deptList
    }
  },
  created() {
    this.SEARCH_PERIOD_LIST()
    this.SEARCH_WORKPLACE_LIST()
  },
  data(){
    return{
      year:'',
      periodNo: '',
      workplaceCode:'',
      workplaceName:'',
      deptName:'',
      deptCode:'',


      tableData:[],
      selectedIndex: -1, // 선택된 행의 인덱스
      hoveredIndex: -1, // 마우스가 위에 있을 때의 행의 인덱스
      sum_budgetStatus:[],
      sum_abr:'',
      sum_annualBudget : '',
      sum_remainingBudget : '',
      budgetExecRate:'',
      sum_ambr: '',
      sum_budget:'',
      sum_remainingMonthBudget:'',
      monthBudgetExecRate:'',
      columns:[
        {
          label:'구분',
          key:'budgetDate'
        },
        {
          label: '신청예산',
          key:'appBudget'
        },
        {
          label:'편성예산',
          key:'orgBudget',
        },
        {
          label:'집행실적',
          key:'execPerform'
        },
        {
          label:'예실대비',
          key:'budgetAccountComparison'
        }
      ]
    }
  },

  methods:{
    ...mapActions('account/budget',['SEARCH_PERIOD_LIST','SEARCH_DEPT_LIST','SEARCH_WORKPLACE_LIST','SEARCH_BUDGET_STATUS_REQUEST','SEARCH_COMPARISON_BUDGET']),


    /*예산기수조회*/
    onSelected(selected){
      console.log('selected',selected);
      let year=moment(selected.periodStartDate).format('YYYY');
      this.year=year+'년';

      let periodNo=selected.accountPeriodNo
      this.periodNo=periodNo
    },

    /*사업장 선택시 부서조회*/
    updateDeptList(list){
      console.log("list",list);
      const data = {workplaceCode: list}
      console.log("workplaceList",list);
      this.SEARCH_DEPT_LIST(data)

    },

    /*예산실적조회 버튼 실행*/
    async searchBudget(){
        const data ={
          periodNo: this.periodNo,
          workplaceCode: this.workplaceCode,
          deptCode: this.deptCode,
        }
        await this.SEARCH_BUDGET_STATUS_REQUEST(data)

        // this.budgetStatus = this.$store.state.searchBudgetStatus;
        console.log('searchBudgetStatus 값 나오나',this.searchBudgetStatus)
        this.getPinnedBottomRowData(this.searchBudgetStatus);

    },

    getPinnedBottomRowData(budgetStatus) {
      console.log('budgetStatus',budgetStatus);
      if (!budgetStatus) return [];
      let sum_abr = 0;
      let sum_annualBudget = 0;
      let sum_remainingBudget = 0;
      let sum_ambr = 0;
      let sum_budget = 0;
      let sum_remainingMonthBudget = 0;


      for (let i = 0; i < budgetStatus.length; i++) {
        sum_abr += budgetStatus[i].abr;
        sum_annualBudget += budgetStatus[i].annualBudget;
        sum_remainingBudget += budgetStatus[i].remainingBudget;
        sum_ambr += budgetStatus[i].ambr;
        sum_budget += budgetStatus[i].monthBudget;
        sum_remainingMonthBudget += budgetStatus[i].remainingMonthBudget;
      }


      this.sum_abr=sum_abr
      this.sum_annualBudget=sum_annualBudget
      this.sum_remainingBudget=sum_remainingBudget
      this.budgetExecRate=sum_annualBudget == NaN ? "-" : ((sum_abr / sum_annualBudget) * 100).toFixed(3)
      this.sum_ambr=sum_ambr
      this.sum_budget=sum_budget
      this.sum_remainingMonthBudget=sum_remainingMonthBudget
      this.monthBudgetExecRate=sum_budget == NaN ? "-" : ((sum_ambr / sum_budget) * 100).toFixed(3)

      if(!sum_abr){this.sum_abr=0}
      if(!sum_annualBudget){this.sum_annualBudget=0}
      if(!sum_remainingBudget){this.sum_remainingBudget=0}
      if(!sum_ambr){this.sum_ambr=0}
      if(!sum_budget){this.sum_budget=0}
      if(!sum_remainingMonthBudget){this.sum_remainingMonthBudget=0}
      // this.sum_budgetStatus.push({
      //   // accountInnerCode: "합계",
      //   // accountName: null,
      //   abr: sum_abr,
      //   annualBudget: sum_annualBudget,
      //   remainingBudget: sum_remainingBudget,
      //   budgetExecRate: sum_annualBudget == null ? "-" : ((sum_abr / sum_annualBudget) * 100).toFixed(3),
      //   ambr: sum_ambr,
      //   monthBudget: sum_budget,
      //   remainingMonthBudget: sum_remainingMonthBudget,
      //   monthBudgetExecRate: sum_budget == 0 ? "-" : ((sum_ambr / sum_budget) * 100).toFixed(3),
      // });
      // console.log('here',this.sum_budgetStatus)
      // console.log(this.sum_budgetStatus[0].abr);
      // return this.sum_budgetStatus;
    },

    rowSelect(select){
      console.log('클릭이벤트 실행',select)
      console.log('값',this.periodNo)
      console.log('row클릭 값',select.accountInnerCode)

      let data={
        periodNo: this.periodNo,
        workplaceCode: this.workplaceCode,
        deptCode: this.deptCode,
        accountCode: select.accountInnerCode
      }
      this.SEARCH_COMPARISON_BUDGET(data);

    },

  },

  /*데이터 변경시 */
  watch: {
    workplaceName() {
      this.updateDeptList()
    }
  }
}
</script>

<style scoped>
  table{
   width:100%; color: black;
  }
  th{
    border: 1px solid; text-align: center; background-color: lightgray;
  }
  td{
    border: 1px solid; text-align: center; background-color: white;
  }
  .selected {
    background-color: yellow;
  }

  .hovered {
    background-color: gray;
  }
</style>
