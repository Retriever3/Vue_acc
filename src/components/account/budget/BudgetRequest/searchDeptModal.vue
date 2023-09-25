<template>
  <div class="d-flex justify-content-center">
      <b-row
      size="xl">
        <b-col style="width: 800px"
                class="text-center">
          <b-table
            sticky-header
            responsive="lg"
            style="max-height: 300px;  overflow: auto;"
            :fields="workplaceColumns"
            :items="workplaceList"

            selectable
            select-mode="single"
            @row-clicked="workplaceClick"
           >
          </b-table>
        </b-col>
        <b-col class="text-center">
          <b-table
            responsive="lg"
            :fields="deptColumns"
            :items="deptList"

            selectable
            select-mode="single"
            @row-clicked="deptListClick"
          >
          </b-table>
        </b-col>
      </b-row>
  </div>

</template>

<script>
import {
  BRow, BCol,  BForm,
} from 'bootstrap-vue'
import {deptList, workplaceList} from "@/api/account/budget";
import {mapActions, mapState} from "vuex";


export default {
  components:{BRow, BCol,  BForm,},

  props:['modalStatus','searchWorkplace','workplaceList',],

  computed:{
    ...mapState('account/budget',['deptList'])
  },

  created() {
    },

  data(){
    return{
      workplaceColumns:[
        {
          label: '사업장코드',
          key: 'workplaceCode',
          sortable: true,
        },
        {
          label: '사업장명',
          key: 'workplaceName',
          sortable: true,
        }
      ],
      deptColumns:[
        {
          label: '부서코드',
          key: 'deptCode',
          sortable: true
        },
        {
          label: '부서명',
          key: 'deptName',
          sortable: true
        }
      ],
      selected:[],
    }
  },
  methods:{
    ...mapActions('account/budget',['SEARCH_DEPT_LIST']),

     workplaceClick(list){
      const data = {workplaceCode: list.workplaceCode}
      console.log("workplaceList",list.workplaceCode);
      this.SEARCH_DEPT_LIST(data)
    },
    deptListClick(items){
    console.log("items가 뭐지",items)
      this.$emit('selected',items);
    },
  },
}
</script>

<style scoped>

</style>
