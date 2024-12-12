interface NoticeData {
    [key: string]: any;
}

export const verifyTextConsultancy = (noticeData: NoticeData) => {
    const mobileValidatePattern = /^\d{10,12}$/;
    const emailValidatePattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    ;

    if (!noticeData.name) {
        return { validated: false, errorMessage: "Please Enter name." };
    }

    if (!noticeData.email) {
        return {validated: false, errorMessage: "Email is required."};
    }

    if (!emailValidatePattern.test(noticeData.email)) {
        return { validated: false, errorMessage: "Invalid Email . Please enter a valid Email." };
    }

    if (!noticeData.mobileNumber) {
        return {validated: false, errorMessage: "Mobile is required."};
    }

    if (!mobileValidatePattern.test(noticeData.mobileNumber)) {
        return { validated: false, errorMessage: "Invalid Mobile Number . Please enter a valid mobile number." };
    }

    if (!noticeData.query) {
        return {validated: false, errorMessage: "Please enter valid Query."};
    }

    return { validated: true, errorMessage: '' };
}
