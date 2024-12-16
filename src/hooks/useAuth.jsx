import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { getDataExist, getMEMBERExist } from "@/redux/actions/itr/itrActions";
import { getProfileInfo } from "@/redux/actions/auth/authActions";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const profileInfo = async () => {
      let getPro = await dispatch(getProfileInfo());
      let user = getPro.user;
      if (user && user.nri === "null") {
        if (router.pathname !== "/auth/resident") {
          router.push("/auth/resident");
        }
      }
    };

    const token = sessionStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      dispatch(getDataExist()); // Update login status in Redux store
      dispatch(getMEMBERExist()); // Assuming this action creator exists
      profileInfo();
    } else {
      //router.push('/auth');
    }
  }, [router, dispatch]);

  return isAuthenticated;
};

export default useAuth;
