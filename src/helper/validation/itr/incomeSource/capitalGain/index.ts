interface ItrData {
    [key: string]: any;
}

export const verifyCapitalGain = (itrData: ItrData) => {
    if (!itrData.capitalGain) {
        return { validated: false, errorMessage: "Please select income from tds." };
    }

    if (itrData.capitalGain === "Capital") {
        if (!itrData.document) {
            return { validated: false, errorMessage: "Please Upload Capital Gain Report ." };
        }
    }

    if (itrData.capitalGain === "Property") {
        if (!itrData.document) {
            return { validated: false, errorMessage: "Please Upload Required Excel Sheet." };
        }
    }

    return { validated: true, errorMessage: '' };
};
