export const validateEmail = (email: string) => {
    // Email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email matches the regex pattern
    return emailRegex.test(email);
}


export const validateMobileNumber = (mobileNumber: string) => {
    // Mobile number regex pattern
    const mobileNumberRegex = /^\d{10}$/;

    // Check if mobile number matches the regex pattern
    return mobileNumberRegex.test(mobileNumber);
}

export const validateFileType = (filename: string) => {
    const allowedTypes = ['jpeg', 'png', 'gif', 'jpg'];
    // Extract the file extension from the filename
    const fileExtension = filename.split('.').pop()?.toLowerCase();

    // Check if the file extension is in the allowed types
    if (fileExtension) {
        if (allowedTypes.includes(fileExtension)) {
            return true;
        }
    }
    return false;
}

export const validatePanNumber = (panNumber: string) => {
    const panRegex = /^[A-Z]{5}\d{4}[A-Z]{1}$/;
    return panRegex.test(panNumber);
}
