
interface MemberData {
    [key: string]: any;
}

export const verifyPersonalInfo = (memberData: MemberData, nri: boolean) => {
    let dob = memberData.dob;
    console.log("dob", dob);
    const currentYear = new Date().getFullYear();
    const dobDate = new Date(dob);
    const birthYear = dobDate.getFullYear();
    const age = currentYear - birthYear;
    const panNumberPattern = /[A-Z]{3}P[A-Z][0-9]{4}[A-Z]/;
    const hufNumberPattern = /[A-Z]{3}H[A-Z][0-9]{4}[A-Z]/;

    if (!memberData.userStatus) {
        return { validated: false, errorMessage: "Status is Required." };
    }

    if (!memberData.panNumber) {
        return { validated: false, errorMessage: "PAN Number is Required." };
    }

    if (memberData.userStatus === 'Individual') {
        if (!panNumberPattern.test(memberData.panNumber)) {
            return { validated: false, errorMessage: "Invalid PAN number format. Please enter a valid PAN number." };
        }
    }

    if (memberData.userStatus === 'HUF') {
        if (!hufNumberPattern.test(memberData.panNumber)) {
            return { validated: false, errorMessage: "Invalid PAN number format. Please enter a valid PAN number." };
        }
    }

    if (!memberData.lastName) {
        return { validated: false, errorMessage: "Missing last name. If unavailable, enter first name into the last name field." };
    }

    if (!memberData.dob) {
        return { validated: false, errorMessage: "Missing DOB." };
    }

    if (age < 18) {
        return { validated: false, errorMessage: "Member is not 18 years old" };
    }

    if (!memberData.fatherName) {
        return { validated: false, errorMessage: "Missing father's name." };
    }

    return { validated: true, errorMessage: '' };
}


export const verifyAddressInfo = (memberData: MemberData, nri: boolean) => {
    // For PinCode validation, a general assumption is used i.e. it should be a numeric string of 5 or 6 digits
    // The regular expression pattern for a valid PinCode
    let pinCodePattern;

    if (nri) {
        pinCodePattern = /^[0-9]{4,6}$/; // 4-6-digit pin code pattern for NRI
    } else {
        pinCodePattern = /^[0-9]{6}$/; // 6-digit pin code pattern for others
    }


    if (!memberData.houseNumber) {
        return {validated: false, errorMessage: "Missing Flat number."};
    }

    if (!memberData.laneRoadNo) {
        return {validated: false, errorMessage: "Missing Road/Street."};
    }

    if (!memberData.locality) {
        return {validated: false, errorMessage: "Missing Area/locality."};
    }

    if (!memberData.city) {
        return {validated: false, errorMessage: "Missing city."};
    }

    if (!memberData.state) {
        return {validated: false, errorMessage: "Missing state."};
    }

    if (!memberData.country) {
        return {validated: false, errorMessage: "Missing country."};
    }

    const pinCode = memberData.pinCode;

    if (!pinCode) {
        return { validated: false, errorMessage: "Missing Pin Code." };
    }


    const pinCodeValue = typeof pinCode === 'string' ? parseInt(pinCode, 10) : pinCode;

    const isValidPinCode = pinCodePattern.test(pinCodeValue.toString());
    if (!isValidPinCode) {
        return {
            validated: false,
            errorMessage: nri ? "Invalid Pin Code. Please enter a 4-6-digit numeric pin code." : "Invalid Pin Code. Please enter a 6-digit numeric pin code."
        };
    }

    return {validated: true, errorMessage: ''};
}


