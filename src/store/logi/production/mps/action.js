var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// @ts-ignore
import { searchContractDetailInMpsAvailable, convertContractDetailToMps } from '@/api/logi/production';
const actions = {
    SEARCH_CONTRACT_DETAIL_IN_MPS_AVAILABLE(state, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield searchContractDetailInMpsAvailable(payload);
                state.commit('SET_SEARCH_CONTRACT_DETAIL_IN_MPS_AVAILABLE', data.result.data.gridRowJson);
                return data;
            }
            catch (err) {
                // 기존에는 err의 타입이 any였는데,
                // tsconfig에서 `strict: true`인 경우 err의 타입이 unknown으로 변경되었다.
                if (err instanceof Error) {
                    console.error(err.message); // 이렇게 사용해야 한다
                }
                return null; // 왜 여기에도 리턴을...
            }
        });
    },
    CONVERT_CONTRACT_DETAIL_TO_MPS({ commit }, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield convertContractDetailToMps(payload);
                commit('SET_CONTRACT_DETAIL_LIST', data.result.data.gridRowJson[0]);
                return data;
            }
            catch (err) {
                if (err instanceof Error) {
                    throw new Error(err.message);
                }
                return null;
            }
        });
    },
};
export default actions;
