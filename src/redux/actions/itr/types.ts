// Action Types
export const GET_USER_DATA_EXIST_SUCCESS = 'GET_USER_DATA_EXIST_SUCCESS';
export const GET_USER_DATA_EXIST_FAILURE = 'GET_USER_DATA_EXIST_FAILURE';
export const GET_MEMBER_EXIST_SUCCESS = 'GET_MEMBER_EXIST_SUCCESS';
export const GET_MEMBER_EXIST_FAILURE = 'GET_MEMBER_EXIST_FAILURE';
export const POST_ITR_DATA_SUCCESS = 'POST_ITR_DATA_SUCCESS';
export const POST_ITR_DATA_FAILURE = 'POST_ITR_DATA_FAILURE';
export const CREATE_ITR_DATA_SUCCESS = 'CREATE_ITR_DATA_SUCCESS';
export const CREATE_ITR_DATA_FAILURE = 'CREATE_ITR_DATA_FAILURE';
export const GET_ITR_DATA_SUCCESS = 'GET_ITR_DATA_SUCCESS';
export const GET_ITR_DATA_FAILURE = 'GET_ITR_DATA_FAILURE';
export const DELETE_ITR_DATA_SUCCESS = 'DELETE_ITR_DATA_SUCCESS';
export const DELETE_ITR_DATA_FAILURE = 'DELETE_ITR_DATA_FAILURE';
export const ITR_SECTION_SWITCH_SUCCESS = 'ITR_SECTION_SWITCH_SUCCESS';
export const ITR_SECTION_SWITCH_FAILURE = 'ITR_SECTION_SWITCH_FAILURE';
export const ITR_SECTION_SWITCH_ON_OFF_SUCCESS = 'ITR_SECTION_SWITCH_ON_OFF_SUCCESS';
export const ITR_SECTION_SWITCH_ON_OFF_FAILURE = 'ITR_SECTION_SWITCH_ON_OFF_FAILURE';
export const POST_ITR_NRI_DATA_SUCCESS = 'POST_ITR_NRI_DATA_SUCCESS';
export const POST_ITR_NRI_DATA_FAILURE = 'POST_ITR_NRI_DATA_FAILURE';
export const POST_ITR_NRI_STATUS_DETAILS_DATA_SUCCESS = 'POST_ITR_NRI_STATUS_DETAILS_DATA_SUCCESS';
export const POST_ITR_NRI_STATUS_DETAILS_DATA_FAILURE = 'POST_ITR_NRI_STATUS_DETAILS_DATA_FAILURE';
export const GET_ITR_NRI_DATA_SUCCESS = 'GET_ITR_NRI_DATA_SUCCESS';
export const GET_ITR_NRI_DATA_FAILURE = 'GET_ITR_NRI_DATA_FAILURE';
export const DELETE_ITR_NRI_DATA_SUCCESS = 'DELETE_ITR_NRI_DATA_SUCCESS';
export const DELETE_ITR_NRI_DATA_FAILURE = 'DELETE_ITR_NRI_DATA_FAILURE';
export const POST_ITR_EXPRESS_DATA_SUCCESS = 'POST_ITR_EXPRESS_DATA_SUCCESS';
export const POST_ITR_EXPRESS_DATA_FAILURE = 'POST_ITR_EXPRESS_DATA_FAILURE';
export const GET_ITR_EXPRESS_DATA_SUCCESS = 'GET_ITR_EXPRESS_DATA_SUCCESS';
export const GET_ITR_EXPRESS_DATA_FAILURE = 'GET_ITR_EXPRESS_DATA_FAILURE';
export const DELETE_ITR_EXPRESS_DATA_SUCCESS = 'DELETE_ITR_EXPRESS_DATA_SUCCESS';
export const DELETE_ITR_EXPRESS_DATA_FAILURE = 'DELETE_ITR_EXPRESS_DATA_FAILURE';
export const GET_ITR_PLANS_SUCCESS = 'GET_ITR_PLANS_SUCCESS';
export const GET_ITR_PLANS_FAILURE = 'GET_ITR_PLANS_FAILURE';
export const GET_ALL_ITR_SUCCESS = 'GET_ALL_ITR_SUCCESS';
export const GET_ALL_ITR_FAILURE = 'GET_ALL_ITR_FAILURE';

interface GetUserDataExistSuccessAction {
    type: typeof GET_USER_DATA_EXIST_SUCCESS;
    payload: {
        data: any
    };
}

interface GetUserDataExistFailureAction {
    type: typeof GET_USER_DATA_EXIST_FAILURE;
    payload: { error: string };
}

interface GetMemberExistSuccessAction {
    type: typeof GET_MEMBER_EXIST_SUCCESS;
    payload: {
        data: any
    };
}

interface GetMemberExistFailureAction {
    type: typeof GET_MEMBER_EXIST_FAILURE;
    payload: { error: string };
}

