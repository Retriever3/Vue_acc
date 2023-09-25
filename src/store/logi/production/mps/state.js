import mutations from '@/store/logi/production/mps/mutation';
import actions from '@/store/logi/production/mps/action';
export class Mps {
    constructor() {
        this.contractDetailList = [];
    }
}
const Production = {
    namespaced: true,
    state: new Mps(),
    mutations,
    actions,
};
export default Production;
