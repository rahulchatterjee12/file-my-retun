import { Dispatch } from "redux";
import {
  UPDATE_PROFILE_INFO,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_FAILURE,
  FORGET_PASSWORD_STEP,
  RECOVER_ACCOUNT_SUCCESS,
  RECOVER_ACCOUNT_FAILURE,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_EMAIL_SUCCESS,
  CHANGE_EMAIL_FAILURE,
  UPDATE_NRI_STATUS_SUCCESS,
  UPDATE_NRI_STATUS_FAILURE,
  RECOVER_ACCOUNT_STEP_UPDATE,
  RESET_ERROR_AUTH,
  GET_COMPANY_DETAILS_SUCCESS,
  GET_COMPANY_DETAILS_FAILURE,
  GET_LOG_OUT_SUCCESS,
  GET_LOG_OUT_FAILURE,
} from "@/redux/actions/auth/types";
import {
  loginUserApi,
  registerUserApi,
  getProfileInfoApi,
  forgetPasswordApi,
  recoverAccountApi,
  changePasswordApi,
  changeEmailApi,
  updateNriStatusApi,
  getCompanyDetails,
} from "@/api";

export const loginUser = (id, email, password) => async (dispatch) => {
  try {
    const userData = await loginUserApi(id, email, password);
    const { token, user } = userData;
    sessionStorage.setItem("token", token);
    dispatch({ type: LOGIN_SUCCESS, payload: { login: true } });
    return true;
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : "An error occurred";
    dispatch({ type: LOGIN_FAILURE, payload: { error: errorMessage } });
    return errorMessage;
  }
};

export const registerUser = (submitReg) => async (dispatch) => {
  try {
    const userData = await registerUserApi(submitReg);
    const { token, user } = userData;
    sessionStorage.setItem("token", token);
    dispatch({ type: REGISTER_SUCCESS, payload: { login: true } });
    return true;
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : "An error occurred";
    dispatch({ type: REGISTER_FAILURE, payload: { error: errorMessage } });
    return errorMessage;
  }
};

export const errorResetInAuth = (submitReg) => async (dispatch) => {
  dispatch({ type: RESET_ERROR_AUTH, payload: { error: "" } });
};

export const getProfileInfo = () => async (dispatch) => {
  try {
    const profileInfo = await getProfileInfoApi();
    dispatch({ type: UPDATE_PROFILE_INFO, payload: profileInfo });
    return profileInfo;
  } catch (error) {
    console.error("Error while fetching profile info:", error);
    dispatch({ type: LOGIN_SUCCESS, payload: { login: false } });
    dispatch({ type: LOGIN_FAILURE, payload: { error: "Session timeout" } });
    return false;
  }
};

export const updateLoginStatus = (isLoggedIn) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_SUCCESS, payload: { login: isLoggedIn } });
  } catch (error) {
    console.error("Error while updating login status:", error);
  }
};

export const forgetPassword =
  (step, email, _id, otp, password, id) => async (dispatch) => {
    try {
      const response = await forgetPasswordApi(
        step,
        email,
        _id,
        otp,
        password,
        id
      );
      const { message, account_id } = response;
      if (step === 1) {
        dispatch({
          type: FORGET_PASSWORD_SUCCESS,
          payload: { message, account_id },
        });
      } else if (step === 2) {
        dispatch({ type: RECOVER_ACCOUNT_STEP_UPDATE, payload: { step: 5 } });
      } else if (step === 3) {
        const { token, user } = response;
        sessionStorage.setItem("token", token);
        dispatch({ type: REGISTER_SUCCESS, payload: { login: true } });
        return true;
      } else if (step === 4) {
        dispatch({ type: RECOVER_ACCOUNT_STEP_UPDATE, payload: { step: 4 } });
      }
      dispatch({ type: FORGET_PASSWORD_STEP, payload: { step: step + 1 } });
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : "An error occurred";
      dispatch({
        type: FORGET_PASSWORD_FAILURE,
        payload: { error: errorMessage },
      });
    }
  };

export const forgetPasswordStepUpdate = (step) => async (dispatch) => {
  try {
    dispatch({ type: FORGET_PASSWORD_STEP, payload: { step } });
  } catch (error) {
    console.log("error in updating step");
  }
};

export const recoverAccount = (panNumber) => async (dispatch) => {
  try {
    const response = await recoverAccountApi(panNumber);
    const { userData } = response;
    dispatch({ type: RECOVER_ACCOUNT_SUCCESS, payload: { userData } });
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : "An error occurred";
    dispatch({
      type: RECOVER_ACCOUNT_FAILURE,
      payload: { error: errorMessage },
    });
  }
};

export const changePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      const response = await changePasswordApi(oldPassword, newPassword);
      dispatch({ type: CHANGE_PASSWORD_SUCCESS, payload: response });
      sessionStorage.removeItem("token");
      dispatch({ type: LOGIN_SUCCESS, payload: { login: false } });
      dispatch({
        type: LOGIN_FAILURE,
        payload: { error: "Session timeout password changed" },
      });
      return { rsp: true, data: response };
    } catch (error) {
      console.error("Error while changing password:", error);
      const errorMessage = error.response
        ? error.response.data.message
        : "An error occurred";
      dispatch({
        type: CHANGE_PASSWORD_FAILURE,
        payload: { error: errorMessage },
      });
      return { rsp: false, errorMessage };
    }
  };

export const changeEmail = (password, newEmail) => async (dispatch) => {
  try {
    const response = await changeEmailApi(password, newEmail);
    dispatch({ type: CHANGE_EMAIL_SUCCESS, payload: response });
    sessionStorage.removeItem("token");
    dispatch({ type: LOGIN_SUCCESS, payload: { login: false } });
    dispatch({
      type: LOGIN_FAILURE,
      payload: { error: "Session timeout email changed" },
    });
    return { rsp: true, data: response };
  } catch (error) {
    console.error("Error while changing email:", error);
    const errorMessage = error.response
      ? error.response.data.message
      : "An error occurred";
    dispatch({ type: CHANGE_EMAIL_FAILURE, payload: { error: errorMessage } });
    return { rsp: false, errorMessage };
  }
};

export const updateNRIStatus = (newStatus) => async (dispatch) => {
  try {
    const response = await updateNriStatusApi(newStatus);
    dispatch({ type: UPDATE_NRI_STATUS_SUCCESS, payload: { data: response } });
    return true;
  } catch (error) {
    console.error("Error while updating NRI status:", error);
    const errorMessage = error.response
      ? error.response.data.message
      : "An error occurred";
    dispatch({
      type: UPDATE_NRI_STATUS_FAILURE,
      payload: { error: errorMessage },
    });
    return false;
  }
};

export const getCompanyDetailData = (companyId) => async (dispatch) => {
  try {
    const response = await getCompanyDetails(companyId);
    dispatch({
      type: GET_COMPANY_DETAILS_SUCCESS,
      payload: { data: response },
    });
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : "An error occurred";
    dispatch({
      type: GET_COMPANY_DETAILS_FAILURE,
      payload: { error: errorMessage },
    });
  }
};

export const getLogout = () => async (dispatch) => {
  try {
    const token = sessionStorage.getItem("token");
    if (token) {
      sessionStorage.removeItem("token");
    }
    dispatch({ type: GET_LOG_OUT_SUCCESS });
    return true;
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : "An error occurred";
    dispatch({ type: GET_LOG_OUT_FAILURE, payload: { error: errorMessage } });
    return false;
  }
};
