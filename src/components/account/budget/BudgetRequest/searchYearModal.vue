<template>
  <div>
        <b-table
            :fields="columns"
            :items="periodList"
            responsive="lg"

            selectable
            select-mode="single"
            @row-clicked="onRowSelected"
        >
        </b-table>
  </div>
</template>

<script>

export default {

  components: {

  },
  computed:{
  },
  props:["periodList"],
  data(){
    return{
      columns:[
        {
          label: '회계 시작일자',
          key: 'periodStartDate',
          sortable: true
        },
        {
          label: '회계 종료일자',
          key: 'periodEndDate',
          sortable: true
        },
      ],
    }
  },
  methods:{
    onRowSelected(items){
      console.log("items@@@@@@@@@", items);
      this.$emit('selected',items);
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
