import {assetList, searchAssetDetail, searchAssetTypeList} from "@/api/account/asset";
import state from "@/store/account/asset/state";


export default {

    /*자산관리조회*/
    async SEARCH_ASSET_LIST({ commit }, data) {
        console.log('data',data);
        try{
            const response = await assetList(data);
            console.log('assetList 액션실행~',response.data)
            commit('SEARCH_ASSET_LIST', response.data);

            return response.data;
        } catch(err){
            throw new Error(err)
        }
    },
    /*자산유형조회*/
    async SEARCH_ASSET_TYPE_LIST({ commit }) {
        try{
            const response = await searchAssetTypeList();
            console.log('assetTypeList 액션실행~',response.data)
            commit('SEARCH_ASSET_TYPE_LIST', response.data);

            return response.data;
        } catch(err){
            throw new Error(err)
        }
    },
    /*자산관리상세조회*/
    async FETCH_ASSET_DETAIL_LIST({ commit },data) {
        console.log('data@@ : ',data)
        try{
            const response = await searchAssetDetail(data);
            console.log('searchAssetDetail 액션실행~',response.data)
            commit('FETCH_ASSET_DETAIL_LIST', response.data);

            return response.data;
        } catch(err){
            throw new Error(err)
        }
    },




}
