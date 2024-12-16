import {
    DELETE_NOTICE_FILE_DATA_FAILURE,
    DELETE_NOTICE_FILE_DATA_SUCCESS,
    GET_CONSULTANCY_DATA_FAILURE,
    GET_CONSULTANCY_DATA_SUCCESS,
    GET_NOTICE_DATA_FAILURE,
    GET_NOTICE_DATA_SUCCESS,
    GET_NOTICE_FILE_DATA_FAILURE,
    GET_NOTICE_FILE_DATA_SUCCESS,
    GET_NOTICE_ID_DATA_FAILURE,
    GET_NOTICE_ID_DATA_SUCCESS,
    GET_OTHER_DATA_FAILURE,
    GET_OTHER_DATA_SUCCESS,
    OtherActionsTypes,
    POST_CONSULTANCY_DATA_FAILURE,
    POST_CONSULTANCY_DATA_SUCCESS,
    POST_NOTICE_DATA_FAILURE,
    POST_NOTICE_DATA_SUCCESS,
    POST_NOTICE_FILE_DATA_FAILURE,
    POST_NOTICE_FILE_DATA_SUCCESS,
    POST_OTHER_DATA_FAILURE,
    POST_OTHER_DATA_SUCCESS,
    POST_WITHOUT_LOGIN_OTHER_DATA_FAILURE,
    POST_WITHOUT_LOGIN_OTHER_DATA_SUCCESS,
} from "../../actions/other/types";

export interface otherState {
    error: string | null;
    data: boolean | null;
    otherData: object | null;
    consultancyData: object | null;
    noticeData: object | null;
    noticeIdData: any[] | null;
    noticeFileData: object | null;
}

const initialState: otherState = {
    error: null,
    data: null,
    otherData: {},
    consultancyData: {},
    noticeData: {},
    noticeIdData: null,
    noticeFileData: {},
};

const otherReducer = (state = initialState, action: OtherActionsTypes): otherState => {
    switch (action.type) {
        case POST_OTHER_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.data.data,
                error: null
            };
        case POST_OTHER_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case POST_WITHOUT_LOGIN_OTHER_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.data.data,
                error: null
            };
        case POST_WITHOUT_LOGIN_OTHER_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case GET_OTHER_DATA_SUCCESS:
            return {
                ...state,
                otherData: action.payload?.data?.otherData,
                error: null,
            };
        case GET_OTHER_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case POST_CONSULTANCY_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.data.data,
                error: null
            };
        case POST_CONSULTANCY_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case GET_CONSULTANCY_DATA_SUCCESS:
            return {
                ...state,
                consultancyData: action.payload?.data?.consultancyData,
                error: null,
            };
        case GET_CONSULTANCY_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case POST_NOTICE_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.data.data,
                error: null
            };
        case POST_NOTICE_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case GET_NOTICE_DATA_SUCCESS:
            return {
                ...state,
                noticeData: action.payload?.data?.noticeData,
                error: null,
            };
        case GET_NOTICE_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case GET_NOTICE_ID_DATA_SUCCESS:
            return {
                ...state,
                noticeIdData: action.payload?.data?.noticeData,
                error: null,
            };
        case GET_NOTICE_ID_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case POST_NOTICE_FILE_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.data.data,
                error: null
            };
        case POST_NOTICE_FILE_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case GET_NOTICE_FILE_DATA_SUCCESS:
            return {
                ...state,
                noticeFileData: action.payload?.data?.noticeFileData,
                error: null,
            };
        case GET_NOTICE_FILE_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case DELETE_NOTICE_FILE_DATA_SUCCESS:
            return {
                ...state,
                error: null,
            };
        case DELETE_NOTICE_FILE_DATA_FAILURE:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export default otherReducer;
