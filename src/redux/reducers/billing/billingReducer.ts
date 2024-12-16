import {
    BillingActionTypes,
    FETCH_INVOICE_FAILURE,
    FETCH_INVOICE_SUCCESS,
    FETCH_INVOICES_FAILURE,
    FETCH_INVOICES_SUCCESS, GET_BILLING_DATA_WITH_FAILURE, GET_BILLING_DATA_WITH_SUCCESS,
    GET_BILLING_RAZORPAY_ID_FAILURE,
    GET_BILLING_RAZORPAY_ID_SUCCESS,
    GET_BILLING_RAZORPAY_STATUS_FAILURE,
    GET_BILLING_RAZORPAY_STATUS_SUCCESS,
    Invoice,
    InvoiceListSchema,
    POST_BILLING_DATA_FAILURE,
    POST_BILLING_DATA_SUCCESS
} from '../../actions/billing/types';

export interface BillingState {
    error: string | null;
    invoices: InvoiceListSchema[] | null;
    currentPage: number | null;
    totalRecords: number | null;
    totalPages: number | null;
    invoice: Invoice | null;
    paymentStatus: Object | null;
    paymentId: Object | null;
    billingData: Object | null;
    billingDataWithCoupon: Object | null;
}

const initialState: BillingState = {
    error: null,
    invoices: null,
    currentPage: 0,
    totalRecords: 0,
    totalPages: 0,
    invoice: null,
    paymentStatus: null,
    paymentId: null,
    billingData: null,
    billingDataWithCoupon: {
        tirePrice: 0, discount: 0, planName: '', planSub: '', amountTaken: 0
    },
};

const billingReducer = (state = initialState, action: BillingActionTypes): BillingState => {
    switch (action.type) {
        case FETCH_INVOICES_SUCCESS:
            return {
                ...state,
                currentPage: action.payload.data.currentPage,
                totalRecords: action.payload.data.totalRecords,
                totalPages: action.payload.data.totalPages,
                invoices: action.payload.data.data,
                error: null
            };
        case FETCH_INVOICES_FAILURE:
            return {
                ...state,
                invoices: null,
                error: action.payload.error
            };
        case FETCH_INVOICE_SUCCESS:
            return {
                ...state,
                invoice: action.payload.data,
                error: null
            };
        case FETCH_INVOICE_FAILURE:
            return {
                ...state,
                invoice: null,
                error: action.payload.error
            };
        case GET_BILLING_RAZORPAY_ID_SUCCESS:
            return {
                ...state,
                paymentId: action.payload.data,
                error: null
            };
        case GET_BILLING_RAZORPAY_ID_FAILURE:
            return {
                ...state,
                paymentId: null,
                error: action.payload.error
            };
        case GET_BILLING_RAZORPAY_STATUS_SUCCESS:
            return {
                ...state,
                paymentStatus: action.payload.data,
                error: null
            };
        case GET_BILLING_RAZORPAY_STATUS_FAILURE:
            return {
                ...state,
                paymentStatus: null,
                error: action.payload.error
            };
        case POST_BILLING_DATA_SUCCESS:
            return {
                ...state,
                billingData: action.payload.data.data,
                error: null
            };
        case POST_BILLING_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case GET_BILLING_DATA_WITH_SUCCESS:
            return {
                ...state,
                billingDataWithCoupon: action.payload.data,
                error: null
            };
        case GET_BILLING_DATA_WITH_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        default:
            return state;
    }
};

export default billingReducer;
