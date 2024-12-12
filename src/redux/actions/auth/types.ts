//for login page
export const UPDATE_PROFILE_INFO = 'UPDATE_PROFILE_INFO';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const RESET_ERROR_AUTH = 'RESET_ERROR_AUTH';
export const GET_COMPANY_DETAILS_SUCCESS = 'GET_COMPANY_DETAILS_SUCCESS';
export const GET_COMPANY_DETAILS_FAILURE = 'GET_COMPANY_DETAILS_FAILURE';

//for forget page
export const FORGET_PASSWORD_SUCCESS = 'FORGET_PASSWORD_SUCCESS';
export const FORGET_PASSWORD_FAILURE = 'FORGET_PASSWORD_FAILURE';
export const FORGET_PASSWORD_STEP = 'FORGET_PASSWORD_STEP';
export const RECOVER_ACCOUNT_SUCCESS = 'RECOVER_ACCOUNT_SUCCESS';
export const RECOVER_ACCOUNT_FAILURE = 'RECOVER_ACCOUNT_FAILURE';
export const RECOVER_ACCOUNT_STEP_UPDATE = 'RECOVER_ACCOUNT_STEP_UPDATE';

//for change password and email
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE';
export const CHANGE_EMAIL_SUCCESS = 'CHANGE_EMAIL_SUCCESS';
export const CHANGE_EMAIL_FAILURE = 'CHANGE_EMAIL_FAILURE';

//to update nri status
export const UPDATE_NRI_STATUS_SUCCESS = 'UPDATE_NRI_STATUS_SUCCESS';
export const UPDATE_NRI_STATUS_FAILURE = 'UPDATE_NRI_STATUS_FAILURE';

export const GET_LOG_OUT_SUCCESS = 'GET_LOG_OUT_SUCCESS';
export const GET_LOG_OUT_FAILURE = 'GET_LOG_OUT_FAILURE';

interface GetLogoutSuccessAction {
    type: typeof GET_LOG_OUT_SUCCESS;
    payload: {
        data: any
    };
}

interface GetLogoutFailureAction {
    type: typeof GET_LOG_OUT_FAILURE;
    payload: { error: string };
}

//login page
interface User {
    // Define the properties of the User [type]
    // For example:
    id: number;
    name: string;
    email: string;
    // Add tds properties as needed
}

interface UpdateProfileInfoAction {
    type: typeof UPDATE_PROFILE_INFO;
    payload: {
        user: User
    };
}

interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: {
        login: boolean | null;
    };
}

interface LoginFailureAction {
    type: typeof LOGIN_FAILURE;
    payload: { error: string };
}

interface ResetErrorAuthAction {
    type: typeof RESET_ERROR_AUTH;
    payload: { error: string };
}

interface RegisterSuccessAction {
    type: typeof REGISTER_SUCCESS;
    payload: {
        login: boolean | null;
    };
}

interface RegisterFailureAction {
    type: typeof REGISTER_FAILURE;
    payload: { error: string };
}


//forget page
interface ForgetPasswordSuccessAction {
    type: typeof FORGET_PASSWORD_SUCCESS;
    payload: { message: string; account_id: string };
}

interface ForgetPasswordFailureAction {
    type: typeof FORGET_PASSWORD_FAILURE;
    payload: { error: string };
}

interface ForgetPasswordStepAction {
    type: typeof FORGET_PASSWORD_STEP;
    payload: { step: number };
}

interface RecoverAccountStepAction {
    type: typeof RECOVER_ACCOUNT_STEP_UPDATE;
    payload: { step: number };
}

interface RecoverAccountSuccessAction {
    type: typeof RECOVER_ACCOUNT_SUCCESS;
    payload: { userData: any[] };
}

interface RecoverAccountFailureAction {
    type: typeof RECOVER_ACCOUNT_FAILURE;
    payload: { error: string };
}

//change password and email
interface ChangePasswordSuccessAction {
    type: typeof CHANGE_PASSWORD_SUCCESS;
    payload: { success: boolean };
}

interface ChangePasswordFailureAction {
    type: typeof CHANGE_PASSWORD_FAILURE;
    payload: { error: string };
}

interface ChangeEmailSuccessAction {
    type: typeof CHANGE_EMAIL_SUCCESS;
    payload: { success: boolean };
}

interface ChangeEmailFailureAction {
    type: typeof CHANGE_EMAIL_FAILURE;
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

interface CompanySuccessAction {
    type: typeof GET_COMPANY_DETAILS_SUCCESS;
    payload: {
        data: object | null;
    };
}

interface CompanyFailureAction {
    type: typeof GET_COMPANY_DETAILS_FAILURE;
    payload: { error: string };
}

export type AuthActionTypes =
    | UpdateProfileInfoAction
    | LoginSuccessAction
    | LoginFailureAction
    | RegisterSuccessAction
    | RegisterFailureAction
    | ResetErrorAuthAction
    | CompanySuccessAction
    | CompanyFailureAction
    | GetLogoutSuccessAction
    | GetLogoutFailureAction
    //for forget page
    | ForgetPasswordSuccessAction
    | ForgetPasswordStepAction
    | ForgetPasswordFailureAction
    | RecoverAccountSuccessAction
    | RecoverAccountFailureAction
    | RecoverAccountStepAction
    //for change password and email
    | ChangePasswordSuccessAction
    | ChangePasswordFailureAction
    | ChangeEmailSuccessAction
    | ChangeEmailFailureAction
    //nri status update
    | UpdateNriStatusSuccessAction
    | UpdateNriStatusFailureAction
