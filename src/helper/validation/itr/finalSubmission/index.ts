interface ItrData {
    [key: string]: any;
}

export const verifyFinalSubmission = (itrData: ItrData) => {

    if (!itrData.checked) {
        return { validated: false, errorMessage: "Please Tick on I agree." };
    }

    return { validated: true, errorMessage: '' };
}
