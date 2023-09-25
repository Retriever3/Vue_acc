export default {
    SEARCH_ASSET_LIST(state, searchAssetList){
        state.searchAssetList=searchAssetList
    },

    SEARCH_ASSET_TYPE_LIST(state, assetTypeList){
        state.assetTypeList=assetTypeList
        state.assetTypeList.unshift({'accountName':'all','accountCode':'0000'})
    },

    FETCH_ASSET_DETAIL_LIST(state, searchAssetDetail){
        state.searchAssetDetail=searchAssetDetail
    },

}
