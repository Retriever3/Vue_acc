<template>
  <div>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      style=" float: right"
      @click="searchCustomerCode"
    >
      전체검색
    </b-button>
    <b-table
        striped
        hover
        select-mode="single"
        selectable
        :fields="fields"
        :items="accountCustomerList"
      @row-selected="onRowSelected"
    />
  </div>

</template>

<script>
import { BButton, BTable } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  components: {
    BTable,
    BButton,

  },

  directives: {
    Ripple,
  },
  data() {
    return {
      fields: ['customerCode', 'customerName'],
    }
  },
  computed: {
    ...mapState('account/base', ['accountCustomerList']),

  },
  // 모달창이 없어질떄 호출
  beforeDestroy() {
    this.CLEAR_CUSTOMER_CODE_LIST()
  },
  methods: {
    ...mapMutations('account/base', ['CLEAR_CUSTOMER_CODE_LIST']),
    ...mapActions('account/base', ['FETCH_ACCOUNT_CUSTOMER_CODE']),

    // 전체검색
    searchCustomerCode() {
      this.FETCH_ACCOUNT_CUSTOMER_CODE()
    },
    // 테이블 선택한 아이템 가져오기
    onRowSelected(selectedItem) {
      console.log("커스터머코드 :",selectedItem);
      this.$emit('input', selectedItem)
    },
  },

}
</script>

<style scoped>

</style>
