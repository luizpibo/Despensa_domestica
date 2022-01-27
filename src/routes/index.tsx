import React, { useContext } from "react";
import { AuthContext, AuthContextProps } from "../common/contexts/auth";
import UserRoute from "./user.route";
import InitialRoute from "./initial.route";

const Routes = () => {
  const { signed } = useContext(AuthContext) as AuthContextProps;

  return signed ? <UserRoute /> : <InitialRoute />;
};

export default Routes;
