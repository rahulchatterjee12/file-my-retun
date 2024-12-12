interface ItrData {
    [key: string]: any;
}

export const verifyOtherIncome = (itrData: ItrData) => {
    if (!itrData.incomeFormOther) {
        return { validated: false, errorMessage: "Please select income from tds." };
    }

    if (itrData.incomeFormOther === "InterestSaving") {
        if (!itrData.bankName) {
            return { validated: false, errorMessage: "Bank name is required." };
        }

        if (!itrData.totalAmount) {
            return { validated: false, errorMessage: "Interest earned amount is required." };
        }
    }

    if (itrData.incomeFormOther === "InterestFixed") {
        if (!itrData.totalAmount && !itrData.document) {
            return { validated: false, errorMessage: "Either Total Interest earned amount or Document is required." };
        }

        /*if (!itrData.totalAmount) {
            return { validated: false, errorMessage: "Total Interest earned amount is required." };
        }

        if (!itrData.document) {
            return { validated: false, errorMessage: "Please Upload Document ." };
        }*/
    }

    if (itrData.incomeFormOther === "Dividend") {
        if (!itrData.totalAmount && !itrData.document) {
            return { validated: false, errorMessage: "Either Total Dividend earned amount or Document is required." };
        }

        /*if (!itrData.totalAmount) {
            return { validated: false, errorMessage: "Total Dividend earned amount is required." };
        }

        if (!itrData.document) {
            return { validated: false, errorMessage: "Please Upload Document ." };
        }*/
    }

    return { validated: true, errorMessage: '' };
};
