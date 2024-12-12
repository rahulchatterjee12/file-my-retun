interface formData {
    [key: string]: any;
}

export const verifyNriStatusDetails = (ItrData: formData) => {
    console.log('testnri', ItrData)

    if (!ItrData.nriCountry) {
        return { validated: false, errorMessage: "Please Enter Country Name" };
    }

    if (!ItrData.nriPassport) {
        return { validated: false, errorMessage: "Please Enter Passport Number." };
    }

    if (!ItrData.nriDay) {
        return { validated: false, errorMessage: "Please Enter Number of Days in Last Year." };
    }

    if (!ItrData.nriDays) {
        return { validated: false, errorMessage: "Please Enter Number of Days in 4 Last Year." };
    }

    return { validated: true, errorMessage: '' };
}
