import React from "react";
import { useRouter } from "next/navigation";
import { ErrorMessage } from "@/components/Common/ErrorMessage";

const PrivateRoute = ({ isUserLoggedIn, userData, WrappedComponent }) => {
  // Render the wrapped component if user is logged in and userData is valid
  if (isUserLoggedIn) {
    return <WrappedComponent />;
  }

  // Render error message if user is not logged in or userData is invalid
  return (
    <div>
      <ErrorMessage message={"Please login to view this section"} />
    </div>
  );
};

export default PrivateRoute;
