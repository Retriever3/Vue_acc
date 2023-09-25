<template>
  <div>
    <h1>전표</h1>
    <b-button
      variant="relief-primary"
      class="bt"
      @click="saveEditedForm"
    >
      저장
    </b-button>
    <b-button
      variant="relief-primary"
      class="bt"
      @click="editJouranDetail"
    >
      분개상세수정
    </b-button>
    <b-button
      variant="relief-primary"
      class="bt"
      @click="editJouranl"
    >
      분개수정
    </b-button>
    <b-button
      variant="relief-primary"
      class="bt"
      @click="editSlip"
    >
      전표수정
    </b-button>
    <b-table
        :fields="slipFiled"
        :items="GET_SELETED_SLIP"
    />
    <h1>분개 </h1>
    <b-table
      :items="GET_SELETED_JOURNALlIST"
      :fields="journalFiled"
      striped
      responsive
      select-mode="single"
      selectable
      @row-selected="onRowSelected"
    >

<!--      <template #cell(status)="data">-->
<!--        <b-badge :variant="status[1][data.value]">-->
<!--          {{ status[0][data.value] }}-->
<!--        </b-badge>-->
<!--      </template>-->
    </b-table>
    <h1>분개상세</h1>
    <b-table
      :items="journalDetailList"
      :fields="JournaldetailFiled"
      striped
      responsive
    >
      <template #cell(showDetails)="row">
        <b-button
            size="sm"
            @click="row.toggleDetails"
            class="mr-2"
            variant="relief-primary"
        >
           수정
        </b-button>
      </template>

      <template #row-details="row">
        <b-card style="padding: 20px">
          <b-row class="my-1">
            <b-col sm="2" class="text-sm-left" style="font-size: 1.1rem;"><b>분개상세</b></b-col>
            <b-col sm="2" class="text-sm-left" style="font-size: 1.1rem;"><b>코드</b></b-col>
            <b-col sm="2" class="text-sm-left" style="font-size: 1.1rem;"><b>상세내용</b></b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="2">
              <b-form-input
                  class="text-sm-center"
                  style="font-size: 1.2rem;"
                  :id="'accountControlName-' + row.index"
                  v-model="journalDetailList[row.index].accountControlName"
                  @click="openAccountControlModal('accountControlName')"
              />
            </b-col>

            <b-col sm="2">
              <b-form-input
                  class="text-sm-center"
                  style="font-size: 1.2rem;"
                  :id="'accountControlType-' + row.index"
                  v-model="journalDetailList[row.index].accountControlType"
                  @click="openAccountControlModal('accountControlType')"
              />
            </b-col>

            <b-col sm="2">
              <b-form-input
                  style="font-size: 1.2rem;"
                  :id="'journalDescription-' + row.index"
                  v-model="journalDetailList[row.index].journalDescription"
              />
            </b-col>
          </b-row>
        </b-card>
      </template>


    </b-table>

    <!-- 모달은 id 이용-->
    <!-- 전표추가 모달-->
    <!--하나의 inputForm 태그 사용 < 조건을 props로 내려줌>-->
    <b-modal
      id="openEditSlipModal"
      title="전표수정"
    >
      <p class="my-5">
        <InputForm
          ref="inputSlipForm"
          :edit-slip="GET_SELETED_SLIP"
          modal-status="editSlip"
        />
      </p>
    </b-modal>
    <!-- 분개추가 모달 -->
    <b-modal
      id="openEditJournalModal"
      title="분개수정!!"
    >
      <p class="my-5">
        <InputForm
          ref="inputJournalForm"
          :editJournal="editableJournal"
          modal-status="editJournal"
          v-model="this.editableJournal.journalDetailList"
        />

      </p>
    </b-modal>
    <!--분개상세 수정 모달 2023-04-22-->
    <b-modal
      id="openEditJournalDetailModal"
      title="분개상세수정"
    >
      <p class="my-5">
        <InputForm
          ref="inputJournalDetailForm"
          modal-status="editJournalDetail"
          :editJournal="journalDetailList"
        />
      </p>
    </b-modal>

    <!-- 코드 /분개상세항목 모달 -->
    <b-modal
        id="AccountControllCode"
        ref="accountModal"
        :title="searchJournalDetailCondition==='accountControlName' ? '코드' :'분개상세항목' "
    >
      <p class="my-5">
        <AccountControllCodeModal
            v-model="resultCode"
            :resultCode="resultCode"
            @input="searchControlCode"
        />
      </p>
    </b-modal>
  </div>
