export const GET_TICKET_TYPE_DATA_SUCCESS = 'GET_TICKET_TYPE_DATA_SUCCESS';
export const GET_TICKET_TYPE_DATA_FAILURE = 'GET_TICKET_TYPE_DATA_FAILURE';
export const POST_CREATE_TICKET_DATA_SUCCESS = 'POST_CREATE_TICKET_DATA_SUCCESS';
export const POST_CREATE_TICKET_DATA_FAILURE = 'POST_CREATE_TICKET_DATA_FAILURE';
export const POST_CHAT_MESSAGE_DATA_SUCCESS = 'POST_CHAT_MESSAGE_DATA_SUCCESS';
export const POST_CHAT_MESSAGE_DATA_FAILURE = 'POST_CHAT_MESSAGE_DATA_FAILURE';
export const GET_TICKET_DATA_SUCCESS = 'GET_TICKET_DATA_SUCCESS';
export const GET_TICKET_DATA_FAILURE = 'GET_TICKET_DATA_FAILURE';
export const GET_TICKET_CHAT_DATA_SUCCESS = 'GET_TICKET_CHAT_DATA_SUCCESS';
export const GET_TICKET_CHAT_DATA_FAILURE = 'GET_TICKET_CHAT_DATA_FAILURE';


interface GetTicketTypeDataSuccessAction {
    type: typeof GET_TICKET_TYPE_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface GetTicketTypeDataFailureAction {
    type: typeof GET_TICKET_TYPE_DATA_FAILURE;
    payload: { error: string };
}


interface PostCreateTicketDataSuccessAction {
    type: typeof POST_CREATE_TICKET_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface PostCreateTicketDataFailureAction {
    type: typeof POST_CREATE_TICKET_DATA_FAILURE;
    payload: { error: string };
}


interface GetTicketDataSuccessAction {
    type: typeof GET_TICKET_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface GetTicketDataFailureAction {
    type: typeof GET_TICKET_DATA_FAILURE;
    payload: { error: string };
}

interface GetTicketChatDataSuccessAction {
    type: typeof GET_TICKET_CHAT_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface GetTicketChatDataFailureAction {
    type: typeof GET_TICKET_CHAT_DATA_FAILURE;
    payload: { error: string };
}


interface PostChatMessageDataSuccessAction {
    type: typeof POST_CHAT_MESSAGE_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface PostChatMessageDataFailureAction {
    type: typeof POST_CHAT_MESSAGE_DATA_FAILURE;
    payload: { error: string };
}

export type TicketActionsTypes =
    | GetTicketTypeDataSuccessAction
    | GetTicketTypeDataFailureAction
    | PostCreateTicketDataSuccessAction
    | PostCreateTicketDataFailureAction
    | GetTicketDataSuccessAction
    | GetTicketDataFailureAction
    | GetTicketChatDataSuccessAction
    | GetTicketChatDataFailureAction
    | PostChatMessageDataSuccessAction
    | PostChatMessageDataFailureAction
