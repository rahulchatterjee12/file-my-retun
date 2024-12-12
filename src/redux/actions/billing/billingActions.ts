import {Dispatch} from 'redux';
import {
    FETCH_INVOICES_SUCCESS,
    FETCH_INVOICES_FAILURE,
    FETCH_INVOICE_SUCCESS,
    FETCH_INVOICE_FAILURE,
    POST_BILLING_DATA_SUCCESS,
    POST_BILLING_DATA_FAILURE,
    GET_BILLING_RAZORPAY_ID_SUCCESS,
    GET_BILLING_RAZORPAY_ID_FAILURE,
    GET_BILLING_RAZORPAY_STATUS_SUCCESS,
    GET_BILLING_RAZORPAY_STATUS_FAILURE,
    GET_BILLING_DATA_WITH_SUCCESS, GET_BILLING_DATA_WITH_FAILURE,
} from '@/redux/actions/billing/types';
import {
    getInvoiceDetail,
    allUserInvoice,
    postBillingDATA,
    getBillingRazorpay, getBillingSuccess, postBillingWithCouponDATA
} from '@/api';

export const getAllUserInvoice = (limit: string, page: string) => async (dispatch: Dispatch) => {
    try {
        const data = await allUserInvoice(limit, page);
        dispatch({type: FETCH_INVOICES_SUCCESS, payload: {data: data}});
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: FETCH_INVOICES_FAILURE, payload: {error: errorMessage}});
    }
};

export const getUserInvoiceDetail = (invoiceId: string) => async (dispatch: Dispatch) => {
    try {
        const data = await getInvoiceDetail(invoiceId);
        dispatch({type: FETCH_INVOICE_SUCCESS, payload: {data: data}});
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: FETCH_INVOICE_FAILURE, payload: {error: errorMessage}});
    }
};

export const postBillingData = (typeId: string, type: string) => async (dispatch: Dispatch) => {
    try {
        const data = await postBillingDATA(typeId, type);
        dispatch({type: POST_BILLING_DATA_SUCCESS, payload: {data}});
        return data;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: POST_BILLING_DATA_FAILURE, payload: {error: errorMessage}});
        return false;
    }
};

export const getBillingDataWithCoupon = (billingId: string, coupon: string) => async (dispatch: Dispatch) => {
    try {
        const data = await postBillingWithCouponDATA(billingId, coupon);
        console.log('data', data);
        dispatch({type: GET_BILLING_DATA_WITH_SUCCESS, payload: {data}});
        return {resp: true, errorMessage: null};
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: GET_BILLING_DATA_WITH_FAILURE, payload: {error: errorMessage}});
        return {resp: false, errorMessage};
    }
};

export const getBillingId = (billingId: string) => async (dispatch: Dispatch) => {
    try {
        const data = await getBillingRazorpay(billingId);
        console.log('data', data);
        dispatch({type: GET_BILLING_RAZORPAY_ID_SUCCESS, payload: {data}});
        return data;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: GET_BILLING_RAZORPAY_ID_FAILURE, payload: {error: errorMessage}});

    }
};

export const getBillingStatus = (payId: string, type: string) => async (dispatch: Dispatch) => {
    try {
        const data = await getBillingSuccess(payId, type);
        console.log('data', data);
        dispatch({type: GET_BILLING_RAZORPAY_STATUS_SUCCESS, payload: {data}});
        return true;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: GET_BILLING_RAZORPAY_STATUS_FAILURE, payload: {error: errorMessage}});

    }
};
