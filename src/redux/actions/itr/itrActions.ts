import {Dispatch} from 'redux';
import {
    GET_USER_DATA_EXIST_SUCCESS,
    GET_USER_DATA_EXIST_FAILURE,
    GET_MEMBER_EXIST_FAILURE,
    GET_MEMBER_EXIST_SUCCESS,
    POST_ITR_DATA_SUCCESS,
    POST_ITR_DATA_FAILURE,
    GET_ITR_DATA_SUCCESS,
    GET_ITR_DATA_FAILURE,
    DELETE_ITR_DATA_SUCCESS,
    DELETE_ITR_DATA_FAILURE,
    ITR_SECTION_SWITCH_SUCCESS,
    ITR_SECTION_SWITCH_FAILURE,
    GET_ITR_NRI_DATA_SUCCESS,
    GET_ITR_NRI_DATA_FAILURE,
    DELETE_ITR_NRI_DATA_SUCCESS,
    DELETE_ITR_NRI_DATA_FAILURE,
    POST_ITR_NRI_DATA_SUCCESS,
    POST_ITR_NRI_DATA_FAILURE,
    GET_ITR_EXPRESS_DATA_SUCCESS,
    GET_ITR_EXPRESS_DATA_FAILURE,
    DELETE_ITR_EXPRESS_DATA_SUCCESS,
    DELETE_ITR_EXPRESS_DATA_FAILURE,
    POST_ITR_EXPRESS_DATA_SUCCESS,
    POST_ITR_EXPRESS_DATA_FAILURE,
    GET_ITR_PLANS_FAILURE,
    GET_ITR_PLANS_SUCCESS,
    CREATE_ITR_DATA_SUCCESS,
    CREATE_ITR_DATA_FAILURE,
    GET_ALL_ITR_SUCCESS,
    GET_ALL_ITR_FAILURE,
    POST_ITR_NRI_STATUS_DETAILS_DATA_SUCCESS,
    POST_ITR_NRI_STATUS_DETAILS_DATA_FAILURE,
    ITR_SECTION_SWITCH_ON_OFF_SUCCESS, ITR_SECTION_SWITCH_ON_OFF_FAILURE,
} from '@/redux/actions/itr/types';

import {
    getDataExistApi,
    getMemberExist,
    postItrData,
    getItrData,
    deleteItrData,
    itrSectionSwitch,
    getITRExpressData,
    deleteITRExpressData,
    postITRExpressData,
    getITRNriData,
    postITRNriData,
    deleteITRNriData,
    getItrPlans, createItr, getAllItr, postItrNriStatusData, itrSectionOnClickSwitch
} from '@/api';
import {convertMultipartFormData} from "@/helper/form";

export const getDataExist = () => async (dispatch: Dispatch) => {
    try {
        const data = await getDataExistApi();
        console.log('getDataExistApi',data);
        dispatch({type: GET_USER_DATA_EXIST_SUCCESS, payload: {data}});
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: GET_USER_DATA_EXIST_FAILURE, payload: {error: errorMessage}});
    }
};

export const getMEMBERExist = () => async (dispatch: Dispatch) => {
    try {
        const data = await getMemberExist();
        dispatch({type: GET_MEMBER_EXIST_SUCCESS, payload: {data}});
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: GET_MEMBER_EXIST_FAILURE, payload: {error: errorMessage}});
    }
};

export const getITRData = (itrId: string) => async (dispatch: Dispatch) => {
    try {
        const data = await getItrData(itrId);
        console.log('data-itr', data);
        dispatch({type: GET_ITR_DATA_SUCCESS, payload: {data}});
        return true;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: GET_ITR_DATA_FAILURE, payload: {error: errorMessage}});
        return false;
    }
};

export const deleteITRData = (id: string, type: string) => async (dispatch: Dispatch) => {
    try {
        const data = await deleteItrData(id, type);
        console.log('data', data);
        dispatch({type: DELETE_ITR_DATA_SUCCESS, payload: {data}});
        return true;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: DELETE_ITR_DATA_FAILURE, payload: {error: errorMessage}});
        return false;
    }
};


export const createItrId = (memberId : string, type: string, yearId: string) => async (dispatch: Dispatch) => {
    try {
        const data = await createItr(memberId, type, yearId);
        dispatch({type: CREATE_ITR_DATA_SUCCESS, payload: {data}});
        return data;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: CREATE_ITR_DATA_FAILURE, payload: {error: errorMessage}});
        return false;
    }
};

export const postITRData = (itrId: any, type: string, formData: any) => async (dispatch: Dispatch) => {
    try {
        const fData = {itrId, type, ...formData};
        console.log('fData', fData);
        const mFormData = convertMultipartFormData(fData);
        const data = await postItrData(mFormData);
        dispatch({type: POST_ITR_DATA_SUCCESS, payload: {data}});
        return true;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: POST_ITR_DATA_FAILURE, payload: {error: errorMessage}});
    }
};

