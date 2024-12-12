import {
    AffiliateActionTypes,
    GET_AFFILIATE_DATA_FAILURE,
    GET_AFFILIATE_DATA_SUCCESS,
    GET_ALL_FY_YEAR_FAILURE,
    GET_ALL_FY_YEAR_SUCCESS,
    GET_COMPANY_CODE_FAILURE,
    GET_COMPANY_CODE_SUCCESS
} from "@/redux/actions/affiliate/types";


export interface AffiliateState {
    error: string | null;
    companyCode: Object | null;
    affiliateData: Object | null;
    allYear: Object | null;
}

const initialState: AffiliateState = {
    error: null,
    companyCode: {},
    affiliateData: {},
    allYear: {},
};

const affiliateReducer = (state = initialState, action: AffiliateActionTypes): AffiliateState => {
    switch (action.type) {
        case GET_COMPANY_CODE_SUCCESS:
            return {
                ...state,
                companyCode: action.payload.data?.id,
                error: null
            };
        case GET_COMPANY_CODE_FAILURE:
            return {
                ...state,
                companyCode: '',
                error: action.payload.error
            };
        case GET_AFFILIATE_DATA_SUCCESS:
            return {
                ...state,
                affiliateData: action.payload.data?.data.data,
                error: null
            };
        case GET_AFFILIATE_DATA_FAILURE:
            return {
                ...state,
                affiliateData: null,
                error: action.payload.error
            };
        case GET_ALL_FY_YEAR_SUCCESS:
            return {
                ...state,
                allYear: action.payload.data,
                error: null
            };
        case GET_ALL_FY_YEAR_FAILURE:
            return {
                ...state,
                allYear: null,
                error: action.payload.error
            };
        default:
            return state;
    }
};

export default affiliateReducer;
