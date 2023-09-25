<template>
<div>
  <b-card
    header="고정자산 상세"
    header-tag="header"
  >
    <template #header>
      <h4>고정자산 상세</h4>
    </template>
      <b-row class="my-1">
        <b-col sm="2" class="text-sm-left" style="font-size: 1rem;"><b>| 내용연수</b></b-col>
        <b-col sm="2">
          <b-form-input v-model="searchAssetDetail[0].usefulLife"disabled class="text-sm-center"
                        style="font-size: 1rem;"></b-form-input>
        </b-col>
        <b-col sm="2" class="text-sm-left" style="font-size: 1rem;"><b>| 감가마지막년도</b></b-col>
        <b-col sm="2">
          <b-form-input v-model="searchAssetDetail[0].amortizationFinalYear" disabled class="text-sm-center"
                        style="font-size: 1rem;"></b-form-input>
        </b-col>
        <b-col sm="2" class="text-sm-left" style="font-size: 1rem;"><b>| 개월수 </b></b-col>
        <b-col sm="2">
          <b-form-input v-model="searchAssetDetail[0].month" disabled class="text-sm-center"
                        style="font-size: 1rem;"></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="2" class="text-sm-left" style="font-size: 1rem;"><b>| 취득수량 </b></b-col>
        <b-col sm="2">
          <b-form-input value="0" disabled class="text-sm-center" style="font-size: 1rem;"></b-form-input>
        </b-col>
        <b-col sm="2" class="text-sm-left" style="font-size: 1rem;"><b>| 잔존수량 </b></b-col>
        <b-col sm="2">
          <b-form-input v-model="searchAssetDetail[0].month" disabled class="text-sm-center" style="font-size: 1rem;"></b-form-input>
        </b-col>
        <b-col sm="2" class="text-sm-left" style="font-size: 1rem;"><b>| 증감수량 </b></b-col>
        <b-col sm="2">
          <b-form-input  disabled class="text-sm-center" style="font-size: 1rem;"></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="2" class="text-sm-left" style="font-size: 1rem;"><b>| 감가법 </b></b-col>
        <b-col sm="2">
          <b-form-input v-model="searchAssetDetail[0].amortizationWay" disabled class="text-sm-center"
                        style="font-size: 1rem;"></b-form-input>
        </b-col>
        <b-col sm="2" class="text-sm-left" style="font-size: 1rem;"><b>| 감가비율 </b></b-col>
        <b-col sm="2">
          <b-form-input v-model="searchAssetDetail[0].amortizationRate" disabled class="text-sm-center"
                        style="font-size: 1rem;"></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="2" class="text-sm-left" style="font-size: 1rem;"><b>| 취득원가 </b></b-col>
        <b-col sm="4">
          <b-form-input v-model="searchAssetDetail[0].acquistionCost" disabled class="text-sm-right"
                        style="font-size: 1rem;"></b-form-input>
        </b-col>
        <b-col sm="2" class="text-sm-left" style="font-size: 1rem;"><b>| 현재 장부가치 </b></b-col>
        <b-col sm="4">
          <b-form-input v-model="searchAssetDetail[0].bookValueend" disabled class="text-sm-right"
                        style="font-size: 1rem;"></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="2" class="text-sm-left" style="font-size: 1rem;"><b>| 정상 상각누가액 </b></b-col>
        <b-col sm="4">
          <b-form-input v-model="searchAssetDetail[0].accumulatedAmortization" disabled class="text-sm-right" style="font-size: 1rem;"></b-form-input>
        </b-col>
        <b-col sm="2" class="text-sm-left" style="font-size: 1rem;"><b>| 누적 상각액</b></b-col>
        <b-col sm="4">
          <b-form-input v-model="searchAssetDetail[0].normalAmortization" disabled class="text-sm-right" style="font-size: 1rem;"></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="2" class="text-sm-left" style="font-size: 1rem;"><b> | 감각삼각비용 </b></b-col>
        <b-col sm="4">
          <b-form-input  disabled class="text-sm-right"
                        style="font-size: 1rem;"></b-form-input>
        </b-col>
        <b-col sm="2" class="text-sm-left" style="font-size: 1rem;"><b>| 잔존가치 </b></b-col>
        <b-col sm="4">
          <b-form-input v-model="searchAssetDetail[0].bookValue" disabled class="text-sm-right"
                        style="font-size: 1rem;"></b-form-input>
        </b-col>
      </b-row>

<!--      <b-row class="my-1">
        <b-col sm="2" class="text-sm-left" style="font-size: 1rem;"><b>| 당기말상각누계액</b></b-col>
        <b-col sm="4">
          <b-form-input disabled class="text-sm-right"
                        style="font-size: 1rem;"></b-form-input>
        </b-col>
        <b-col sm="2" class="text-sm-left" style="font-size: 1rem;"><b>| 당기기말장부가액 </b></b-col>
        <b-col sm="4">
          <b-form-input  disabled class="text-sm-right"
                        style="font-size: 1rem;"></b-form-input>
        </b-col>
      </b-row>-->
  </b-card>
</div>
</template>

<script>
import {BCard,BFormInput} from "bootstrap-vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "CurrentAssetDetail.vue",
  components:{
    BCard,
    BFormInput
  },


  computed:{
    ...mapState('account/asset',['searchAssetDetail']),
  },

  data(){
    return{
      selectedAssetCode:'',
    }
  },

  methods:{
    ...mapActions('account/asset',['FETCH_ASSET_DETAIL_LIST']),
  },

}
</script>

<style scoped>

</style>
