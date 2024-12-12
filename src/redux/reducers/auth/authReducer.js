import {
  CHANGE_EMAIL_FAILURE,
  CHANGE_EMAIL_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_SUCCESS,
  FORGET_PASSWORD_FAILURE,
  FORGET_PASSWORD_STEP,
  FORGET_PASSWORD_SUCCESS,
  GET_COMPANY_DETAILS_FAILURE,
  GET_COMPANY_DETAILS_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  RECOVER_ACCOUNT_FAILURE,
  RECOVER_ACCOUNT_STEP_UPDATE,
  RECOVER_ACCOUNT_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  RESET_ERROR_AUTH,
  UPDATE_NRI_STATUS_FAILURE,
  UPDATE_NRI_STATUS_SUCCESS,
  UPDATE_PROFILE_INFO,
  GET_LOG_OUT_SUCCESS,
  GET_LOG_OUT_FAILURE,
} from "@/redux/actions/auth/types";

const initialState = {
  error: null,
  user: {},
  companyDetails: {},
  login: null,
  message: null,
  account_id: null,
  recoverStep: 1,
  forgetStep: 1,
  userData: null,
  passwordChanged: null,
  passwordError: null,
  emailChanged: null,
  emailError: null,
  nriUpdate: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_INFO:
      return {
        ...state,
        user: action.payload.user,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: action.payload.login,
        error: null,
      };
    case GET_LOG_OUT_SUCCESS:
      return {
        ...state,
        login: false,
        user: {},
      };
    case RESET_ERROR_AUTH:
      return {
        ...state,
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        login: action.payload.login,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case GET_COMPANY_DETAILS_SUCCESS:
      return {
        ...state,
        companyDetails: action.payload.data,
        error: null,
      };
    case GET_COMPANY_DETAILS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        account_id: action.payload.account_id,
        error: null,
      };
    case FORGET_PASSWORD_STEP:
      return {
        ...state,
        forgetStep: action.payload.step,
      };
    case FORGET_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case RECOVER_ACCOUNT_SUCCESS:
      return {
        ...state,
        userData: action.payload.userData,
        recoverStep: 2,
        error: null,
      };
    case RECOVER_ACCOUNT_STEP_UPDATE:
      return {
        ...state,
        recoverStep: action.payload.step,
        error: null,
      };
    case RECOVER_ACCOUNT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        passwordChanged: action.payload.success,
        error: null,
      };
    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        passwordError: action.payload.error,
      };
    case CHANGE_EMAIL_SUCCESS:
      return {
        ...state,
        emailChanged: action.payload.success,
        error: null,
      };
    case CHANGE_EMAIL_FAILURE:
      console.log("error1", action.payload.error);
      return {
        ...state,
        emailError: action.payload.error,
      };
    case UPDATE_NRI_STATUS_SUCCESS:
      return {
        ...state,
        nriUpdate: true,
      };
    case UPDATE_NRI_STATUS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default authReducer;
