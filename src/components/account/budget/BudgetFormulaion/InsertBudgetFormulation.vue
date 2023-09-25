<template>
  <div>
    <b-card>
      <template #header>
        <h5>예산편성등록</h5>
        <b-button variant="secondary" class="float-right" @click="clickSave">등록</b-button>
      </template>
      <b-card-body>
        <b-row class="mb-1">
          <b-col  md="4">
            <b-form-input v-model="month1" placeholder="1월" autocomplete="current-password"/>
          </b-col>
          <b-col  md="4">
            <b-form-input v-model="month2" placeholder="2월" autocomplete="current-password"/>
          </b-col>
          <b-col  md="4">
            <b-form-input v-model="month3" placeholder="3월" autocomplete="current-password"/>
          </b-col>
        </b-row>
        <b-row class="mb-1">
          <b-col  md="4">
            <b-form-input v-model="month4" placeholder="4월" autocomplete="current-password"/>
          </b-col>
          <b-col  md="4">
            <b-form-input v-model="month5" placeholder="5월" autocomplete="current-password"/>
          </b-col>
          <b-col  md="4">
            <b-form-input v-model="month6" placeholder="6월" autocomplete="current-password"/>
          </b-col>
        </b-row>
        <b-row class="mb-1">
          <b-col  md="4">
            <b-form-input v-model="month7" placeholder="7월" autocomplete="current-password"/>
          </b-col>
          <b-col  md="4">
            <b-form-input v-model="month8" placeholder="8월" autocomplete="current-password"/>
          </b-col>
          <b-col  md="4">
            <b-form-input v-model="month9" placeholder="9월" autocomplete="current-password"/>
          </b-col>
        </b-row>
        <b-row class="mb-1">
          <b-col  md="4">
            <b-form-input v-model="month10" placeholder="10월" autocomplete="current-password"/>
          </b-col>
          <b-col  md="4">
            <b-form-input v-model="month11"placeholder="11월" autocomplete="current-password"/>
          </b-col>
          <b-col  md="4">
            <b-form-input v-model="month12" placeholder="12월" autocomplete="current-password"/>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import {mapActions} from "vuex";

export default {
  name: "InsertBudgetFormulation",
  props:["periodNo","workplaceCode","deptCode","accountCode"],

  data(){
    return{
    month1:'',month2:'',month3:'',month4:'',month5:'',month6:'',month7:'',month8:'',month9:'',month10:'',month11:'',month12:'',
  }},
  methods:{
    ...mapActions(),

    clickSave(){
      let data={
        deptCode: this.deptCode,
        workplaceCode: this.workplaceCode,
        accountPeriodNo: this.periodNo,
        accountInnerCode: this.accountCode,
        budgetingCode: '1',
        m1Budget: this.month1,
        m2Budget: this.month2,
        m3Budget: this.month3,
        m4Budget: this.month4,
        m5Budget: this.month5,
        m6Budget: this.month6,
        m7Budget: this.month7,
        m8Budget: this.month8,
        m9Budget: this.month9,
        m10Budget: this.month10,
        m11Budget: this.month11,
        m12Budget: this.month12
      }

      if(Object.values(data).some((dataValue)=>dataValue=="")){
        Swal.fire({
          icon: "warning",
          title: "예산 편성금액을 기입해 주십시오",
          showConfirmButton: "확인",
        });
      }else{
        console.log(Object.values(data));
        this.INSERT_BUDGET_FORMULATION(data);
        alert('저장되었습니다');
      }

      //데이터 초기화
      this.$emit('click-save');
      this.month1 = ''
      this.month2 = ''
      this.month3 = ''
      this.month4 = ''
      this.month5 = ''
      this.month6 = ''
      this.month7 = ''
      this.month8 = ''
      this.month9 = ''
      this.month10 = ''
      this.month11 = ''
      this.month12 = ''
    },
  },
}
</script>

<style scoped>

</style>
