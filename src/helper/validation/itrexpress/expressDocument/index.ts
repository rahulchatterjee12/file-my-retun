interface ItrData {
    [key: string]: any;
}

export const verifyExpressDocument = (itrData: ItrData) => {


    if (!itrData.documentType) {
        return { validated: false, errorMessage: "Please Enter Document Type." };
    }

    if (!itrData.file) {
        return { validated: false, errorMessage: "Please Upload Document." };
    }

    return { validated: true, errorMessage: '' };
}
