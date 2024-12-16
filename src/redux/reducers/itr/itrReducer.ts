import {
    CREATE_ITR_DATA_FAILURE,
    CREATE_ITR_DATA_SUCCESS,
    DELETE_ITR_DATA_FAILURE,
    DELETE_ITR_DATA_SUCCESS,
    DELETE_ITR_EXPRESS_DATA_FAILURE,
    DELETE_ITR_EXPRESS_DATA_SUCCESS,
    DELETE_ITR_NRI_DATA_FAILURE,
    DELETE_ITR_NRI_DATA_SUCCESS,
    GET_ALL_ITR_FAILURE,
    GET_ALL_ITR_SUCCESS,
    GET_ITR_DATA_FAILURE,
    GET_ITR_DATA_SUCCESS,
    GET_ITR_EXPRESS_DATA_FAILURE,
    GET_ITR_EXPRESS_DATA_SUCCESS,
    GET_ITR_NRI_DATA_FAILURE,
    GET_ITR_NRI_DATA_SUCCESS,
    GET_ITR_PLANS_FAILURE,
    GET_ITR_PLANS_SUCCESS,
    GET_MEMBER_EXIST_FAILURE,
    GET_MEMBER_EXIST_SUCCESS,
    GET_USER_DATA_EXIST_FAILURE,
    GET_USER_DATA_EXIST_SUCCESS,
    ITR_SECTION_SWITCH_FAILURE,
    ITR_SECTION_SWITCH_ON_OFF_FAILURE,
    ITR_SECTION_SWITCH_ON_OFF_SUCCESS,
    ITR_SECTION_SWITCH_SUCCESS,
    ItrActionsTypes,
    POST_ITR_DATA_FAILURE,
    POST_ITR_DATA_SUCCESS,
    POST_ITR_EXPRESS_DATA_FAILURE,
    POST_ITR_EXPRESS_DATA_SUCCESS,
    POST_ITR_NRI_DATA_FAILURE,
    POST_ITR_NRI_DATA_SUCCESS,
    POST_ITR_NRI_STATUS_DETAILS_DATA_FAILURE,
    POST_ITR_NRI_STATUS_DETAILS_DATA_SUCCESS,
} from '../../actions/itr/types';

export interface ItrState {
    error: string | null;
    blockNormal: boolean | null;
    isItrExist: boolean | null;
    isConsultancyExist: boolean | null;
    isNoticeExist: boolean | null;
    isCompanyExist: boolean | null;
    isCompanyExpired: boolean | null;
    startUpShow: boolean | null;
    investmentsShow: boolean | null;
    taxReductionShow: boolean | null;
    earlyBirdApply: boolean | null;
    earlyBirdPostMessage: string | null;
    earlyBirdPreMessage: string | null;
    earlyBirdPreMessageTwo: string | null;
    earlyBirdFinalExpire: string | null;
    data: boolean | null;
    itrData: object | null;
    stopAllItr: boolean | null;
    stopTabs: object | null;
    itrNriData: object | null;
    itrExpressData: object | null;
    userMemberExist: boolean | null;
    currentYear: object | null;
    lastYears: [];
    plansData: object | null | undefined;
    allItrData: object | null | undefined;
}

const initialState: ItrState = {
    error: null,
    blockNormal: null,
    isItrExist: null,
    isConsultancyExist: null,
    isNoticeExist: null,
    isCompanyExist: null,
    isCompanyExpired: null,
    startUpShow: null,
    investmentsShow: null,
    taxReductionShow: null,
    earlyBirdApply: null,
    earlyBirdPostMessage: null,
    earlyBirdPreMessage: null,
    earlyBirdPreMessageTwo: null,
    earlyBirdFinalExpire: null,
    data: null,
    itrData: {},
    stopAllItr: null,
    stopTabs: {},
    itrNriData: {},
    itrExpressData: {},
    userMemberExist: null,
    currentYear: {},
    lastYears: [],
    plansData: {},
    allItrData: {}
};

