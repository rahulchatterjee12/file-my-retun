import {ChangeEventHandler} from "react";

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


export const handleChangeForm = (event:any, setFormData:any, setFormErrors: any) => {
    // @ts-ignore
    const { name, type, value, files } = event.target;
    //console.log('files', files);
    //const fieldValue = type === 'file' && files ? files[0] : type === 'text' ? value.toUpperCase() : value;
    const fieldValue = type === 'file' && files ? files[0] : type === 'text' ? value : value;

    setFormData((prevState: any) => ({
        ...prevState,
        [name]: fieldValue,
    }));

    // Debugging
    console.log('Field:', name);
    console.log('Value:', fieldValue);

    // Update form errors
    setFormErrors((prevErrors: any) => ({
        ...prevErrors,
        [name]: !fieldValue, // If value exists, set error to false, otherwise true
    }));
};

export const convertMultipartFormData = (formData:any) => {
    const fData = new FormData();
    for (const key in formData) {
        if (formData[key] instanceof FileList) {
            // Append each file separately
            for (let i = 0; i < formData[key].length; i++) {
                fData.append('file', formData[key][i]);
            }
        } else {
            console.log('key', key);
            console.log('value', formData[key]);
            fData.append(key, formData[key]);
        }
    }
   return fData;
};
