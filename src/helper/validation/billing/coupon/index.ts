interface CouponData {
    [key: string]: any;
}

export const verifyCouponCode = (couponData: CouponData) => {
    console.log(couponData);
    if (!couponData) {
        return { validated: false, errorMessage: "Please Enter Coupon Code." };
    }

    return { validated: true, errorMessage: '' };
}
