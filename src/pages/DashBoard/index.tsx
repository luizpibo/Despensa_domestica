import React, { useContext } from "react";

import DefaultContainer from "../../components/DefaultContainer";
import Button from "../../components/Button";
import { AuthContext, AuthContextProps } from "../../common/contexts/auth";

const DashBoard: React.FC = () => {
  const { logout } = useContext(AuthContext) as AuthContextProps;

  function handleSingOut() {
    logout();
  }

  return (
    <DefaultContainer>
      <Button title="Logout" onPress={handleSingOut} />
    </DefaultContainer>
  );
};

export default DashBoard;
