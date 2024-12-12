import { post, get } from "@/utils/apiClient";

const USER_SERVICE_URL: string = String(process.env.NEXT_PUBLIC_API_URI);

export const allUserInvoice = async (limit: string, page: string) => {
  try {
    return await get(
      USER_SERVICE_URL,
      `/billing/all-invoices?limit=${limit}&page=${page}`
    );
  } catch (error) {
    throw error;
  }
};

export const getInvoiceDetail = async (id: string) => {
  try {
    return await get(USER_SERVICE_URL, `/billing/get-invoice?id=${id}`);
  } catch (error) {
    throw error;
  }
};

export const postBillingDATA = async (typeId: string, type: string) => {
  try {
    return await post(USER_SERVICE_URL, "/billing/create-billing", {
      typeId,
      type,
    });
  } catch (error) {
    throw error;
  }
};

export const postBillingWithCouponDATA = async (
  billingId: string,
  coupon: string
) => {
  try {
    return await post(
      USER_SERVICE_URL,
      "/billing/get-billing-data-with-coupon",
      {
        billingId,
        coupon,
      }
    );
  } catch (error) {
    throw error;
  }
};

export const getBillingRazorpay = async (billingId: string) => {
  try {
    return await get(
      USER_SERVICE_URL,
      `/billing/get-billing?billingId=${billingId}`
    );
  } catch (error) {
    throw error;
  }
};

export const getBillingSuccess = async (payId: string, type: string) => {
  try {
    return await get(
      USER_SERVICE_URL,
      `/billing/get-billing-success?razorpay_payment_id=${payId}&type=${type}`
    );
  } catch (error) {
    throw error;
  }
};
