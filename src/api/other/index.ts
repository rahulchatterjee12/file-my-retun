import { del, get, post, postFile } from "@/utils";

const USER_SERVICE_URL: string = String(process.env.NEXT_PUBLIC_API_URI);

export const postOtherDATA = async (
  mainType: any,
  type: string,
  formData: any
) => {
  try {
    return await post(USER_SERVICE_URL, "/other/create-enquiry", {
      mainType,
      type,
      formData,
    });
  } catch (error) {
    throw error;
  }
};

export const postOtherWithOutLoginDATA = async (
  mainType: any,
  type: string,
  formData: any
) => {
  try {
    return await post(
      USER_SERVICE_URL,
      "/other/create-all-withOut-login-enquiry",
      {
        mainType,
        type,
        formData,
      }
    );
  } catch (error) {
    throw error;
  }
};

export const getOtherDATA = async (pageType: string) => {
  try {
    return await get(
      USER_SERVICE_URL,
      `/other/get-enquiry-data?pageType=${pageType}`
    );
  } catch (error) {
    throw error;
  }
};
export const postTextConsultancy = async (formData: any) => {
  try {
    return await postFile(
      USER_SERVICE_URL,
      "/other/create-text-consultancy",
      formData
    );
  } catch (error) {
    throw error;
  }
};

export const getTextConsultancy = async (pageType: string) => {
  try {
    return await get(
      USER_SERVICE_URL,
      `/other/get-text-consultancy?pageType=${pageType}`
    );
  } catch (error) {
    throw error;
  }
};
export const postNotice = async (formData: any) => {
  try {
    return await post(USER_SERVICE_URL, "/other/create-notice", {
      formData,
    });
  } catch (error) {
    throw error;
  }
};

export const getNotice = async (pageType: string) => {
  try {
    return await get(
      USER_SERVICE_URL,
      `/other/get-notice?pageType=${pageType}`
    );
  } catch (error) {
    throw error;
  }
};

export const getNoticeId = async (id: string) => {
  try {
    return await get(USER_SERVICE_URL, `/other/get-notice-id?id=${id}`);
  } catch (error) {
    throw error;
  }
};

export const postNoticeFile = async (formData: any) => {
  try {
    return await postFile(
      USER_SERVICE_URL,
      "/other/create-notice-file",
      formData
    );
  } catch (error) {
    throw error;
  }
};

export const getNoticeFile = async (noticeId: string) => {
  try {
    return await get(
      USER_SERVICE_URL,
      `/other/get-notice-file?noticeId=${noticeId}`
    );
  } catch (error) {
    throw error;
  }
};

export const deleteNoticeFile = async (id: string) => {
  try {
    return await del(USER_SERVICE_URL, `/other/delete-notice-file?id=${id}`);
  } catch (error) {
    throw error;
  }
};
