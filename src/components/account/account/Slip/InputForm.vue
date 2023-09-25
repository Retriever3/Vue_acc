<template>
  <div>
    <!-- 전표 모달 내용
     and 연산자 or 연산자는 아래와 같이 한개씩 다 비교해줘야한다!!! -->
    <b-form
      v-if="modalStatus==='addSlip' || modalStatus==='editSlip'"
    >
      <b-row>
        <b-col md="6">
          <b-form-group
            label="기수"
            label-for="accountPeriodNo"
          >
            <b-form-input
              v-if="modalStatus==='addSlip'"
              id="accountPeriodNo"
              v-model="slipForm.accountPeriodNo"
              disabled
            />
            <b-form-input
              v-else
              id="accountPeriodNo"
              v-model="editSlip[0].accountPeriodNo"
              disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="전표일련번호"
            label-for="slipNo"
          >
            <b-form-input
              v-if="modalStatus==='addSlip'"
              id="slipNo"
              v-model="slipForm.slipNo"
              disabled
            />
            <b-form-input
              v-else
              id="slipNo"
              v-model="editSlip[0].slipNo"
              disabled
            />
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group
            label="전표유형"
            label-for="slipType"
          >
            <b-form-input
              v-if="modalStatus==='addSlip'"
              id="slipType"
              v-model="slipForm.slipType"
              disabled
            />
            <b-form-input
              v-else
              id="slipType"
              v-model="editSlip[0].slipType"
              disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="작성자코드"
            label-for="reportingEmpCode"
          >
            <b-form-input
              v-if="modalStatus==='addSlip'"
              id="reportingEmpCode"
              v-model="slipForm.reportingEmpCode"
              disabled
            />
            <b-form-input
              v-else
              id="reportingEmpCode"
              v-model="editSlip[0].reportingEmpCode"
              disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="품의내역"
            label-for="expenseReport"
          >
            <div class="form-label-group">
              <b-form-input
                v-if="modalStatus==='addSlip'"
                id="expenseReport"
                v-model="slipForm.expenseReport"
              />
              <b-form-input
                v-else
                id="expenseReport"
                v-model="editSlip[0].expenseReport"
              />
            </div>
          </b-form-group>
        </b-col>

        <!--2023-04-28 사용일자 추가-->
        <b-col md="6">
          <b-form-group
              label-for="postingDate"
              label="사용일자"
          >
            <b-form-input
                v-if="modalStatus==='addSlip'"
                id="postingDate"
                v-model="slipForm.postingDate"
                type="date"
            />
            <b-form-input
                v-else
                id="postingDate"
                v-model="editSlip[0].postingDate"
                type="date"
            />
          </b-form-group>
        </b-col>
        <!--2023-04-28 사용일자 추가-->

        <b-col md="6">
          <b-form-group
            label-for="reportingDate"
            label="작성날짜"
          >
            <b-form-input
              v-if="modalStatus==='addSlip'"
              id="reportingDate"
              v-model="slipForm.reportingDate"
              type="date"
            />
            <b-form-input
              v-else
              id="reportingDate"
              v-model="editSlip[0].reportingDate"
              type="date"
            />

          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
    <!-- 분개 모달 내용 -->
    <b-form
      v-else-if="modalStatus==='addJournal'|| modalStatus==='editJournal'"
    >
      <b-row>
        <b-col md="6">
          <b-form-group
            label="분개일련번호"
            label-for="journalNo"
          >
            <b-form-input
              v-if="modalStatus==='addJournal'"
              id="journalNo"
              v-model="journalForm.journalNo"
              disabled
            />
            <b-form-input
              v-else
              id="journalNo"
              v-model="editJournal.journalNo"
              disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="계정코드"
            label-for="accountCode"
          >
            <b-form-input
              v-if="modalStatus==='addJournal'"
              id="accountCode"
              v-model="journalForm.accountCode"
              @click="openAccountCodeModal('accountCode')"
            />
            <b-form-input
              v-else
              id="accountCode"
              v-model="editJournal.accountCode"
              @click="openAccountCodeModal('accountCode')"
            />

          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group
            label="계정명"
            label-for="accountName"
          >
            <b-form-input
              v-if="modalStatus==='addJournal'"
              id="accountName"
              v-model="journalForm.accountName"
              @click="openAccountCodeModal('accountName')"
            />
            <b-form-input
              v-else
              id="accountName"
              v-model="editJournal.accountName"
              @click="openAccountCodeModal('accountName')"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="대차구분"
            label-for="balanceDivision"
          >
            <b-form-select
              v-if="modalStatus==='addJournal'"
              id="balanceDivision"
              v-model="journalForm.balanceDivision"
              :options="options"
            />
            <b-form-select
              v-else
              id="balanceDivision"
              v-model="editJournal.balanceDivision"
              :options="options"
            />

          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="거래처코드"
            label-for="customerCode"
          >
            <b-form-input
                v-if="modalStatus === 'addJournal'"
                id="customerCode"
                v-model="journalForm.customerCode"
                @click="openAccountCustomerModal('accountCustomer')"
            />
            <b-form-input
              v-else
              id="customerCode"
              v-model="editJournal.customerCode"
              @click="openAccountCustomerModal('accountCustomer')"
            />

          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label-for="leftDebtorPrice"
            label="차변"
          >

            <b-form-input
              v-if="modalStatus==='addJournal'"
              id="leftDebtorPrice"
              v-model="journalForm.leftDebtorPrice"
              :disabled="journalForm.balanceDivision==='대변'"
            />
            <b-form-input
              v-else
              id="leftDebtorPrice"
              v-model="editJournal.leftDebtorPrice"
              :disabled="editJournal.balanceDivision==='대변'"
            />

          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label-for="rightCreditsPrice"
            label="대변"
          >

            <b-form-input
              v-if="modalStatus==='addJournal'"
              id="rightCreditsPrice"
              v-model="journalForm.rightCreditsPrice"
              :disabled="journalForm.balanceDivision==='차변'"
            />
            <b-form-input
              v-else
              id="rightCreditsPrice"
              v-model="editJournal.rightCreditsPrice"
              :disabled="editJournal.balanceDivision==='차변'"
            />

          </b-form-group>
        </b-col>
        <!-- submit and reset -->
      </b-row>
      <b-col>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="reset"
          variant="outline-secondary"
        >
          Reset
        </b-button>
      </b-col>
    </b-form>

    <!-- 분개 상세 모달 -->
    <b-form
      v-else-if="modalStatus==='addJournalDetail' || modalStatus==='editJournalDetail'"
    >
      <b-row>
        <b-col md="6">
          <b-form-group
            label="분개일련번호"
            label-for="journalDetailNo"
          >
            <!--      하기한줄내용 석현 추가 -->
            <b-form-input
              v-if="modalStatus==='addJournalDetail'"
              id="journalDetailNo"
              v-model="journalDetailForm.journalDetailNo"
              disabled
            />
            <b-form-input
                v-else="modalStatus==='editJournalDetail'"
                id="journalDetailNo"
                v-model="editJournal[0].journalDetailNo"
                disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="계정명"
            label-for="accountControlName"
          >
            <b-form-input
                v-if="modalStatus ==='addJournalDetail'"
                id="accountControlName"
                v-model="journalDetailForm.accountControlName"
                @click="openAccountControlModal('accountControlName')"
            />

            <b-form-input
                v-else="modalStatus === 'editJournalDetail'"
                id="accountControlName"
                v-model="editJournal[0].accountControlName"
                @click="openAccountControlModal('accountControlName')"
            />
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group
            label="분개상세항목"
            label-for="accountControlType"
          >
            <b-form-input
                v-if="modalStatus==='addJournalDetail'"
                id="accountControlType"
              v-model="journalDetailForm.accountControlType"
              @click="openAccountControlModal('accountControlType')"
            />

            <b-form-input
                v-else="modalStatus==='editJournalDetail'"
                id="accountControlType"
                v-model="editJournal[0].accountControlType"
                @click="openAccountControlModal('accountControlType')"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="상세내용"
            label-for="journalDescription"
          >
            <b-form-input
                v-if="modalStatus==='addJournalDetail'"
                id="journalDescription"
              v-model="journalDetailForm.journalDescription"
            />

            <b-form-input
                v-else="modalStatus==='editJournalDetail'"
                id="journalDescription"
                v-model="editJournal[0].journalDescription"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>

    <!-- 계정코드 , 계정명 전용 모달-->
    <b-modal
      id="accountCode"
      ref="accountModal"
      :title="searchCondition==='accountCode'? '계정코드찾기' : '계정명 찾기'"
    >
      <p class="my-5">
        <AccountCodeModal
            v-model:value="resultCode"
            :condition="searchCondition"
            @selectedItems="searchCode"
        />
      </p>
    </b-modal>
    <!-- 거래처코드 전용모달-->
    <b-modal
      id="CustomerCode"
      ref="accountModal"
      title="거래처코드"
    >
      <p class="my-5">
        <AccountCustomerCodeModal
          v-model:value="resultCode"
          :resultCode="resultCode"
          @input="searchCustomerCode"
        />
      </p>
    </b-modal>

    <!-- 계정코드 /분개상세항목 모달 -->
    <b-modal
      id="AccountControllCode"
      ref="accountModal"
      :title="searchJournalDetailCondition==='accountControlName' ? '계정코드' :'분개상세항목' "
    >
      <p class="my-5">
      <AccountControllCodeModal
          v-model:value="resultCode"
          @input="searchControllCode"
      />
    </p>
    </b-modal>
  </div>
