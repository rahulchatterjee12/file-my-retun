interface NoticeData {
    [key: string]: any;
}

export const verifyOtherAllInvestmentOrStartup = (noticeData: NoticeData) => {
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

    if (!noticeData.mobile) {
        return {validated: false, errorMessage: "Mobile is required."};
    }

    if (!mobileValidatePattern.test(noticeData.mobile)) {
        return { validated: false, errorMessage: "Invalid Mobile Number . Please enter a valid mobile number." };
    }

    return { validated: true, errorMessage: '' };
}

export const verifyOtherAllServiceQuery = (noticeData: NoticeData) => {
    const mobileValidatePattern = /^\d{10,12}$/;
    const emailValidatePattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    ;

    if (!noticeData.firstName) {
        return { validated: false, errorMessage: "Please Enter First Name." };
    }

    if (!noticeData.lastName) {
        return { validated: false, errorMessage: "Please Enter Last Name." };
    }

    if (!noticeData.email) {
        return {validated: false, errorMessage: "Email is required."};
    }

    if (!emailValidatePattern.test(noticeData.email)) {
        return { validated: false, errorMessage: "Invalid Email . Please enter a valid Email." };
    }

    if (!noticeData.mobile) {
        return {validated: false, errorMessage: "Mobile is required."};
    }

    if (!mobileValidatePattern.test(noticeData.mobile)) {
        return { validated: false, errorMessage: "Invalid Mobile Number . Please enter a valid mobile number." };
    }

    return { validated: true, errorMessage: '' };
}
