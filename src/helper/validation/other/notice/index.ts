interface NoticeData {
    [key: string]: any;
}

export const verifyNotice = (noticeData: NoticeData) => {
    let dob = noticeData.dob;
    console.log("dob", dob);
    const currentYear = new Date().getFullYear();
    const dobDate = new Date(dob);
    const birthYear = dobDate.getFullYear();
    const age = currentYear - birthYear;
    const panNumberPattern = /[A-Z]{3}P[A-Z][0-9]{4}[A-Z]/;
    const mobileValidatePattern = /^\d{10,12}$/;
    const emailValidatePattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    ;

    if (!noticeData.panNumber) {
        return { validated: false, errorMessage: "PAN Number is Required." };
    }

    if (!panNumberPattern.test(noticeData.panNumber)) {
        return { validated: false, errorMessage: "Invalid PAN number format. Please enter a valid PAN number." };
    }

    if (!noticeData.name) {
        return { validated: false, errorMessage: "Please Enter name." };
    }

    if (!noticeData.dob) {
        return { validated: false, errorMessage: "Missing DOB." };
    }

    if (age < 18) {
        return { validated: false, errorMessage: "Member is not 18 years old" };
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

    return { validated: true, errorMessage: '' };
}
