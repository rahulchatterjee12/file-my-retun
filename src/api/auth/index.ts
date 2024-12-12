import { post, get, del } from "@/utils/apiClient";

const USER_SERVICE_URL: string = String(process.env.NEXT_PUBLIC_API_URI);

export const loginUserApi = async (
  id: string | null | undefined,
  email: string,
  password: string
) => {
  try {
    return await post(USER_SERVICE_URL, "/auth/login", {
      companyId: id,
      email: email,
      password: password,
    });
  } catch (error) {
    throw error;
  }
};

export const registerUserApi = async (submitReg: any) => {
  try {
    return await post(USER_SERVICE_URL, "/auth/signup", submitReg);
  } catch (error) {
    throw error;
  }
};

export const getProfileInfoApi = async () => {
  try {
    //sessionStorage.removeItem('token');
    return await get(USER_SERVICE_URL, "/auth/getProfileInfo");
  } catch (error) {
    //sessionStorage.removeItem('token');
    throw error;
  }
};

export const forgetPasswordApi = async (
  step: number,
  email: string,
  _id: string,
  otp: string,
  password: string,
  id: string | null | undefined
) => {
  try {
    return await post(USER_SERVICE_URL, "/auth/forgetPassword", {
      companyId: id,
      step: step,
      email: email,
      _id: _id,
      otp: otp,
      password: password,
    });
  } catch (error) {
    throw error;
  }
};

export const recoverAccountApi = async (panNumber: string) => {
  try {
    return await post(USER_SERVICE_URL, "/auth/recover-account", {
      panNumber: panNumber,
    });
  } catch (error) {
    throw error;
  }
};

export const changePasswordApi = async (
  currentPassword: string,
  newPassword: string
) => {
  try {
    return await post(USER_SERVICE_URL, "/auth/change-password", {
      currentPassword: currentPassword,
      newPassword: newPassword,
    });
  } catch (error) {
    throw error;
  }
};

export const changeEmailApi = async (
  currentPassword: string,
  newEmail: string
) => {
  try {
    return await post(USER_SERVICE_URL, "/auth/changeEmail", {
      currentPassword: currentPassword,
      newEmail: newEmail,
    });
  } catch (error) {
    throw error;
  }
};

export const getAllMembersProfilesApi = async (
  yearId: string,
  limit: number,
  page: number
) => {
  try {
    return await get(
      USER_SERVICE_URL,
      `/auth/getAllMemberProfiles?limit=${limit}&page=${page}&yearId=${yearId}`
    );
  } catch (error) {
    throw error;
  }
};

export const getMemberProfilesApi = async (memberId: string) => {
  try {
    return await get(
      USER_SERVICE_URL,
      `/auth/getMemberProfile?memberId=${memberId}`
    );
  } catch (error) {
    throw error;
  }
};

export const updateNriStatusApi = async (nriStatus: string) => {
  try {
    return await post(USER_SERVICE_URL, "/auth/updateNriStatus", {
      nriStatus: nriStatus,
    });
  } catch (error) {
    throw error;
  }
};

export const memberProfileApi = async (
  step: number,
  memberId: string | null,
  formData: any
) => {
  try {
    const endpoint = "/auth/createMemberProfile";
    const requestBody = {
      step: step,
      memberId: memberId,
      ...formData,
    };

    return await post(USER_SERVICE_URL, endpoint, requestBody);
  } catch (error) {
    throw error;
  }
};

export const updateMemberBankAccount = async (
  memberId: string | null,
  banks: any
) => {
  try {
    const endpoint: string = "/auth/updateMemberBankAccount";
    const requestBody = {
      memberId: memberId,
      ...banks,
    };

    return await post(USER_SERVICE_URL, endpoint, requestBody);
  } catch (error) {
    throw error;
  }
};

export const deleteMemberBankAccount = async (id: string) => {
  try {
    const endpoint: string = `/auth/deleteMemberBankAccount?id=${id}`;
    return await del(USER_SERVICE_URL, endpoint);
  } catch (error) {
    throw error;
  }
};

export const getCompanyDetails = async (companyId: string) => {
  try {
    return await get(
      USER_SERVICE_URL,
      `/auth/get-company-details?companyId=${companyId}`
    );
  } catch (error) {
    throw error;
  }
};
