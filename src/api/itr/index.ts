import { post, get, del, postFile } from "@/utils";

const USER_SERVICE_URL: string = String(process.env.NEXT_PUBLIC_API_URI);

export const getDataExistApi = async () => {
  try {
    return await get(USER_SERVICE_URL, `/itr/get-data-exist`);
  } catch (error) {
    throw error;
  }
};

export const getMemberExist = async () => {
  try {
    return await get(USER_SERVICE_URL, `/itr/get-member-exist`);
  } catch (error) {
    throw error;
  }
};

export const getItrData = async (itrId: string) => {
  try {
    return await get(USER_SERVICE_URL, `/itr/get-itr-data?itrId=${itrId}`);
  } catch (error) {
    throw error;
  }
};

export const deleteItrData = async (id: string, type: string) => {
  try {
    return await del(
      USER_SERVICE_URL,
      `/itr/delete-itr-data?id=${id}&type=${type}`
    );
  } catch (error) {
    throw error;
  }
};

export const postItrData = async (formData: any) => {
  try {
    return await postFile(USER_SERVICE_URL, "/itr/post-itr-data", formData);
  } catch (error) {
    throw error;
  }
};

export const postItrNriStatusData = async (itrId: string, formData: any) => {
  try {
    return await post(USER_SERVICE_URL, "/itr/post-itr-status-nri-details", {
      itrId,
      formData,
    });
  } catch (error) {
    throw error;
  }
};

export const itrSectionSwitch = async (
  id: string,
  type: string,
  value: any
) => {
  try {
    return await post(USER_SERVICE_URL, "/itr/itr-section-switch", {
      id,
      type,
      value,
    });
  } catch (error) {
    throw error;
  }
};

export const itrSectionOnClickSwitch = async (id: string) => {
  try {
    return await post(USER_SERVICE_URL, "/itr/itr-section-onClick-switch", {
      id,
    });
  } catch (error) {
    throw error;
  }
};

export const getITRNriData = async (itrId: string) => {
  try {
    return await get(USER_SERVICE_URL, `/itr/get-itr-nri-data?itrId=${itrId}`);
  } catch (error) {
    throw error;
  }
};

export const deleteITRNriData = async (id: string, type: string) => {
  try {
    return await del(
      USER_SERVICE_URL,
      `/itr/delete-itr-nri-data?id=${id}&type=${type}`
    );
  } catch (error) {
    throw error;
  }
};

export const postITRNriData = async (formData: any) => {
  try {
    return await postFile(USER_SERVICE_URL, "/itr/post-itr-nri-data", formData);
  } catch (error) {
    throw error;
  }
};

export const getITRExpressData = async (itrId: string) => {
  try {
    return await get(
      USER_SERVICE_URL,
      `/itr/get-itr-express-data?itrId=${itrId}`
    );
  } catch (error) {
    throw error;
  }
};

export const deleteITRExpressData = async (id: string, type: string) => {
  try {
    return await del(
      USER_SERVICE_URL,
      `/itr/delete-itr-express-data?id=${id}&type=${type}`
    );
  } catch (error) {
    throw error;
  }
};

export const postITRExpressData = async (formData: any) => {
  try {
    return await postFile(
      USER_SERVICE_URL,
      "/itr/post-itr-express-data",
      formData
    );
  } catch (error) {
    throw error;
  }
};

export const getItrPlans = async () => {
  try {
    return await get(USER_SERVICE_URL, `/itr/get-itr-plans`);
  } catch (error) {
    throw error;
  }
};

export const createItr = async (
  memberId: string,
  type: string,
  yearId: string
) => {
  try {
    return await post(USER_SERVICE_URL, "/itr/create-itr", {
      memberId,
      type,
      yearId,
    });
  } catch (error) {
    throw error;
  }
};

export const getAllItr = async (pageType: string) => {
  try {
    return await get(
      USER_SERVICE_URL,
      `/itr/get-all-itr-data?pageType=${pageType}`
    );
  } catch (error) {
    throw error;
  }
};
