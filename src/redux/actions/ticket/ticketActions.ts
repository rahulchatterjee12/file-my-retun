import {Dispatch} from "redux";
import {getTicketChatData, getTicketData, getTicketTypeData, postChatMessage, postCreateTicket} from "@/api/ticket";
import {
    GET_TICKET_CHAT_DATA_FAILURE,
    GET_TICKET_CHAT_DATA_SUCCESS,
    GET_TICKET_DATA_FAILURE,
    GET_TICKET_DATA_SUCCESS,
    GET_TICKET_TYPE_DATA_FAILURE,
    GET_TICKET_TYPE_DATA_SUCCESS,
    POST_CHAT_MESSAGE_DATA_FAILURE,
    POST_CHAT_MESSAGE_DATA_SUCCESS,
    POST_CREATE_TICKET_DATA_FAILURE,
    POST_CREATE_TICKET_DATA_SUCCESS
} from "@/redux/actions/ticket/types";
import {convertMultipartFormData} from "@/helper/form";

export const getTicketTypesData = (value: string) => async (dispatch: Dispatch) => {
    try {
        const data = await getTicketTypeData(value);
        console.log('data', data);
        dispatch({type: GET_TICKET_TYPE_DATA_SUCCESS, payload: {data}});
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: GET_TICKET_TYPE_DATA_FAILURE, payload: {error: errorMessage}});

    }
};

export const createTicket = (type: string , selectedValue: any) => async (dispatch: Dispatch) => {
    try {
        const data = await postCreateTicket(type, selectedValue);
        dispatch({type: POST_CREATE_TICKET_DATA_SUCCESS, payload: {data}});
        return true;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: POST_CREATE_TICKET_DATA_FAILURE, payload: {error: errorMessage}});
        return false;
    }
};


export const getTickets = () => async (dispatch: Dispatch) => {
    try {
        const data = await getTicketData();
        console.log('data', data);
        dispatch({type: GET_TICKET_DATA_SUCCESS, payload: {data}});
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: GET_TICKET_DATA_FAILURE, payload: {error: errorMessage}});

    }
};

export const getTicketsChat = (conversationId: string, page: number) => async (dispatch: Dispatch) => {
    try {
        const data = await getTicketChatData(conversationId, page);
        console.log('data', data);
        dispatch({type: GET_TICKET_CHAT_DATA_SUCCESS, payload: {data}});
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: GET_TICKET_CHAT_DATA_FAILURE, payload: {error: errorMessage}});

    }
};

export const SendChatMessage = (conservationId: string , contain: number, formData: any) => async (dispatch: Dispatch) => {
    try {
        const fData = {conservationId, contain, ...formData};
        console.log('fData', fData);
        const mFormData = convertMultipartFormData(fData);
        console.log("mFormData", mFormData)
        const data = await postChatMessage(mFormData);
        dispatch({type: POST_CHAT_MESSAGE_DATA_SUCCESS, payload: {data}});
        return true;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.log('errorMessage', errorMessage);
        console.log('error', error);
        dispatch({type: POST_CHAT_MESSAGE_DATA_FAILURE, payload: {error: errorMessage}});
        return false;
    }
};
