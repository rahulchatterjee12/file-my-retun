interface ItrData {
    [key: string]: any;
}

export const verifyHouseProperty = (itrData: ItrData) => {
    if (!itrData.propertyCount) {
        return { validated: false, errorMessage: "Please select Property Number." };
    }

  if (!itrData.propertyType) {
        return { validated: false, errorMessage: "Please select Property Type." };
    }

  if (!itrData.document) {
        return { validated: false, errorMessage: "Please Upload Document ." };
    }

    return { validated: true, errorMessage: '' };
};
