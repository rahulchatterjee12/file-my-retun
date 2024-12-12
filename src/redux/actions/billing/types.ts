// Action types for Billing operations
export const FETCH_INVOICES_SUCCESS = 'FETCH_INVOICES_SUCCESS';
export const FETCH_INVOICES_FAILURE = 'FETCH_INVOICES_FAILURE';
export const FETCH_INVOICE_SUCCESS = 'FETCH_INVOICE_SUCCESS';
export const FETCH_INVOICE_FAILURE = 'FETCH_INVOICE_FAILURE';
export const POST_BILLING_DATA_SUCCESS = 'POST_BILLING_DATA_SUCCESS';
export const POST_BILLING_DATA_FAILURE = 'POST_BILLING_DATA_FAILURE';
export const GET_BILLING_RAZORPAY_ID_SUCCESS = 'GET_BILLING_RAZORPAY_ID_SUCCESS';
export const GET_BILLING_RAZORPAY_ID_FAILURE = 'GET_BILLING_RAZORPAY_ID_FAILURE';
export const GET_BILLING_RAZORPAY_STATUS_SUCCESS = 'GET_BILLING_RAZORPAY_STATUS_SUCCESS';
export const GET_BILLING_RAZORPAY_STATUS_FAILURE = 'GET_BILLING_RAZORPAY_STATUS_FAILURE';
export const GET_BILLING_DATA_WITH_SUCCESS = 'GET_BILLING_DATA_WITH_SUCCESS';
export const GET_BILLING_DATA_WITH_FAILURE = 'GET_BILLING_DATA_WITH_FAILURE';

// Define the Invoice [type]
export interface Invoice {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    address2: string;
    state: string;
    country: string;
    pincode: string;
    typeId: string;
    type: string;
    price: number;
    discount: number;
    amountTaken: number;
    tierId: string;
    user_id: string;
    created_date: string;
    updated_date: string;
    status: string;
    paytmId?: string;
    invoiceNumber?: string;
    series?: number;
    assessment?: string;
}

// Define the Invoice list [type]
export interface InvoiceListSchema {
    _id: string;
    firstName: string;
    lastName: string;
    amountTaken: number;
    updated_date: string;
    status: string;
    invoiceNumber?: string;
}
 interface InvoiceList {
    message: string;
    currentPage: number;
    totalRecords: number;
    totalPages: number;
    data: InvoiceListSchema[];
}

interface FetchInvoicesSuccessAction {
    type: typeof FETCH_INVOICES_SUCCESS;
    payload: {
        data: any
    };
}

interface FetchInvoicesFailureAction {
    type: typeof FETCH_INVOICES_FAILURE;
    payload: { error: string };
}

interface FetchInvoiceSuccessAction {
    type: typeof FETCH_INVOICE_SUCCESS;
    payload: {
        data: Invoice;
    };
}

interface FetchInvoiceFailureAction {
    type: typeof FETCH_INVOICE_FAILURE;
    payload: { error: string };
}

interface PostBillingDataSuccessAction {
    type: typeof POST_BILLING_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface PostBillingDataFailureAction {
    type: typeof POST_BILLING_DATA_FAILURE;
    payload: { error: string };
}

interface GetBillingRazorPayIdDataSuccessAction {
    type: typeof GET_BILLING_RAZORPAY_ID_SUCCESS;
    payload: {
        data: any
    };
}

interface GetBillingRazorPayIdDataFailureAction {
    type: typeof GET_BILLING_RAZORPAY_ID_FAILURE;
    payload: { error: string };
}

interface GetBillingRazorPayStatusDataSuccessAction {
    type: typeof GET_BILLING_RAZORPAY_STATUS_SUCCESS;
    payload: {
        data: any
    };
}

interface GetBillingRazorPayStatusDataFailureAction {
    type: typeof GET_BILLING_RAZORPAY_STATUS_FAILURE;
    payload: { error: string };
}
interface GetBillingDataWithCouponSuccessAction {
    type: typeof GET_BILLING_DATA_WITH_SUCCESS;
    payload: {
        data: any
    };
}

interface GetBillingDataWithCouponFailureAction {
    type: typeof GET_BILLING_DATA_WITH_FAILURE;
    payload: { error: string };
}

export type BillingActionTypes =
    | FetchInvoicesSuccessAction
    | FetchInvoicesFailureAction
    | FetchInvoiceSuccessAction
    | FetchInvoiceFailureAction
    | PostBillingDataSuccessAction
    | PostBillingDataFailureAction
    | GetBillingRazorPayIdDataSuccessAction
    | GetBillingRazorPayIdDataFailureAction
    | GetBillingRazorPayStatusDataSuccessAction
    | GetBillingRazorPayStatusDataFailureAction
    | GetBillingDataWithCouponSuccessAction
    | GetBillingDataWithCouponFailureAction