interface PostItrDataSuccessAction {
    type: typeof POST_ITR_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface PostItrDataFailureAction {
    type: typeof POST_ITR_DATA_FAILURE;
    payload: { error: string };
}
interface PostItrNriStatusDetailsDataSuccessAction {
    type: typeof POST_ITR_NRI_STATUS_DETAILS_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface PostItrNriStatusDetailsDataFailureAction {
    type: typeof POST_ITR_NRI_STATUS_DETAILS_DATA_FAILURE;
    payload: { error: string };
}

interface CreateItrIdSuccessAction {
    type: typeof CREATE_ITR_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface CreateItrIdFailureAction {
    type: typeof CREATE_ITR_DATA_FAILURE;
    payload: { error: string };
}

interface GetItrDataSuccessAction {
    type: typeof GET_ITR_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface GetItrDataFailureAction {
    type: typeof GET_ITR_DATA_FAILURE;
    payload: { error: string };
}

interface DeleteItrDataSuccessAction {
    type: typeof DELETE_ITR_DATA_SUCCESS;
    payload: { error: string };
}

interface DeleteItrDataFailureAction {
    type: typeof DELETE_ITR_DATA_FAILURE;
    payload: {
        data: any
    };
}

interface ItrSectionSwitchSuccessAction {
    type: typeof ITR_SECTION_SWITCH_SUCCESS;
    payload: { error: string };
}

interface ItrSectionSwitchFailureAction {
    type: typeof ITR_SECTION_SWITCH_FAILURE;
    payload: {
        data: any
    };
}


interface ItrSectionSwitchOnOffSuccessAction {
    type: typeof ITR_SECTION_SWITCH_ON_OFF_SUCCESS;
    payload: { error: string };
}

interface ItrSectionSwitchOnOffFailureAction {
    type: typeof ITR_SECTION_SWITCH_ON_OFF_FAILURE;
    payload: {
        data: any
    };
}


interface PostItrNriDataSuccessAction {
    type: typeof POST_ITR_NRI_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface PostItrNriDataFailureAction {
    type: typeof POST_ITR_NRI_DATA_FAILURE;
    payload: { error: string };
}

interface GetItrNriDataSuccessAction {
    type: typeof GET_ITR_NRI_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface GetItrNriDataFailureAction {
    type: typeof GET_ITR_NRI_DATA_FAILURE;
    payload: { error: string };
}

interface DeleteItrNriDataSuccessAction {
    type: typeof DELETE_ITR_NRI_DATA_SUCCESS;
    payload: { error: string };
}

interface DeleteItrNriDataFailureAction {
    type: typeof DELETE_ITR_NRI_DATA_FAILURE;
    payload: {
        data: any
    };
}


interface PostItrExpressDataSuccessAction {
    type: typeof POST_ITR_EXPRESS_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface PostItrExpressDataFailureAction {
    type: typeof POST_ITR_EXPRESS_DATA_FAILURE;
    payload: { error: string };
}

interface GetItrExpressDataSuccessAction {
    type: typeof GET_ITR_EXPRESS_DATA_SUCCESS;
    payload: {
        data: any
    };
}

interface GetItrExpressDataFailureAction {
    type: typeof GET_ITR_EXPRESS_DATA_FAILURE;
    payload: { error: string };
}

interface DeleteItrExpressDataSuccessAction {
    type: typeof DELETE_ITR_EXPRESS_DATA_SUCCESS;
    payload: { error: string };
}

interface DeleteItrExpressDataFailureAction {
    type: typeof DELETE_ITR_EXPRESS_DATA_FAILURE;
    payload: {
        data: any
    };
}

interface GetItrPlansSuccessAction {
    type: typeof GET_ITR_PLANS_SUCCESS;
    payload: {
        data: any
    };
}

interface GetItrPlansFailureAction {
    type: typeof GET_ITR_PLANS_FAILURE;
    payload: { error: string };
}

interface GetAllItrSuccessAction {
    type: typeof GET_ALL_ITR_SUCCESS;
    payload: {
        data: any
    };
}

interface GetAllItrFailureAction {
    type: typeof GET_ALL_ITR_FAILURE;
    payload: { error: string };
}

export type ItrActionsTypes =
    | GetUserDataExistSuccessAction
    | GetUserDataExistFailureAction
    | GetMemberExistSuccessAction
    | GetMemberExistFailureAction
    | CreateItrIdSuccessAction
    | CreateItrIdFailureAction
    | PostItrDataSuccessAction
    | PostItrDataFailureAction
    | PostItrNriStatusDetailsDataSuccessAction
    | PostItrNriStatusDetailsDataFailureAction
    | GetItrDataSuccessAction
    | GetItrDataFailureAction
    | DeleteItrDataSuccessAction
    | DeleteItrDataFailureAction
    | ItrSectionSwitchSuccessAction
    | ItrSectionSwitchFailureAction
    | ItrSectionSwitchOnOffSuccessAction
    | ItrSectionSwitchOnOffFailureAction
    | PostItrNriDataSuccessAction
    | PostItrNriDataFailureAction
    | GetItrNriDataSuccessAction
    | GetItrNriDataFailureAction
    | DeleteItrNriDataSuccessAction
    | DeleteItrNriDataFailureAction
    | PostItrExpressDataSuccessAction
    | PostItrExpressDataFailureAction
    | GetItrExpressDataSuccessAction
    | GetItrExpressDataFailureAction
    | DeleteItrExpressDataSuccessAction
    | DeleteItrExpressDataFailureAction
    | GetItrPlansSuccessAction
    | GetItrPlansFailureAction
    | GetAllItrSuccessAction
    | GetAllItrFailureAction
