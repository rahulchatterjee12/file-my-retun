import { get, post, postFile } from "@/utils";

const USER_SERVICE_URL: string = String(process.env.NEXT_PUBLIC_API_URI);

export const getTicketTypeData = async (type: string) => {
  try {
    return await get(USER_SERVICE_URL, `/ticket/type-ticket-data?type=${type}`);
  } catch (error) {
    throw error;
  }
};

export const postCreateTicket = async (type: string, valueType: string) => {
  try {
    return await post(USER_SERVICE_URL, "/ticket/create-ticket", {
      type,
      valueType,
    });
  } catch (error) {
    throw error;
  }
};

export const postChatMessage = async (formData: any) => {
  try {
    return await postFile(
      USER_SERVICE_URL,
      "/ticket/send-chat-message",
      formData
    );
  } catch (error) {
    throw error;
  }
};

export const getTicketData = async () => {
  try {
    return await get(USER_SERVICE_URL, `/ticket/get-ticket-data`);
  } catch (error) {
    throw error;
  }
};

export const getTicketChatData = async (
  conversationId: string,
  page: number
) => {
  try {
    return await get(
      USER_SERVICE_URL,
      `/ticket/get-chat-data?conversationId=${conversationId}&page=${page}`
    );
  } catch (error) {
    throw error;
  }
};
