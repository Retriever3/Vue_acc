import mutations from './mutation'
import actions from './action'
export default {
    namespaced: true,
    state:{
        searchAssetList:[],
        assetTypeList:[],
        searchAssetDetail:[],
    },
    getters:{},

    mutations,

    actions,
}
