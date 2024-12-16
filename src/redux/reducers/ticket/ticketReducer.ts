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
    POST_CREATE_TICKET_DATA_SUCCESS,
    TicketActionsTypes
} from "../../actions/ticket/types";

export interface TicketState {
    error: string | null;
    data: boolean | null;
    ticketTypeData: object | null;
    ticketData: object | null;
    ticketChatData: object | null;
}

const initialState: TicketState = {
    error: null,
    data: null,
    ticketTypeData: {},
    ticketData: [],
    ticketChatData: [],
};

const ticketReducer = (state = initialState, action: TicketActionsTypes): TicketState => {
    switch (action.type) {
        case GET_TICKET_TYPE_DATA_SUCCESS:
            return {
                ...state,
                ticketTypeData: action.payload?.data,
                error: null,
            };
        case GET_TICKET_TYPE_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case POST_CREATE_TICKET_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.data.data,
                error: null
            };
        case POST_CREATE_TICKET_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case GET_TICKET_DATA_SUCCESS:
            return {
                ...state,
                ticketData: action.payload?.data,
                error: null,
            };
        case GET_TICKET_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case GET_TICKET_CHAT_DATA_SUCCESS:
            return {
                ...state,
                ticketChatData: [...action.payload?.data.data.reverse()],
                error: null,
            };
        case GET_TICKET_CHAT_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case POST_CHAT_MESSAGE_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.data.data,
                error: null
            };
        case POST_CHAT_MESSAGE_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        default:
            return state;
    }
};

export default ticketReducer;
