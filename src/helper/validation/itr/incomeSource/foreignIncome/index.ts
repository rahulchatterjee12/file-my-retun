interface ItrData {
    [key: string]: any;
}

export const verifyForeignIncome = (itrData: ItrData) => {
    if (!itrData.documentType) {
        return { validated: false, errorMessage: "Please select Document Type." };
    }

    if (!itrData.document) {
        return { validated: false, errorMessage: "Please Upload Document ." };
    }

    return { validated: true, errorMessage: '' };
};
