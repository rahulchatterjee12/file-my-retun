import { combineReducers } from "redux";
import authReducer from "@/redux/reducers/auth/authReducer";
import memberReducer from "@/redux/reducers/member/memberReducer";
import billingReducer from "@/redux/reducers/billing/billingReducer";
import itrReducer from "@/redux/reducers/itr/itrReducer";
import otherReducer from "@/redux/reducers/other/otherReducer";
import ticketReducer from "@/redux/reducers/ticket/ticketReducer";
import affiliateReducer from "@/redux/reducers/affiliate/affiliateReducer";

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
