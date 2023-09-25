<template>
  <div class="col-md-12">
    <b-row>
      <b-col>
        <b-card
            id="scrollStyle"
            style="font-family: '배달의민족 도현';
      max-height: 500px;"
            header="계정과목선택"
            class="text-center"
        >
          <b-row>
            <b-col md="3">
              <b-form-input
                  ref="inputYear"
                  placeholder="회계연도"
                  v-model="year"
                  class="form-control"
              >
              </b-form-input>
            </b-col>
            <p class="h4 mb-2">
              <b-icon icon="search"
                      v-b-modal.searchYear>
              </b-icon>
            </p>
            <b-col md="3">
              <b-form-input
                  placeholder="사업장명"
                  inputProps="'aria-label': 'search google maps'"
                  v-model="selectedWorkplaceName"
              />

            </b-col>
            <p class="h4 mb-2"
            >
              <b-icon icon="search"
                      v-b-modal.searchWorkplace>
              </b-icon>
            </p>
            <b-col md="3">
              <b-form-input
                  placeholder="부서명"
                  inputProps="'aria-label': 'search google maps'"
                  v-model="selectedDeptName"
              />
            </b-col>
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
                  style="margin:auto; overflow-y: scroll; height: 40vh; font-family: '배달의민족 도현'"
              >
                <search-year-modal
                    ref="searchYearModal"
                    modal-status="searchYear"
                    :periodList="periodList"
                    @selected="onSelected"
                >
                </search-year-modal>
              </b-card>
            </b-modal>
          </div>
          <div class="d-flex justify-content-center">
            <b-modal
                size="lg"
                id="searchWorkplace"
                cancel-variant="outline-secondary"
                @ok="completeForm"
                class="modal"
            >
              <b-card
                  class="scrollStyle flex-grow-1"
                  style="margin:auto; overflow-y: scroll; height: 40vh; font-family: '배달의민족 도현'"
              >
                <search-dept-modal
                    ref="searchDeptModal"
                    modal-status="searchWorkplace"
                    :workplaceList="workplaceList"
                    @selected="workplaceSelected"
                >
                </search-dept-modal>
              </b-card>
            </b-modal>
          </div>
          <div class="container">
            <div>
              <b-table
                  hover
                  sticky-header="true"
                  :items="accountSubjectList"
                  :fields="columns"

                  selectable
                  :select-mode="selectMode"
                  @row-clicked="onRowClick"
              >
              </b-table>
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col>
        <div class="col-md-12">
          <b-card
              id="scrollStyle"
              style="font-family: '배달의민족 도현';
          max-height: 500px;"
              header="계정상세선택"
              class="text-center"
          >
            <br/>
            <br/>
            <div>
              <b-table
                  sticky-header="true"
                  :items="accountDetailList"
                  :fields="detailColumns"

                  selectable
                  :select-mode="selectMode"
                  @row-clicked="rowDetailClick"
              >
              </b-table>
            </div>
          </b-card>
        </div>
      </b-col>
    </b-row>
    <div>
    <b-row>
      <b-col>
        <b-card>
          <search-budget
              :periodNo="periodNo"
              :workplaceCode="workplaceCode"
              :deptCode="deptCode"
              :accountCode="accountCode"
          />
        </b-card>
      </b-col>
      <b-col>
        <b-card>
          <insert-budget-formulation
              :periodNo="periodNo"
              :workplaceCode="workplaceCode"
              :deptCode="deptCode"
              :accountCode="accountCode"
              @click-save="clickSave"
          />
        </b-card>
      </b-col>
    </b-row>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import moment from "moment/moment";
import SearchDeptModal from "@/components/account/budget/BudgetRequest/searchDeptModal.vue";
import SearchYearModal from "@/components/account/budget/BudgetRequest/searchYearModal.vue";
import InsertBudgetFormulation from "@/components/account/budget/BudgetFormulaion/InsertBudgetFormulation.vue";
import SearchBudget from "@/components/account/budget/BudgetFormulaion/SearchBudget.vue";
import {BButton, BCard, BTable} from "bootstrap-vue";

export default {
  name: "BudgetFormulationPage.vue",

  components:{
    InsertBudgetFormulation,
    SearchBudget,
    SearchDeptModal,
    SearchYearModal,
    BButton,
    BTable,
    BCard,
  },
  computed:{
    ...mapState('account/budget', ['periodList','workplaceList','accountSubjectList','accountDetailList'])
  },

  created() {
    this.SEARCH_PERIOD_LIST()
    this.SEARCH_WORKPLACE_LIST()
  },

  data(){
    return{
      selectMode:'single',
      selected:[],
      selectedWorkplaceName:'',
      selectedDeptName: '',
      year:'',
      tableSize: "",

      periodNo:
          { key:'periodNo',
            value:'periodNo'}
      ,
      workplaceCode:
          {key:'workplaceCode',
            value:'workplaceCode'}
      ,
      deptCode:
          {key:'deptCode',
            value:'deptCode'}
      ,
      accountCode:
          {key:'accountInnerCode',
            value:'accountInnerCode'}
      ,

      tableSizeOptions: [
        { value: "", text: "Normal" },
        { value: "sm", text: "Small" },
        { value: "lg", text: "Large" },
      ],
      setAccountPeriodNo:'',
      columns: [
        {
          label: '계정과목코드',
          key: 'accountInnerCode'
        },
        {
          label: '계정과목',
          key: 'accountName'
        }
      ],
      detailColumns:[
        {
          label:'계정과목코드',
          key:'accountCode'
        },
        {
          label:'계정과목명',
          key:'accountName'
        },
      ]
    }
  },
  methods : {
    ...mapActions('account/budget',['SEARCH_PERIOD_LIST','SEARCH_WORKPLACE_LIST','SEARCH_ACCOUNT_SUBJECT_LIST','SEARCH_ACCOUNT_DETAIL_LIST']),

    /*Input 태그에 회계년도 모달창에서 선택한 값 할당*/
    onSelected(selected){
      console.log('selected',selected);
      let year=moment(selected.periodStartDate).format('YYYY');
      this.year=year+'년';

      let periodNo=selected.accountPeriodNo
      this.periodNo=periodNo
    },

    /*workplaceName Selected*/
    workplaceSelected(selected){
      console.log('workplaceList',selected);
      console.log(selected.workplaceName);
      console.log(selected.deptName);
      this.selectedWorkplaceName=selected.workplaceName;
      this.selectedDeptName=selected.deptName;

      let workplaceCode=selected.workplaceCode
      this.workplaceCode=workplaceCode

      let deptCode=selected.deptCode
      this.deptCode=deptCode
    },

    /*계정과목조회*/
    completeForm(){
      this.SEARCH_ACCOUNT_SUBJECT_LIST()
    },

    /*계정상세선택 조회*/
    onRowClick(selected){
      console.log(selected)
      console.log(selected.accountInnerCode)
      this.SEARCH_ACCOUNT_DETAIL_LIST(selected.accountInnerCode)
    },
    rowDetailClick(selected){
      console.log('accountDetail 로우 선택',selected.accountInnerCode)
      let accountCode=selected.accountInnerCode
      this.accountCode=accountCode

    },

    /*부모 컴포넌트 초기화*/
    clickSave(){

    },
  },
}
</script>

<style scoped>

</style>
