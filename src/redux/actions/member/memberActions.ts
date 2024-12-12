import { Dispatch } from 'redux';
import {
    GET_MEMBERS_PROFILE_FAILURE,
    GET_MEMBERS_PROFILE_SUCCESS,
    GET_MEMBER_PROFILE_SUCCESS,
    GET_MEMBER_PROFILE_FAILURE,
    MEMBER_PROFILE_SUCCESS,
    MEMBER_PROFILE_FAILURE,
    UPDATE_MEMBER_BANK_SUCCESS,
    UPDATE_MEMBER_BANK_FAILURE,
    DELETE_MEMBER_BANK_FAILURE,
    DELETE_MEMBER_BANK_SUCCESS,
    MEMBER_PROFILE_CLEAR,
} from '@/redux/actions/member/types';
import {
    getAllMembersProfilesApi,
    getMemberProfilesApi,
    memberProfileApi,
    updateMemberBankAccount,
    deleteMemberBankAccount,
} from '@/api';


// Action creator to get profile info
export const getMembersProfile = (yearId: string, limit: number, page: number) => async (dispatch: Dispatch) => {
    try {
        const profiles = await getAllMembersProfilesApi(yearId, limit, page);
        dispatch({type: GET_MEMBERS_PROFILE_SUCCESS, payload: {memberDataList: profiles.data}});
    } catch (error: any) {
        console.error('Error while fetching member profiles:', error);
        dispatch({type: GET_MEMBERS_PROFILE_FAILURE, payload: {error: error.message}});
    }
}

export const getMemberProfile = (memberId: string) => async (dispatch: Dispatch) => {
    try {
        const res = await getMemberProfilesApi(memberId);
        dispatch({type: GET_MEMBER_PROFILE_SUCCESS, payload: {memberData: res?.memberProfile}});
    } catch (error: any) {
        console.error('Error while fetching member profiles:', error);
        dispatch({type: GET_MEMBER_PROFILE_FAILURE, payload: {error: error.message}});
    }
}

export const memberProfile = (step: number, memberId: string | null, formData: any) => async (dispatch: Dispatch) => {
    try {
        console.log('memberId', memberId);
        const response = await memberProfileApi(step, memberId, formData);
        dispatch({type: MEMBER_PROFILE_SUCCESS, payload: response});
        return true;
    } catch (error: any) {
        console.error('Error while updating member profile:', error);
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        dispatch({type: MEMBER_PROFILE_FAILURE, payload: {error: errorMessage}});
        return false;
    }
};

export const memberProfileClear = () => async (dispatch: Dispatch) => {
    dispatch({type: MEMBER_PROFILE_CLEAR, payload: {}});
};

export const updateMemberBank = (memberId: string | null, banks: any) => async (dispatch: Dispatch) => {
    try {
        const response = await updateMemberBankAccount(memberId, banks);
        dispatch({type: UPDATE_MEMBER_BANK_SUCCESS, payload: response});
        return true;
    } catch (error: any) {
        console.error('Error while updating bank details:', error);
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        dispatch({type: UPDATE_MEMBER_BANK_FAILURE, payload: {error: errorMessage}});
        return false;
    }
};

export const deleteMemberBank = (id: string) => async (dispatch: Dispatch) => {
    try {
        const response = await deleteMemberBankAccount(id);
        dispatch({type: DELETE_MEMBER_BANK_SUCCESS, payload: response});
        return true;
    } catch (error: any) {
        console.error('Error while deleting bank details:', error);
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        dispatch({type: DELETE_MEMBER_BANK_FAILURE, payload: {error: errorMessage}});
        return false;
    }
}
