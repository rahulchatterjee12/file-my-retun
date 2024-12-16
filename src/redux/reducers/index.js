import { combineReducers } from "redux";
import authReducer from "../reducers/auth/authReducer";
import memberReducer from "../reducers/member/memberReducer";
import billingReducer from "../reducers/billing/billingReducer";
import itrReducer from "../reducers/itr/itrReducer";
import otherReducer from "../reducers/other/otherReducer";
import ticketReducer from "../reducers/ticket/ticketReducer";
import affiliateReducer from "../reducers/affiliate/affiliateReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  member: memberReducer,
  billing: billingReducer,
  itr: itrReducer,
  other: otherReducer,
  ticket: ticketReducer,
  affiliate: affiliateReducer,
});

export default rootReducer;
