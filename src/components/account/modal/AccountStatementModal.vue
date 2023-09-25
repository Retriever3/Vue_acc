<template>
  <div>
    <b-table
        striped
        hover
        select-mode="single"
        selectable
        :fields="columns"
        :items="this.accountPeriodList"
        @row-clicked="onRowSelected"
    />
  </div>

</template>

<script>
import { BButton, BFormInput, BTable } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { mapActions, mapMutations, mapState } from 'vuex'
import Vue from 'vue'

export default {
  components: {
    BTable,
    BButton,
    BFormInput,

  },
  directives: {
    Ripple,
  },
  props: ['condition', ],

  data() {
    return {
      columns: ['accountPeriodNo', 'periodStartDate' ,'periodEndDate' ],
    }
  },
  computed: {
    //석현 추가
    ...mapState('account/statement',['accountPeriodList']),
  },
  // 모달창이 없어질떄 호출
  beforeDestroy() {
    this.CLEAR_CODE_LIST()
  },
  methods: {
    ...mapMutations('account/base', ['CLEAR_CODE_LIST']),
    ...mapActions('account/base', ['FETCH_ACCOUNT_CODE']),

    // 선택된 로우
    onRowSelected(selectedItem) {
      console.log("selectedItem : ",selectedItem)
      const { accountPeriodNo, periodStartDate } = selectedItem
        this.$emit('selectedRowData', selectedItem)
    },


  },

}
</script>

<style scoped>

</style>
