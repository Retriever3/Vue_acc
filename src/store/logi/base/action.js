import {
  searchItem, getStandardUnitPrice,getWarehouseList,deleteWarehouseList
} from '@/api/logi/base'

export default {
  async SEARCH_ITEM({ commit }, divisionCode) {
    try {
      const res = await searchItem(divisionCode)
      const itemList = res.data.detailCodeList
      commit('SEARCH_ITEM', itemList)
      return itemList
    } catch (err) {
      throw new Error(err)
    }
    // getStandardUnitPrice
  },
  async GET_STANDARD_UNIT_PRICE({ commit }, itemCode) {
    try {
      const res = await getStandardUnitPrice(itemCode)
      const gridRow = res.data.gridRowJson
      return gridRow
      // commit('setGrid', gridRow)
      // return res
    } catch (err) {
      throw new Error(err)
    }
  },

  //창고조회
  async GET_WAREHOUSE_LIST ({commit}){
    try {
      const {data} = await getWarehouseList();
      console.log("data of getWarehouseList")
      console.log(data)
      console.log(data.gridRowJson[0])
      console.log(data.gridRowJson[0].warehouseCode)
      console.log(data.gridRowJson)
      commit('GET_WAREHOUSE_LIST', data.gridRowJson)
    } catch (err){
      throw new Error(err)
    }
  },
  //창고삭제
  async DELETE_WAREHOUSE_LIST ({commit}, payload){
    try {
      const {data} = await deleteWarehouseList(payload);
      //commit('GET_WAREHOUSE_LIST', data.gridRowJson)
    } catch (err){
      throw new Error(err)
    }
  },

  setTable({ commit }, tableColumns) {
    commit('setTable', tableColumns)
  },






}
