<template>
<div>
  <b-card
    header="고정자산"
    header-tag="header"
  >
    <template #header>
        <h4>고정자산</h4>
        <b-form-group class="d-flex ml-auto mr-3">
          <label for="assetTypeList" class="mr-2">자산유형</label>
          <b-form-select
              id="assetTypeList"
              v-model="accountName"
              @change="searchAssetType"
          >
            <b-form-select-option
              v-for="(item, index) in assetTypeList"
              :key="index"
              :value="item"
            >
              {{item.accountName}}
            </b-form-select-option>
          </b-form-select>
        </b-form-group>
        <b-button-group>
<!--          <b-button class="float-end" style="margin-right: 5px;" @click="searchEvent">조회</b-button>-->
          <b-button class="float-end" style="margin-right: 5px;">추가</b-button>
          <b-button class="float-end">삭제</b-button>
        </b-button-group>
    </template>
    <b-table
        hover
        sticky-header="true"
        :fields="columns"
        :items="searchAssetList"
        responsive

        selectable
        select-mode="single"
        @row-clicked="rowClick"
    >
<!--      <template #cell(showDetails)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>-->

<!--      <template #row-details="row">
        <b-card style="padding: 20px">
          <b-row class="my-1">
            <b-col sm="2" class="text-sm-left" style="font-size: 1.1rem;"><b>| 내용연수</b></b-col>
            <b-col sm="2">
              <b-form-input  :value="row.item"  disabled class="text-sm-center"
                            style="font-size: 1.2rem;"></b-form-input>
            </b-col>
            <b-col sm="2" class="text-sm-left" style="font-size: 1.1rem;"><b>| 감가마지막년도</b></b-col>
            <b-col sm="2">
              <b-form-input  disabled class="text-sm-center"
                            style="font-size: 1.2rem;"></b-form-input>
            </b-col>
            <b-col sm="2" class="text-sm-left" style="font-size: 1.1rem;"><b>| 개월수 </b></b-col>
            <b-col sm="2">
              <b-form-input  disabled class="text-sm-center"
                            style="font-size: 1.2rem;"></b-form-input>
            </b-col>
          </b-row>
        </b-card>
      </template>-->
    </b-table>
  </b-card>
  <div>
    <currentAssetDetail
    />
  </div>

</div>
</template>

<script>
import {BCard,BButton,BModal} from "bootstrap-vue";
import {VueGoodTable} from "vue-good-table";
import {mapActions, mapState} from "vuex";
import CurrentAssetDetail from "@/components/account/Asset/currentAsset/CurrentAssetDetail.vue";
export default {
  name: "CurrentAssetPage.vue",
  components :{
    BCard,
    BButton,
    BModal,
    VueGoodTable,
    CurrentAssetDetail
  },

  computed:{
    ...mapState('account/asset',['assetTypeList','searchAssetList','searchAssetDetail'])
  },

  created() {
    this.SEARCH_ASSET_TYPE_LIST();
  },

  data(){
    return{
      selectedAssetCode:'',
      accountCharacter:'',
      accountName:'',

      columns:[
        {label:'계정코드', key:'accountCode'},
        {label:'계정명', key:'accountName'},
        {label:'자산코드', key:'assetCode'},
        {label:'자산명', key:'assetName'},
        {label:'취득일', key:'progress'},
        {label:'처리여부', key:'finalizeStatus'},
        {label:'상세보기', key:'showDetails'},

      ],

      rows:[],

    }
  },
  methods:{
    ...mapActions('account/asset',['SEARCH_ASSET_TYPE_LIST','SEARCH_ASSET_LIST','FETCH_ASSET_DETAIL_LIST']),

    // currentSelected(selected){
    //   console.log('selected값 부모',selected.assetCode)
    //   this.selectedAssetCode=selected.assetCode;
    // },


    /*select 자산유형 검색*/
    searchAssetType(list){
      console.log("list : ",list)
      let data = {accountCode: list.accountCode,
                  accountName: list.accountName
      }
      /*자산유형에 따라 테이블에 조회 결과 뿌리기*/
      this.SEARCH_ASSET_LIST(data);

    },

    /*table 자산리스트 중 1개 선택해서 detail로 연결하기*/
    rowClick(selected){
      console.log("selected 로우 선택 : ",selected.assetCode)

      this.FETCH_ASSET_DETAIL_LIST(selected.assetCode)
    },

  },


}
</script>

<style scoped>

</style>