const itrReducer = (state = initialState, action: ItrActionsTypes): ItrState => {
    switch (action.type) {
        case GET_USER_DATA_EXIST_SUCCESS:
            return {
                ...state,
                isItrExist: action.payload.data.isItrExist,
                blockNormal: action.payload.data.blockNormal,
                isConsultancyExist: action.payload.data.isConsultancyExist,
                isNoticeExist: action.payload.data.isNoticeExist,
                isCompanyExist: action.payload.data.company,
                isCompanyExpired: action.payload.data.expired,
                startUpShow: action.payload.data.startUpShow,
                investmentsShow: action.payload.data.investmentsShow,
                taxReductionShow: action.payload.data.taxReductionShow,
                currentYear: action.payload.data.currentYear,
                lastYears: action.payload.data.lastYears,
                earlyBirdApply: action.payload.data.earlyBirdApply,
                earlyBirdPreMessage: action.payload.data.earlyBirdPreMessage,
                earlyBirdPreMessageTwo: action.payload.data.earlyBirdPreMessageTwo,
                earlyBirdPostMessage: action.payload.data.earlyBirdPostMessage,
                earlyBirdFinalExpire: action.payload.data.earlyBirdFinalExpire,
                error: null
            };
        case GET_USER_DATA_EXIST_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case GET_MEMBER_EXIST_SUCCESS:
            return {
                ...state,
                userMemberExist: action.payload.data.userMemberExist,
                error: null
            };
        case GET_MEMBER_EXIST_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case CREATE_ITR_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.data.data,
                error: null
            };
        case CREATE_ITR_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case POST_ITR_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.data.data,
                error: null
            };
        case POST_ITR_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case POST_ITR_NRI_STATUS_DETAILS_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.data.data,
                error: null
            };
        case POST_ITR_NRI_STATUS_DETAILS_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case GET_ITR_DATA_SUCCESS:
            return {
                ...state,
                itrData: action.payload?.data?.itrData,
                stopAllItr: action.payload?.data?.stopAllItr,
                stopTabs: action.payload?.data?.stopTabs,
                error: null,
            };
        case GET_ITR_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case DELETE_ITR_DATA_SUCCESS:
            return {
                ...state,
                error: null,
            };
        case DELETE_ITR_DATA_FAILURE:
            return {
                ...state,
                error: null,
            };
        case ITR_SECTION_SWITCH_SUCCESS:
            return {
                ...state,
                error: null,
            };
        case ITR_SECTION_SWITCH_FAILURE:
            return {
                ...state,
                error: null,
            };
        case ITR_SECTION_SWITCH_ON_OFF_SUCCESS:
            return {
                ...state,
                error: null,
            };
        case ITR_SECTION_SWITCH_ON_OFF_FAILURE:
            return {
                ...state,
                error: null,
            };
        case POST_ITR_NRI_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.data.data,
                error: null
            };
        case POST_ITR_NRI_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case GET_ITR_NRI_DATA_SUCCESS:
            return {
                ...state,
                itrNriData: action.payload?.data?.nriData,
                stopAllItr: action.payload?.data?.stopAllItr,
                error: null,
            };
        case GET_ITR_NRI_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case DELETE_ITR_NRI_DATA_SUCCESS:
            return {
                ...state,
                error: null,
            };
        case DELETE_ITR_NRI_DATA_FAILURE:
            return {
                ...state,
                error: null,
            };
        case POST_ITR_EXPRESS_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.data.data,
                error: null
            };
        case POST_ITR_EXPRESS_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case GET_ITR_EXPRESS_DATA_SUCCESS:
            return {
                ...state,
                itrExpressData: action.payload?.data?.expressData,
                stopAllItr: action.payload?.data?.stopAllItr,
                error: null,
            };
        case GET_ITR_EXPRESS_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case DELETE_ITR_EXPRESS_DATA_SUCCESS:
            return {
                ...state,
                error: null,
            };
        case DELETE_ITR_EXPRESS_DATA_FAILURE:
            return {
                ...state,
                error: null,
            };
        case GET_ITR_PLANS_SUCCESS:
            return {
                ...state,
                plansData: action.payload.data
            };
        case GET_ITR_PLANS_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case GET_ALL_ITR_SUCCESS:
            return {
                ...state,
                allItrData: action.payload.data
            };
        case GET_ALL_ITR_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        default:
            return state;
    }
};

export default itrReducer;
