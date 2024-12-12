import {Dispatch} from "redux";
import {
    DELETE_NOTICE_FILE_DATA_FAILURE,
    DELETE_NOTICE_FILE_DATA_SUCCESS,
    GET_CONSULTANCY_DATA_FAILURE,
    GET_CONSULTANCY_DATA_SUCCESS,
    GET_NOTICE_DATA_FAILURE,
    GET_NOTICE_DATA_SUCCESS,
    GET_NOTICE_FILE_DATA_FAILURE,
    GET_NOTICE_FILE_DATA_SUCCESS, GET_NOTICE_ID_DATA_FAILURE, GET_NOTICE_ID_DATA_SUCCESS,
    GET_OTHER_DATA_FAILURE,
    GET_OTHER_DATA_SUCCESS,
    POST_CONSULTANCY_DATA_FAILURE,
    POST_CONSULTANCY_DATA_SUCCESS,
    POST_NOTICE_DATA_FAILURE,
    POST_NOTICE_DATA_SUCCESS,
    POST_NOTICE_FILE_DATA_FAILURE,
    POST_NOTICE_FILE_DATA_SUCCESS,
    POST_OTHER_DATA_FAILURE,
    POST_OTHER_DATA_SUCCESS, POST_WITHOUT_LOGIN_OTHER_DATA_FAILURE, POST_WITHOUT_LOGIN_OTHER_DATA_SUCCESS
} from "@/redux/actions/other/types";
import {
    deleteNoticeFile,
    getNotice, getNoticeFile, getNoticeId,
    getOtherDATA,
    getTextConsultancy,
    postNotice,
    postNoticeFile,
    postOtherDATA, postOtherWithOutLoginDATA,
    postTextConsultancy
} from "@/api/other";
import {convertMultipartFormData} from "@/helper/form";

export const postOtherData = (mainType: any, type: string, formData: any) => async (dispatch: Dispatch) => {
    try {
        const data = await postOtherDATA(mainType, type, formData);
        dispatch({type: POST_OTHER_DATA_SUCCESS, payload: {data}});
        return true;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: POST_OTHER_DATA_FAILURE, payload: {error: errorMessage}});
        return false;
    }
};

export const postOtherWithoutLoginData = (mainType: any, type: string, formData: any) => async (dispatch: Dispatch) => {
    try {
        const data = await postOtherWithOutLoginDATA(mainType, type, formData);
        dispatch({type: POST_WITHOUT_LOGIN_OTHER_DATA_SUCCESS, payload: {data}});
        return true;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: POST_WITHOUT_LOGIN_OTHER_DATA_FAILURE, payload: {error: errorMessage}});
        return false;
    }
};


export const getOtherData = (pageType: string) => async (dispatch: Dispatch) => {
    try {
        const data = await getOtherDATA(pageType);
        console.log('data', data);
        dispatch({type: GET_OTHER_DATA_SUCCESS, payload: {data}});
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: GET_OTHER_DATA_FAILURE, payload: {error: errorMessage}});

    }
};

export const postConstancyData = (formData: any) => async (dispatch: Dispatch) => {
    try {
        const mFormData = convertMultipartFormData(formData);
        const data = await postTextConsultancy(mFormData);
        dispatch({type: POST_CONSULTANCY_DATA_SUCCESS, payload: {data}});
        return data;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: POST_CONSULTANCY_DATA_FAILURE, payload: {error: errorMessage}});
        return false;
    }
};


export const getConsultancyData = (pageType: string) => async (dispatch: Dispatch) => {
    try {
        const data = await getTextConsultancy(pageType);
        console.log('data', data);
        dispatch({type: GET_CONSULTANCY_DATA_SUCCESS, payload: {data}});
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: GET_CONSULTANCY_DATA_FAILURE, payload: {error: errorMessage}});

    }
};
export const postNoticeData = (formData: any) => async (dispatch: Dispatch) => {
    try {
        const data = await postNotice(formData);
        dispatch({type: POST_NOTICE_DATA_SUCCESS, payload: {data}});
        return data;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: POST_NOTICE_DATA_FAILURE, payload: {error: errorMessage}});
        return false;
    }
};


export const getNoticeData = (pageType: string) => async (dispatch: Dispatch) => {
    try {
        const data = await getNotice(pageType);
        console.log('data', data);
        dispatch({type: GET_NOTICE_DATA_SUCCESS, payload: {data}});
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: GET_NOTICE_DATA_FAILURE, payload: {error: errorMessage}});

    }
};

export const getNoticeIdData = (id: string) => async (dispatch: Dispatch) => {
    try {
        const data = await getNoticeId(id);
        console.log('data noticeData', data);
        dispatch({type: GET_NOTICE_ID_DATA_SUCCESS, payload: {data}});
        return true;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: GET_NOTICE_ID_DATA_FAILURE, payload: {error: errorMessage}});
        return false;
    }
};

export const postNoticeFileData = (noticeId: string, formData: any) => async (dispatch: Dispatch) => {
    try {
        const fData = {noticeId, ...formData};
        const mFormData = convertMultipartFormData(fData);
        const data = await postNoticeFile(mFormData);
        dispatch({type: POST_NOTICE_FILE_DATA_SUCCESS, payload: {data}});
        return true;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: POST_NOTICE_FILE_DATA_FAILURE, payload: {error: errorMessage}});
        return false;
    }
};


export const getNoticeFileData = (noticeId: string) => async (dispatch: Dispatch) => {
    try {
        const data = await getNoticeFile(noticeId);
        console.log('data', data);
        dispatch({type: GET_NOTICE_FILE_DATA_SUCCESS, payload: {data}});
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: GET_NOTICE_FILE_DATA_FAILURE, payload: {error: errorMessage}});

    }
};

export const deleteNoticeFileData = (id: string) => async (dispatch: Dispatch) => {
    try {
        const data = await deleteNoticeFile(id);
        console.log('data', data);
        dispatch({type: DELETE_NOTICE_FILE_DATA_SUCCESS, payload: {data}});
        return true;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: DELETE_NOTICE_FILE_DATA_FAILURE, payload: {error: errorMessage}});
        return false;
    }
};
