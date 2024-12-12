import React from "react";
import useAuth from "./useAuth";
import { ErrorMessage } from "@/components/Common/ErrorMessage";

const withAuth = (MyComponent) => {
  const WrappedComponent = (props) => {
    const isAuthenticated = useAuth();

    if (isAuthenticated === null) {
      // Loading state, you can return a spinner or some loading indicator here
      return (
        <div>
          <ErrorMessage message={"Please login to view this section"} />
        </div>
      );
    }

    if (!isAuthenticated) {
      // Optionally, you could return a redirect message or nothing
      return (
        <div>
          <ErrorMessage message={"Please login to view this section"} />
        </div>
      );
    }

    return <MyComponent {...props} />;
  };

  // Set the display name for the HOC
  WrappedComponent.displayName = `withAuth(${
    MyComponent.displayName || MyComponent.name
  })`;

  return WrappedComponent;
};

export default withAuth;
