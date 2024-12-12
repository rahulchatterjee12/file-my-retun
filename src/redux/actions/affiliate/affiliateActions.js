const { getAffiliateData, getAllFyYear, getCompanyId } = require("@/api");
const {
  GET_AFFILIATE_DATA_FAILURE,
  GET_AFFILIATE_DATA_SUCCESS,
  GET_ALL_FY_YEAR_FAILURE,
  GET_ALL_FY_YEAR_SUCCESS,
  GET_COMPANY_CODE_FAILURE,
  GET_COMPANY_CODE_SUCCESS,
} = require("@/redux/actions/affiliate/types");

const getCompanyCode = () => async (dispatch) => {
  try {
    const data = await getCompanyId();
    dispatch({ type: GET_COMPANY_CODE_SUCCESS, payload: { data } });
    return data;
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : "An error occurred";
    dispatch({
      type: GET_COMPANY_CODE_FAILURE,
      payload: { error: errorMessage },
    });
  }
};

const getCompanyAffiliateData = (type) => async (dispatch) => {
  try {
    const data = await getAffiliateData(type);
    dispatch({ type: GET_AFFILIATE_DATA_SUCCESS, payload: { data } });
    return data;
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : "An error occurred";
    dispatch({
      type: GET_AFFILIATE_DATA_FAILURE,
      payload: { error: errorMessage },
    });
  }
};

const getAllYears = () => async (dispatch) => {
  try {
    const data = await getAllFyYear();
    dispatch({ type: GET_ALL_FY_YEAR_SUCCESS, payload: { data } });
    return data;
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : "An error occurred";
    dispatch({
      type: GET_ALL_FY_YEAR_FAILURE,
      payload: { error: errorMessage },
    });
  }
};

module.exports = { getCompanyCode, getCompanyAffiliateData, getAllYears };
