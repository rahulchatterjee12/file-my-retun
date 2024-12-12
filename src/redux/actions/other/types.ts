export const GET_OTHER_DATA_SUCCESS = 'GET_OTHER_DATA_SUCCESS';
export const GET_OTHER_DATA_FAILURE = 'GET_OTHER_DATA_FAILURE';
export const POST_OTHER_DATA_SUCCESS = 'POST_OTHER_DATA_SUCCESS';
export const POST_OTHER_DATA_FAILURE = 'POST_OTHER_DATA_FAILURE';
export const POST_WITHOUT_LOGIN_OTHER_DATA_SUCCESS = 'POST_WITHOUT_LOGIN_OTHER_DATA_SUCCESS';
export const POST_WITHOUT_LOGIN_OTHER_DATA_FAILURE = 'POST_WITHOUT_LOGIN_OTHER_DATA_FAILURE';
export const GET_CONSULTANCY_DATA_SUCCESS = 'GET_CONSULTANCY_DATA_SUCCESS';
export const GET_CONSULTANCY_DATA_FAILURE = 'GET_CONSULTANCY_DATA_FAILURE';
export const POST_CONSULTANCY_DATA_SUCCESS = 'POST_CONSULTANCY_DATA_SUCCESS';
export const POST_CONSULTANCY_DATA_FAILURE = 'POST_CONSULTANCY_DATA_FAILURE';
export const GET_NOTICE_DATA_SUCCESS = 'GET_NOTICE_DATA_SUCCESS';
export const GET_NOTICE_DATA_FAILURE = 'GET_NOTICE_DATA_FAILURE';
export const GET_NOTICE_ID_DATA_SUCCESS = 'GET_NOTICE_ID_DATA_SUCCESS';
export const GET_NOTICE_ID_DATA_FAILURE = 'GET_NOTICE_ID_DATA_FAILURE';
export const POST_NOTICE_DATA_SUCCESS = 'POST_NOTICE_DATA_SUCCESS';
export const POST_NOTICE_DATA_FAILURE = 'POST_NOTICE_DATA_FAILURE';
export const GET_NOTICE_FILE_DATA_SUCCESS = 'GET_NOTICE_FILE_DATA_SUCCESS';
export const GET_NOTICE_FILE_DATA_FAILURE = 'GET_NOTICE_FILE_DATA_FAILURE';
export const POST_NOTICE_FILE_DATA_SUCCESS = 'POST_NOTICE_FILE_DATA_SUCCESS';
export const POST_NOTICE_FILE_DATA_FAILURE = 'POST_NOTICE_FILE_DATA_FAILURE';
export const DELETE_NOTICE_FILE_DATA_SUCCESS = 'DELETE_NOTICE_FILE_DATA_SUCCESS';
export const DELETE_NOTICE_FILE_DATA_FAILURE = 'DELETE_NOTICE_FILE_DATA_FAILURE';

interface GetOtherDataSuccessAction {
    type: typeof GET_OTHER_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface GetOtherDataFailureAction {
    type: typeof GET_OTHER_DATA_FAILURE;
    payload: { error: string };
}

interface PostOtherDataSuccessAction {
    type: typeof POST_OTHER_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface PostOtherDataFailureAction {
    type: typeof POST_OTHER_DATA_FAILURE;
    payload: { error: string };
}

interface PostOtherWithoutLoginDataSuccessAction {
    type: typeof POST_WITHOUT_LOGIN_OTHER_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface PostOtherDataWithoutLoginFailureAction {
    type: typeof POST_WITHOUT_LOGIN_OTHER_DATA_FAILURE;
    payload: { error: string };
}

interface GetConsultancyDataSuccessAction {
    type: typeof GET_CONSULTANCY_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface GetConsultancyDataFailureAction {
    type: typeof GET_CONSULTANCY_DATA_FAILURE;
    payload: { error: string };
}

interface PostConsultancyDataSuccessAction {
    type: typeof POST_CONSULTANCY_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface PostConsultancyDataFailureAction {
    type: typeof POST_CONSULTANCY_DATA_FAILURE;
    payload: { error: string };
}

interface GetNoticeDataSuccessAction {
    type: typeof GET_NOTICE_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface GetNoticeDataFailureAction {
    type: typeof GET_NOTICE_DATA_FAILURE;
    payload: { error: string };
}

interface GetNoticeIdDataSuccessAction {
    type: typeof GET_NOTICE_ID_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface GetNoticeIdDataFailureAction {
    type: typeof GET_NOTICE_ID_DATA_FAILURE;
    payload: { error: string };
}

interface PostNoticeDataSuccessAction {
    type: typeof POST_NOTICE_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface PostNoticeDataFailureAction {
    type: typeof POST_NOTICE_DATA_FAILURE;
    payload: { error: string };
}

interface GetNoticeFileDataSuccessAction {
    type: typeof GET_NOTICE_FILE_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface GetNoticeFileDataFailureAction {
    type: typeof GET_NOTICE_FILE_DATA_FAILURE;
    payload: { error: string };
}

interface PostNoticeFileDataSuccessAction {
    type: typeof POST_NOTICE_FILE_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface PostNoticeFileDataFailureAction {
    type: typeof POST_NOTICE_FILE_DATA_FAILURE;
    payload: { error: string };
}

interface DeleteNoticeFileDataSuccessAction {
    type: typeof DELETE_NOTICE_FILE_DATA_SUCCESS;
    payload: { error: string };
}

interface DeleteNoticeFileDataFailureAction {
    type: typeof DELETE_NOTICE_FILE_DATA_FAILURE;
    payload: {
        data: any
    };
}

export type OtherActionsTypes =
    | GetOtherDataSuccessAction
    | GetOtherDataFailureAction
    | PostOtherDataSuccessAction
    | PostOtherDataFailureAction
    | PostOtherWithoutLoginDataSuccessAction
    | PostOtherDataWithoutLoginFailureAction
    | GetConsultancyDataSuccessAction
    | GetConsultancyDataFailureAction
    | PostConsultancyDataSuccessAction
    | PostConsultancyDataFailureAction
    | GetNoticeDataSuccessAction
    | GetNoticeDataFailureAction
    | GetNoticeIdDataSuccessAction
    | GetNoticeIdDataFailureAction
    | PostNoticeDataSuccessAction
    | PostNoticeDataFailureAction
    | GetNoticeFileDataSuccessAction
    | GetNoticeFileDataFailureAction
    | PostNoticeFileDataSuccessAction
    | PostNoticeFileDataFailureAction
    | DeleteNoticeFileDataSuccessAction
    | DeleteNoticeFileDataFailureAction
