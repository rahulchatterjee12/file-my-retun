interface ItrData {
    [key: string]: any;
}

export const verifySalaryIncome = (itrData: ItrData) => {

    if (!itrData.form16) {
        return { validated: false, errorMessage: "Please Select Employer Type." };
    }

    if (!itrData.documentType) {
        return { validated: false, errorMessage: "Please Select Document Type." };
    }

    if (!itrData.document) {
        return { validated: false, errorMessage: "Please Upload Document" };
    }

    return { validated: true, errorMessage: '' };
}
