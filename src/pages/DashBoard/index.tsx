import React, { useContext } from "react";

import DefaultContainer from "../../components/DefaultContainer";
import Button from "../../components/Button";
import { AuthContext, AuthContextProps } from "../../common/contexts/auth";

const DashBoard: React.FC = () => {
  const { signOut } = useContext(AuthContext) as AuthContextProps;

  function handleSingOut() {
    signOut();
  }

  return (
    <DefaultContainer>
      <Button title="Logout" onPress={handleSingOut} />
    </DefaultContainer>
  );
};

export default DashBoard;
