import {get} from "@/utils";

const USER_SERVICE_URL:string = String(process.env.NEXT_PUBLIC_API_URI);

export const getCompanyId = async () => {
    try {
        return await get(USER_SERVICE_URL, `/affiliate/get-company-code`);
    } catch (error) {
        throw error;
    }
};

export const getAffiliateData = async (type: string) => {
    try {
        return await get(USER_SERVICE_URL, `/affiliate/get-affiliate-data?&type=${type}`);
    } catch (error) {
        throw error;
    }
};

export const getAllFyYear = async () => {
    try {
        return await get(USER_SERVICE_URL, `/affiliate/get-all-years`);
    } catch (error) {
        throw error;
    }
};