export const verifyIdentityAndContact = (memberData: MemberData, nri: boolean) => {
    // The regular expression pattern for a valid Aadhaar number (12 digits)
    //const aadhaarPattern = "^[2-9]{1}[1-9]{1}[0-9]{10}$";
    const aadhaarPattern = "^[0-9]{12}$";
    const enrolmentPattern = "^[0-9]{28}$";
    const mobileValidatePattern = /^[1-9][0-9]{8,9}$/;
    const emailValidatePattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check each field individually
    if (!memberData.idType) {
        return {validated: false, errorMessage: "ID Type is required."};
    }

    if (memberData.idType !== 'n' && !memberData.aadhaarNumber) {
        return {validated: false, errorMessage: `Aadhaar ${memberData.idType === "a" ? "Number" : "Enrollment Number"} is required.`};
    }

    // Validate Aadhaar Number and Passport Number based on the idType
    switch (memberData.idType) {
        case 'a':
            if (!new RegExp(aadhaarPattern).test(memberData.aadhaarNumber)) {
                return {validated: false, errorMessage: "The Aadhar number is not valid. It should be 12 digit. "};
            }
            break;
        case 'e':
            if (!new RegExp(enrolmentPattern).test(memberData.aadhaarNumber)) {
                return {validated: false, errorMessage: "The Enrollment number is not valid. It should be 28 digit."};
            }
            break;
    }

    if (!memberData.countryCode) {
        return {validated: false, errorMessage: "Country Code is required."};
    }

    if (!memberData.mobileNumber) {
        return {validated: false, errorMessage: "Mobile Number is required."};
    }

    if (!new RegExp(mobileValidatePattern).test(memberData.mobileNumber)) {
        return { validated: false, errorMessage: "Invalid Mobile Number . Please enter a valid mobile number." };
    }

    if (!memberData.email) {
        return {validated: false, errorMessage: "Email is required."};
    }

    if (!emailValidatePattern.test(memberData.email)) {
        return { validated: false, errorMessage: "Invalid Email." };
    }

    if (!memberData.wcountryCode) {
        return {validated: false, errorMessage: "Country Code is required for Whats App No."};
    }

    if (!memberData.wmobileNumber) {
        return {validated: false, errorMessage: "Mobile Number is required for Whats App No."};
    }

    if (!new RegExp(mobileValidatePattern).test(memberData.wmobileNumber)) {
        return { validated: false, errorMessage: "Invalid Whats App Mobile Number ." };
    }

    return {validated: true, errorMessage: ''};
}

export const verifyBankDetails = (memberData: MemberData, nri: boolean) => {
    let banks = memberData ? memberData.banks : [];

    // Remove banks with missing values for bankName, accountNumber, ifscCode, and accountType
    // banks = banks.filter((bank: any) =>
    //     !(!bank.bankName && !bank.accountNumber && !bank.ifscCode && !bank.accountType)
    // );


    if (banks.length === 0) {
        return { validated: false, errorMessage: "No banks provided." };
    }

    // Function to validate Account Number
    const validateAccount = (accountNumber: string) => {
        const pattern = /[a-zA-Z0-9]([/-]?(((\d*[1-9]\d*)*[a-zA-Z/-])|(\d*[1-9]\d*[a-zA-Z]*))+)*[0-9]*/;
        return pattern.test(accountNumber);
    }

    // Function to validate IFSC Code
    const validateIFSC = (ifscCode: string) => {
        const pattern = /[A-Z]{4}[0][A-Z0-9]{6}/;
        return pattern.test(ifscCode);
    }

    // Set to store unique combinations of account numbers and IFSC codes
    let uniqueAccountIFSCCombinations = new Set<string>();

    // validating the array
    let primaryBanks = 0;
    let secondaryBanks = 0;
    for (let bank of banks) {

        if (bank.status === "false" && !bank.accountNumber && !bank.ifscCode && !bank.bankName && !bank.accountType) {
            return { validated: false, errorMessage: "Please Remove Account if not need to fill details." };
        }
        if (!bank.accountNumber) {
            return { validated: false, errorMessage: "Account number missing." };
        }

        if (!validateAccount(bank.accountNumber)) {
            return { validated: false, errorMessage: "Account number invalid." };
        }

        if (!bank.ifscCode) {
            return { validated: false, errorMessage: "IFSC code is missing." };
        }

        if (!validateIFSC(bank.ifscCode)) {
            return { validated: false, errorMessage: "IFSC code invalid." };
        }

        if (!bank.bankName) {
            return { validated: false, errorMessage: "Bank name missing." };
        }

        if (!bank.accountType) {
            return { validated: false, errorMessage: "Account type missing." };
        }

        // Create a composite key using account number and IFSC code
        const accountIFSCKey = `${bank.accountNumber}-${bank.ifscCode}`;
        console.log('accountIFSCKey', accountIFSCKey);

        // Check for duplicate account number and IFSC code combinations
        if (uniqueAccountIFSCCombinations.has(accountIFSCKey)) {
            return { validated: false, errorMessage: "Duplicate account number and IFSC code combination found." };
        } else {
            uniqueAccountIFSCCombinations.add(accountIFSCKey);
        }

        if (bank.status === 'true') {
            primaryBanks++;
            if (primaryBanks > 1) {
                return { validated: false, errorMessage: "Only one primary bank account is allowed." };
            }
        } else if (bank.status === 'false') {
            secondaryBanks++;
        }
    }

    if (primaryBanks === 0) {
        return { validated: false, errorMessage: "At least one primary bank is required." }
    }

    return { validated: true, errorMessage: "" };
}
