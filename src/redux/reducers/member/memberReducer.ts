import {
    MemberActionTypes,
    DELETE_MEMBER_BANK_FAILURE,
    DELETE_MEMBER_BANK_SUCCESS,
    GET_MEMBER_PROFILE_FAILURE,
    GET_MEMBER_PROFILE_SUCCESS,
    GET_MEMBERS_PROFILE_FAILURE,
    GET_MEMBERS_PROFILE_SUCCESS,
    MEMBER_PROFILE_FAILURE,
    MEMBER_PROFILE_SUCCESS,
    MEMBER_PROFILE_CLEAR,
    UPDATE_MEMBER_BANK_FAILURE,
    UPDATE_MEMBER_BANK_SUCCESS,
} from '../../actions/member/types';

export interface MemberState {
    error: string | null;
    memberFormError: string | null;
    message: string | null;
    memberDataList: any[] | null;
    memberData: object | null;
    memberId: string | null;
}

const initialState: MemberState = {
    error: null,
    memberFormError: null,
    message: null,
    memberDataList: null,
    memberData: {},
    memberId: null,
};


const memberReducer = (state = initialState, action: MemberActionTypes): MemberState => {
    switch (action.type) {
        case GET_MEMBERS_PROFILE_SUCCESS:
            return {
                ...state,
                memberDataList: action.payload.memberDataList,
                error: null,
            };
        case GET_MEMBERS_PROFILE_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            };
        case GET_MEMBER_PROFILE_SUCCESS:
            return {
                ...state,
                memberData: action.payload.memberData,
                error: null,
            };
        case GET_MEMBER_PROFILE_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            };
        case MEMBER_PROFILE_SUCCESS:
            console.log('action', action.payload);
            return {
                ...state,
                memberId: action.payload.data?._id,
                memberFormError: null,
            };
        case MEMBER_PROFILE_CLEAR:
            console.log('action', action.payload);
            return {
                ...state,
                memberData: {},
                memberId: null,
                memberFormError: null,
            };
        case MEMBER_PROFILE_FAILURE:
            return {
                ...state,
                memberFormError: action.payload.error,
            };
        case UPDATE_MEMBER_BANK_SUCCESS:
            return {
                ...state,
                memberFormError: null,
            };
        case UPDATE_MEMBER_BANK_FAILURE:
            return {
                ...state,
                memberFormError: action.payload.error,
            };
        case DELETE_MEMBER_BANK_SUCCESS:
            return {
                ...state,
                memberFormError: null,
            };
        case DELETE_MEMBER_BANK_FAILURE:
            return {
                ...state,
                memberFormError: action.payload.error,
            };
        default:
            return state;
    }
};

export default memberReducer;