</template>

<script>
import {BBadge, BButton, BTable,} from 'bootstrap-vue'
import {mapActions, mapGetters} from 'vuex'
import Vue from 'vue'
import {JournaldetailFiled, journalFiled, slipFiled} from '../fields'
import InputForm from '../Slip/InputForm.vue'
import AccountControllCodeModal from "@/components/account/modal/AccountControllCodeModal.vue";

export default {


  components: {
    BButton,
    BTable,
    BBadge,
    InputForm,
    AccountControllCodeModal,
  },

  data() {
    return {
      /*  필드
       */
      slipFiled,
      journalFiled,
      JournaldetailFiled,
      seletedSlip: [],

      //분개 상세
      journalDetailList: [],
      searchJournalDetailCondition:'',
      resultCode: '',
      // 수정분개
      editableJournal: [],
    }
  },
  computed: {
    ...mapGetters('account/account', ['GET_SELETED_SLIP', 'GET_SELETED_JOURNALlIST']),
  },
  // getters: {},
  methods: {
    ...mapActions('account/account', ['EDIT_SLIP']),
    /**
     *  분개선택시 해당분개상세 볼수있는 기능
     */
    onRowSelected(selectedJournal) {
      // eslint-disable-next-line prefer-destructuring
      console.log("분개 선택 :",selectedJournal)
      this.editableJournal = selectedJournal[0]
      this.journalDetailForm = selectedJournal[0]
      console.log("editableJournal :",this.editableJournal)
      console.log("journalDetailForm :",this.journalDetailForm)
      if (selectedJournal[0].journalDetailList.length === 0) {
        Vue.$toast.info('해당분개의 분개상세는 존재하지않습니다')
      }
      this.journalDetailList = selectedJournal[0].journalDetailList
    },
    //분개 상세 수정
    // journalDetailSelected(selectedJournalDetail) {
    //   console.log('선택된 분개상세:', selectedJournalDetail);
    //   if (selectedJournalDetail && selectedJournalDetail.length > 0) {
    //     const newDetails = selectedJournalDetail.filter(item => {
    //       return !this.journalDetailList.some(existingItem => existingItem.id === item.id);
    //     });
    //     console.log("newDetails :",newDetails);
    //     this.journalDetailList = [...this.journalDetailList, ...newDetails];
    //     console.log("journalDetailList :",this.journalDetailList);
    //   }
    // },

    //분개상세 모달
    openAccountControlModal(name) {
      console.log("분개상세항목 모달창 :",name);
      if (name === 'accountControlName') {
        this.searchJournalDetailCondition = 'accountControlName'
      } else {
        this.searchJournalDetailCondition = 'accountControlType'
      }
      this.$root.$emit('bv::show::modal', 'AccountControllCode', '#focusThisOnClose')
    },

    /**
     *전표수정 버튼 클릭시 함수실행
     */
    editSlip() {
      this.$root.$emit('bv::show::modal', 'openEditSlipModal')
    },
    /**
     * 분개수정
     */
    editJouranl() {
      this.$root.$emit('bv::show::modal', 'openEditJournalModal')
    },
    /**
     * 분개상세수정
     */
    editJouranDetail() {
      if (this.journalDetailList.length !== 0) {
        this.$root.$emit('bv::show::modal', 'openEditJournalDetailModal', '#focusThisOnClose')
      }
    },
    searchControlCode(selectedItem) {
      const { accountControlType, accountControlName } = selectedItem[0];

      // 첫 번째 분개 상세의 input에만 selectedItem 값을 할당
      this.journalDetailForm.journalDetailList[0].accountControlType = accountControlType;
      this.journalDetailForm.journalDetailList[0].accountControlName = accountControlName;
    }
    ,
    /**
     * 수정 후 저장
     */
    async saveEditedForm() {
      const editedSlip = this.GET_SELETED_SLIP[0]
      const updateSlipNo = await this.EDIT_SLIP(editedSlip)
      alert(`${updateSlipNo} 전표의 모든 사항이 업데이트되었습니다`)
    },
  },

}
</script>
<style scoped>
h1 {
  font-size: 45px;
  font-weight: 600;
  color: #456155;
  padding: 30px 5px 15px;
}

.bt {
  float: right;
}
</style>
