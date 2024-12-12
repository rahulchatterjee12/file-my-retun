interface ItrData {
    [key: string]: any;
}

export const verifyIncomeMore = (itrData: ItrData) => {

    if (!itrData.document) {
        return { validated: false, errorMessage: "Please Upload Document." };
    }

    return { validated: true, errorMessage: '' };
}