</template>
<script>
import {
  BRow, BCol, BFormGroup, BFormInput, BForm, BButton, BFormSelect,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import AccountCodeModal from '@/components/account/modal/AccountCodeModal.vue'
import AccountCustomerCodeModal from '@/components/account/modal/AccountCustomerCodeModal.vue'
import AccountControllCodeModal from '@/components/account/modal/AccountControllCodeModal.vue'

export default {
  components: {
    AccountControllCodeModal,
    AccountCustomerCodeModal,
    AccountCodeModal,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BButton,
    BFormSelect,

  },
  directives: {
    Ripple,
  },
  props: ['modalStatus', 'editSlip', 'editJournal','addJournalDetail','JournalDetail'],
  data() {
    return {
      searchCondition: '',
      searchJournalDetailCondition: '',
      resultCode: '',
      options: [
        { value: '대변', text: '대변' },
        { value: '차변', text: '차변' },
      ],
      /**
       * 전표객체
       */
      slipForm: {
        slipNo: 'NEW',
        accountPeriodNo: '4', // 2020년은 기수일련번호 ->  1
        slipType: '결산',
        reportingDate: '',
        reportingEmpCode: sessionStorage.getItem('empCode'), // 작성사코드
        expenseReport: '',
        approvalDate: '',
        reportingEmpName: sessionStorage.getItem('empName'), // 로그인 이름
        slipStatus: '',
        postingDate:'',
        deptCode: 'DPT-01',
        status: '',
      },
      /**
        * 분개 객체
        */

      journalForm: {
        journalNo: 'NEW',
        accountCode: '',
        accountName: '',
        balanceDivision: '',
        customerCode: '',
        customerName: '',
        leftDebtorPrice: '0',
        rightCreditsPrice: '0',
      },

      // editJournal: {
      //   journalNo: 'NEW',
      //   accountCode: '',
      //   accountName: '',
      //   balanceDivision: '',
      //   customerCode: '',
      //   customerName: '',
      //   leftDebtorPrice: '0',
      //   rightCreditsPrice: '0',
      // },
      /**
       *  분개상세 객체
       */
      journalDetailForm: {
        journalDetailNo: '',
        accountControlName: '',
        accountControlType: '',
        journalDescription: '',
      },

    }
  },
  methods: {
    // 계정코드 and 계정명 모달
    openAccountCodeModal(name) {
      if (name === 'accountName') {
        this.searchCondition = 'accountName'
      } else {
        this.searchCondition = 'accountCode'
      }
      // 클릭시 모달열떄  1번 모달 오픈 , 2번 모달 id
      this.$root.$emit('bv::show::modal', 'accountCode', '#focusThisOnClose')

    },

    // 거래처 코드 모달
    openAccountCustomerModal() {
      this.$root.$emit('bv::show::modal', 'CustomerCode', '#focusThisOnClose')
    },

    /**
     * 분개상세 항목 모달
     */
    openAccountControlModal(name) {
      console.log(name)
      if (name === 'accountControlName') {
        this.searchJournalDetailCondition = 'accountControlName'
      } else {
        this.searchJournalDetailCondition = 'accountControlType'
      }
      this.$root.$emit('bv::show::modal', 'AccountControllCode', '#focusThisOnClose')
    },

    // 계정과목,계정코드
    searchCode(selectedItem) {
      // 문자열이면 true

      const {accountCode, accountName} = selectedItem
      console.log("tq:", selectedItem)
      console.log("qt: ", this.resultCode)

      console.log("this.resultCode type:", typeof this.resultCode);
      console.log("this.editJournal type:", typeof this.editJournal);
      console.log("this.journalForm type:", typeof this.journalForm);

      if (isNaN(this.resultCode)) {
        this.editJournal.accountCode = accountCode
        this.editJournal.accountName = accountName
        console.log("editJournal: ", this.editJournal);
        console.log("옴?");
      } else {
        console.log("여기 옴?");
        console.log("journalForm: ", this.journalForm)
        this.journalForm.accountCode = accountCode
        this.journalForm.accountName = accountName
      }
    },

    // 거래처코드
    searchCustomerCode(selectedItem) {
      const { customerCode, customerName } = selectedItem[0]
      this.journalForm.customerCode = customerCode
      this.journalForm.customerName = customerName
      this.editJournal.customerCode = customerCode
      this.editJournal.customerName = customerName
    },

    /**
     *  분개상세 코드 조회후 클릭시 결과 들어오는곳
     */
    searchControllCode(selectedItem) {
      const { accountControlType, accountControlName } = selectedItem[0]
      this.journalDetailForm.accountControlType = accountControlType
      this.journalDetailForm.accountControlName = accountControlName
    },
  },

}
</script>