export const postItrNriStatusDetailsData = (itrId: string, formData: any) => async (dispatch: Dispatch) => {
    try {
        const data = await postItrNriStatusData(itrId, formData);
        dispatch({type: POST_ITR_NRI_STATUS_DETAILS_DATA_SUCCESS, payload: {data}});
        return true;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: POST_ITR_NRI_STATUS_DETAILS_DATA_FAILURE, payload: {error: errorMessage}});
    }
};

export const ItrSectionSwitch = (id: string, type: string, value: any) => async (dispatch: Dispatch) => {
    try {
        const data = await itrSectionSwitch(id, type, value);
        dispatch({type: ITR_SECTION_SWITCH_SUCCESS, payload: {data}});
        return true;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: ITR_SECTION_SWITCH_FAILURE, payload: {error: errorMessage}});
    }
};

export const itrSectionOnOffSwitch = (id: string,) => async (dispatch: Dispatch) => {
    try {
        const data = await itrSectionOnClickSwitch(id);
        dispatch({type: ITR_SECTION_SWITCH_ON_OFF_SUCCESS, payload: {data}});
        return true;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: ITR_SECTION_SWITCH_ON_OFF_FAILURE, payload: {error: errorMessage}});
    }
};

export const getItrNriData = (itrId: string) => async (dispatch: Dispatch) => {
    try {
        const data = await getITRNriData(itrId);
        console.log('data', data);
        dispatch({type: GET_ITR_NRI_DATA_SUCCESS, payload: {data}});
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: GET_ITR_NRI_DATA_FAILURE, payload: {error: errorMessage}});

    }
};

export const deleteItrNriData = (id: string, type: string) => async (dispatch: Dispatch) => {
    try {
        const data = await deleteITRNriData(id, type);
        console.log('data', data);
        dispatch({type: DELETE_ITR_NRI_DATA_SUCCESS, payload: {data}});
        return true;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: DELETE_ITR_NRI_DATA_FAILURE, payload: {error: errorMessage}});
        return false;
    }
};


export const postItrNriData = (itrId: any, type: string, formData: any) => async (dispatch: Dispatch) => {
    try {
        const fData = {itrId, type, ...formData};
        console.log('fData', fData);
        const mFormData = convertMultipartFormData(fData);
        const data = await postITRNriData(mFormData);
        dispatch({type: POST_ITR_NRI_DATA_SUCCESS, payload: {data}});
        return true;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: POST_ITR_NRI_DATA_FAILURE, payload: {error: errorMessage}});
    }
};


export const getItrExpressData = (itrId: string) => async (dispatch: Dispatch) => {
    try {
        const data = await getITRExpressData(itrId);
        console.log('data', data);
        dispatch({type: GET_ITR_EXPRESS_DATA_SUCCESS, payload: {data}});
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: GET_ITR_EXPRESS_DATA_FAILURE, payload: {error: errorMessage}});

    }
};

export const deleteItrExpressData = (id: string, type: string) => async (dispatch: Dispatch) => {
    try {
        const data = await deleteITRExpressData(id, type);
        console.log('data', data);
        dispatch({type: DELETE_ITR_EXPRESS_DATA_SUCCESS, payload: {data}});
        return true;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: DELETE_ITR_EXPRESS_DATA_FAILURE, payload: {error: errorMessage}});
        return false;
    }
};


export const postItrExpressData = (itrId: any, type: string, formData: any) => async (dispatch: Dispatch) => {
    try {
        const fData = {itrId, type, ...formData};
        console.log('fData', fData);
        const mFormData = convertMultipartFormData(fData);
        const data = await postITRExpressData(mFormData);
        dispatch({type: POST_ITR_EXPRESS_DATA_SUCCESS, payload: {data}});
        return true;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: POST_ITR_EXPRESS_DATA_FAILURE, payload: {error: errorMessage}});
    }
};

export const getItrAllPlans = () => async (dispatch: Dispatch) => {
    try {
        const data = await getItrPlans();
        console.log('data', data);
        dispatch({type: GET_ITR_PLANS_SUCCESS, payload: {data}});
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: GET_ITR_PLANS_FAILURE, payload: {error: errorMessage}});
    }
}

export const getAllItrData = (pageType: string) => async (dispatch: Dispatch) => {
    try {
        const data = await getAllItr(pageType);
        console.log('data', data);
        dispatch({type: GET_ALL_ITR_SUCCESS, payload: {data}});
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: GET_ALL_ITR_FAILURE, payload: {error: errorMessage}});
    }
}
