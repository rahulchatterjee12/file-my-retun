// For member profile
export const GET_MEMBERS_PROFILE_SUCCESS = 'GET_MEMBERS_PROFILE_SUCCESS';
export const GET_MEMBERS_PROFILE_FAILURE = 'GET_MEMBERS_PROFILE_FAILURE';
export const GET_MEMBER_PROFILE_SUCCESS = 'GET_MEMBER_PROFILE_SUCCESS';
export const GET_MEMBER_PROFILE_FAILURE = 'GET_MEMBER_PROFILE_FAILURE';

//to update nri status
export const UPDATE_NRI_STATUS_SUCCESS = 'UPDATE_NRI_STATUS_SUCCESS';
export const UPDATE_NRI_STATUS_FAILURE = 'UPDATE_NRI_STATUS_FAILURE';

export const MEMBER_PROFILE_SUCCESS = 'MEMBER_PROFILE_SUCCESS';
export const MEMBER_PROFILE_CLEAR = 'MEMBER_PROFILE_CLEAR';
export const MEMBER_PROFILE_FAILURE = 'MEMBER_PROFILE_FAILURE';

export const UPDATE_MEMBER_BANK_SUCCESS = 'UPDATE_MEMBER_BANK_SUCCESS';
export const UPDATE_MEMBER_BANK_FAILURE = 'UPDATE_MEMBER_BANK_FAILURE';

export const DELETE_MEMBER_BANK_SUCCESS = 'DELETE_MEMBER_BANK_SUCCESS';
export const DELETE_MEMBER_BANK_FAILURE = 'DELETE_MEMBER_BANK_FAILURE';


// for member profile
export interface MemberDataList { // Updated the name here
    _id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
}

export interface BankData {
    _id: string;
    memberId: string;
    bankName: string;
    accountNumber: string;
    ifscCode: string;
    status: string;
    created_date: Date;
    updated_date: Date;
}

export interface MemberData {
    _id: string;
    user_id: string;
    userStatus: string;
    firstName: string;
    middleName: string;
    lastName: string;
    panNumber: string;
    fatherName: string;
    email: string;
    dob: Date;
    houseNumber: string;
    laneRoadNo: string;
    locality: string;
    city: string;
    state: string;
    country: string;
    pinCode: number;
    mobileNumber: number;
    idType: string;
    aadhaarNumber: number;
    passportNumber: string;
    created_date: Date;
    updated_date: Date;
    status: string,
    excel: string;
    banks: BankData[];
}

// member profile
interface GetMembersProfileSuccessAction {
    type: typeof GET_MEMBERS_PROFILE_SUCCESS;
    payload: {
        memberDataList: MemberDataList[];
    };
}

interface GetMembersProfileFailureAction {
    type: typeof GET_MEMBERS_PROFILE_FAILURE;
    payload: { error: string };
}

interface GetMemberProfileSuccessAction {
    type: typeof GET_MEMBER_PROFILE_SUCCESS;
    payload: {
        memberData: MemberData;
    };
}

interface GetMemberProfileFailureAction {
    type: typeof GET_MEMBER_PROFILE_FAILURE;
    payload: { error: string };
}

interface UpdateNriStatusSuccessAction {
    type: typeof UPDATE_NRI_STATUS_SUCCESS;
    payload: { nriStatus: boolean };
}

interface UpdateNriStatusFailureAction {
    type: typeof UPDATE_NRI_STATUS_FAILURE;
    payload: { error: string };
}

interface MemberProfileSuccessAction {
    type: typeof MEMBER_PROFILE_SUCCESS;
    payload: { data: any };
}

interface MemberProfileClearAction {
    type: typeof MEMBER_PROFILE_CLEAR;
    payload: { data: any };
}

interface MemberProfileFailureAction {
    type: typeof MEMBER_PROFILE_FAILURE;
    payload: { error: string };
}

interface UpdateMemberBankSuccessAction {
    type: typeof UPDATE_MEMBER_BANK_SUCCESS;
    payload: { data: any };
}

interface UpdateMemberBankFailureAction {
    type: typeof UPDATE_MEMBER_BANK_FAILURE;
    payload: { error: string };
}

interface DeleteMemberBankSuccessAction {
    type: typeof DELETE_MEMBER_BANK_SUCCESS;
    payload: { data: any };
}

interface DeleteMemberBankFailureAction {
    type: typeof DELETE_MEMBER_BANK_FAILURE;
    payload: { error: string };
}


export type MemberActionTypes =
    // For member profile
    | GetMembersProfileSuccessAction
    | GetMembersProfileFailureAction
    | GetMemberProfileSuccessAction
    | GetMemberProfileFailureAction
    //for update nri status
    | UpdateNriStatusSuccessAction
    | UpdateNriStatusFailureAction
    // Create Member Profile
    | MemberProfileSuccessAction
    | MemberProfileClearAction
    | MemberProfileFailureAction
    // Create Member Profile
    | UpdateMemberBankSuccessAction
    | UpdateMemberBankFailureAction
    // delete member bank account
    | DeleteMemberBankSuccessAction
    | DeleteMemberBankFailureAction
