<template>
  <div>
    <h1> 여긴 일반거래처</h1>

    <b-button variant="outline-primary" @click="">조회</b-button>
    <b-button variant="outline-primary" @click="">추가</b-button>
    <b-button variant="outline-primary" @click="">삭제</b-button>
    <b-button variant="outline-primary" @click="">저장</b-button>
    <div>
      <b-table
          style="max-height: 300px; overflow: auto; width: 100%"
          responsive
          :items="고객bomList"
          :fields="고객fields_bom"
          class="mb-0 scrollStyle"
      />
    </div>
  </div>

</template>

<script>
import {BButton, BTable} from "bootstrap-vue";

export default {
  name: "NormalClientInfo",
  components: {
    BButton,
    BTable
  },
  data() {
    return {
      고객fields_bom: [
        {label: '일반거래처 코드', key: 'customerCode',},
        // {label: "NO", width: 55, valueGetter: "node.rowIndex + 1", hide: true,},
        {label: '사업장코드', key: 'workplaceCode', resizable: true},
        {label: '거래처명', key: 'customerName', width: 300, editable: true,},
        {label: '거래처유형', key: 'customerType', editable: true,},
        {label: '거래처대표자명', key: 'customerCeo', editable: true,},
        {label: 'status', key: 'status',},
        {label: '사업자등록번호', key: 'businessLicenseNumber'},
        {label: '개인거래처 주민등록번호', key: 'socialSecurityNumber',},
        {label: '업태', key: 'customerBusinessConditions', editable: true},
        {label: '종목', key: 'customerBusinessItems', editable: true},
        {label: '우편번호', key: 'customerZipCode', editable: true, hide: true},
        {label: '기본주소', key: 'customerBasicAddress', editable: true, hide: true},
        {label: '세부주소', key: 'customerDetailAddress', editable: true, hide: true},
        {label: '전화번호', key: 'customerTelNumber', editable: true, hide: true},
        {label: '팩스번호', key: 'customerFaxNumber', editable: true, hide: true},
        {label: '비고', key: 'customerNote', hide: true},
        {label: '사업자등록번호', key: 'companyCeoName', hide: true}
      ]
    };
  },

methods: {
}
,
computed: {
}
,
mounted()
{
}
,

}
</script>

<style scoped>

</style>
