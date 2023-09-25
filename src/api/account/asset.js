import {accountApi} from "@/api";

/*자산관리조회*/
function assetList(data){
    console.log('API data ~ ',data);
    return accountApi.get('/CurrentAsset/findCurrentAssetList',
        {params:data}
        )
}
function searchAssetTypeList(){
    return accountApi.get('/CurrentAsset/findAssetTypeList')
}

function searchAssetDetail(data){
    console.log('API !!!!!!! ',data)
    return accountApi.get('/CurrentAsset/findAssetDetailList',
        {params:{assetCode: data}}
    )
}

export {
    assetList,searchAssetTypeList,searchAssetDetail
}
