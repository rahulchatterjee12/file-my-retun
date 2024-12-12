interface ItrData {
    [key: string]: any;
}

export const verifyBusinessProfession = (itrData: ItrData) => {
    if (!itrData.natureOfIncome) {
        return { validated: false, errorMessage: "Please select Nature of Income." };
    }

    if (!itrData.document) {
        return { validated: false, errorMessage: "Please Upload Document ." };
    }

    return { validated: true, errorMessage: '' };
};
